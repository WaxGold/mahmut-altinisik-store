import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart: React.FC = () => {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    const handleRemove = (id: string) => {
        removeFromCart(id);
    };

    const handleClearCart = () => {
        clearCart();
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="space-y-4">
                        {cartItems.map(item => (
                            <CartItem key={item.id} item={item} onRemove={handleRemove} />
                        ))}
                    </div>
                    <button
                        onClick={handleClearCart}
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Clear Cart
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;