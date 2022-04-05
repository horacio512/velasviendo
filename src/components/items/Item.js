import { CardContent, CardMedia } from "@mui/material";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import './item.css'

export default function ItemShow({ data }) {


    const { id, title, description, price, pictureUrl, type } = data;


    return (
        <Grid item key={data.id}  component={Card} mb="1rem" md={4}>
                <CardMedia component='img'
                    image={`..${data.pictureUrl}`} className="img-fluid" />
                <CardContent>
                    <Typography gutterBottom fontSize="2rem" component="div">
                        {data.title}
                    </Typography>
                    <Typography fontSize="1rem" color="text.secondary">
                       {data.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"><Link to={`/item/${data.id}`} className="linkHome">Detalles</Link></Button>
                </CardActions>
       

        </Grid>)
}