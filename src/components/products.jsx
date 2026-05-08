import { useContext } from 'react'
import { CartContext } from '../context/cart'
import './Products.css'
import { AddToCartIcon } from './icons'

export function Products ({products}){
    const {addToCart, cart, removeFromCart} = useContext(CartContext)

    return (
        <main className='products'>
            <ul>
                {products.map(product =>{
                  return  <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <strong>{product.title} -- {product.price}</strong>
                        </div>
                        <div>
                            <button onClick={()=> addToCart(product)}>
                                <AddToCartIcon></AddToCartIcon>
                            </button>
                        </div>
                    </li>
                })}
            </ul>
        </main>
    )
}