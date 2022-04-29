import { Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import CartWidget from './CartWidget';
import './NavBar.css'
import '@fontsource/roboto/500.css';
import { Link } from 'react-router-dom'
import { Container } from "@mui/material";
import { React, useState } from "react";
import { Box } from "@mui/system";


function NavBar() {

    const [candle, candleFire] = useState(true)

    return (
        <header className="app-bar">
            <Toolbar>
                <Box onMouseEnter={() => { candleFire(false) }} onMouseLeave={() => { candleFire(true) }} >
                    <Typography color="white" >
                        VELASVIENDO
                    </Typography>

                    {candle ? (<img src="/logo.jpg" className="img-header" />) : (<img src="/logo2.jpg" className="img-header" />)}
                </Box>
                <Container  position='fixed'>
                    <div className="navBar">
                        <ul>
                            <li><Button variant="outlined" color="secondary"><Link to="/" className="link" >Home</Link></Button></li>

                            <li><Button variant="outlined" color="secondary"><Link to="/nosotros" className="link">Nosotros</Link></Button></li>
                            <li><Button variant="outlined" color="secondary"><Link to="/nuestrosclientes" className="link">Nuestros Clientes</Link></Button></li>
                            <li><Button variant="outlined" color="secondary"><Link to="/contacto" className="link">Contacto</Link></Button></li>
                            <li><Button><Link to="/cart" className="linkHome"><CartWidget /></Link></Button></li>
                        </ul>
                    </div>
                </Container>
            </Toolbar>
        </header>

    )
}

export default NavBar;