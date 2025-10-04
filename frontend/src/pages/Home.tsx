import React from 'react';
import ProductList from '../components/ProductList';

const Home: React.FC = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold my-4">Welcome to Mahmut Altınışık</h1>
            <p className="text-lg mb-4">Discover our exclusive collection of t-shirts.</p>
            <ProductList />
        </div>
    );
};

export default Home;