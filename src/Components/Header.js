import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
	
	return (
		<div id='Header'>
			<Link to="/"></Link>
			<Link to="/"><h2>HOUSEHOLD LEDGER</h2></Link>
			<input type='text'/>
		</div>
	);
};

export default Header;