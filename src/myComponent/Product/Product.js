import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props);
    const {name, seller, price, stock, features, img} = props.product;
    return (
        <div>
            <div className='product'>
                <div className="product_img">
                    <img src={img} alt="Image"/>
                </div>
                <div className="product_details">
                    <div className='product_name'>
                        <h4>{name}</h4>
                    </div>
                    <div className='product_info'>
                        <div className='price'>
                            <p>by: {seller}</p>
                            <p>$ {price}</p>
                            <p>only {stock} left in stock - order soon</p>
                            <button className='cart_btn' onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon className='cart_icon' icon={faShoppingCart} />Add to Cart</button>
                        </div>
                        <div className='feature'>
                            <h4>Features</h4>
                            <ul>
                                {
                                    features.map(feature => <li>{feature.description}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default Product;