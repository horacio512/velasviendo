import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/items/ItemListContainer';
import ItemDetailContainer from './components/items/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Category from './pages/Category'
import { CartProvider } from './context/CartContext';
import Cart from './components/cart/Cart'


function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category" />
            <Route path="/category/:categoryid" element={<Category />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/nosotros" />
            <Route path="/nuestrosclientes" />
            <Route path="/contacto" />
            <Route path="*" element={<h1>Error 404 Page Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>

  );
}



export default App;
