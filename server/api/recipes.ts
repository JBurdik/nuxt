import { Recipe } from '@prisma/client'
import { prisma } from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  if (event.method === 'GET') {
    const result = await prisma.recipe.findMany()
    return result
  }
  if (event.method === 'POST') {
    const body: Recipe = await readBody(event)
    const result = await prisma.recipe.create({
      data: {
        title: body.title,
        description: body.description,
        ingredients: body.ingredients,
        image: body.image
      }
    })
    return result
  }
  if (event.method === 'DELETE') {
    const { id } = await readBody(event)

    const result = await prisma.recipe.delete({
      where: {
        id: id
      }
    })
    return result
  }
})
