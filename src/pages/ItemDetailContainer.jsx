import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from '../components/context/cartContext'; // Importa el hook useCart en lugar de addItem
import { useGetProductById } from '../hooks/useProduct';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const { productData } = useGetProductById("products", id);
    const { addToCart } = useCart(); // Utiliza addToCart en lugar de addItem
    const [quantityToAdd, setQuantityToAdd] = useState(1);

    const handleAddToCart = () => {
        // Crea un objeto newItem con la información del producto y la cantidad
        const newItem = {
            id: productData.id,
            title: productData.title,
            price: productData.price,
            quantity: quantityToAdd
        };

        addToCart(newItem); // Agrega el nuevo item al carrito
        // Resetea la cantidad después de agregar al carrito
        setQuantityToAdd(1);
    };

    return (
        <Card key={productData.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={productData.image} style={{ height: '350px' }} />
            <Card.Body>
                <Card.Title>{productData.title}</Card.Title>
                <Card.Text>{productData.description}</Card.Text>
                <div>{productData.price}</div>
                {/* Agregamos un input para la cantidad */}
                <input
                    type="number"
                    value={quantityToAdd}
                    onChange={(e) => setQuantityToAdd(parseInt(e.target.value))}
                />
                <Button variant="primary" onClick={handleAddToCart}>
                    Agregar al Carrito
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ItemDetailContainer;
