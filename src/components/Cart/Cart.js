import React from 'react';

const Cart = ({ cart }) => {
	return (
		<>
			<h1>Orders Summery</h1>
			<p>Selected Items: {cart.length}</p>
		</>
	);
};

export default Cart;
