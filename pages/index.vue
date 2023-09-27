<template>
  <div>
    <Section title="Služby">
      <div class="flex flex-col">
        <div class="mt-5 grid grid-cols-3 gap-5">
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
      <div class="grid grid-cols-2 items-center justify-items-center">
        <img src="https://placehold.co/400" alt="placeholder" />
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
    <Section title="Recenze">
      <div></div>
    </Section>
  </div>
</template>

<script setup>
import services from '~/data/services.ts'
</script>
