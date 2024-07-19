'use client';
import React, { useState } from 'react';
import { FaBitcoin } from 'react-icons/fa';
import { FiSearch, FiSun, FiMoon } from 'react-icons/fi';

const Header = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`flex justify-between items-center p-4 shadow-md ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'} transition-colors duration-300`}>
            <div className="text-3xl text-gray-800 dark:text-gray-200">
                <FaBitcoin size="2rem" />
            </div>
            <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-lg p-2 shadow-sm">
                <FiSearch className="text-gray-600 dark:text-gray-400" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="border-none bg-transparent outline-none px-3 py-1 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                />
            </div>
            <button
                onClick={toggleTheme}
                className="text-2xl text-gray-800 dark:text-gray-200 transition-colors duration-300 hover:text-gray-600 dark:hover:text-gray-400"
            >
                {theme === 'light' ? <FiMoon /> : <FiSun />}
            </button>
        </div>
    );
};

export default Header;
