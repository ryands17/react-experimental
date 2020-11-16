/// <reference types="react/experimental" />
/// <reference types="react-dom/experimental" />

import React from 'react'
import ReactDOM from 'react-dom'
import { ReactQueryCacheProvider } from 'react-query'
import App from './App'
import './index.css'
import { queryCache } from './utils'

const element = document.getElementById('root')

if (element) {
  ReactDOM.unstable_createRoot(element).render(
    <React.StrictMode>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <App />
      </ReactQueryCacheProvider>
    </React.StrictMode>
  )
}

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
