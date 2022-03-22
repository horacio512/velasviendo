import { Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import ItemCount from './ItemCount';

function ItemListContainer({title, name, age}) {

  const onAdd = (count)=>{
    alert(`Agregaste ${count} cantidad de items al carrito!`)
  }


  return (
    <div>
     <Typography variant="h2" mb={6} mt={20} textAlign='center' fontSize='6rem'>{title}</Typography>
      <Typography variant="h4" mb={6} mt={8} textAlign='center' fontSize='3rem'> Nombre: {name} </Typography>
      <Typography variant="h4" textAlign={'center'} fontSize='3rem' >Edad: {age}</Typography>
      <ItemCount stock={10} initial={5} onAdd={onAdd} />
    </div>

   
    
  )

}

export default ItemListContainer