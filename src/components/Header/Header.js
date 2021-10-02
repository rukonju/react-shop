import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    
    
    return (
        <div className="nav-bar"> 
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/order">My order</NavLink>
                <NavLink to="/about">About</NavLink>    
            </nav>   
        </div>
    );
};

export default Header;