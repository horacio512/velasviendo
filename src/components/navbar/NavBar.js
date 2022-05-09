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
                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'inline' } }} onMouseEnter={() => { candleFire(false) }} onMouseLeave={() => { candleFire(true) }} >
                    <Typography color="white" >
                        VELASVIENDO
                    </Typography>

                    {candle ? (<img src="/logo.jpg" className="img-header" alt="logo" />) : (<img src="/logo2.jpg" className="img-header" alt='logo con fuego' />)}
                </Box>
                <Container >
                    <Grid container className="navBar" justifyItems='center' alignItems='center' sx={{ display: { xs: 'block', sm: 'flex' } }} >

                        <Grid item xs={12} sm={3} textAlign='center' mb='1rem' mt='1rem'>
                            <Button variant="outlined" color="secondary" size='large'><Link to="/" className="link" >Home</Link></Button>
                        </Grid>
                        <Grid item xs={12} sm={3} textAlign='center' mb='1rem' mt='1rem'>
                            <Button variant="outlined" color="secondary" size='large'><Link to="/nosotros" className="link">Nosotros</Link></Button>
                        </Grid>
                        <Grid item xs={12} sm={3} textAlign='center' mb='1rem' mt='1rem' >
                            <Button variant="outlined" color="secondary" size='large'><Link to="/contacto" className="link">Contacto</Link></Button>
                        </Grid>
                        <Grid item xs={12} sm={2} textAlign='end'>
                            <Button><Link to="/cart"><CartWidget /></Link></Button>
                        </Grid>

                    </Grid>
                </Container>
            </Toolbar>
        </AppBar >

    )
}

export default NavBar;