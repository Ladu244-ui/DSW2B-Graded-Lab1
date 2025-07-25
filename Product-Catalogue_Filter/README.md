# Product Catalogue Filter - E-commerce Application

A React-based product filtering interface for ShopEasy Inc. e-commerce startup. This application allows users to search and filter through products in real-time using multiple criteria.

## Features

- **Real-time Search**: Search products by name with instant results
- **Category Filtering**: Filter products by category (Clothing, Shoes, Accessories, Furniture)
- **Stock Status Filter**: Show only in-stock products when enabled
- **Combined Filters**: All filters work together for refined search results
- **No Results Message**: User-friendly message when no products match the criteria
- **Responsive Design**: Clean, modern interface that works on different screen sizes

## Component Structure

- **App.jsx**: Main component with state management using useState hook
- **SearchBar.jsx**: Search input, category dropdown, and stock filter checkbox
- **ProductList.jsx**: Displays filtered products and handles empty states
- **ProductItem.jsx**: Individual product card with name, category, price, and stock status
- **data.js**: Sample product data with various categories and stock statuses

## How to Run the Application

1. **Install Dependencies**:
   ```bash
   npm install  or yarn install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Open in Browser**:
   - The application will open at `http://localhost:5173` (Vite default port)
   - If port 5173 is busy, Vite will automatically use the next available port

## Usage Instructions

1. **Search by Name**: Type in the search box to filter products by name (case-insensitive)
2. **Filter by Category**: Select a category from the dropdown to show products from that category only
3. **Stock Filter**: Check "In Stock Only" to show only available products
4. **Combined Filtering**: Use multiple filters together for more specific results
5. **Clear Filters**: Clear the search box or select "All" categories to reset filters

## Technical Implementation

- **React Functional Components**: Uses modern React with hooks (useState only)
- **State Management**: Three state variables for search text, category, and stock filter
- **Filtering Logic**: Uses Array.filter() and String.includes() methods
- **List Rendering**: Uses Array.map() with unique keys for optimal performance
- **Conditional Rendering**: Shows "No products found" message when no results match
- **Props Data Flow**: Demonstrates parent-child data flow through props

## Sample Data

The application includes 12 sample products across 4 categories:
- **Clothing**: T-Shirts, Jeans, Hoodies, Polo Shirts
- **Shoes**: Sneakers in various colors
- **Accessories**: Mouse, Headset, Wallet
- **Furniture**: Office Chair, Wooden Desk

## Project Structure

```
src/
├── App.jsx           # Main application component
├── App.css           # Application styles
├── data.js           # Product data
├── main.jsx          # React entry point
└── components/
    ├── SearchBar.jsx     # Search and filter
    ├── ProductList.jsx   # Products container
    └── ProductItem.jsx   # Individual product card
```


