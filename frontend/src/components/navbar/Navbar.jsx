import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';


const Navbar = () => {
    const basket = useSelector(state => state.main.basket)
    const wishlist = useSelector(state => state.main.wishlist)
    let basketCount = basket.reduce((acc, elem) => acc += elem.count, 0)

    return (
        <nav>
            <div className="container-nav">
                <div className='logo'>
                    <h1>
                        Selling
                    </h1>
                </div>
                <div className='navigations'>
                    <ul>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link>
                                Special
                            </Link>
                        </li>
                        <li>
                            <Link className={wishlist.length > 0 ? 'red' : ''} to='/wishlist'>
                                <FaHeart />
                                <sup>
                                    {wishlist.length}
                                </sup>
                            </Link>
                        </li>
                        <li>
                            <Link to='/basket'>
                                <IoCartOutline />
                                <sup>
                                    {basketCount}
                                </sup>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar