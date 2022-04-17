/*import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";


const ItemDetailContainer = () => {

    const { id } = useParams()
    const [item, itemContent] = useState({})
    const filterId = (array, id) => {
                   
        return array.map((product) => {
            if (product.id == id) {
                return itemContent(product)
            }
        })
    }


    const getItem = () => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve( filterId(productsList, id));
            }, 2000);
        });

    };

    useEffect(() => {

        const getProductsAsync = async () => {
            try {
                 await getItem()
            } catch (error) {
                console.log(`Error: ${error}`)
            }
        }
        getProductsAsync();
    }, [id])


    return (
        <Container>
        <Grid container alignItems="center">
        <ItemDetail data={item} key={id} />
        </Grid>

    </Container>

    
    )
}

export default ItemDetailContainer*/