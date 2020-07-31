import React from 'react'
import { Routes } from '~/routes'
import { BrowserRouter } from 'react-router-dom'
import { Nav } from '~/components/Nav'
import { classnames } from 'tailwindcss-classnames'

function App() {
  return (
    <>
      <h3 className={classnames('text-3xl')}>Snowpack + React</h3>
      <React.Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Nav />
          <div className={classnames('mb-4')}></div>
          <Routes />
        </BrowserRouter>
      </React.Suspense>
    </>
  )
}

export default App
