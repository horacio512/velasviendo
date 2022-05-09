import '@fontsource/roboto/300.css';
import ItemList from './ItemList'
import { Helmet} from 'react-helmet-async';

function ItemListContainer() {

  return (
    <div>
      <Helmet>
        <title>VELASVIENDO</title>
      </Helmet>
      <ItemList />
    </div>
  )

}

export default ItemListContainer