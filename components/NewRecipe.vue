<template>
  <form @submit.prevent="submit" class="flex flex-col gap-4">
    <div>
      <UiLabel class="mb-2" for="title">Title:</UiLabel>
      <UiInput name="title" v-model="title" />
    </div>

    <div>
      <UiLabel class="mb-2" for="ingredients">ingredients:</UiLabel>
      <UiInput name="ingredients" v-model="ingredients" />
    </div>

    <div>
      <UiLabel class="mb-2" for="desc">desc:</UiLabel>
      <UiInput name="desc" v-model="desc" />
    </div>

    <UiButton class="mt-5" type="submit">Přidat</UiButton>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { Recipe } from '@prisma/client'

export default defineComponent({
  props: {
    refetch: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const title = ref('')
    const ingredients = ref('')
    const desc = ref('')
    const addDialogOpen = useState<boolean>('addDialogOpen')

    const submit = async () => {
      const newRecipe = {
        title: title.value,
        ingredients: ingredients.value,
        description: desc.value
      }

      await apiCall<Recipe>('/api/recipes', 'POST', newRecipe)

      // refetch the recipes
      await props.refetch()
      addDialogOpen.value = false

      // clear the form fields
      title.value = ''
      ingredients.value = ''
      desc.value = ''
    }

    return {
      title,
      ingredients,
      desc,
      submit
    }
  }
})
</script>
