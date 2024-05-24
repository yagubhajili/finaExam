import React from 'react'
import './wishlist.scss'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { FaHeart } from "react-icons/fa";
import { setBasket, setWishlist } from '../../redux/mainSlice'

const Wishlist = () => {

    const wishlist = useSelector(state => state.main.wishlist)
    const dispatch = useDispatch()

    return (

        <section id='wishlist'>
            <Helmet>
                <title>Wishlist Page</title>
            </Helmet>
            <div className="container-wishlist">
                <div className="cardsHolder">
                    {wishlist && wishlist.map(product => {
                        return (
                            <div className="card" key={product._id}>
                                <div className="cardImage">
                                    <img src={product.image} alt="" />
                                </div>
                                <h3>
                                    {product.name}
                                </h3>
                                <div className="starHeart">
                                    <div>

                                    </div>
                                    <div>
                                        <FaHeart onClick={() => {
                                            dispatch(setWishlist(product))
                                        }} className={wishlist.find(el => el._id == product._id) ? "red" : 'heart'} /><span>29</span>
                                    </div>
                                </div>
                                <p>
                                    {product.description}
                                </p>
                                <div className="buttons">
                                    <button onClick={() => {
                                        dispatch(setBasket(product))
                                    }} className='cart'>
                                        CART
                                    </button>

                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default Wishlist