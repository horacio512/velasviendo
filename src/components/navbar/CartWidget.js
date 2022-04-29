import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from "../../context/CartContext"
import { useContext } from "react"
import './cart.css'
import { Grid,Typography} from '@mui/material';


const CartWidget = () => {

    const { cartProducts, quantityTotal } = useContext(CartContext)


    return (
        <Grid container spacing={6} direction="row" alignItems="center" >

            <Grid item md={4}>
                <ShoppingCartIcon className='cart' />
            </Grid>
            <Grid item md={4} >
                <Typography className='cart'>{cartProducts.length > 0 && quantityTotal()}</Typography> 
            </Grid>

        </Grid>

    )

}

export default CartWidget