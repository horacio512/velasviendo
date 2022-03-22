import { Typography } from '@mui/material';
import '@fontsource/roboto/300.css';

function ItemListContainer({title, name, age}) {


  return (
    <div>
     <Typography variant="h2" mb={6} mt={20} textAlign='center' fontSize='6rem'>{title}</Typography>
      <Typography variant="h4" mb={6} mt={8} textAlign='center' fontSize='3rem'> Nombre: {name} </Typography>
      <Typography variant="h4" textAlign={'center'} fontSize='3rem' >Edad: {age}</Typography>
    </div>
  )

}

export default ItemListContainer