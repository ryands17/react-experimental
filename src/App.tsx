import React, { Suspense } from 'react'
import { queryCache, User } from './utils'
import { Users } from './components/Users'

const allUsers = async (): Promise<User[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

queryCache.prefetchQuery('users', allUsers)

interface AppProps {}

const App = ({}: AppProps) => {
  return (
    <div>
      <Suspense fallback={<p>Loading Users...</p>}>
        <Users />
      </Suspense>
    </div>
  )
}

export default App
