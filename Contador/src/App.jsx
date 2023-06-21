import { useState } from 'react'
import './App.css'
import { Boton } from './Boton'
import { Counter } from './counter'

function App() {
    const [numClics , setNumClics] = useState(0)
    const manejarClic = () =>{
        setNumClics(numClics + 1)
    }
    const reiniciar = () =>{
        setNumClics(0)
    }
  return (
    <>
        <Counter numClics={numClics}/>
        <Boton esBotonClic manejarClic={manejarClic}/>
        <Boton esBotonClic={false} manejarClic={reiniciar}/>
    </>
  )
}

export default App
