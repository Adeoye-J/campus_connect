// import React from 'react'

import Features from "../components/homepage-components/Features"
import Features_ from "../components/homepage-components/Features_"
import Hero from "../components/homepage-components/Hero"

const Home = () => {



    return (
        <div className="space-y-20 pb-12 pt-10">
            <Hero />
            <Features_ />
            <Features />
        </div>
    )
}

export default Home