import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App, Cap } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Cap />
  </StrictMode>,
)
