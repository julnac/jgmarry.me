import React from "react";
import { NavLink } from 'react-router-dom';
import "../styles/Footer.css"

function Footer() {
	
	return (
		<div className="footer">
			<ul className="myUL">
				<li><NavLink className="/contact" to="/">kontakt</NavLink ></li>
				<li><NavLink  to="/contact"><svg width="37" height="16" viewBox="0 0 37 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.7071 8.70711C37.0976 8.31659 37.0976 7.68342 36.7071 7.2929L30.3431 0.928935C29.9526 0.538411 29.3195 0.53841 28.9289 0.928935C28.5384 1.31946 28.5384 1.95262 28.9289 2.34315L34.5858 8L28.9289 13.6569C28.5384 14.0474 28.5384 14.6805 28.9289 15.0711C29.3195 15.4616 29.9526 15.4616 30.3431 15.0711L36.7071 8.70711ZM-8.74228e-08 9L36 9L36 7L8.74228e-08 7L-8.74228e-08 9Z" fill="black"/>
                    </svg></NavLink >
                </li>
			</ul>
		</div>
        
	);
}

export default Navbar;