import React, { useState } from 'react'
import { TareaFormulario } from './TareaFormulario'
import { Tarea } from './Tarea'

export const ListaDeTareas = () => {

    const [tareas, setTareas] = useState([])

    const manejarTarea = tarea =>{
        const tareasLista = tareas.concat(tarea)
        setTareas(tareasLista)
        console.log(tareas)
    }

  return (
    <div>
        <h1>ListaDeTareas</h1>
        <TareaFormulario onSubmit={manejarTarea}/>
        {
            tareas.map((tarea,index) => {
                <Tarea 
                    texto={tarea}
                />
            })
        }
    </div>
  )
}
