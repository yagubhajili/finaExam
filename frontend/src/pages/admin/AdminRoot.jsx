import React from 'react'
import Header from '../../layout/header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../layout/footer/Footer'

const AdminRoot = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default AdminRoot