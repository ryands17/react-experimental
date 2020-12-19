import { QueryClient } from 'react-query'

export interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
})

export const allUsers = async (): Promise<User[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}
