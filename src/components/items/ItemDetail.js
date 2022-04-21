import React, { useEffect } from "react"
import { Grid } from "@mui/material"
import { Typography } from "@mui/material"
import Button from '@mui/material/Button';
import ItemCount from './ItemCount';
import { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import CartContext from "../../context/CartContext";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase";
import { useParams } from "react-router-dom";

export default function ItemDetail() {

    const { id } = useParams()
    const [value, setValue] = useState(0)
    const [buy, setBuy] = useState(false)
    const { cartProducts, addProductToCart } = useContext(CartContext)
    const [product, setProduct] = useState({})

    const getProduct = async () => {
        const docRef = doc(db, 'productos', id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            let product = docSnap.data()
            product.id = docSnap.id
            setProduct(product)

        } else {
            console.log("No hay documento")
        }
    }
    const data = product;
    useEffect(() => {
        getProduct()
    }, [id])

    const onAdd = (count) => {

        setValue(count)
        setBuy(true)
        addProductToCart({ ...data, quantity: count })

    }



    return (
        <Grid key={data.id} container mr='1rem' ml='1rem' mb='4rem' mt='10rem'>

            <Grid item md={5}>
                <Typography textAlign='center' variant="h2">
                    {data.title}
                </Typography>
                <img src={`..${data.pictureUrl}`} width="100%" />

            </Grid>
            <Grid item md={5}>
                <Typography variant="h6" textAlign="right" mt="10rem">
                    {data.description2}
                </Typography>
                <Typography textAlign="center" variant="h3" mt="50%">
                    Precio ${data.price}
                </Typography>
                {buy ? <Button><Link to='/cart'>Terminar Compra</Link></Button> : <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />}
            </Grid>

        </Grid>
    )
}
