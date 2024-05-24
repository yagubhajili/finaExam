import React from 'react'
import Header from '../../layout/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../layout/footer/Footer'

const UserRoot = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default UserRoot