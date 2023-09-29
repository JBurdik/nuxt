<template>
  <form @submit.prevent="submit">
    <label for="title">Title:</label>
    <input name="title" v-model="title" />

    <label for="ingredients">ingredients:</label>
    <input name="ingredients" v-model="ingredients" />

    <label for="desc">desc:</label>
    <input name="desc" v-model="desc" />

    <button type="submit">Submit</button>
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
    const isOpen = useState('isOpen')

    const submit = async () => {
      const newRecipe = {
        title: title.value,
        ingredients: ingredients.value,
        description: desc.value
      }

      await apiCall<Recipe>('/api/recipes', 'POST', newRecipe)

      // refetch the recipes
      await props.refetch()

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
