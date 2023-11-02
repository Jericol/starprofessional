import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NameFiltredThunk, filterProductCategoriesThunk, getProductsThunk } from '../../store/slice/product.slice';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar'
import Category from '../../components/Categorias/Category';
import CardNew from '../Home/card/CardNew'
import { useForm } from 'react-hook-form';
import Group from '../../components/Categorias/Grupos/Group';
// import ProductNews from '../../pages/productNews/ProductNews';
import DistribuidoresF from '../../../public/img/BANNER-DISTRIBUIDORES.webp'
import LinkSeccion from '../../components/Botonup/LinkSeccion';




function Home() {

    const dispatch = useDispatch();
    // const productList = useSelector(state => state.product);
    // const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    const { register, handleSubmit } = useForm();

    useEffect(() => {
        dispatch(getProductsThunk())

        axios.get('http://190.60.237.163/traegrupos')
            .then(res => setCategories(res.data.RESP))

    }, [dispatch])

    console.log(categories);


    const AutoToken = (data) => {
        console.log(data)
    }

    return (
        <div className=' grid grid-cols-1 lg:grid-cols-8 overflow-hidden dark:bg-[#1f1d2b] dark:text-white w-auto'>
            <div className='lg:col-span-full '>
                {/* header */}
                <header className=''>
                    {/* titulo y busqueda */}
                    <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-12 '>
                        <div>
                            {/* categorias */}
                            <div className=''>
                                <Category />
                            </div>
                            {/* menu movil  categorias */}
                            <div className=' md:flex md:items-center md:justify-between '>
                                {/* buscador */}
                                <div className='relative md:hidden hidden lg:hidden'>
                                    <SearchBar />
                                </div>
                            </div>
                            {/* Banner distribuidores*/}
                            <span className='text-white  '>
                                <Link to="/distribuidores" className=''>
                                    <p className='text-2xl'>
                                        <img src={DistribuidoresF} alt="" className='lg:rounded-lg ' />
                                    </p>
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className=' '>
                        <Group />
                    </div>
                </header>
                {/* productos */}
                <div className=' '>
                    <CardNew />
                </div>
                <div className="w-full bg-gray-400 dark:bg-[#393550] h-auto relative bottom-[4rem] mb-[4rem] rounded-md">
                    <div className="flex items-center justify-center gap-5 md:gap-[12rem] dark:text-white py-8">
                        <Link to="/newProduct" className="uppercase text-sm md:text-2xl tracking-[2px] py-2 px-2 bg-white dark:dark:bg-[#262131] rounded-md font-semibold">
                            ir a productos
                        </Link>
                        <Link to="/login" className="uppercase text-sm md:text-2xl tracking-[2px] py-2 px-2 bg-white dark:dark:bg-[#262131] rounded-md font-semibold">
                            ir a acceder
                        </Link>
                    </div>
                </div>
                {/* contra-entrega */}
                <div className='relative bottom-[4rem]'>
                    <img src="https://i.ibb.co/PGQrJmk/BANNER-PAGOS-CONTRAENTREGA.jpg" alt="contra-entrega" />
                </div>
                {/* banner de descuentos */}
                <div className='relative bottom-9'>
                    {/* para pc */}
                    <img
                        src="https://i.ibb.co/R0j791t/BANNER-INFO-DTOS.jpg"
                        alt="banner-descuentos"
                        className='h-[18rem] w-full object-cover lg:flex hidden'
                    />
                    {/* para md / sm */}
                    <img
                        src="https://i.ibb.co/R0j791t/BANNER-INFO-DTOS.jpg"
                        alt="banner-descuentos"
                        className='object-cover flex lg:hidden'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;