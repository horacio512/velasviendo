import { CardContent, CardMedia } from "@mui/material";
import ItemCount from './ItemCount';
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { CardActions } from "@mui/material";


export default function ItemShow({ data }) {


    const onAdd = (count) => {
        alert(`Agregaste ${count} cantidad de items al carrito!`)
    }


    const { id, title, description, price, pictureUrl } = data;

    return (
            <Grid key={data.id} mr="2rem" mb="2rem">
                <Card>
                    <CardMedia component='img'
                        image={require(`../images/${data.pictureUrl}.jpg`)} height="200" alt="Vela" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {data.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {data.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">
                            Ver Más
                        </Button>
                    </CardActions>
                    <ItemCount stock={10} initial={1} onAdd={onAdd} />
                </Card>

            </Grid>)
}