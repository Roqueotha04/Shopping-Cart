import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/products'
import { Header } from './components/header'
import {useState } from 'react'
import { useFilters } from './hooks/useFilters'



  

function App() {
    
  const [products] = useState (initialProducts)

  /*const resultado = useFilters()
  const filter = resultado.filter
  const filterProducts = resultado.filterProducts
  const setFilters = resultado.setFilters*/
  
  const {filters, filterProducts, setFilters} = useFilters()
  const filteredProducts = filterProducts(products);

  return (
    <>
    <Header changeFilters={setFilters}> </Header>
    <Products products={filteredProducts}></Products>    
    </>
  )
}

export default App
