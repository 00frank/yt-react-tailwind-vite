import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'sonner'
import { PwaPrompt as PWAPrompt } from 'react-ios-pwa-prompt-ts'
import { PWAPromptProps } from './contants.ts'

import App from './App.tsx'

import { UserProvider } from '@context/user'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PWAPrompt
      {...PWAPromptProps}
    />
    <UserProvider>
      <Toaster position="top-center" richColors closeButton />
      <App />
    </UserProvider>
  </React.StrictMode>,
)
