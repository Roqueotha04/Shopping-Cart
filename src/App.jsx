import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/products'
import { Header } from './components/header'
import {useState } from 'react'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'



  

function App() {
    
  const [products] = useState (initialProducts)

  /*const resultado = useFilters()
  const filter = resultado.filter
  const filterProducts = resultado.filterProducts
  const setFilters = resultado.setFilters*/

  const {filters, filterProducts, setFilters} = useFilters()
  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
    <Header> </Header>
    <Cart></Cart>
    <Products products={filteredProducts}></Products>    
    </CartProvider>
  )
}

export default App
