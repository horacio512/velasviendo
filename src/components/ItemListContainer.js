import { Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import { Box } from '@mui/system';
import ItemList from './ItemList'
import ItemDetailContainer from "./ItemDetailContainer";

function ItemListContainer() {

  return (
    <div>
      <Box mt="15rem" />
      <ItemList/>
      <ItemDetailContainer/>
    </div>


  )

}

export default ItemListContainer