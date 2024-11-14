import React from 'react';
import './Topwear.css';

const Topwear: React.FC = () => {
  // Define 20 unique products with actual topwear images
  const products = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Topwear ${index + 1}`,
    price: `$${(Math.random() * 100 + 10).toFixed(2)}`, // Random price from $10.00 to $110.00
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    imgSrc: `/images/topwear.jpeg`, // Reuse 5 different topwear images
  }));

  return (
    <div className="topwear-container">
      <h1 className="topwear-title">Topwear Collection</h1>

      <section className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imgSrc} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <div className="product-sizes">
                {product.sizes.map((size) => (
                  <span key={size} className="product-size">{size}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Topwear;
