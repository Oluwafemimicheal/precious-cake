import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Homepage from './cake/page/homepage'
import { Route, Routes } from 'react-router-dom'
import Shop from './cake/page/shop'
import { Footer } from './cake/ccomponents/ui/footer'
import { FQA } from './cake/ccomponents/ui/fqa'
import Navbar from './cake/ccomponents/ui/navbar'
import Contact from './cake/page/contact'
import About from './cake/page/about'

const client = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Navbar/>
      <Routes>
        <Route index path='/' element={<Homepage/>}></Route>
        <Route path='shop' element={<Shop/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>

    </QueryClientProvider>
  )
}

export default App
