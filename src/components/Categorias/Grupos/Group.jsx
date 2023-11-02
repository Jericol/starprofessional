import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterProductCategoriesThunk } from '../../../store/slice/product.slice';
import { RiFullscreenExitLine, RiApps2Fill, RiCloseCircleFill, RiApps2Line, RiLayoutGridFill } from "react-icons/ri";
import Categories from '../Category';
import { Link, useNavigate } from 'react-router-dom';
import { TECollapse } from "tw-elements-react";
import './group.css';




function Group({ itemPage, setItemPage, nextPage, setNextPage, showMenu, setShowMenu, logo, setLogo }) {

    const dispatch = useDispatch();
    // estado para categorias
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://190.60.237.163/traegrupos")
            .then(res => setCategories(res.data.RESP))

    }, [])



    return (
        <div>
            <div className='flex items-center justify-center pt-6 mb-3'>
                <h2 className='text-2xl uppercase font-bold tracking-[1rem] dark:text-white'>Categorias</h2>
            </div>
            <div className='flex flex-wrap items-center columns-8 justify-center gap-7 mx-auto container'>
                <div className=''>
                    <img
                        src="https://i.ibb.co/BfR8kHF/CATEGORIAS-PRINCIPALES-MAQUILLAJE-Y-PESTA-AS.jpg"
                        alt=""
                        className='w-[9rem] lg:w-[18rem] object-cover opacity-100 lg:opacity-50 hover:opacity-100 rounded-lg hover:!scale-95 cursor-pointer 
                        hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                    />
                </div>
                <div className=''>
                    <img
                        src="https://i.ibb.co/Xj8qb4C/BANNER-CATEGORIAS-PRINCIPALES-FACIAL.jpg"
                        alt=""
                        className='w-[9rem] lg:w-[18rem] object-cover opacity-100 lg:opacity-50 hover:opacity-100 rounded-lg hover:!scale-95 cursor-pointer 
                        hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                    />
                </div>
                <div className=''>
                    <img
                        src="https://i.ibb.co/fYPzg2p/CATEGORIAS-PRINCIPALES-U-AS.jpg"
                        alt=""
                        className='w-[9rem] lg:w-[18rem] object-cover opacity-100 lg:opacity-50 hover:opacity-100 rounded-lg hover:!scale-95 cursor-pointer 
                        hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                    />
                </div>
                <div className=''>
                    <img
                        src="https://i.ibb.co/5G2vWRB/CATEGORIAS-PRINCIPALES-CAPILAR.jpg"
                        alt=""
                        className='w-[9rem] lg:w-[18rem] object-cover opacity-100 lg:opacity-50 hover:opacity-100 rounded-lg hover:!scale-95 cursor-pointer 
                        hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                    />
                </div>
                <div>
                    <img
                        src="https://i.ibb.co/XDC6ghG/CATEGORIAS-PRINCIPALES-BARBERIA.jpg"
                        alt=""
                        className='w-[9rem] lg:w-[18rem] object-cover opacity-100 lg:opacity-50 hover:opacity-100 rounded-lg hover:!scale-95 cursor-pointer 
                        hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                    />
                </div>
                <div>
                    <img
                        src="https://i.ibb.co/9yrRmCV/BANNER-CATEGORIAS-PRINCIPALES-CORPORAL.jpg"
                        alt=""
                        className='w-[9rem] lg:w-[18rem] object-cover opacity-100 lg:opacity-50 hover:opacity-100 rounded-lg hover:!scale-95 cursor-pointer 
                        hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                    />
                </div>
                <div>
                    <img
                        src="https://i.ibb.co/XDC6ghG/CATEGORIAS-PRINCIPALES-BARBERIA.jpg"
                        alt=""
                        className='w-[9rem] lg:w-[18rem] object-cover opacity-100 lg:opacity-50 hover:opacity-100 rounded-lg hover:!scale-95 cursor-pointer 
                        hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                    />
                </div>
                <div>
                    <img
                        src="https://i.ibb.co/9yrRmCV/BANNER-CATEGORIAS-PRINCIPALES-CORPORAL.jpg"
                        alt=""
                        className='w-[9rem] lg:w-[18rem] object-cover opacity-100 lg:opacity-50 hover:opacity-100 rounded-lg hover:!scale-95 cursor-pointer 
                        hover:shadow-lg dark:hover:shadow-white hover:shadow-slate-600 hover:transition hover:duration-[0.3s]'
                    />
                </div>
            </div>


        </div>
    )
}

export default Group;
