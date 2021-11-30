import React from 'react'
import Logo from '../img/Logo.png'

function Navbar() {
    return (
        <nav className="navbar navbar-dark justify-content-center align-items-center">
            <div>
                <a className="navbar-brand text-center" href="/"> <img src={Logo} alt="" width="350" height="150" className="align-items-center justify-content-center"/></a>
            </div>
        </nav>
    )
}

export default Navbar
