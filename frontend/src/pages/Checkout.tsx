import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useHistory } from 'react-router-dom';

const Checkout: React.FC = () => {
    const { cartItems, totalAmount } = useContext(CartContext);
    const history = useHistory();

    const handlePayment = () => {
        // Implement payment processing logic here
        // After successful payment, redirect to a confirmation page
        history.push('/confirmation');
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id} className="flex justify-between mb-2">
                            <span>{item.name} (x{item.quantity})</span>
                            <span>${item.price * item.quantity}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between font-bold mt-4">
                    <span>Total:</span>
                    <span>${totalAmount}</span>
                </div>
                <button 
                    onClick={handlePayment} 
                    className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Proceed to Payment
                </button>
            </div>
        </div>
    );
};

export default Checkout;