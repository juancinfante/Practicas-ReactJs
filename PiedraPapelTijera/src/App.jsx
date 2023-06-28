import { useState } from 'react'

import './App.css'

function App() {
  const [seleccionJugador, setSeleccionJugador] = useState('')
  const [seleccionMaquina, setSeleccionMaquina] = useState('')
  const [resultado, setResultado] = useState('')

  const seleccionOpcion = (opcion) =>{
    const eleccionComputadora = Math.floor(Math.random() * 3)
    switch(eleccionComputadora){
      case 0:
        setSeleccionMaquina('Piedra')
        break;
      case 1:
        setSeleccionMaquina('Papel')
        break;
      case 2:
        setSeleccionMaquina('Tijera')
        break;
    }
    setSeleccionJugador(opcion)
    calcularResultado(seleccionJugador,seleccionMaquina)
  }

  const calcularResultado = (a,b) =>{
    if(a === b){
      return setResultado('Empate')
    }else if(a == "Piedra" && b == 'Papel'){
      return setResultado('Ganaste')
    }else if(a == "Piedra" && b == 'Tijera'){
      return setResultado('Ganaste')
    }else if(a == "Papel" && b == 'Tijera'){
      return setResultado('Perdiste')
    }else if(a == "Papel" && b == 'Piedra'){
      return setResultado('Ganaste')
    }else if(a == "Tijera" && b == 'Piedra'){
      return setResultado('Perdiste')
    }else if(a == "Tijera" && b == 'Papel'){
      return setResultado('Ganaste')
    }
  }

  return (
    <>
      <h1>Piedra Papel o Tijera</h1>
      <h3>Seleccione su opcion:</h3>
      <button onClick={() => seleccionOpcion('Piedra')}>Piedra</button>
      <button onClick={() => seleccionOpcion('Papel')}>Papel</button>
      <button onClick={() => seleccionOpcion('Tijera')}>Tijera</button>
      <p>Seleccion Jugador: {seleccionJugador}</p>
      <p>Seleccion Maquina: {seleccionMaquina}</p>
      <p>Resultado: {resultado}</p>
    </>
  )
}

export default App
