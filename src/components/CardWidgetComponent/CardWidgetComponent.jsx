import React from 'react';
import { useCart } from '../context/cartContext';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { BsCart } from "react-icons/bs";

const CartWidgetComponent = () => {
    const { totalQuantity } = useCart();

    return (
        <Link to="/cart" className="cart-widgets">
            <div className="cart-widgets__shopping-bag">
                <BsCart size={30} />
                {totalQuantity > 0 && (
                    <Badge bg="danger" className="cart-widgets__items-counter">
                        {totalQuantity}
                    </Badge>
                )}
            </div>
        </Link>
    );
};

export default CartWidgetComponent;