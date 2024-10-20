import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { products } from '../data/product';

interface ProductListProps {
  addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ addToCart }) => {
  const [category, setCategory] = useState<string | null>(null);

  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setCategory(null)}
          className={`button ${category === null ? 'bg-purple-600' : 'bg-gray-200 text-gray-800'}`}
        >
          All
        </button>
        {Array.from(new Set(products.map(p => p.category))).map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`button ${category === cat ? 'bg-purple-600' : 'bg-gray-200 text-gray-800'}`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="product-image" />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.id}`}>
                <h2 className="product-title">{product.name}</h2>
              </Link>
              <p className="product-description">{product.description}</p>
              <p className="product-price">₹{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="button w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;