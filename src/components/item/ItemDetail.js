import React, { useEffect } from "react"
import { Container, Grid } from "@mui/material"
import { Typography } from "@mui/material"
import ItemCount from './ItemCount';
import { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import CartContext from "../../context/CartContext";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase";
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

export default function ItemDetail() {

    const { id } = useParams()
    const [value, setValue] = useState(0)
    const [buy, setBuy] = useState(false)
    const { cartProducts, addProductToCart } = useContext(CartContext)
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const getProduct = async () => {
        const docRef = doc(db, 'productos', id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct(product)
            setLoading(false)

        } else {
            console.log("No hay documento")
        }
    }
    const data = product;
    useEffect(() => {
        setLoading(true)
        getProduct()
    }, [id])

    const onAdd = (count) => {

        setValue(count)
        setBuy(true)
        addProductToCart({ ...data, quantity: count })

    }



    return (
        <Container>
            {loading ? (<Grid container justifyContent='center' spacing={2}><CircularProgress /></Grid>) : (
                <Grid key={data.id} container mr='1rem' ml='1rem' mb='4rem' mt='3rem' spacing={2}>

                    <Grid item sm={10} md={10} lg={10} xl={10}>
                        <Typography textAlign='center' variant="h2" fontWeight={400} fontStyle='italic' borderBottom={1}>
                            {data.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={10} sm={5} md={5} lg={5} xl={5}>
                        <img src={`..${data.pictureUrl}`} width="60%%" className="img-border" />
                    </Grid>
                    <Grid item xs={10} sm={5} md={5} lg={5}>
                        <Typography variant="h6" textAlign="center" mt="1rem">
                            {data.description2}
                        </Typography>
                        <Grid container>
                            <Grid item md={6}>
                                <Typography textAlign="center" variant="h3" mt='3rem' >
                                    Precio:
                                </Typography>
                            </Grid>
                            <Grid item md={6}>
                                <Typography textAlign="center" variant="h3" mt='3rem' color="error">${data.price}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} textAlign="center"> {buy ?
                        <Grid container>
                            <Grid item sm={12} mb="2rem"><Link className="btn-buy" to='/cart'>Terminar Compra</Link></Grid>
                            <Grid item sm={12}><Link className="btn-buy" to='/'>Seguir comprando</Link></Grid>

                        </Grid>

                        : <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />
                    }
                    </Grid>

                </Grid>)}
        </Container>
    )
}
