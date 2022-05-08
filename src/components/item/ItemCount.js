import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";

const ItemCount = (props) => {


    const [count, setCount] = useState(props.initial)


    const addStock = () => {

        if (props.stock > 0) {

            if (count < props.stock) {
                setCount(count + 1)
            }
        }
    }

    const removeStock = () => {

        if (props.stock > 0) {
            if (count > 0) {
                setCount(count - 1)
            }
        }
    }


    return (
        <div>
            <Grid container textAlign="center" pt="5rem">

                <Grid xs={4} item md={4}>
                    <button onClick={removeStock} className='btn-count'>-</button>
                </Grid>

                <Grid xs={4} item md={4} textAlign="center">
                    <Typography>
                        {count}
                    </Typography>
                </Grid>

                <Grid xs={4} item md={4} >
                    <button onClick={addStock} className='btn-count' >+</button>
                </Grid>

                <Grid item xs={12} sm={12} md={12} textAlign="center">
                    <Button onClick={() => {
                        if (count > 0 && props.stock > 0)
                            props.onAdd(count)
                    }} >Agregar al Carrito</Button>

                </Grid>

            </Grid>

        </div>

    )
}

export default ItemCount;