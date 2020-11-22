import React, { Suspense } from 'react'
import { allUsers, queryCache } from './utils'
import { Users } from './components/Users'
import { classnames } from 'tailwindcss-classnames'

queryCache.prefetchQuery('users', allUsers)

interface AppProps {}

const App = ({}: AppProps) => {
  return (
    <>
      <h1 className={classnames('text-4xl', 'text-center')}>Users</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Users />
      </Suspense>
    </>
  )
}

export default App
