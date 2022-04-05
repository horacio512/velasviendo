import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import Item from '../components/items/Item'
import productsList from "../productsList";
import '@fontsource/roboto/500.css';
import { useParams } from "react-router-dom";


const Items = () => {

    const { categoryid } = useParams()
    const [products, listProducts] = useState([])
    console.log(categoryid)

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

            <Grid container alignItems="stretch" mt="4rem" spacing={2}>
                {products.map((product) => {
                    const { id } = product
                    if (product.type == categoryid) {
                        return (
                            <Item data={product} key={id} ></Item>)
                    }

                })}
            </Grid>

        </Container>


    );
}

export default Items