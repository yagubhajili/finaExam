import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import './footer.scss'

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="container-footer">
                <div className="topFooter">
                    <div className="left-footer">
                        <h3>
                            ABOUT US
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.
                        </p>

                    </div>
                    <div className="mid-left">
                        <h3>
                            QUICK LINKS
                        </h3>
                        <ul className='footerUl'>
                            <li>
                                Services
                            </li>
                            <li>
                                Testimonials
                            </li>
                            <li>
                                Contact Us
                            </li>

                        </ul>
                    </div>
                    <div className="mid">
                        <h3>
                            FOLLOW US
                        </h3>
                        <div>
                            <FaFacebook />
                            <AiFillTwitterCircle />
                            <FaSquareInstagram />
                            <IoLogoLinkedin />
                        </div>
                    </div>
                    <div className="right-footer">
                        <h3>
                            FEATURED PRODUCT
                        </h3>
                        <div className="card">
                            <div className="imageHolder">
                                <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg.webp" alt="" />
                            </div>
                            <h4>
                                Leather Brown Shoe
                            </h4>
                            <p>
                                $60.00
                            </p>
                            <button>
                                Add To Cart
                            </button>
                        </div>
                    </div>

                </div>
                <p className='bottom'>
                    Copyright ©2024 All rights reserved | This template is made with  by Colorlib
                </p>
            </div>
        </footer>
    )
}

export default Footer