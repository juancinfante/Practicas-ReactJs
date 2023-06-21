import React from 'react'

export const Card = ({name, img, pais, cargo, empresa, testimonio}) => {
  return (
    <div className='card'>
        <img src={img}
        alt="" />
        <div className="card-info">
            <p><strong>{name}</strong> in {pais}</p>
            <p>{cargo} at <strong>{empresa}</strong></p>
            <p>{testimonio}</p>
        </div>
    </div>
  )
}
