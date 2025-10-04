import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">
                    <Link to="/">Mahmut Altınışık</Link>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link to="/cart" className="hover:underline">Cart</Link>
                        </li>
                        <li>
                            <Link to="/checkout" className="hover:underline">Checkout</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;