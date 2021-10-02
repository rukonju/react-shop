// import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product'
import {addToDb} from '../../local/local'
import './Shop.css'
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';
const Shop = () => {
    // const [products,setProducts]=useState([]);
    const [products]=useProducts();
    const [cartProduct, setCartProduct]=useCart(products);
    
    const addTocart=item=>{
        const existProducts=cartProduct.find(product=>product.key===item.key);
        let newProducts=[];
        if(existProducts){
            const restProduct=cartProduct.filter(product=>product.key!==item.key);
            newProducts=[...restProduct,item]
            existProducts.quantity=existProducts.quantity+1;
        }
        else{
            item.quantity=1;
            newProducts=[...cartProduct,item]
        }
        setCartProduct(newProducts);
        addToDb(item.key)
    }
    return (
        <div className="products-container">
            <div className="product-container">
                {
                    products.map(product=> <Product
                         key={product.key} 
                         product={product}
                         addTocart={addTocart}
                         ></Product>)
                }
            </div>
            <div>
                <Cart cartProduct={cartProduct}>
                    <Link to='/order'>
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;