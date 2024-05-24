import React from 'react'
import './hero.scss'

const Hero = () => {
    return (
        <section id='hero'>
            <div className="container-hero">
                <h1>
                    Shop With Us
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.
                </p>
                <div className='buttons'>
                    <button className='shop'>
                        SHOP NOW
                    </button>
                    <button className='club'>
                        CLUB MEMBERSHIP
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Hero