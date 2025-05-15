import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SpecialEmploy from './SpecialEmploy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ margin: "90px 0" }}></div> 
     <App /> 
     <div style={{ margin: "90px 0" }}></div> 
    <SpecialEmploy/>
  </StrictMode>,
)
