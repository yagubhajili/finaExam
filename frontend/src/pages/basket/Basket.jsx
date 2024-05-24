import React from 'react'
import './basket.scss'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCount, removeAllFrombasket, removeFrombasket, setBasket, setWishlist } from '../../redux/mainSlice'
import { Helmet } from 'react-helmet'

const Basket = () => {
    const basket = useSelector(state => state.main.basket)
    const wishlist = useSelector(state => state.main.wishlist)

    // console.log(basket)
    const dispatch = useDispatch()

    return (
        <section id='basket'>
            <div className="container-basket">
            <Helmet>
                <title>basket Page</title>
            </Helmet>
                <button onClick={() => {
                    dispatch(removeAllFrombasket())
                }}>
                    Remove All From Basket
                </button>
                {basket && basket.map(product => {
                    return (
                        <div className="card">
                            <div className='imageHolder'>
                                <img src={product.image} alt="" />
                            </div>
                            <div className="interaction">
                                <h3>
                                    {product.name}
                                </h3>
                                <p>
                                    {product.description}
                                </p>
                                <p>
                                    $ {product.price * product.count}
                                </p>
                                <div className='forCount'>
                                    <button onClick={() => {
                                        dispatch(decreaseCount(product))
                                    }}>
                                        -
                                    </button>
                                    <span>
                                        {product.count}
                                    </span>

                                    <button onClick={() => {
                                        dispatch(setBasket(product))
                                    }}>
                                        +
                                    </button>
                                    <button className={wishlist.find(el => el._id == product._id) ? 'red' : ''} onClick={() => {
                                        dispatch(setWishlist(product))
                                    }}>
                                        Add To Wishlist
                                    </button>
                                </div>
                                <button onClick={() => {
                                    dispatch(removeFrombasket(product))
                                }}>
                                    remove
                                </button>
                            </div>

                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default Basket