import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const customProducts = fakeData.slice(0, 10)
    const [products, setProducts] = useState(customProducts);

    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
            const newCart = [...cart, product];
            setCart(newCart);
    }
    return (
        <div className='shop_container'>
            <div className='product_container'>
            {
                products.map(product => <Product 
                    handleAddProduct={handleAddProduct} 
                    product={product}>                        
                    </Product>)
            }
            </div>
            <div className='cart_container'>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;