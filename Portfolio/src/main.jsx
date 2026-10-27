import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//& ================================================
//~path Importing modules
import App from './App'

//& ================================================

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)