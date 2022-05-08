import { Container, Grid, Typography } from "@mui/material"
import { Helmet, HelmetProvider } from 'react-helmet-async';

const About = () => {
    return (
        <Container>
              <Helmet>
            <title>Nosotros</title>
            </Helmet>
            <Grid container justifyContent='center'>
                <Grid item xs={12} mb='1rem'>
                    <Typography borderBottom={1} mt="2rem" variant="h1" fontSize='4rem' textAlign='center' fontWeight={400}>Acerca de Nosotros</Typography>
                </Grid>
                <Grid item xs={8} textAlign='center'>
                    <Typography variant='p' fontSize='1.2rem' >
                        Una marca, no suele ser algo fabricado en un laboratorio o con una planificación estratégica y fría detrás,
                        en la mayoría de ocasiones, una marca es fruto de una historia humana, vital, que se desarrolla a base de
                        emociones y sueños.Y esa es la historia de VELASVIENDO. Su nombre es el nombre de la cuna en la que nació
                        y creció.En Punta Ballena montaron su primer taller de velas los hermanos Sebastián y Maximiliano Martínez Monzón,
                        y en él crean su primera obra de arte hecha en cera, inspirados por los cálidos colores del atardecer y los refrescantes
                        aromas del mar de ese rincón del mundo tan especial. Y como todas las marcas que crecen, no crecen por casualidad, sino
                        fruto del esfuerzo, la constancia y mucho, mucho trabajo.En 1998, Maximiliano lleva la marca a Argentina, se establece
                        en Buenos Aires y trabaja duro para hacerse un hueco en un mercado que termina conquistando, logrando popularizarla en
                        muchos ámbitos de la sociedad argentina. Ya en 2002, los otros dos hermanos, Sebastian y Alexis, llevan la marca a España
                         y a Europa, con su sede central en Marbella,
                        abren varios puntos de venta y surten con sus creaciones al mercado minorista y a los profesionales, con tiendas propias
                        actualmente en Marbella y Madrid. VELASVIENDO, una marca moderna y llena de color que vio la
                        luz en las playas de Punta del Este y ahora la puedes encontrar en más de 15 ciudades alrededor del mundo, con obras de a
                        rte en cera que se han convertido en un gran éxito, como sus fanales, y que sigue trabajando para seguir cosechando éxit
                        os.
                        VELASVIENDO

                    </Typography>

                </Grid>
            </Grid>
        </Container>
    )
}

export default About