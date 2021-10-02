import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name,price,img,seller}=props.product;
    const {addTocart}=props
    return (
        <div>
            <div className= "product">
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h2>{name}</h2>
                    <p>seller: {seller}</p>
                    <p>Price: {price}</p>
                    <button onClick={()=>addTocart(props.product)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;