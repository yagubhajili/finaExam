import React from 'react'
import './header.scss'
import Navbar from '../../components/navbar/Navbar'
import TopHeader from '../../components/topHeader/TopHeader'

const Header = () => {
    return (
        <>
            <TopHeader/>
            <Navbar />
        </>
    )
}

export default Header