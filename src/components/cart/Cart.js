import React, { useEffect, useState } from "react"
import CartContext from "../../context/CartContext"
import { useContext } from "react"
import { Link } from 'react-router-dom'
import EndBuy from '../Modal/EndBuy'
import { Button } from "@mui/material"
import db from '../../firebase'
import { addDoc, collection } from "firebase/firestore"

const CartView = () => {

    const { cartProducts, deleteOne, clear, total } = useContext(CartContext)
    const [show, notShow] = useState(false)
    const totalPrice = total()
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    })
    const [order, setOrder] = useState(
        {
            buyer: formData,
            items: cartProducts.map((cartProduct) => {
                return {
                    id: cartProduct.id,
                    title: cartProduct.title,
                    price: cartProduct.price
                }

            }),
            total: totalPrice

        }
    )

    const handleChange = (e) => {
        const { value, name } = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        let prevOrder = {
            ...order,
            buyer: formData
        }
        e.preventDefault()
        pushOrder(prevOrder)
    }

    const pushOrder = async (prevOrder) => {

        const orderFirebase = collection(db, 'orders')
        const orderDoc = await addDoc(orderFirebase, prevOrder)
        console.log("orde generada: ", orderDoc.id)
        setSuccess(orderDoc.id)
    }

    const [sOrder, setSuccess] = useState()

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
                    <Button onClick={() => clear()} >Borrar Todo</Button>
                    <Button onClick={() => notShow(true)}>Finalizar Compra</Button>
                </div>}
            {sOrder ? (
                <div>
                    <h3>Orden Generada</h3>
                    <p>N° de orden {sOrder}</p>
                </div>
            ) : (
                <EndBuy handleClose={() => notShow(false)} open={show}>
                    <form onSubmit={handleSubmit}>
                        <h2>Form User </h2>
                        <input type="text" name='name' placeholder='Nombre'
                            onChange={handleChange}
                            value={formData.name}
                        />
                        <input type="number" name='phone' placeholder='Telefono'
                            onChange={handleChange}
                            value={formData.phone}
                        />
                        <input type="mail" name='email' placeholder='mail'
                            onChange={handleChange}
                            value={formData.email}
                        />

                        <Button type="submit">Enviar</Button>

                    </form>
                </EndBuy>
            )}



        </div>

    )


}

export default CartView
