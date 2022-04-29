import React, { useState } from "react"
import CartContext from "../../context/CartContext"
import { useContext } from "react"
import { Link } from 'react-router-dom'
import EndBuy from '../Modal/EndBuy'
import { Button, Container } from "@mui/material"
import db from '../../firebase'
import { addDoc, collection } from "firebase/firestore"
import Typography from "@mui/material/Typography"
import { Box } from "@mui/system"
import '@fontsource/roboto/400.css';
import { Grid } from "@mui/material"
import BackspaceSharpIcon from '@mui/icons-material/BackspaceSharp';

const CartView = () => {

    const { cartProducts, deleteOne, clear, total, quantityTotal } = useContext(CartContext)
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
        <Container>
            <Grid container spacing={2} justifyContent="space-between" >
                <Grid item md={6}>
                    <Typography variant="h1" fontSize="2.7rem" fontWeight={400} textAlign="start"
                        borderBottom={6} borderRadius={1}
                        pb='3rem' mt='3rem' mb='2rem' >Tu Carrito de Compras</Typography>
                </Grid>

                {(cartProducts.length === 0) && <Grid item md={12} textAlign='center' >
                    <Typography variant="h3" fontSize='1.5rem' mt='4rem' mb='2rem'>No hay items en tu carrito...</Typography>
                    <img src="/emptyCart.jpg" width='100vw' />
                    <Grid item md={12} mb="2rem" mt="2rem"> <Link to='/' className="emptyCart">
                        <Button>Continuar comprando</Button>
                    </Link></Grid>

                </Grid>
                }


                <Grid item sm={12} md={7} lg={7}>
                    {Object.values(cartProducts).map((cartProduct) => {
                        return (
                            <Grid container spacing={2} key={cartProduct.id} pb='1rem' className="borderCard">
                                <Grid item textAlign="center" alignSelf="center" md={5} sm={12}>
                                    <img className="img" src={`..${cartProduct.pictureUrl}`} />
                                </Grid>
                                <Grid item md={7}>
                                    <Typography variant='h6' mb='0.5rem' textAlign='start' fontSize='1.3rem'> {cartProduct.title}</Typography>
                                    <Typography variant='h5' mb='0.5rem' color='red' fontSize='1.1rem'>${cartProduct.price}</Typography>
                                    <Typography variant='h5' mb='0.5rem' fontSize='1.1rem'> Candidad: {cartProduct.quantity}</Typography>
                                    <Typography variant='h5' mb='0.5rem' fontSize='1.1rem'>Total: $ {cartProduct.quantity * cartProduct.price}</Typography>
                                    <Grid container md={12} textAlign="center" justifyContent="flex-end" onClick={() => deleteOne(cartProduct.id)}>
                                        <Grid item md={4}><button className="btns-cart">Borrar</button></Grid>
                                        <Grid item md={4} textAlign="start"> <BackspaceSharpIcon className="btns-cart" /></Grid>
                                    </Grid>
                                </Grid>

                            </Grid>

                        )
                    })}
                    {(cartProducts.length >= 1) &&
                        <Grid item md={12} textAlign="end" ><button className="btn-checkout" onClick={() => clear()} >Borrar Todo</button></Grid>}
                </Grid>

                <Grid item xs={12} md={4} lg={4}>
                    {(cartProducts.length >= 1) &&
                        <Grid item md={12} position='fixed' >
                            <Grid item md={12}>
                                <Typography textAlign='start' variant='h5' pb='1rem' fontWeight={450}>Total de la compra </Typography>
                            </Grid>
                            <Grid item md={12} pb="3rem" textAlign="center"><Typography variant="h5" fontWeight={600}>${total()}</Typography></Grid>
                            <Grid item md={12} textAlign="center" w><button className="btn-checkout" onClick={() => notShow(true)}>Finalizar Compra</button></Grid>

                        </Grid>}
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
                </Grid>
            </Grid>
        </Container >
    )


}

export default CartView
