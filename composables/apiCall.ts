import { Recipe } from '@prisma/client'

export default async <T>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  body?: Object
) => {
  const { data, error } = await useFetch(url, { method, body })
  if (error.value || data === null)
    throw createError({ ...error.value, statusMessage: error.value?.message })
  return data as T
}
