import React from "react"
import CartContext from "../../context/CartContext"
import { useContext } from "react"

const CartView = () => {

    const { cartProducts, deleteOne, clear } = useContext(CartContext)

    return (
        <div>
                <h1>Carrito de Compras</h1>
                <button onClick={()=>clear()} >Borrar Todo</button>
        {Object.values(cartProducts).map((cartProduct) => {
            return (
            <div key={cartProduct.id}>
                Articulo: {cartProduct.title}
                <img src={`..${cartProduct.pictureUrl}`} width="30%" />
                Candidad: {cartProduct.quantity}
                <button onClick={()=>deleteOne(cartProduct.id)}>Borrar</button>
            </div>
            )
        })}
        </div>

    )


}

export default CartView
