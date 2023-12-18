import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/Context'
import { RxCross2 } from "react-icons/rx";

export const CartItems = () => {
    const { all_product, cartItems,removeFromCart } = useContext(ShopContext)
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                console.log(cartItems[e.id])
                    if (cartItems[e.id] > 0) 
                    {
                        return <div>
                            <div className='cartitems-format cartitems-format-main'>
                                <img src={e.image} alt="" className='cartitems-product-icon'  />
                                <p>{e.title}</p>
                                <p>{e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                <RxCross2 className='cartitems-remove-icon' onClick={() => { removeFromCart(e.id) }} />
                            </div>
                            <hr />
                        </div>
                    }
                    return null;
                })}
                <div className='cartitems-down'>
                    <div className="cartitems-total">
                        <h1>Cart Total</h1>
                        <div>
                            <div className='cartitems-total-item'>
                                <p>Subtotal</p>
                                <p>${0}</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <h3>Total</h3>
                                <h3>${0}</h3>
                            </div>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    <div className="cartitems-promocode">
                        <p>If you have a promo code, Enter it here</p>
                        <div className="cartitems-promobox">
                            <input type="text" placeholder='promo code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}