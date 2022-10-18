import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const {initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id)
    };
    const clearCart = () => {
		setCart([]);
		deleteShoppingCart();
	};
    return (
		<section className='shop-container'>
			<div className='order-container'>
				{cart.map((product) => (
					<ReviewItem
						product={product}
						handleRemoveItem={handleRemoveItem}
					></ReviewItem>
				))}
				{!cart.length && (
					<div style={{textAlign:'center'}}>
						<h1>Empty Cart</h1>
						<Link to='/shop'>
							<button>Go to shop</button>
						</Link>
					</div>
				)}
			</div>
			<div className='cart-container'>
				<Cart clearCart={clearCart} cart={cart}></Cart>
			</div>
		</section>
	);
};

export default Orders;