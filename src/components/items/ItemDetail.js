import React from "react"
import { Grid } from "@mui/material"
import { Typography } from "@mui/material"
import Button from '@mui/material/Button';
import ItemCount from './ItemCount';

export default function ItemDetail({ data }) {

    const onAdd = (count) => {
        alert(`Agregaste ${count} cantidad de items al carrito!`)
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
                    <ItemCount stock={10} initial={1} onAdd={onAdd} />
                </Grid>
          

        </Grid>
    )
}
