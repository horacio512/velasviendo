import { AppBar, Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import CartWidget from './CartWidget';
import './NavBar.css'
import '@fontsource/roboto/500.css';
import { Link } from 'react-router-dom'
import { Container } from "@mui/material";
import { React, useState } from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";



function NavBar() {

    const [candle, candleFire] = useState(true)

    return (
        <AppBar position="sticky">
            <Toolbar className="app-bar" >
                <Box onMouseEnter={() => { candleFire(false) }} onMouseLeave={() => { candleFire(true) }} >
                    <Typography color="white" >
                        VELASVIENDO
                    </Typography>

                    {candle ? (<img src="/logo.jpg" className="img-header" />) : (<img src="/logo2.jpg" className="img-header" />)}
                </Box>
                <Container>
                    <Grid className="navBar" justifyContent='space-around'>
                        <ul>
                            <li><Button variant="outlined" color="secondary"><Link to="/" className="link" >Home</Link></Button></li>
                            <li><Button variant="outlined" color="secondary"><Link to="/nosotros" className="link">Nosotros</Link></Button></li>
                            <li><Button variant="outlined" color="secondary"><Link to="/contacto" className="link">Contacto</Link></Button></li>
                            <li><Button><Link to="/cart"><CartWidget /></Link></Button></li>
                        </ul>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar >

    )
}

export default NavBar;