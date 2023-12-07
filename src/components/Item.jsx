import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( { product } ) => {
  return (
    <div className="producto">
        <img src={product.image} alt={product.name} />
        <div>
            <h4>{product.name}</h4>
            <p>Precio: ${product.price}</p>
            <p>Categoría: {product.category}</p>
            <Link className="ver-mas" to={`/item/${product.id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item
