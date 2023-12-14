
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import { Footer } from './Components/Footer/Footer';
import women_banner from './Components/Assets/img/women_banner.jpg'
import men_banner from './Components/Assets/img/mens_banner.jpg'
import kid_banner from './Components/Assets/img/kid_banner.jpg'
import all_product from './Components/Assets/AllProduct';






function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens'  element={<ShopCategory banner={men_banner} category="mens" />}  />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens" />} />
          <Route path='/kids'  element={<ShopCategory banner={kid_banner} category="kids" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='cart' element={<Cart />} />
          <Route path=':login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
