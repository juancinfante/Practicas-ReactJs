import React from 'react'
import { NavBar } from '../layout/NavBar'
import { useState } from 'react'
export const HomeScreen = () => {
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [imagen, setImagen] = useState('')
    const [productos, setProductos] = useState([])

    const cargarDatos = (e) => {
        e.preventDefault()

        const newProduct = {
            nombre: nombre,
            precio: precio,
            imagen: imagen
        }
        // Cargo los productos con exprexion 
        setProductos([...productos, newProduct])
    }
    return (
        <>
            <NavBar />
            <div className='container'>
                <h1>Carga de Productos</h1>
                <form onSubmit={cargarDatos}>
                    <div className='form-group mb-3 d-flex flex-column'>
                        <label htmlFor="" className='me-2'>Nombre</label>
                        <input type="text" onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div className='form-group mb-3 d-flex flex-column'>
                        <label htmlFor="" className='me-2'>Precio</label>
                        <input type="text" onChange={(e) => setPrecio(e.target.value)} />
                    </div>
                    <div className='form-group mb-3 d-flex flex-column'>
                        <label htmlFor="" className='me-2'>URL Imagen</label>
                        <input type="text" onChange={(e) => setImagen(e.target.value)} />
                    </div>
                    <button>CARGAR</button>
                </form>
                <div className='d-flex mt-5'>
                
                    {productos.map((prod) => {
                            return (                            
                                    <div className='product-card me-3'>
                                        <img src={prod.imagen} alt={prod.nombre}/>
                                        <h4>{prod.nombre}</h4>
                                        <h5>${prod.precio}</h5>
                                    </div>
                            );
                        })}
                </div>
            </div>
        </>
    )
}
