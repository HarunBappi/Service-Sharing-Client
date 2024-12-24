import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AuthProvider from './Providers/AuthProvider'
import router from './Routes/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    <Toaster position='top-right' reverseOrder={false}></Toaster>
    </AuthProvider>
    </HelmetProvider>
  </StrictMode>,
)
