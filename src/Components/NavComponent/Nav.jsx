import { Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './Nav.scss';
import Cart from '../CartComponent/Cart.jsx';

export const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        setIsLoggedIn(!!accessToken);
    }, []);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        setIsLoggedIn(false);
        window.location.reload();
    };

    return (
        <>
            <nav id="nav-section">
                <ul id="link-left">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                    <li><NavLink to="/posters" className={({ isActive }) => isActive ? "active" : ""}>Posters</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
                    <li><NavLink to="/crud" className={({ isActive }) => isActive ? "active" : ""}>CRUD</NavLink></li>
                </ul>
                <div id="logo-container">
                    <NavLink to="/"><img src="./src/assets/logo/Logo.svg" alt="" /> </NavLink>
                </div>
                <ul id="link-right">
                    {isLoggedIn ? (
                        <>
                            <li><Link to="/profile">Profile <img src="./src/assets/images/AccountLogo.svg" alt="Account logo" /></Link></li>
                            <li><Link to="#" onClick={handleLogout}>Logout</Link></li>
                            <li><Link to="#" onClick={toggleCart}>Basket <img src="src/assets/images/CartLogo.svg" alt="Cart Logo" /></Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/login">Log In <img src="./src/assets/images/AccountLogo.svg" alt="Account logo" /></Link></li>
                            <li><Link to="/signup">Sign Up <img src="./src/assets/images/AccountLogo.svg" alt="Account logo" /></Link></li>
                        </>
                    )}
                </ul>
            </nav>
            {isLoggedIn && <Cart isOpen={isCartOpen} toggleCart={toggleCart} />}
        </>
    )
};