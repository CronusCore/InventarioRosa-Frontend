import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/Products/HomePage'
import ProductSection from './Components/Products/ProductSection'
import ProductDetails from './Components/Products/ProductDetails'


createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Routes>
          <Route path='/' element= {<HomePage/>} >
              <Route index element = {<ProductSection/>}/>
              <Route path='showMoreInfo/:id' element = {<ProductDetails/>} />
            
          </Route>
      </Routes>
    </BrowserRouter>
  
)
