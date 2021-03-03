import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    let itemPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        itemPrice = itemPrice + item.price;
    };

    const convertNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    };

    let shipping = 0;
    if (itemPrice > 100) {
        shipping = 0;
    } 
    else if(itemPrice > 0){
        shipping = 4.99;
    };

    let total = itemPrice + shipping;
    let tax = total / 10;
    let grandTotal = total + tax;
    
    return (
        <div className="cart">
            <div className='order_summery'>
                <h3>Order Summery</h3>
                <p>Items Added: {cart.length}</p>
            </div>
            <div className="cost">
                <p>Items Price : $ {convertNumber(itemPrice)}</p>
                <p>Shipping : $ {convertNumber(shipping)}</p>
                <p>Total : $ {convertNumber(total)}</p>
                <p>Tax : $ {convertNumber(tax)}</p>
                <p>Grand Total : $ {convertNumber(grandTotal)}</p>
            </div>
        </div>
    );
};

export default Cart;