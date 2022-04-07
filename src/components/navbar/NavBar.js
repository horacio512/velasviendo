import { Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import CartWidget from './CartWidget';
import { Box } from '@mui/system';
import './NavBar.css'
import '@fontsource/roboto/500.css';
import { Link } from 'react-router-dom'
import { Container } from "@mui/material";


function NavBar() {


    return (
        <header className="app-bar">
            <Toolbar>
                <Typography color="white">
                    VELASVIENDO
                </Typography>
                <img src="/logo.jpg" className="img-header" />
                <Container>
                <div className="navBar">
                    <ul>
                        <li><Button variant="outlined" color="secondary"><Link to="/" className="link" >Home</Link></Button></li>
                        <li><Button variant="outlined" color="secondary"><Link to="/category" className="link">Productos</Link></Button></li>
                        <li><Button variant="outlined" color="secondary"><Link to="/nosotros" className="link">Nosotros</Link></Button></li>
                        <li><Button variant="outlined" color="secondary"><Link to="/nuestrosclientes" className="link">Nuestros Clientes</Link></Button></li>
                        <li><Button variant="outlined" color="secondary"><Link to="/contacto" className="link">Contacto</Link></Button></li>
                        <li><Button><Link to="/cart"><CartWidget /></Link></Button></li>
                    </ul>
                </div>
                </Container>
            </Toolbar>
        </header>

    )
}

export default NavBar;