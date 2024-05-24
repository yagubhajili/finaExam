import React, { useEffect, useState } from 'react'
import './products.scss'
import { getAllprod } from '../../service/provider'
import { IoStar } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setBasket, setWishlist } from '../../redux/mainSlice';
import { Link } from 'react-router-dom';

const Products = () => {


    const wishlist = useSelector(state => state.main.wishlist)

    const [products, setProducts] = useState([])
    useEffect(() => {

        getAllprod().then(res => {
            setProducts(res)
            // console.log(res)
        })

    }, [])

    const dispatch = useDispatch()

    return (
        <section id='products'>
            <div className="container-products">
                <p>
                    POPULAR PRODUCTS
                </p>
                <h1>
                    Our Products
                </h1>
                <p className='desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.
                </p>
                <div className="cardsHolder">
                    {products && products.map(product => {
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
                                        <IoStar className='star' /><span>5</span>
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
                                    <Link to={`/${product._id}`} className='view'>
                                        VIEW
                                    </Link>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default Products