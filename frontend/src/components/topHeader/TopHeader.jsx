import React from 'react'
import './top.scss'
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const TopHeader = () => {
    return (

        <div id='top'>
            <div className="container-top">
                <div className='icons'>
                    <FaFacebook />
                    <AiFillTwitterCircle />
                    <FaSquareInstagram />
                    <IoLogoLinkedin />
                </div>
                <div className='contact'>
                    <div>
                        <FaPhoneAlt className='icon' />
                        <p>
                            (+1) 234 5678 9101
                        </p>
                    </div>
                    <div>
                        <IoIosMail  className='icon' />
                        <p>
                            shop@yourdomain.com
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TopHeader