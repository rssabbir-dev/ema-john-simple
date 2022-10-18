import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
	const {products} = useLoaderData();
	const [cart, setCart] = useState([]);
	const clearCart = () => {
		setCart([])
		deleteShoppingCart()
	}
	useEffect(() => {
		const storedCart = getStoredCart();
		const savedCart = [];
		for (const id in storedCart) {
			const addedProduct = products.find(product => product.id === id);
			if (addedProduct) {
				const quantity = storedCart[id];
				addedProduct.quantity = quantity;
				savedCart.push(addedProduct)
			}
		}
		setCart(savedCart)
	},[products])
	const handleAddToCart = (selectedProduct) => {
		let newCart = [];
		const exitProduct = cart.find(product => product.id === selectedProduct.id);
		if (!exitProduct) {
			selectedProduct.quantity = 1;
			newCart = [...cart,selectedProduct]
		}
		else {
			const rest = cart.filter(product => product.id !== selectedProduct.id);
			exitProduct.quantity = exitProduct.quantity + 1;
			newCart = [...rest, exitProduct];

		}
		setCart(newCart);
		addToDb(selectedProduct.id)
	};

	return (
		<section className='shop-container'>
			<div className='products-container'>
                {
                    products.map(product => <Product handleAddToCart={handleAddToCart} key={product.id} product={product}></Product>)
                }
			</div>
			<div className='cart-container'>
				<Cart clearCart={clearCart} cart={cart}>
					<Link to='/orders'>
						<button>Review Items</button>
					</Link>
				</Cart>
			</div>
		</section>
	);
};

export default Shop;
