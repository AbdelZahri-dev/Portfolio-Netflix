import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'

// ici on remplace BrowserRouter par HashRouter pour que le site fonctionne sur Github 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <HashRouter>
    <App />
    </HashRouter>

  </StrictMode>,
)
