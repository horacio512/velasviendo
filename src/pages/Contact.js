import { React, useState } from "react";
import { Button, Card, CardContent, Container, Grid, TextField, Typography } from "@mui/material";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
    //información del contacto
    const data = {
        name: '',
        lastName: '',
        phone: '',
        email: '',
        msj: ''
    }

    const [formData, setFormData] = useState(data)

    const getInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const saveData = async (e) => {
        e.preventDefault();
        pushOrder(formData)
        setFormData(data)
    }


    //enviamos los datos del formulario a firebase
    const pushOrder = async (prevOrder) => {
        const orderFirebase = collection(db, 'contact')
        await addDoc(orderFirebase, prevOrder)
        setSuccess(true)
    }

    const [success, setSuccess] = useState(false)

    return (

        <Container>
            <Helmet>
                <title>Contacto</title>
            </Helmet>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h4">Contacto</Typography>
                    <Typography gutterBottom variant="body2" component="p" color="textSecondary">Complete el formulario y nos contactaremos con usted lo mas pronto posible.</Typography>
                    <form onSubmit={saveData}>
                        <Grid container spacing={1}>

                            <Grid item xs={12} sm={6}>
                                <TextField label="Nombre" name='name' placeholder="Ingrese Nombre" variant="outlined"
                                    onChange={getInput} value={formData.name} fullWidth required />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField label="Apellido" name='lastName' placeholder="Ingrese Apellido" variant="outlined"
                                    onChange={getInput} value={formData.lastName} fullWidth required />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField type="email" label="Email" name='email' placeholder="Ingrese correo electronico" variant="outlined"
                                    onChange={getInput} value={formData.email} fullWidth required />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField type="number" label="Teléfono" name='phone' placeholder="Ingrese un número de teléfono" variant="outlined"
                                    onChange={getInput} value={formData.phone} fullWidth required />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField label="Mensaje" multiline rows={4} name='msj' placeholder="Ingrese su mensaje" variant="outlined"
                                    onChange={getInput} value={formData.msj} fullWidth required />
                            </Grid>

                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="secondary" fullWidth>Enviar</Button>
                            </Grid>


                        </Grid>
                    </form>
                </CardContent>

            </Card>

            {success ? (<Grid container>
                <Grid item xs={12}>
                    <Typography>Mensaje enviado Correctamente</Typography>
                </Grid>
            </Grid>) : (<Grid></Grid>)}
        </Container>
    )
}

export default ContactPage