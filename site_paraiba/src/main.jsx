import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './routes/Home'
import Saiba_mais from './routes/Saiba_mais'
import {Routes,Route, BrowserRouter} from "react-router-dom"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/saibaMais' element={<Saiba_mais/>} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
