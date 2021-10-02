import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../local/local';
import Cart from '../Cart/Cart';
import MyOrder from '../MyOrder/MyOrder';
import  {useHistory}  from 'react-router';
import './Order.css'
const Order = () => {
    const [products,setProducts]=useProducts();
    const [cartProduct,setCartProduct]=useCart(products);
    const history=useHistory();
    const removeCart=key=>{
        const newCart=cartProduct.filter(product=>product.key!==key);
        setCartProduct(newCart);
        removeFromDb(key);
    }
    const placeOrder=()=>{
        history.push('/placeOrder');
        setCartProduct([]);
        clearTheCart();
    }
    return (
        <div className="products-container">
            <div className="product-container">
                {
                    cartProduct.map(product=><MyOrder
                        key={product.key}
                        removeCart={removeCart}
                        product={product}></MyOrder>)
                }
            
            </div>
            <div>
                <Cart cartProduct={cartProduct}>
                    <button onClick={placeOrder}>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Order;