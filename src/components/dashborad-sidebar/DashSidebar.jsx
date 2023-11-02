import React, { useState } from 'react';
import { RiTeamLine, RiSurveyLine, RiWallet3Line, RiBankCardLine, RiArrowLeftRightLine, RiFileList3Line, 
    RiFileCopy2Line, RiFileUploadLine, RiLogoutBoxLine, RiLayout4Fill, RiUser3Line, RiDashboardLine } from "react-icons/ri";

function DashSidebar() {

    const [ isOpen, setIsOpen ] = useState(false)


    return (
        <div>
            {/* para pc / tablet */}
            <div className='bg-lightDash-300 md:flex md:flex-col hidden dark:bg-[#1d1f2b] lg:w-[20rem] md:w-[15rem] w-[11rem] h-full overflow-y-scroll'>
                {/* FOTO DE PERFEIL NOMBRE Y ZONA */}
                <div className='flex flex-col items-center justify-center p-8 gap-2 h-[30vh]'>
                    <img 
                        src="https://i.ibb.co/8gjHVw0/PRECIADO-GIRALDO-LIGIA-PATRICIA.png"
                        alt=""
                        className='rounded-full border-2 border-slate-400 w-20 h-20 object-cover' 
                    />
                    <h2 className='lg:text-2xl text-xl dark:text-white font-semibold'>Patricia Giraldo</h2>
                    <p className='bg-lightDash-600 dark:bg-primary-100 py-1 px-3 rounded-full text-white'>Bogotá</p>
                </div>
                {/* LISTA DE ITEMS  */}
                <nav className='bg-lightDash-400 dark:bg-[#292e49] p-8 rounded-tr-[150px] h-[70vh] '>
                    <div className='relative top-[2rem]'>
                        {/* Clientes */}
                        <section className='dark:text-white flex items-center gap-2 cursor-pointer mb-8  hover:rounded-md'>
                            <RiTeamLine className='lg:text-3xl md:text-xl'/> 
                            <p className='font-semibold lg:text-2xl md:text-xl'>Clientes</p>
                        </section>
                        {/* cartera */}
                        <section className='dark:text-white flex items-center gap-2 cursor-pointer mb-8  hover:rounded-md'>
                            <RiWallet3Line className='lg:text-3xl md:text-xl'/>
                            <p className='font-semibold lg:text-2xl md:text-xl'>Cartera</p>
                        </section>
                        {/* movimiento */}
                        <section className='dark:text-white flex items-center gap-2 cursor-pointer mb-8  hover:rounded-md'>
                            <RiArrowLeftRightLine className='lg:text-3xl md:text-xl'/>
                            <p className='font-semibold lg:text-2xl md:text-xl'>Movimiento</p>
                        </section>
                        {/* pedidos */}
                        <section className='dark:text-white flex items-center gap-2 cursor-pointer mb-8  hover:rounded-md'>
                            <RiFileList3Line className='lg:text-3xl md:text-xl'/>
                            <p className='font-semibold lg:text-2xl md:text-xl'>Pedidos</p>
                        </section>
                        {/* facturas */}
                        <section className='dark:text-white flex items-center gap-2 cursor-pointer mb-8  hover:rounded-md'>
                            <RiFileCopy2Line className='lg:text-3xl md:text-xl'/>
                            <p className='font-semibold lg:text-2xl md:text-xl'>Facturas</p>
                        </section>
                        {/* mabifiestos */}
                        <section className='dark:text-white flex items-center gap-2 cursor-pointer mb-8  hover:rounded-md'>
                            <RiFileUploadLine className='lg:text-2xl md:text-xl'/>
                            <p className='font-semibold lg:text-2xl md:text-xl'>Manifiestos</p>
                        </section>
                        {/* devoluciones */}
                        <section className='dark:text-white flex items-center gap-2 cursor-pointer mb-8 '>
                            <RiLogoutBoxLine className='lg:text-2xl md:text-xl'/>
                            <p className='font-semibold lg:text-2xl md:text-xl'>Devoluciones</p>
                        </section>
                        {/* remisiones */}
                        <section className='dark:text-white flex items-center gap-2 cursor-pointer mb-8 '>
                            <RiLogoutBoxLine className='lg:text-2xl md:text-xl'/>
                            <p className='font-semibold lg:text-2xl md:text-xl'>Remisiones</p>
                        </section>
                        {/* translados */}
                        <section className='dark:text-white flex items-center gap-2 cursor-pointer mb-8 '>
                            <RiLogoutBoxLine className='lg:text-2xl md:text-xl'/>
                            <p className='font-semibold lg:text-2xl md:text-xl'>Translados</p>
                        </section>
                    </div>
                </nav>
            </div>
            {/* para celular */}
            <div className='flex md:hidden dark:bg-baseDark-800 h-auto w-full'>
                <div className='flex items-center justify-between gap-3 mx-auto p-2'>
                    <section className=''>
                        <input 
                           type="text" 
                           className='px-3 py-1 rounded-md z-50'
                           placeholder='type here'
                        />
                    </section>
                    <div className='flex items-center justify-between gap-12 ml-6'>
                        <section onClick={() => setIsOpen(!isOpen)}>
                            {
                                isOpen ? 
                                <RiDashboardLine className='text-2xl'/>
                                :
                                <RiLayout4Fill className='text-2xl'/>
                                

                            }
                        </section>
                        {/* sidebar del panel */}
                        <section className={`${isOpen ? 'left-0' : '-left-[30rem]'} 
                           absolute top-[4rem] left-2 w-[15rem] z-50 h-full bg-slate-400 dark:bg-[#1d1f2b] transition-all duration-[0.3s] rounded-md`}
                        >
                            <ul className='flex flex-col items-center gap-6 relative top-[5rem]'>
                                <li className='text-xl'>Clientes</li>
                                <li className='text-xl'>Cartera</li>
                                <li className='text-xl'>Movimiento</li>
                                <li className='text-xl'>Pedidos</li>
                                <li className='text-xl'>Facturas</li>
                                <li className='text-xl'>Manifiestos</li>
                                <li className='text-xl'>Devoluciones</li>
                                <li className='text-xl'>Remisiones</li>
                                <li className='text-xl'>Traslados</li>
                            </ul>
                        </section>
                        <section>
                            <RiUser3Line className='text-2xl'/>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashSidebar;
