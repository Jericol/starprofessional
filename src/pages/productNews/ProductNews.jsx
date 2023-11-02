import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiShoppingCart2Line, RiWhatsappLine, } from "react-icons/ri";
import { filterProductCategoriesThunk, getProductsThunk } from '../../store/slice/product.slice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Category from '../../components/Categorias/Category'
import Cart from '../../components/cart/Cart';
import SearchBar from '../../components/SearchBar/SearchBar';
import Group from '../../components/Categorias/Grupos/Group';
import Pagination from '../../components/Pagination/Pagination';
import { data } from 'autoprefixer';
import { addCartThunk } from '../../store/slice/cart.slice';
import CardNew from '../Home/card/CardNew';

function ProductNews({ allProducts, setAllProducts, countProducts, setCountProducts, total, setTotal }) {

    const dispatch = useDispatch();
    // traer articulos de redux
    const productList = useSelector(state => state.product);
    // total de productos de paginacion
    const totalProduct = productList.length;
    // paginacion paginas y numero de productos
    const [productsPage, setProductsPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);
    // los multiplos que se van a recorrer en en la paginacion
    const lastIndex = currentPage * productsPage
    const firsIndex = lastIndex - productsPage
    // navigar haci otras rutas
    const navigate = useNavigate();
    // estado de categorias movil
    const [itemPage, setItemPage] = useState(4);
    const [nextPage, setNextPage] = useState(1)
    const [showMenu, setShowMenu] = useState(false)


    const addProducts = (product) => {
        setAllProducts([...allProducts, product])
    }



    const addProductCart = (data) => {
        console.log(data)
        axios.post("http://190.60.237.163/encabezadoped", data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('id', res.data.ID)

            })
            .catch(error => {
                if (error.response) {
                    console.log('respuesta de la peticion', error.response.data)
                } else if (error.request) {
                    console.log('respuesta de requisito', error.request)
                } else {
                    console.log('error hacer la solicitud', error.message)
                }
            })

        dispatch(addCartThunk(data))
    }

    console.log(data)

    useEffect(() => {
        dispatch(getProductsThunk())

    }, [dispatch])


    return (
        <div className='lg:pl-5 dark:bg-[#1f1d2b] overflow-hidden'>
            <div className='lg:col-span-full '>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:mb-6 mb-0'>
                    <div>
                        {/* titulo y buscador */}
                        <div className='flex items-center justify-between'>
                            {/* categorias */}
                            <div className=''>
                                <Category />
                            </div>
                        </div>
                        {/* categorias movil */}
                        <div className='mb-8 md:flex md:items-center md:flex-col md:justify-between md:relative '>
                            <Group
                                showMenu={showMenu}
                                setShowMenu={setShowMenu}
                                itemPage={itemPage}
                                setItemPage={setItemPage}
                                nextPage={nextPage}
                                setNextPage={setNextPage}
                            />
                            {/* buscador */}
                            <div className='relative left-4 hidden md:relative md:top-1 '>
                                <SearchBar />
                            </div>
                        </div>
                        {/* banner PRODUCTOS*/}
                        <span>
                            <img src="https://i.ibb.co/Y0YrmCD/BANNER-PRODUCTOS.jpg" alt="banner-productos" className='rounded-lg' />
                        </span>
                    </div>
                </div>
                {/* Articulos */}
                {/* card para pc */}
                <div>
                    <CardNew />
                </div>
                <div className='w-full bg-slate-400 dark:bg-[#312e44] h-auto relative bottom-10 rounded-md '>
                    <div className='flex items-center justify-center gap-12 dark:text-white py-8'>
                        <Link to="/newProduct" className="uppercase text-md md:text-2xl tracking-[2px] py-1 px-1 md:py-2 md:px-2 bg-white dark:dark:bg-[#262131] rounded-md font-semibold">
                            ir a productos
                        </Link>
                        <Link to="/login" className="uppercase md:text-2xl tracking-[2px] md:py-2 md:px-2 py-1 px-2 bg-white dark:dark:bg-[#262131] rounded-md font-semibold">
                            ir a acceder
                        </Link>
                    </div>
                </div>
                {/* banner de conraentrega */}
                <div className='relative right-[9px]'>
                    {/* para pc */}
                    <img
                        src="https://i.ibb.co/PGQrJmk/BANNER-PAGOS-CONTRAENTREGA.jpg"
                        alt=""
                        className='object-cover w-full '
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductNews;
