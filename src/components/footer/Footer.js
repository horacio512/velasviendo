import { Grid, Container, Box, Typography } from "@mui/material";
import './footer.css';

const Footer = () => {
    return (
        <Box className="footer">
            <Container maxWidth='lg'>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={4} alignSelf='end' >
                        <Typography variant='p' className="footerHour" mb='0.3rem'>Por ventas al mayor dirigirse a Contacto.</Typography>
                    </Grid>

                    <Grid item xs={12} sm={4} mb='2rem'>
                        <Typography variant="h5" className="footerName" fontSize='1.5rem' textAlign='center'>VELASVIENDO</Typography>
                        <Typography variant="h5" className="footerHour" fontSize='1rem' textAlign='center'>Lunes a Viernes 9 a 18 hs</Typography>
                        <Typography variant="h5" className="footerHour" fontSize='1rem' textAlign='center'>Sábados de 9 a 13hs</Typography>
                    </Grid>

                    <Grid item xs={12} sm={4} mb='2rem' alignSelf='end'>
                        <Typography variant="h5" className="footerLetter" fontSize='0.9rem'>Todos los Derechos Reservados  </Typography>
                        <Typography variant="h5" className="footerLetter" fontSize='0.9rem'>® Horacio Garcia </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    )
}

export default Footer