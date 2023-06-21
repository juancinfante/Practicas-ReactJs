import React from 'react'

export const Boton = ({children, manejarClic}) => {
  return (
    <div className='boton' onClick={() => manejarClic(children)}>{children}</div>
  )
}
