import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, isLoading }) => {
  if (isLoading) {
    return <div className="loading">Loading products...</div>;
  }

  if (products.length === 0) {
    return (
      <div className="no-results">
        <p>No products found.</p>
      </div>
    );
  }

  return (
    <div className="product-list">
      <div className="results-count">
        Showing {products.length} product{products.length !== 1 ? 's' : ''}
      </div>
      <div className="products-grid">
        {products.map(product => (
          <ProductItem 
            key={product.id} 
            product={product} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
