/// <reference types="react-dom/experimental" />
/// <reference types="react/experimental" />

import * as React from 'react'
import * as ReactDOM from 'react-dom'
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
