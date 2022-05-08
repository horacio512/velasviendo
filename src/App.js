import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemList/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import Cart from './components/cart/Cart'
import ItemDetail from './components/item/ItemDetail';
import ContactPage from './pages/Contact';
import About from './pages/About';
import Footer from './components/footer/Footer';
import { HelmetProvider } from 'react-helmet-async';


function App() {

  return (
    <div className="App">
      <HelmetProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/nuestrosclientes" />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="*" element={<h1>Error 404 Page Not Found</h1>} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </CartProvider>
      </HelmetProvider>
    </div>

  );
}



export default App;
