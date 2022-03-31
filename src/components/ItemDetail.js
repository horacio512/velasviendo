import React from "react"
import { Grid } from "@mui/material"
import { Typography } from "@mui/material"
import Button from '@mui/material/Button';


export default function ItemDetail({ data }) {


    return (
        <Grid container mr='1rem' ml='1rem' mb='4rem' mt='3rem'>
            <Grid item md={5}>
                <Typography textAlign='center' variant="h2">
                    {data.title}
                </Typography>
                <img src={data.picUrl} width="100%" />
            </Grid>
            <Grid item md={5}>
                <Typography variant="h6" textAlign="right" mt="10rem">
                    {data.description}
                </Typography>
                <Typography textAlign="center" variant="h3" mt="50%">
                    Precio ${data.price}
                </Typography>
            </Grid>

        </Grid>
    )
}
