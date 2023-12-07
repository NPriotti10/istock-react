import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, totalPrice, clearCart } = useContext(CartContext);

    const handleVaciar = () => {
        clearCart();
    }
    

  return (
    <div className="container">
        <h1 className="main-title">Carrito</h1>

        {
            cart.map((prod) => (
                <div key={prod.id}>
                    <br />
                    <h3>Producto: {prod.name}</h3>
                    <p>Precio unit: ${prod.price}</p>
                    <p>Precio total: ${prod.price * prod.cantidad}</p>
                    <p>Cant: {prod.cantidad}</p>
                    <br />
                </div>
            ))
        }

        {  
            cart.length > 0 ?
            <>
                <h2>Precio total: ${totalPrice()}</h2>
                <button className="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"  onClick={handleVaciar} > Vaciar</button>
                <Link to="/checkout">Finalizar compra</Link>
            </> :
            <h2>El carrito está vacío :(</h2>
        }
        
    </div>
  )
}

export default Cart