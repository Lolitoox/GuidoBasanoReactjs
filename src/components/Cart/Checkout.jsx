import React, { useState } from 'react';
import { useCart } from '../context/cartContext';
import Button from 'react-bootstrap/Button';

const Checkout = () => {
    const { items, totalPrice } = useCart();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validar si algún campo está vacío
        if (formData.firstName === '' || formData.lastName === '' || formData.email === '' || formData.phoneNumber === '') {
            alert('Por favor complete todos los campos del formulario.');
        } else {
            // Aquí puedes manejar el envío de la información del formulario
            console.log('Información del formulario enviada:', formData);
            alert("¡Pronto nos comunicaremos con usted!");
            // Redirigir al usuario a la página principal
            window.location.href = '/';
        }
    };

    // Función para mostrar un mensaje al usuario al hacer clic en "Finalizar Compra"
    const handleFinalizePurchase = () => {
    };

    return (
        <div>
            <h2>Checkout - Detalles de la Compra</h2>
            {items && items.length > 0 ? (
                <div>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>
                                <p>Producto: {item.title}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Precio Unitario: {item.price}</p>
                                <p>Precio Total: {item.price * item.quantity}</p>
                            </li>
                        ))}
                    </ul>
                    <p>Total Precio: {totalPrice}</p>
                </div>
            ) : (
                <p>No hay productos en el carrito.</p>
            )}

            <h2>Información del Cliente</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="Nombre" value={formData.firstName} onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Apellido" value={formData.lastName} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="tel" name="phoneNumber" placeholder="Teléfono" value={formData.phoneNumber} onChange={handleChange} required />
                {/* Utilizamos el componente Button para evitar el comportamiento predeterminado del formulario */}
                <Button variant="primary" type="submit" onClick={handleFinalizePurchase}>Finalizar Compra</Button>
            </form>
        </div>
    );
};

export default Checkout;
