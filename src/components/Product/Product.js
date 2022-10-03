import React from 'react';
import './Product.css';
import errorImg from '../../error-img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product,handleAddToCart }) => {
    const { name, price, img, seller, ratings } = product;
    
	return (
		<div className='product'>
			<img src={img ? img : errorImg} alt='' />
			<div className='product-info'>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Rating: {ratings} Star</p>
                <p><small>Seller: {seller}</small></p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className="btn-cart">
                Add To Cart
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
		</div>
	);
};

export default Product;
