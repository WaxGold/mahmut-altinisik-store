import React from 'react';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  onAddToCart: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, imageUrl, onAddToCart }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-700">${price.toFixed(2)}</p>
        <button
          onClick={() => onAddToCart(id)}
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;