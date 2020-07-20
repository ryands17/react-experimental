/// <reference types="react/experimental" />
/// <reference types="react-dom/experimental" />

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

const element = document.getElementById('root')

if (element) {
  ReactDOM.unstable_createRoot(element).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
