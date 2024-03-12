import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'sonner'

import App from './App.tsx'

import { UserProvider } from '@context/user'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <Toaster position="top-center" richColors closeButton />
      <App />
    </UserProvider>
  </React.StrictMode>,
)
