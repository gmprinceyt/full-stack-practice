import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Count from './Count.tsx'
import {CountContext} from './Context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Count />
    {/* <Context/> */}
    {/* <App/> */}
  </StrictMode>
)
