import React from "react"
import CartContext from "../../context/CartContext"
import { useContext } from "react"
import { Link } from 'react-router-dom'

const CartView = () => {

    const { cartProducts, deleteOne, clear, total } = useContext(CartContext)

    return (

        <div>
            <h1>Carrito de Compras</h1>

            {(cartProducts.length === 0) && <div>
                <p>No hay items en tu carrito...</p>
                <Link to='/'>
                    <button>Continuar comprando</button>
                </Link>
            </div>}



            {Object.values(cartProducts).map((cartProduct) => {

                return (
                    <div key={cartProduct.id}>
                        Articulo: {cartProduct.title}
                        <img src={`..${cartProduct.pictureUrl}`} width="30%" />
                        Candidad: {cartProduct.quantity}
                        <button onClick={() => deleteOne(cartProduct.id)}>Borrar</button>
                    </div>
                )
            })}

            {(cartProducts.length >= 1) &&
                <div>
                    <h3>Total de la compra: $ {total()} </h3>
                    <button onClick={() => clear()} >Borrar Todo</button>
                </div>}
        </div>

    )


}

export default CartView
