import { useState } from 'react'
import products from './data.js'
import ProductList from './components/ProductList.jsx'
import SearchBar from './components/SearchBar.jsx'
import './App.css'

function App() {
  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showInStockOnly, setShowInStockOnly] = useState(false)

  const categories = ['All', ...new Set(products.map(product => product.category))]


  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchText.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesStock = !showInStockOnly || product.inStock
    
    return matchesSearch && matchesCategory && matchesStock
  })

  return (
    <div className="app">
      <h1>Product Catalogue</h1>
      
      {/* Search and Filter Section */}
      <SearchBar 
        searchQuery={searchText}
        selectedCategory={selectedCategory}
        showInStockOnly={showInStockOnly}
        categories={categories}
        onSearchChange={setSearchText}
        onCategoryChange={setSelectedCategory}
        onInStockChange={setShowInStockOnly}
      />

      {/* Products List */}
      <ProductList products={filteredProducts} />
    </div>
  )
}

export default App
