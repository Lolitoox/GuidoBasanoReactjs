import React from 'react';
import { useCart } from '../context/cartContext';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; // Importar Link desde react-router-dom

const Cart = () => {
    const { items, totalPrice, totalQuantity, removeFromCart, clearCart } = useCart();

    const handleRemoveFromCart = (itemId) => {
        removeFromCart(itemId, 1); // Pasar el itemId y la cantidad a quitar (en este caso, 1)
    };

    const handleClearCart = () => {
        clearCart();
    };

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {items && items.length > 0 ? (
                <>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>
                                <img src={item.image} alt={item.title} style={{ width: '100px', height: '300px' }} />
                                <div>
                                    <p>{item.title}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p>Precio: {item.price * item.quantity}</p>
                                    {/* Modificar el botón para quitar solo una cantidad del producto */}
                                    <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>Quitar del Carrito</Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p>Total Cantidad: {totalQuantity}</p>
                    <p>Total Precio: {totalPrice}</p>
                    <Button variant="primary" onClick={handleClearCart}>Vaciar Carrito</Button>
                    {/* Usar Link en lugar de Button para redirigir al usuario al Checkout */}
                    <Link to="/checkout">
                        <Button variant="success">Finalizar Compra</Button>
                    </Link>
                </>
            ) : (
                <p>El carrito está vacío</p>
            )}
        </div>
    );
};

export default Cart;
