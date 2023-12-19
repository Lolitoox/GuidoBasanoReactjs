import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Category from "../pages/Category"
import ItemDetailContainer from "../pages/ItemDetailContainer"
import Navbar from "../components/NavbarComponent/NavbarComponent"
import FooterComponent from '../components/FooterComponent/FooterComponent';


const MainRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/category/:id' element={<Category />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
            </Routes>
            <FooterComponent />
        </BrowserRouter>
    )
}

export default MainRouter