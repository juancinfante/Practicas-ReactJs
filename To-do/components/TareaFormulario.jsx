import React, { useState } from 'react'

export const TareaFormulario = ({onSubmit}) => {

    const [input, setInput] = useState('');

    const manejarEnvio = (e) =>{

        e.preventDefault()

        const tarea = {
            id: Date.now(),
            texto: input,
            completada: false
        }
        onSubmit(tarea)
    }

    const manejarCambio = e =>{
        e.preventDefault()
        setInput(e.target.value)
    }
  return (
    <form onSubmit={manejarEnvio}>
        <input 
        type="text"
        onChange={manejarCambio}
        />
        <button>Agregar</button>
    </form>
  )
}
