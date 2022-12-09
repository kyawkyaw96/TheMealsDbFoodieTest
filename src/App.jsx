import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from './Detail'
import './index.css'
import Meal from './Meal'
import Nav from './Nav'

const App = () => {
  return (
    <div className=' container mx-auto my-6'>
      <Nav />
      <Routes>
        <Route path='/' element={<Meal/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>

      </Routes>
    </div>
  )
}

export default App
