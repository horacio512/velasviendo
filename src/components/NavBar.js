import Button from '@mui/material/Button';
import React from 'react'
 
function NavBar() {
    return (

        <header className="navBar">
            <img src="logo.png" className="img-header" />
            <ul>
                <li><Button variant="contained">Home</Button></li>
                <li><Button variant="contained">Productos</Button></li>
                <li><Button variant="contained">Nosotros</Button></li>
                <li><Button variant="contained">Nuestros Clientes</Button></li>
                <li><Button variant="contained">Contacto</Button></li>
            </ul>
        </header>
    )
}

export default NavBar
