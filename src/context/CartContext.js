import React from "react";
import { createContext, useState } from "react";

const CartContext = createContext([])


const CartProvider = ({ children }) => {



    const [cartProducts, setCartProducts] = useState([])
    console.log(cartProducts)
    const addProductToCart = (product) => {

        if (isInCart(product.id) == true) {
            const add = cartProducts.find((p) => p.id === product.id)
            const { quantity } = add

            add.quantity = product.quantity + quantity
            const newCart = [...cartProducts]
            setCartProducts(newCart)

        } else {
            setCartProducts([...cartProducts, product])
        }
    }

    const isInCart = (id) => {
        return cartProducts.some(prod => prod.id === id)
    }

    function clear() {
        setCartProducts([])
    }

    const deleteOne = (id) => {
        setCartProducts(cartProducts.filter(p => p.id !== id))
    }

    const total = () => {
        return  cartProducts.reduce((acum, product) => acum = acum + (product.price * product.quantity), 0 )
    }

    const quantityTotal = ()=>{
       return  cartProducts.reduce((acum, product) => acum += product.quantity, 0 )
    }


    const data = {
        cartProducts,
        addProductToCart,
        deleteOne,
        clear,
        quantityTotal,
        total

    }

    return <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>

}
export { CartProvider }
export default CartContext