import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../../../components/Pagination/Pagination';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './cardnew.css'



function CardNew({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) {

    // estado de productos nuevos
    const navigate = useNavigate();
    const [productsPage, setProductsPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);
    // los multiplos que se van a recorrer en en la paginacion
    const lastIndex = currentPage * productsPage
    const firsIndex = lastIndex - productsPage
    const productList = useSelector(state => state.product);
    // total de productos de paginacion
    const totalProduct = productList.length;

    const addProducts = (product) => {
        setAllProducts([product])

    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        rows: 3,
        slidesPerRow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };


    return (
        <div className='' >

            <Slider {...settings} classNameName='group-box'>
                {productList.map((product, index) => (

                    <a key={index} href="#" className="flex flex-col items-center p-1 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" 
                             src={product.Foto}
                             alt=""
                        />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                                    {product.Descripcion}
                                </h5>
                                <p className="mb-3 font-normal text-green-500 dark:text-gray-400">
                                    $ {product.Precio}
                                </p>
                            </div>
                    </a>

                ))}
            </Slider >
        </div >
    )
}

export default CardNew;
