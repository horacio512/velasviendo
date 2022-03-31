import { AppBar, Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import CartWidget from './CartWidget';
import { Box } from '@mui/system';
import './NavBar.css'
import '@fontsource/roboto/500.css';
import {Link} from 'react-router-dom'


function NavBar() {

    return (

        <AppBar>
            <header className="app-bar">
                <Toolbar>
                    <Typography>
                        VELASVIENDO
                    </Typography>
                    <div className="navBar">
                        <img src="./images/logo.jpg" className="img-header" />
                        <ul>

                            <li><Button variant="outlined" color="secondary" > <Link to="/">Home</Link></Button></li>
                            <li><Button variant="outlined" color="secondary"><Link to="/products">Productos</Link></Button></li>
                            <li><Button variant="outlined" color="secondary">Nosotros</Button></li>
                            <li><Button variant="outlined" color="secondary">Nuestros Clientes</Button></li>
                            <li><Button variant="outlined" color="secondary">Contacto</Button></li>
                        </ul>
                        <CartWidget />
                    </div>

                </Toolbar>
            </header>
        </AppBar>
    )
}

export default NavBar;