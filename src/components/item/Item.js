import { CardContent, CardMedia } from "@mui/material";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import './item.css'

export default function ItemShow({ data }) {


    return (
        <Grid item key={data.id} component={Card} mb="1rem" md={4} sm={4} xs={5} lg={3}>
            <CardMedia component='img'
                image={`..${data.pictureUrl}`} className="img-fluid" />
            <CardContent>
                <Typography gutterBottom fontSize="2rem" variant="h2" >
                    {data.title}
                </Typography>
                <Typography fontSize="1rem" color="text.secondary">
                    {data.description}
                </Typography>
            </CardContent>
            <Grid item md={12} p='1rem' textAlign='center'>
                <Button size="small"><Link to={`/item/${data.id}`} className="link-item">Detalles</Link></Button>
            </Grid>


        </Grid >)
}