import { useState } from 'react'
import './App.css'
import { ListaDeTareas } from '../components/ListaDeTareas'

function App() {

  return (
    <>
      <div className='contenedor'>
        <ListaDeTareas />       
      </div>
    </>
  )
}

export default App
