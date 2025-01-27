// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';  // Ensure you have a corresponding CSS file

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme') || 'light';
        if (currentTheme === 'dark') {
            setDarkMode(true);
            document.body.classList.add('dark-mode');
        }
    }, []);

    const toggleTheme = () => {
        if (darkMode) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
        setDarkMode(!darkMode);
    };

    return (
        <nav>
            <div className="logo">
                <a href="#"><img src="logopic1.png" alt="Logo" /></a>
            </div>
            <div className="nav-links">
                <a href="#">Home<span></span></a>
                <a href="#">About<span></span></a>
                <a href="#">Services<span></span></a>
                <a href="#">Contact<span></span></a>
            </div>
            <form className="search-form" action="#" method="GET">
                <input type="text" placeholder="Search..." />
                <button type="submit">search</button>
            </form>
            <div className="theme-switch">
                <input
                    type="checkbox"
                    id="theme-toggle"
                    checked={darkMode}
                    onChange={toggleTheme}
                />
                <label htmlFor="theme-toggle"></label>
            </div>
        </nav>
    );
};

export default Navbar;
