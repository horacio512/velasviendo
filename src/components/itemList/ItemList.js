import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import Item from '../item/Item'
import '@fontsource/roboto/500.css';
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
            <Grid container mb="3rem" mt="4rem" textAlign='center' justifyContent='center'>
                <Link to={'/1'} className="link-Home">Velas</Link>
                <Link to={'/2'} className="link-Home">Candelabros</Link>
                <Link to={'/'} className="link-Home">Todos</Link>
            </Grid>
            <Grid container justifyContent='center' spacing={2}>
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