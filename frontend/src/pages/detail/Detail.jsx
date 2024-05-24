import React, { useEffect, useState } from 'react'
import './deatil.scss'
import { useParams } from 'react-router-dom'
import { getById } from '../../service/provider'
import { Helmet } from 'react-helmet'

const Detail = () => {
    const { id } = useParams()
    // console.log(id)

    const [product, setProduct] = useState([])

    useEffect(() => {
        getById(id).then(res => {
            setProduct(res)
        })
    }, [id])

    return (
        <section id='detail'>
            <Helmet>
                <title>Detail Page</title>
            </Helmet>
            <div className="container-detail">
                <div className="card">
                    <div className="imageholder">
                        <img src={product.image} alt="" />
                        <h1>
                            {product.name}

                        </h1>
                        <p>
                            {product.description}
                        </p>
                        <span>
                            $ {product.price}
                        </span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Detail