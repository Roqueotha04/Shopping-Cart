import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/products'
import { Header } from './components/header'
import { useState } from 'react'

function App() {
    const [products] = useState (initialProducts)
    const [filter, setFilters] = useState({
      category: 'all',
      minPrice:0
    })

    function filterProducts(products){

      return products.filter(product =>{
        return (
          product.price >= filter.minPrice &&
          (
            filter.category == 'all' ||
            product.category == filter.category
          )
        )
      })
    }

    const filteredProducts = filterProducts(products);

  return (
    <>
    <Header changeFilters={setFilters}> </Header>
    <Products products={filteredProducts}></Products>    
    </>
  )
}

export default App
