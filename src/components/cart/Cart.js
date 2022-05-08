import React, { useState } from "react"
import CartContext from "../../context/CartContext"
import { useContext } from "react"
import { Link } from 'react-router-dom'
import EndBuy from '../Modal/EndBuy'
import { Button, Container } from "@mui/material"
import db from '../../firebase'
import { addDoc, collection } from "firebase/firestore"
import Typography from "@mui/material/Typography"
import '@fontsource/roboto/400.css';
import { Grid } from "@mui/material"
import BackspaceSharpIcon from '@mui/icons-material/BackspaceSharp';
import { Input } from "@mui/material"
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
        if (formData.name.length == 0 || formData.email.length == 0 || formData.phone.length == 0) {
            e.preventDefault()
        }
        else {


            let prevOrder = {
                ...order,
                buyer: formData
            }
            e.preventDefault()
            clear()
            pushOrder(prevOrder)
        }
    }

    const pushOrder = async (prevOrder) => {

        const orderFirebase = collection(db, 'orders')
        const orderDoc = await addDoc(orderFirebase, prevOrder)
        setSuccess(orderDoc.id)
    }

    const [sOrder, setSuccess] = useState()

    return (
        <Container>
              <Helmet>
            <title>Tu Carro</title>
            </Helmet>
            <Grid container spacing={2} justifyContent="space-between" >
                <Grid item sm={12} md={6}>
                    <Typography variant="h1" fontSize="2.7rem" fontWeight={400} textAlign="start"
                        borderBottom={6} borderRadius={1}
                        pb='3rem' mt='3rem' mb='2rem' >Tu Carrito de Compras</Typography>
                </Grid>

                {sOrder ? (
                    <Grid container className="order" border={1}  p='1rem'>
                         <Grid item xs={8} sm={8} md={8} lg={8} xl={8} >
                            <Typography variant='h2' fontSize='2rem' fontWeight={600} textAlign='left' mb='4rem'>Orden Generada</Typography>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mb='1.5rem'>
                            <Typography variant='h2' fontSize='2rem' fontWeight={400} textAlign='left' pb='0.8rem'>N° de orden</Typography>
                        </Grid>

                        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}  >
                            <Typography variant='h3' fontSize='2rem' color='error' p='0.3rem' textAlign='center' border={1.1} borderRadius={5}>{sOrder}</Typography>
                        </Grid>

                        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}  mt='1.5rem'>
                            <Typography variant='h3' fontSize='2rem' textAlign='left'>Tenemos su información pronto nos contactaremos con usted {formData.name}</Typography>
                        </Grid>

                        
                        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}  mt='1.5rem'>
                            <Typography variant='h3' fontSize='2rem' textAlign='left'>Saludos, equipo de VELASVIENDO.</Typography>
                        </Grid >


                    </Grid>
                ) : (
                    <EndBuy handleClose={() => notShow(false)} open={show}>
                        <form onSubmit={handleSubmit}>
                            <Grid container>
                                <Grid item sm={12}>
                                    <Typography variant="h3" fontSize='2rem' textAlign='center' pb='2rem'>Confirmación de Datos</Typography>
                                </Grid>

                                <Grid item sm={12} textAlign='center'>
                                    <Input type="text" name='name' placeholder='Nombre' required
                                        onChange={handleChange}
                                        value={formData.name} />
                                </Grid>

                                <Grid item sm={12} textAlign='center'>
                                    <Input type="number" name='phone' placeholder='Telefono' required
                                        onChange={handleChange}
                                        value={formData.phone} />
                                </Grid>

                                <Grid item sm={12} textAlign='center'>
                                    <Input type="mail" name='email' placeholder='email' required
                                        onChange={handleChange}
                                        value={formData.email} />
                                </Grid>
                            </Grid>

                            <Grid item sm={12} textAlign='end' pt='3rem'>
                                <Button type="submit">Enviar</Button>
                            </Grid>
                        </form>
                    </EndBuy>
                )}
                {(cartProducts.length === 0 && sOrder == undefined) && <Grid item sm={12} md={12} textAlign='center' >
                    <Typography variant="h3" fontSize='1.5rem' mt='4rem' mb='2rem'>No hay items en tu carrito...</Typography>
                    <img src="/emptyCart.jpg" width='100vw' />
                    <Grid item md={12} mb="2rem" mt="2rem"> <Link to='/' className="emptyCart">
                        <Button>Continuar comprando</Button>
                    </Link></Grid>

                </Grid>
                }

                <Grid item xs={8} sm={7} md={7} lg={7}>
                    {Object.values(cartProducts).map((cartProduct) => {
                        return (
                            <Grid container spacing={2} key={cartProduct.id} pb='1rem' className="borderCard">
                                <Grid item textAlign="center" alignSelf="center" md={5} xs={12} sm={6}>
                                    <img className="img" src={`..${cartProduct.pictureUrl}`} />
                                </Grid>
                                <Grid item md={7} sm={6}>
                                    <Typography variant='h6' mb='0.5rem' textAlign='start' fontSize='1.3rem'> {cartProduct.title}</Typography>
                                    <Typography variant='h5' mb='0.5rem' color='red' fontSize='1.1rem'>${cartProduct.price}</Typography>
                                    <Typography variant='h5' mb='0.5rem' fontSize='1.1rem'> Candidad: {cartProduct.quantity}</Typography>
                                    <Typography variant='h5' mb='0.5rem' fontSize='1.1rem'>Total: $ {cartProduct.quantity * cartProduct.price}</Typography>
                                    <Grid container textAlign="center" justifyContent="flex-end" onClick={() => deleteOne(cartProduct.id)}>
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

                <Grid item xs={4} sm={4} md={4} lg={4}>
                    {(cartProducts.length >= 1) &&
                        <Grid item md={12} sm={12} position='fixed' >
                            <Grid item md={12}>
                                <Typography textAlign='start' variant='h5' pb='1rem' fontWeight={450}>Total de la compra </Typography>
                            </Grid>
                            <Grid item md={12} pb="3rem" textAlign="center"><Typography variant="h5" fontWeight={600}>${total()}</Typography></Grid>
                            <Grid item md={12} textAlign="center"><button className="btn-checkout" onClick={() => notShow(true)}>Finalizar Compra</button></Grid>

                        </Grid>}

                </Grid>
            </Grid>
        </Container >
    )


}

export default CartView
