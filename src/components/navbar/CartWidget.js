import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from "../../context/CartContext"
import { useContext } from "react"

const CartWidget = ()=> {

    const { cartProducts } = useContext(CartContext)


    return(
        <div>
       <ShoppingCartIcon fontSize='large'/>
        <p>{cartProducts.length}</p>
        </div>
    )

}

export default CartWidget