// import React from 'react'
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/general-components/Navbar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Footer from "./components/general-components/Footer"

const App = () => {

    return (
        <div className="px-2 sm:px-10 md:px-20 mx-auto">
            
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App