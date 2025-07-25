import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-card">
      <h3 className="product-name">{product.name}</h3>
      <p className="product-category">{product.category}</p>
      <p className="product-price">R{product.price}</p>
      <p className={`product-stock ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
        {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
      </p>
    </div>
  );
};

export default ProductItem;
