import React from 'react'
import Hero from '../../components/hero/Hero'
import Products from '../../components/products/Products'
import { Helmet } from 'react-helmet'
import AboutUs from '../../components/aboutUs/AboutUs'
import LeaderShip from '../../components/leaderShip/LeaderShip'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Hero />
            <Products />
            <AboutUs />
            <LeaderShip />
        </>
    )
}

export default Home