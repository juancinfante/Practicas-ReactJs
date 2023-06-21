import React, { useState } from 'react'
import { Pantalla } from './Pantalla'
import { Boton } from './Boton'
import { evaluate} from 'mathjs'

export const Calculadora = () => {

    const [input, setInput] = useState("")

    const manejarClic = val =>{
        setInput(input + val)
    }
    const calcular = () => {
        if(input){
            setInput(evaluate(input))
        }else{
            alert("Por favor ingrese para evaluar")
        }
    }
    return (
        <div className='row'>
            <div className="col-12 p-0">
                <Pantalla>{input}</Pantalla>
            </div>
            <div className="col-3 p-0">
                <Boton manejarClic={manejarClic}>1</Boton>
            </div>
            <div className="col-3 p-0">
                <Boton manejarClic={manejarClic}>2</Boton>
            </div>
            <div className="col-3 p-0">
                <Boton manejarClic={manejarClic}>3</Boton>
            </div>
            <div className="col-3 p-0">
                <Boton manejarClic={manejarClic}>/</Boton>
            </div>
            <div className="col-3 p-0">
                <Boton manejarClic={manejarClic}>4</Boton>
            </div>
            <div className="col-3 p-0">
                <Boton manejarClic={manejarClic}>5</Boton>
            </div>
            <div className="col-3 p-0">
                <Boton manejarClic={manejarClic}>6</Boton>
            </div>
            <div className="col-3 p-0">
                <Boton manejarClic={manejarClic}>-</Boton>
            </div>
            <div className="col-3 p-0">
                <Boton manejarClic={manejarClic}>7</Boton>
            </div>
            <div className="col-3 p-0">
                <Boton manejarClic={manejarClic}>8</Boton>
            </div>
            <div className="col-3 p-0">
                <Boton manejarClic={manejarClic}>9</Boton>
            </div>
            <div className="col-3 p-0">
                <Boton manejarClic={manejarClic}>+</Boton>
            </div>
            <div className="col-3 p-0">
                <Boton manejarClic={calcular}>=</Boton>
            </div>
            <div className="col-3 p-0">
                <Boton manejarClic={manejarClic}>0</Boton>
            </div>
            <div className="col-3 p-0">
                <Boton manejarClic={manejarClic}>.</Boton>
            </div>
            <div className="col-3 p-0">
                <Boton manejarClic={manejarClic}>*</Boton>
            </div>
            <div className="col-12 clear" onClick={() => setInput('')}>
                Limpiar
            </div>
        </div>
    )
}
