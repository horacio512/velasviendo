import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import Item from './Item';
import { Typography } from "@mui/material";
import '@fontsource/roboto/500.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import { Link, useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";


const Items = () => {

    const [products, listProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()

    const getProducts = async () => {
        const itemsCollection = collection(db, 'productos')
        const productsSnapshot = await getDocs(itemsCollection)
        const products = productsSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return products
    };


    useEffect(() => {
        listProducts([])
        setLoading(true)
        getProducts().then((p) => {
            setLoading(false)
            category ? filterId(p, category) : listProducts(p)
        })
    }, [category])

    const filterId = (a, category) => {
        return a.map((product, i) => {
            if (product.type == category) {
            
                return listProducts(products => [...products, product])
            }
        })
    }

    return (

        <Container>
            <Box mb="3rem" mt="4rem" textAlign='center'>
                <Button size="large" ><Link to={'/1'} className="linkHome">Velas</Link></Button>
                <Button size="large" ><Link to={'/2'} className="linkHome">Candelabros</Link></Button>
                <Button size="large" ><Link to={'/'} className="linkHome">Todos</Link></Button>
            </Box>
            <Grid container alignItems="stretch" spacing={2}>
                {loading ? (<CircularProgress />) : (products.map((product) => {
                    const { id } = product
                    return (
                        <Item data={product} key={id} ></Item>)
                }))}

            </Grid>

        </Container>


    );
}

export default Items