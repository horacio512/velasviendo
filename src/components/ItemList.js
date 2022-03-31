import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import Item from "./Item";


const Items = () => {

    const productsList = [
        {
            id: 1,
            title: 'vela 1',
            description: 'Nuestra primera vela',
            price: 300,
            pictureUrl: "candle1",
        },
        {
            id: 2,
            title: 'vela 2',
            description: 'Nuestra segunda vela',
            price: 350,
            pictureUrl: "candle2",
        },

        {
            id: 3,
            title: 'vela 3',
            description: 'Nuestra tercera vela',
            price: 425,
            pictureUrl: "candle3",
        },
        {
            id: 4,
            title: 'vela 4',
            description: 'Nuestra cuarta vela',
            price: 425,
            pictureUrl: "candle4",
        },
        {
            id: 5,
            title: 'vela 5',
            description: 'Nuestra quinta vela',
            price: 425,
            pictureUrl: "candle5",
        }
    ]

    const [products, listProducts] = useState([])

    const getProducts = () => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productsList);
            }, 2000);
        });

    };

    useEffect(() => {

        const getProductsAsync = async () => {
            try {
                const data = await getProducts()
                console.log(data)
                listProducts(data)
            } catch (error) {
                console.log(`Error: ${error}`)
            }
        }
        getProductsAsync();
    }, [])


    return (

        <Container>
            <Grid container alignItems="center">
                {products.map((product) => {
                    const { id } = product
                    return (
                        <Item data={product} key={id} ></Item>)
                })}
            </Grid>

        </Container>


    );
}

export default Items