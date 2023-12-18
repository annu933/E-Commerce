import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/AllProduct';

const  getDefaultCart = ()=>{
    let cart = {}
    for(let i=0;i<all_product.length+1;i++){
        cart[i] = 0;
    }
    return cart;
}

export const ShopContext = createContext(null);
const ShopContextProvider = (props) => {
    const [cartItems,SetCartItems] = useState(getDefaultCart())
    
    const addToCart = (itemId)=>{
        SetCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
    }
    const removeFromCart = (itemId)=>{
        SetCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const ContextValue = { all_product,cartItems,addToCart,removeFromCart }
    
    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
