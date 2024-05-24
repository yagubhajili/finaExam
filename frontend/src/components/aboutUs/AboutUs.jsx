import React from 'react'
import './about.scss'

const AboutUs = () => {
    return (
        <section id='about'>
            <div className="container-about">
                <div className="imageLeft">
                    <img src="https://preview.colorlib.com/theme/selling/images/about_1.jpg.webp" alt="" />
                </div>
                <div className="text">
                    <p className='merchant'>
                        MERCHANT COMPANY
                    </p>
                    <h1>
                        About Us
                    </h1>
                    <p className='lorem'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!
                    </p>
                    <button className='learn'>
                        LEARN MORE
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AboutUs