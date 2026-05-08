import { createContext, useState } from "react";

export const CartContext = createContext ()

export function CartProvider ({children}){
    const[cart, setCart] = useState([])

    function addToCart (product){
        const idProductInCart = cart.findIndex(item => item.id === product.id)

        if(idProductInCart >= 0){
            const newCart = structuredClone(cart)
            newCart[idProductInCart].quantity +=1
            setCart(newCart)
        }else{
        setCart(prevState =>([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
        }

    }

    function removeFromCart (product){
        setCart(prevState => prevState.filter(item => item.id != product.id))
    }

    function clearCart (){
        setCart([])
    }

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}