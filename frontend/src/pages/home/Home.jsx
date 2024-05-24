import React from 'react'
import Hero from '../../components/hero/Hero'
import Products from '../../components/products/Products'
import { Helmet } from 'react-helmet'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Hero />
            <Products />
        </>
    )
}

export default Home