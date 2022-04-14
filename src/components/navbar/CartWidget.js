import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from "../../context/CartContext"
import { useContext } from "react"

const CartWidget = () => {

    const { cartProducts, quantityTotal } = useContext(CartContext)


    return (
        <div>
            <ShoppingCartIcon fontSize='large' />
            <p> {cartProducts.length > 0 && quantityTotal()}</p>

        </div>
    )

}

export default CartWidget