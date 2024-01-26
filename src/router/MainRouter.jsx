import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Category from "../pages/Category"
import ItemDetailContainer from "../pages/ItemDetailContainer"
import Navbar from "../components/NavbarComponent/NavbarComponent"
import FooterComponent from '../components/FooterComponent/FooterComponent';
import { CartProvider } from '../components/context/cartContext';
import Cart from '../components/Cart/Cart';
import Checkout from "../components/Cart/Checkout"

const MainRouter = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/category/:category' element={<Category />} />
                    <Route path='/item/:id' element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </CartProvider>
    )
}

export default MainRouter;
