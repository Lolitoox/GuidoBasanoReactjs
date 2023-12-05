import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import ItemListContainer from './components/ItemDetailComponent/ItemDetailComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import './App.css';

function App() {
    return (
        <div>
            <NavbarComponent />
            <ItemListContainer greeting="Bienvenidos a mi tienda" />
            <FooterComponent />
        </div>
    );
}

export default App;