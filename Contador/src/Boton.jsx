import React from 'react'

export const Boton = ({esBotonClic, manejarClic}) => {
    return (
        <button onClick={manejarClic}>{esBotonClic? "Clic" : "Reiniciar"}</button>
    )
}
