import React from 'react';
import './Cart.css';

const Cart = ({ cart,clearCart,children }) => {
	let quantity = 0;
	let price = 0;
	let shipping = 0;

	for (let product of cart) {
		quantity = quantity + product.quantity;
		price = price + product.price * product.quantity;
		shipping = shipping + product.shipping * product.quantity;
	}

	// const price = cart.reduce(
	// 	(previousPrice, product) => {
	// 		quantity = quantity + product.quantity;
	// 		return previousPrice + product.price * product.quantity;
	// 	},
	// 	0
	// );
	// const shipping = cart.reduce(
	// 	(previousShipping, currentShipping) =>
	// 		previousShipping + currentShipping.shipping * currentShipping.quantity || 1,
	// 	0
	// );
	const tax = price * 0.1;

	const grandTotal = price + shipping + tax;

	return (
		<div className='cart'>
			<h1>Orders Summery</h1>
			<p>Selected Items: {quantity}</p>
			<p>Total Price: ${price.toFixed(2)}</p>
			<p>Total Shipping: ${shipping.toFixed(2)}</p>
			<p>Tax: ${tax.toFixed(2)}</p>
			<h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
			<button onClick={clearCart}>Clear Cart</button>
			{children}
		</div>
	);
};

export default Cart;
