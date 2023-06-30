import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Formulario = ({manejarTarea}) => {

  const [tarea, setTarea] = useState('')

  const enviarForm = (e) =>{
    e.preventDefault()
    if(tarea == ''){
      swal("Debe ingresar tarea!", "", "error");
    }else{
      manejarTarea(tarea)
    }
  }

  return (
    <Form onSubmit={enviarForm} noValidate>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Tarea" maxLength={30} onChange={(e) => setTarea(e.target.value)}/>
      <Button variant="primary" type="submit">
        +
      </Button>
      </Form.Group>
    </Form>
  )
}
