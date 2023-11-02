import React, { useEffect, useState } from 'react';
import BankCard from '../../../assets/TARJETA.svg';
import ShopItems from "../../../assets/CAJABLANCO.svg";
import Envio from "../../../assets/ENTREGAS ICONOBLANCO.svg";
import { Link } from 'react-router-dom';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RiFacebookCircleFill, RiInstagramLine, RiWhatsappLine, RiWhatsappFill, RiPhoneFill, RiMailCheckLine } from "react-icons/ri";
import BannerFooter from '../../../public/img/BANNER-HOME.jpg'


function Footer() {


    const [logo, setLogo] = useState(false)
    // array de credenciales de footer


    // array de mas informacion y soporte

    const [isOpen, setIsOpen] = useState(true);
    const [showOpen, setShowOpen] = useState(false);



    return (
        <div>
            {/* para pc */}
            <div className='h-[35rem] py-4 w-full bg-slate-400 dark:bg-[#1f1d2b] dark:text-white lg:flex lg:flex-col hidden'>
                <div>
                    <img src={BannerFooter} alt="" className='h-[16rem] w-full object-cover' />
                </div>
                {/* para pc */}
                <div className={`bg-slate-300 dark:bg-[#1f1d2b] flex items-center justify-around gap-4 h-[16rem] p-5 m-5 rounded-lg`}>
                    {/* productos */}
                    <ul className='flex flex-col gap-4 tracking-wide text-lg cursor-pointer'>
                        <li className='tracking-wider uppercase font-semibold'>Productos y servicios</li>
                        <li className='hover:text-pink-600 hover:!scale-125 hover:border-b hover:border-pink-600'>Ventas corporativas</li>
                        <li className='hover:text-pink-600 hover:!scale-125 hover:border-b hover:border-pink-600'>Ferias y eventos</li>
                        <li className='hover:text-pink-600 hover:!scale-125 hover:border-b hover:border-pink-600'>Clientes</li>
                    </ul>
                    <span className='lg:border-r-2 pb-2 lg:border-gray-700 h-[8rem]'></span>
                    {/* acerca de nosotros  */}
                    <ul className='flex flex-col gap-4 tracking-wide text-lg cursor-pointer'>
                        <li className='tracking-wider uppercase font-semibold'>Acerca de nosotros</li>
                        <li className='hover:text-pink-600 hover:border-b hover:border-pink-600 hover:!scale-125'>Quienes somos</li>
                        <li className='hover:text-pink-600 hover:border-b hover:border-pink-600 hover:!scale-125'>Politica de privacidad</li>
                        <li className='hover:text-pink-600 hover:border-b hover:border-pink-600 hover:!scale-125'>Tratamientos de datos</li>
                    </ul>
                    <span className='lg:border-r-2 pb-2 lg:border-gray-700 h-[8rem]'></span>
                    {/* contactenos */}
                    <ul className='flex flex-col gap-4 tracking-wide text-lg cursor-pointer'>
                        <li className='tracking-wider uppercase font-semibold'>Contactenos</li>
                        <li className='hover:text-pink-600 hover:!scale-100 hover:border-b hover:border-pink-600'>
                            <Link to='tel:6014927230' className='flex items-center gap-2 uppercase hover:!scale-125'>
                                <RiPhoneFill className='text-blue-600 text-xl' />
                                pbx: 6014927230
                            </Link>
                        </li>
                        <li className='hover:text-pink-600 hover:!scale-100 hover:border-b hover:border-pink-600'>
                            <Link to='https://wa.link/ha60z4' target='_blank' className='flex items-center gap-2 hover:!scale-125'>
                                <RiWhatsappFill className='text-emerald-600 text-xl' />
                                <h2>+57 312 3924999</h2>
                            </Link>
                        </li>
                        <li className='hover:text-pink-600 hover:!scale-100 hover:border-b hover:border-pink-600'>
                            <Link to='mailto:servicioalcliente@importadorastar.com' className='flex items-center gap-2 hover:!scale-125'>
                                <RiMailCheckLine className='text-slate-600 text-xl' />
                                servicioalcliente@importadorastar.com
                            </Link>
                        </li>
                    </ul>
                    <span className='lg:border-r-2 pb-2 lg:border-gray-700 h-[8rem]'></span>
                    {/* REDES SOCIALES */}
                    <ul className='flex flex-col items-center justify-center gap-6'>
                        <li className='flex flex-col dark:text-white  text-2xl font-semibold dark:border-b dark:p-2'>
                            Nuestras redes sociales
                        </li>
                        <div className='flex items-center justify-center gap-12 '>
                            {/* facebook */}
                            <li className='flex items-center justify-center w-[60px] h-[60px] text-white text-4xl bg-blue-500 rounded-lg -skew-y-6 hover:skew-y-0 shadow-lg shadow-blue-600
                            transition duration-[0.2s] border border-blue-900 dark:shadow-blue-400'
                            >
                                <a href="" className=''>
                                    <RiFacebookCircleFill className='' />
                                </a>
                            </li>
                            {/* instagram */}
                            <li className='flex items-center justify-center w-[60px] h-[60px] text-white text-4xl bg-pink-500 rounded-lg -skew-y-6 hover:skew-y-0 shadow-lg shadow-pink-600
                            transition duration-[0.2s] border border-pink-700 dark:shadow-purple-400'
                            >
                                <a href="" className=''>
                                    <RiInstagramLine className='' />
                                </a>
                            </li>
                            {/* whatsapp */}
                            <li className='flex items-center justify-center w-[60px] h-[60px] text-white text-4xl bg-green-500 rounded-lg -skew-y-6 hover:skew-y-0 shadow-lg shadow-green-600
                            transition duration-[0.2s] border border-green-700 dark:shadow-emerald-400'
                            >
                                <a href="" className=''>
                                    <RiWhatsappLine className='' />
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            {/* para tablet */}
            <div className='h-auto py-4 w-full bg-slate-300 dark:bg-[#1f1d2b] dark:text-gray-200 md:flex md:flex-col hidden lg:hidden' >
                <header className='mb-6'>
                    <img src={BannerFooter} alt="" className='object-cover' />
                </header>
                <main>
                    {/* lista de soporte */}
                    <div className='bg-slate-300 dark:bg-[#1f1d2b] flex items-center justify-around gap-4 h-auto m-2'>
                        {/* productos y servicios */}
                        <ul className='flex flex-col gap-2 items-center tracking-wide cursor-pointer text-lg'>
                            <li>Productos y servicios</li>
                            <li>Ventas corporativas</li>
                            <li>Ferias y eventos</li>
                            <li>Clientes</li>
                        </ul>
                        {/* acerca de nosotros */}
                        <ul className='flex flex-col items-center gap-2 tracking-wide cursor-pointer text-lg'>
                            <li>Acerca de nosotros</li>
                            <li>Quienes somos</li>
                            <li>Politica de privacidad</li>
                            <li>Tratamiento de datos</li>
                        </ul>
                        {/* contactenos */}
                        <ul className='bg-slate-300 dark:bg-[#1f1d2b] flex flex-col items-center justify-around gap-2 h-auto text-lg'>
                            <li>Contactenos</li>
                            <li>
                                <Link to='tel:6014927230' className='flex items-center gap-2 uppercase '>
                                    <RiPhoneFill className='text-blue-600 text-lg' />
                                    pbx: 6014927230
                                </Link>
                            </li>
                            <li>
                                <Link to='https://wa.link/ha60z4' target='_blank' className='flex items-center gap-2 hover:!scale-125'>
                                    <RiWhatsappFill className='text-emerald-600 text-lg dark:text-emerald-400' />
                                    <h2>+57 312 3924999</h2>
                                </Link>
                            </li>
                            <li>
                                <Link to='mailto:servicioalcliente@importadorastar.com' className='flex items-center gap-2'>
                                    <RiMailCheckLine className='text-slate-600 text-lg dark:text-white' />
                                    servicioalcliente
                                </Link>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
            {/* para celular */}
            <div className='h-auto py-4 w-full bg-slate-300 dark:bg-[#1f1d2b] dark:text-white flex flex-col md:hidden'>
                <header>
                    <img 
                      src={BannerFooter} 
                      alt="" 
                      className='object-cover'
                    />
                </header>
                <main>
                    <div className='bg-slate-300 dark:bg-[#1f1d2b] flex items-center justify-around gap-4 h-auto'>
                        {/* productos y servicios */}
                        <ul className='flex flex-col items-center gap-2 tracking-wide cursor-pointer text-sm'>
                            <li>Productos y servicios</li>
                            <li>Ventas corporativas</li>
                            <li>Ferias y eventas</li>
                            <li>Clientes</li>
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Footer;
// RiTiktokLine