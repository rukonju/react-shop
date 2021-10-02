import { useEffect, useState } from "react"
import { getStoredCart } from "../local/local"

const useCart=products=>{
    const[cartProduct,setCartProduct]=useState([]);
    useEffect(()=>{
        if(products.length){
            const savedCart=getStoredCart();
            const storedCart=[];
            for(const key in savedCart){
                const addedProduct=products.find(product=>product.key===key);
                if(addedProduct){
                    const quantity=savedCart[key]
                    addedProduct.quantity=quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCartProduct(storedCart);
        }
    }, [products])
    return [cartProduct,setCartProduct]
}
export default useCart;