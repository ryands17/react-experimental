import React, { Suspense } from 'react'
import { allUsers, queryClient } from './utils'
import { Users } from 'components/Users'

queryClient.prefetchQuery('users', allUsers)

const App = () => {
  return (
    <>
      <h1 className="text-4xl text-center">Users</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Users />
      </Suspense>
    </>
  )
}

export default App
