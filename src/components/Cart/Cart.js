import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cartProduct}=props;
    let total=0;
    let quantity=0;
    for(const product of cartProduct){
        
        if(!product.quantity){
            product.quantity=1;
        }
        total=total+product.price+product.price*product.quantity;
        quantity=quantity+product.quantity;
    }
    const shipping=total>0?15:0;
    const tax=total/10;
    const grandTotal=total+tax+shipping;
    
    return (
        <div>
            <h1>Order summery</h1>
            <h4>Total Items:{quantity} </h4>
            <p>Price:{total.toFixed(2)} </p>
            <p>Shipping:{shipping.toFixed(2)} </p>
            <p>Tax:{tax.toFixed(2)}</p>
            <h3>Grand Total:{grandTotal.toFixed(2)}</h3>
            {props.children}
        </div>
    );
};

export default Cart;