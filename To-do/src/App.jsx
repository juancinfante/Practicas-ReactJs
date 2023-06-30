import { useState } from 'react'
import './App.css'
import { Formulario } from '../components/Formulario'
import { ListaDeTareas } from '../components/ListaDeTareas'

function App() {

  const [tareas, setTareas] = useState([])

  const recibirTareas = (data) =>{
    const newTarea = {
      text: data,
      id: Date.now()
    }
    setTareas([...tareas, newTarea])
  }
  const eliminarTarea = (id) =>{
    const _tareas = tareas.filter((ele) => ele.id !== id)
    setTareas(_tareas)
    swal("Eliminado!", "", "success");
  }
  
  return (
    <>
      <div className='container_'>
        <h1>Lista de tareas</h1>
        <Formulario manejarTarea={recibirTareas}/>
        <ListaDeTareas ListaDeTareas={tareas} eliminarTarea={eliminarTarea}/>
      </div>
    </>
  )
}

export default App
