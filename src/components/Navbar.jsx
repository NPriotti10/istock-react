import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>iStock</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/products/iphone">iPhone</Link></li>
            <li><Link className="menu-link" to="/products/mac">Mac</Link></li>
            <li><Link className="menu-link" to="/products/watch">Watch</Link></li>
            <li><Link className="menu-link" to="/products/accessories">Otros</Link></li>
            <li><Link className="menu-link" to="/products/used">Usados</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar