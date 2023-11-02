import React, { useState } from 'react'
import ButtonArrowArticule from '../ButtonArrow/ButtonArrowArticule';
import ListCategory from '../Categorias/SlideCategories';
import { Link } from 'react-router-dom';
import ButtonArrow from '../ButtonArrow/ButtonArrow';
import Pdf from '../../files/CATALOGO CLIENTES 23 SEPTIEMBRE.pdf';

function ListItemsSm({logo, setLogo}) {


        const [sesion, setSession ] = useState(false);
        const [itemsList, setItemsList ] = useState(false);

    return (
        <div>
             <article className='md:hidden flex flex-col items-center justify-between md:gap-2 lg:gap-4 py-3' 
                onClick={() => setLogo(logo)}
            >
                <span className=''>
                    <Link to="/"
                        className='transition hover:!scale-125 hover:border-b-2 border-b-slate-700 dark:hover:border-slate-300 uppercase font-bold tracking-[5px] text-xl'
                    >
                        Inicio
                    </Link>
                </span>
                {/* productos */}
                <button className=''>
                    <Link to='/newProduct'
                        className='transition hover!scale-125 hover:border-b-2 border-b-slate-700 dark:hover:border-slate-300 uppercase font-bold tracking-[5px] text-xl
                        relative top-2'
                    >
                        Productos
                    </Link>
                    {/* dropdown products */}
                    <span 
                        className='relative left-[12rem] bottom-[1rem]'
                    >
                        <ButtonArrowArticule
                            itemsList={itemsList}
                            setitemsList={setItemsList}
                        />
                    </span>
                    {/* barra de opciones */}
                    <div className={`${itemsList ? '' : 'hidden'} absolute z-50 top-[5.4rem] md:left-[7rem] lg:left-[21rem] bg-slate-300 dark:bg-[#1f1d2b] 
                        w-[21rem] h-[22rem] md:w-[18rem]  border-b border-slate-700  transition-all transform duration-[.8s] rounded-lg `}
                    >
                        <div className='flex items-center justify-between'>
                            <ul className='flex flex-col justify-between gap-2 mx-auto '>
                                {
                                    ListCategory.map((list, i) => (
                                        <Link key={i} className='flex  transition hover:!scale-105 hover:border-b-2 pl-2 hover:border-b-black 
                                                     hover:shadow-md hover:shadow-blue-300 pt-2'
                                            onClick={() => setItemsList(!itemsList)}>
                                            <h3 className='text-xl  font-semibold pr-4'>{list.title}</h3>
                                        </Link>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </button>
                {/* login*/}
                <div className={``}>
                    <h2 className='text-xl font-bold cursor-pointer tracking-[5px] hover:border-b-2 border-b-slate-700 dark:hover:border-b-slate-700 uppercase relative top-2'>
                        Ingresar
                    </h2>
                    <span onClick={() => setSession(!sesion)}
                        className='relative left-[10rem] bottom-[1rem]'
                    >
                        <ButtonArrow
                            sesion={sesion}
                            setSession={setSession}
                        />
                    </span>
                    <div className={`${sesion ? '' : 'hidden'} absolute z-50 top-[5.4rem] md:left-[21rem] lg:left-[52rem] bg-slate-300 dark:bg-[#1f1d2b] 
                               w-[21rem] h-[8rem] md:w-[18rem]  border-b border-slate-700  transition-all transform duration-[.8s] rounded-lg `}
                    >
                        <div className='flex items-center justify-between'>
                            <ul className='flex flex-col items-center justify-center gap-8  mx-auto'>
                                {/* capilar */}
                                <Link to='/login' className='flex  transition hover:!scale-105 hover:border-b-2  hover:border-b-black 
                                              hover:shadow-md hover:shadow-blue-300'
                                    onClick={() => setSession(!sesion)}
                                >
                                    <h3 className='text-xl  font-semibold pr-4'>Iniciar session</h3>
                                </Link>
                                <Link to='/register' className='flex items-center transition hover:!scale-105 hover:border-b-2  hover:border-b-black 
                                    hover:shadow-md hover:shadow-blue-300 '
                                    onClick={() => setSession(!sesion)}
                                >
                                    <h3 className='text-xl font-semibold pr-4'>Registrarse</h3>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* catalogo */}
                <span className=''>
                    <a href={Pdf} download="CATALOGO" className='text-xl font-bold tracking-[5px] hover:border-b-2 border-b-slate-700 dark:hover:border-b-slate-300 uppercase '>
                        catalogo
                    </a>
                </span>
            </article>
        </div>
    )
}

export default ListItemsSm
