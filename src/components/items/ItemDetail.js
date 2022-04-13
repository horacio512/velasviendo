import React from "react"
import { Grid } from "@mui/material"
import { Typography } from "@mui/material"
import Button from '@mui/material/Button';
import ItemCount from './ItemCount';
import { useState, useContext } from "react";
import { Link } from 'react-router-dom'
import CartContext from "../../context/CartContext";

export default function ItemDetail({ data }) {

    const [value, setValue] = useState(0)
    const [buy, setBuy] = useState(false)
    const { cartProducts, addProductToCart } = useContext(CartContext)

    const onAdd = (count) => {

        setValue(count)
        setBuy(true)
        addProductToCart({...data, quantity: count})

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
                {buy ? <Button><Link to='/cart'>Terminar Compra</Link></Button> : <ItemCount stock={10} initial={1} onAdd={onAdd} />}
            </Grid>

        </Grid>
    )
}
