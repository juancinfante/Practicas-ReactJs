import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

export const ListaDeTareas = ({ ListaDeTareas , eliminarTarea}) => {

    return (
        <div>
            {ListaDeTareas.map((ele) => {
                return (
                    <div key={ele.id} className='tarea'>
                        <p>{ele.text}</p>
                        <Button onClick={() => eliminarTarea(ele.id)} variant="primary" type="submit">
                            ❌
                        </Button>
                    </div>
                );
            })}
        </div>
    )
}
