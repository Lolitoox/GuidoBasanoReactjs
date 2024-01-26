import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemListContainer = ({ greeting, productsData }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: 'auto', flexWrap: 'wrap', padding: '0, 20px', marginBottom: '50px' }}>
            {productsData.map(products => {
                return (
                    <Card key={products.id} style={{ width: '18rem' }} >
                        <Link to={`/item/${products.id}`}>
                            <Card.Img variant="top" src={products.image} style={{ height: '300px' }} />
                        </Link>
                        <Card.Body>
                            <Card.Title>{products.title}</Card.Title>
                            <Card.Text>
                                <div>$ {products.price}</div>
                            </Card.Text>
                            <Link to={`/item/${products.id}`}>
                                <Button variant="primary">Go somewhere</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                );
            })
            }
        </div>
    );
};

export default ItemListContainer