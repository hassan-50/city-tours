import React from 'react'
import Logo from '.././logo.png'
import './NavBar.scss'
function NavBar() {
return(
    <nav className="navbar">
        <img src={Logo} />
        <ul className="nav-Links">
         <li> <a href="/" className="nav-Link">Home </a> </li>
         <li> <a href="/" className="nav-Link">About </a> </li>
          <li><a href="/" className="nav-Link green">Tours </a> </li>

        </ul>
     
    </nav>
)
}
export default NavBar