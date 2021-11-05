/// <reference types="react/experimental" />
/// <reference types="react-dom/experimental" />

import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import App from './App'
import './index.css'
import { queryClient } from './utils'

import 'tailwindcss/tailwind.css'

const element = document.getElementById('root')

if (element) {
  ReactDOM.createRoot(element).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  )
}
