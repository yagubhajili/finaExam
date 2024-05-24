import React from 'react'
import './leader.scss'
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";


const LeaderShip = () => {
    return (
        <section id='leader'>
            <div className="container-leader">
                <p className='team'>
                    TEAM
                </p>
                <h1>
                    Leadership
                </h1>
                <div className="leaders">
                    <div className="leader">
                        <div className="imageHolder">
                            <img src="https://preview.colorlib.com/theme/selling/images/person_2.jpg.webp" alt="" />
                        </div>
                        <h3>
                            John Rooster
                        </h3>
                        <p className='position'>
                            CO-FOUNDER, PRESIDENT
                        </p>
                        <p>
                            Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.
                        </p>
                        <div className='icons'>
                            <FaFacebook />
                            <AiFillTwitterCircle />
                            <FaSquareInstagram />
                            <IoLogoLinkedin />
                        </div>
                    </div>
                    <div className="leader">
                        <div className="imageHolder">
                            <img src="https://preview.colorlib.com/theme/selling/images/person_3.jpg.webp" alt="" />
                        </div>
                        <h3>
                            John Rooster
                        </h3>
                        <p className='position'>
                            CO-FOUNDER, PRESIDENT
                        </p>
                        <p>
                            Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.
                        </p>
                        <div className='icons'>
                            <FaFacebook />
                            <AiFillTwitterCircle />
                            <FaSquareInstagram />
                            <IoLogoLinkedin />
                        </div>
                    </div>
                    <div className="leader">
                        <div className="imageHolder">
                            <img src="https://preview.colorlib.com/theme/selling/images/person_4.jpg.webp" alt="" />
                        </div>
                        <h3>
                            John Rooster
                        </h3>
                        <p className='position'>
                            CO-FOUNDER, PRESIDENT
                        </p>
                        <p>
                            Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.
                        </p>
                        <div className='icons'>
                            <FaFacebook />
                            <AiFillTwitterCircle />
                            <FaSquareInstagram />
                            <IoLogoLinkedin />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LeaderShip