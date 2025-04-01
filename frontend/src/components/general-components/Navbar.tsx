// import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom"
import { BsSun, BsMoon } from "react-icons/bs";
import Button from "../../utils/Button";

const Navbar = () => {

    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className="container flex h-20 items-center justify-between">
            
            <img src="/logos/logo.png" alt="Logo" className="w-32 sm:w-40" />

            <div className="hidden md:flex gap-7 font-semibold">
                <Link to="/" className="hover:text-blue-900 transition-all duration-500">Home</Link>
                <Link to="/about" className="hover:text-blue-900 transition-all duration-500">About</Link>
                <Link to="/products" className="hover:text-blue-900 transition-all duration-500">Products</Link>
                <Link to="/services" className="hover:text-blue-900 transition-all duration-500">Services</Link>
                <Link to="/contact" className="hover:text-blue-900 transition-all duration-500">Contact</Link>
            </div>

            <div className="flex items-center gap-4 font-medium italic">
                <Link to="/login" className="text-sm text-blue-900">Login</Link>
                <div className="text-sm">
                    <Button path="/register" prompt="Register" />
                </div>
                {/* <Link to="/register" className="px-3 py-2 rounded-md border border-black text-sm active:bg-black active:text-white">Register</Link> */}
                {/* Dark Mode Toggle */}
                <button className="hidden md:flex" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
                </button>
            </div>

        </div>
    )
}

export default Navbar