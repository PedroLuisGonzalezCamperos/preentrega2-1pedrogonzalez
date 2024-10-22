import React from 'react'
import logo from "../../../src/logocompu.png"//si traes imágenes de esta forma deben estar en la carpetas src
import "./navbar.css"
import CartWitget from './CartWidget'

const NavBar = () => {
  return (
   <nav className='navbar'>


    <div>
        <img src={logo} alt="" />
    </div>

<ul>

<li>Home</li>
<li>Laptos</li>
<li>PCs</li>
<li>artículos</li>


</ul>


<CartWitget/>

   </nav>
  )
}

export default NavBar