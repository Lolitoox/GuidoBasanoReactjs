import React, { createContext, useContext, useReducer } from 'react';

// Definir el contexto del carrito
const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito
export const useCart = () => useContext(CartContext);

// Estado inicial del carrito
const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
};

// Reductor para manejar las acciones del carrito
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return addItem(state, action.payload);
        case 'REMOVE_ITEM':
            return removeItem(state, action.payload);
        case 'CLEAR_CART':
            return clearCart();
        default:
            return state;
    }
};

// Función para agregar un nuevo artículo al carrito
const addItem = (state, newItem) => {
    const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);

    if (existingItemIndex !== -1) {
        const updatedItems = state.items.map((item, index) => {
            if (index === existingItemIndex) {
                return { ...item, quantity: item.quantity + newItem.quantity };
            }
            return item;
        });

        return {
            ...state,
            items: updatedItems,
            totalQuantity: state.totalQuantity + newItem.quantity,
            totalPrice: state.totalPrice + newItem.price * newItem.quantity
        };
    } else {
        return {
            ...state,
            items: [...state.items, newItem],
            totalQuantity: state.totalQuantity + newItem.quantity,
            totalPrice: state.totalPrice + newItem.price * newItem.quantity
        };
    }
};

// Función para remover un artículo del carrito
const removeItem = (state, itemId) => {
    const itemToRemove = state.items.find(item => item.id === itemId);

    if (itemToRemove) {
        const updatedItems = state.items.filter(item => item.id !== itemId);
        const newTotalQuantity = state.totalQuantity - itemToRemove.quantity;
        const newTotalPrice = state.totalPrice - itemToRemove.price * itemToRemove.quantity;

        return {
            ...state,
            items: updatedItems,
            totalQuantity: newTotalQuantity,
            totalPrice: newTotalPrice
        };
    } else {
        return state;
    }
};

// Función para limpiar el carrito
const clearCart = () => {
    return initialState;
};

// Proveedor del carrito
export const CartProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, initialState);

    // Función para agregar
    const addToCart = (item) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    };

    // Función para sacar
    const removeFromCart = (itemId) => {
        dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    };

    // Función para limpiar el carrito
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    return (
        <CartContext.Provider value={{ ...cartState, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

