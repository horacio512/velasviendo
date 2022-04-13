import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import Item from './Item';
import productsList from "../../productsList";
import { Typography } from "@mui/material";
import '@fontsource/roboto/500.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import { Link } from "react-router-dom"; 
import CircularProgress from '@mui/material/CircularProgress';

const Items = () => {

    const [products, listProducts] = useState([])
    const [loading, setLoading] = useState(true)
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
                setLoading(false)
                console.log(loading)
            } catch (error) {
                console.log(`Error: ${error}`)
            }
        }
        getProductsAsync();
    }, [])


    return (
         
        <Container>
        <Typography variant="h1" mt="4rem" mb="3rem" textAlign="center" fontWeight={500}>Velas y Candelabros</Typography>
        <Box mb="3rem" textAlign='center'>
            <Button size="large" ><Link to={'/category/1'} className="linkHome">Velas</Link></Button>
            <Button size="large" ><Link to={'/category/2'} className="linkHome">Candelabros</Link></Button>
        </Box>
        <Grid container alignItems="stretch" spacing={2}>
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