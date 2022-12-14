import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
	return (
		<nav>
			<Link to='/'>
				<img src={logo} alt='' />
			</Link>
			<div>
				<Link to='/'>Home</Link>
				<Link to='/shop'>Shop</Link>
				<Link to='/orders'>Orders</Link>
				<Link to='/inventory'>Inventory</Link>
				<Link to='/about'>About</Link>
				<Link to='/login'>Login</Link>
				<Link to='/signup'>Sign Up</Link>
			</div>
		</nav>
	);
};

export default Header;
