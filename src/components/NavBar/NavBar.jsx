import React from 'react'
import logo from "../../../src/logocompu.png"//si traes imágenes de esta forma deben estar en la carpetas src
import "./navbar.css"
import CartWitget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
   <nav className='navbar'>


    <Link to="/">
        <img src={logo} alt="" />
    </Link>

<ul className='categories'>

<li className='category'><Link to="/"  className='link'>Home</Link></li>
<li className='category'><Link to="category/laptops" className='link' >Laptops</Link></li>
<li className='category'><Link to="category/pcs" className='link'>PCs</Link></li>
<li className='category'><Link to="category/articulos" className='link'>artículos</Link></li>


</ul>


<CartWitget/>

   </nav>
  )
}

export default NavBar