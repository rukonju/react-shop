import React from 'react';

const MyOrder = (props) => {
    const {name,price,quantity,key}=props.product;
    const {removeCart}=props;
    return (
        <div>
            <h3>Name:{name}</h3>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={()=>removeCart(key)}>Remove</button>
        </div>
    );
};

export default MyOrder;