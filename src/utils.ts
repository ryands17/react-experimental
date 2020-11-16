import { QueryCache } from 'react-query'

export interface User {
  id: number
  name: string
  username: string
  email: string
}

export const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      suspense: true,
    },
  },
})
