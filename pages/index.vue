<template>
  <div>
    <Section title="Služby">
      <div class="flex flex-col">
        <div class="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
          <NuxtLink
            v-for="service in services"
            :to="`services/${service.slug}`"
            :key="service.slug"
            class="rounded-lg border border-gray-800 p-5 shadow-lg shadow-gray-900 transition-all hover:scale-105"
          >
            <div>
              <h2 class="text-xl font-bold">{{ service.title }}</h2>
              <p class="">{{ service.desc }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </Section>
    <Section title="O nás" titleCenter full background="light">
      <div
        class="grid grid-cols-1 items-center justify-items-center gap-5 md:grid-cols-2"
      >
        <img src="https://placehold.co/400" alt="placeholder" class="" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
          blanditiis. Rem reiciendis, consectetur, ab dolore, culpa tempore
          praesentium explicabo et deserunt voluptas incidunt tenetur? Fuga,
          voluptatum optio? Voluptate blanditiis est vitae distinctio
          consequatur in magnam repellendus error, quis corporis aut aperiam
          obcaecati officia hic excepturi sit quidem, facere debitis quo?
        </p>
      </div>
    </Section>
    <Section title="Recepty">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div
          v-for="recipe in recipes"
          :key="recipe.id"
          class="relative flex flex-col gap-3 rounded-lg border border-gray-500 px-10 py-8 shadow-lg shadow-gray-800"
        >
          <h4 class="text-xl">{{ recipe.title }}</h4>
          <p class="text-sm text-gray-300">{{ recipe.description }}</p>
          <ul class="list-disc">
            <li
              v-for="ingredient in recipe.ingredients?.split(',')"
              :key="ingredient"
            >
              {{ ingredient }}
            </li>
          </ul>
          <button
            class="absolute right-3 top-3 rounded-md bg-red-500 p-2 transition-colors hover:bg-red-700"
            @click="() => deleteRecipe(recipe.id)"
          >
            <IconTrash2 />
          </button>
        </div>
        <div @click="() => (isOpen = !isOpen)">open</div>
      </div>
    </Section>
    <Dialog
      title="Hello"
      :open="isOpen"
      :onClose="() => (isOpen = !isOpen)"
      :refetch="fetchRecipes"
    />
  </div>
</template>

<script setup lang="ts">
import services from '~/data/services'
import { Recipe } from '@prisma/client'
import { onBeforeMount } from 'vue'

const isOpen = useState('isOpen', () => false)
const recipes = useState<Recipe[]>('recipes', () => [])
const deleteRecipe = async (id: number) => {
  const result = await apiCall('/api/recipes', 'DELETE', { id })
  console.log(result)
  fetchRecipes()
}
const fetchRecipes = async () => {
  const result = await apiCall<Recipe[]>('/api/recipes', 'GET')
  recipes.value = result
}
onBeforeMount(fetchRecipes)
</script>
