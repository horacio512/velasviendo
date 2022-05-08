import React from "react";
import { createContext, useState } from "react";

const CartContext = createContext([])


const CartProvider = ({ children }) => {



    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("productos")) || [])
    const addProductToCart = (product) => {

        if (isInCart(product.id) == true) {
            const add = cartProducts.find((p) => p.id === product.id)
            const { quantity } = add

            add.quantity = product.quantity + quantity
            const newCart = [...cartProducts]
            setCartProducts(newCart)
            localStorage.setItem("productos", JSON.stringify([...cartProducts, product]))

        } else {
            setCartProducts([...cartProducts, product])
            localStorage.setItem("productos", JSON.stringify([...cartProducts, product]))
        }
    }

    const isInCart = (id) => {
        return cartProducts.some(prod => prod.id === id)
    }

    function clear() {
        setCartProducts([])
        localStorage.clear("productos")
    }

    const deleteOne = (id) => {
        const newCart = cartProducts.filter(p => p.id !== id)
        setCartProducts(newCart)
        localStorage.setItem("productos", JSON.stringify(newCart))
    }

    const total = () => {
        return cartProducts.reduce((acum, product) => acum = acum + (product.price * product.quantity), 0)
    }

    const quantityTotal = () => {
        return cartProducts.reduce((acum, product) => acum += product.quantity, 0)
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