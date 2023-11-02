import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../../../components/Pagination/Pagination';
import { useSelector } from 'react-redux';



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
    // peticionde prueba de get 
    // const fecthApi = async () => {
    //     const res = await fetch("http://190.60.237.163/articulos/?buscar=001&size=20")
    //     const data = await res.json();
    //     if (data === 200) {
    //         console.log("peticion realizada con exito")
    //     } else {
    //        console.log("peticion rechazada por querys and") 
    //     }
    // }


    return (
        <div className=''>
            {/* card para pc */}
            <div className='lg:pl-5 lg:grid grid-cols-1 lg:grid-cols-4'>
                <div className='lg:col-span-full'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3 m-5 p-5'>
                        {
                            productList.map((product, i) => (

                                <div key={i} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img
                                        className="object-cover w-full rounded-t-lg h-[19rem] md:h-auto md:w-28 md:rounded-none md:rounded-l-lg"
                                        src={product.Foto}
                                        alt=""
                                        onClick={() => navigate(`/productsDetail/${product?.Codigo}`)}
                                    />
                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h5 className="mb-2 text-xl lowercase tracking-tight text-gray-900 dark:text-white">
                                            {product.Descripcion}
                                        </h5>
                                        <div className='flex items-center justify-between'>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                ${product.Precio}
                                            </p>
                                            <span className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                                                Ref: {product.Codigo}
                                            </span>
                                        </div>
                                        <div className='flex flex-col '>
                                            <div className='flex items-center justify-around gap-4 text-black dark:text-white border border-slate-400 px-2 py-1 rounded-lg'>
                                                <p className='text-sm'>2und</p>
                                                <p className='text-sm'>6und</p>
                                                <p className='text-sm'>12und</p>
                                            </div>
                                            <div className='flex items-center justify-around gap-4 mb-4'>
                                                <span className='text-sm'>{product.Precio3}</span>
                                                <span className='text-sm'>{product.Precio4}</span>
                                                <span className='text-sm'>{product.Precio5}</span>
                                            </div>
                                        </div>
                                        <button onClick={() => addProducts(product)}
                                            className=" bg-blue-200 text-blue-800 focus:outline-none font-medium 
                                            rounded-lg text-sm px-2 py-2.5 text-center  w-full mb-4"
                                        >
                                            Añadir al carrito
                                        </button>
                                    </div>
                                </div>
                            )).slice(firsIndex, lastIndex)
                        }
                        <Pagination
                            productsPage={productsPage}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            totalProduct={totalProduct}
                        />
                    </div>
                </div>
            </div>    
        </div >
    )
}

export default CardNew;
