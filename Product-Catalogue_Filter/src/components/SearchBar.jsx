import React from 'react';

const SearchBar = ({ 
  searchQuery, 
  selectedCategory, 
  showInStockOnly, 
  categories, 
  onSearchChange, 
  onCategoryChange, 
  onInStockChange 
}) => {
  return (
    <div className="search-bar">
      <div className="search-controls">
        {/* input */}
        <div className="search-input-group">
          <label htmlFor="search">Search by name:</label>
          <input
            id="search"
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
          />
        </div>

        {/* dropdown */}
        <div className="category-filter-group">
          <label htmlFor="category">Filter by category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="category-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* checkbox */}
        <div className="stock-filter-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={showInStockOnly}
              onChange={(e) => onInStockChange(e.target.checked)}
              className="stock-checkbox"
            />
            Show only in-stock items
          </label>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
