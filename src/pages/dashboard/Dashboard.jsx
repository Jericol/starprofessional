import React from 'react'
import DashSidebar from '../../components/dashborad-sidebar/DashSidebar';
import { RiWallet2Line, RiBookLine, RiArticleLine } from "react-icons/ri";
import Graficos from '../../../public/img/graficos2.png';

function Dashboard() {
    return (
        <div className='md:flex   min-h-screen'>
            <div className='mb-2 z-50'>
              <DashSidebar />
            </div>
            <div className='flex-1 '>
                {/* para pc / tablet */}
                <main className='md:flex md:flex-col hidden'>
                    {/* 3 card de gastos */}
                    <div className='md:flex md:flex-wrap md:items-center justify-around gap-5 m-8'>
                        <section className='bg-emerald-300 lg:h-[12rem] lg:w-[24%] md:h-[10rem] md:w-[85%] rounded-md shadow-xl shadow-green-900'>
                            <section className='flex items-center justify-evenly gap-5 dark:text-gray-500'>
                                <div className='relative top-[3rem] left-[2rem] bg-white rounded-full px-3 py-3 shadow-md shadow-black'>
                                    <RiWallet2Line className='text-4xl'/>
                                </div>
                                <div className='flex flex-col justify-center gap-4 mx-auto relative top-[3rem]'>
                                    <h2 className='text-2xl font-semibold'>Total recaudado</h2>
                                    <p className='text-2xl font-semibold text-center'>$ 200.000</p>
                                </div>
                            </section>
                        </section>
                        <section className='bg-red-400 lg:h-[12rem] lg:w-[24%] md:h-[10rem] md:w-[85%] rounded-md shadow-xl shadow-red-500'>
                            <section className='flex items-center justify-evenly gap-5 dark:text-gray-500'>
                                <div className='relative top-[3rem] left-[2rem] bg-white rounded-full px-3 py-3 shadow-md shadow-black'>
                                    <RiBookLine className='text-4xl'/>
                                </div>
                                <div className='flex flex-col justify-center gap-4 mx-auto relative top-[3rem]'>
                                    <h2 className='text-2xl font-medium'>Atrasado</h2>
                                    <p className='text-2xl font-semibold text-center'>$ 500.000</p>
                                </div>
                            </section>
                        </section>
                        <section className='bg-orange-400 lg:h-[12rem] lg:w-[24%] md:h-[10rem] md:w-[85%] rounded-md shadow-xl shadow-orange-600'>
                            <section className='flex items-center justify-evenly gap-5 dark:text-gray-500'>
                                <div className='relative top-[3rem] left-[2rem] bg-white rounded-full px-3 py-3 shadow-md shadow-black'>
                                    <RiArticleLine className='text-2xl '/>
                                </div>
                                <div className='flex flex-col items-center justify-center gap-4 mx-auto relative top-[3rem]'>
                                    <h2 className='text-2xl font-semibold'>Pendientes</h2>
                                    <p className='text-2xl font-semibold text-center'>$ 2.000.000</p>
                                </div>
                            </section>
                        </section>
                    </div>
                    {/* estadisticas */}
                    <div className='flex items-center justify-center lg:m-8 lg:p-8 md:p-3 md:m-3'>
                        <section className='bg-sky-700 lg:w-full lg:h-[20rem] '>
                            <img src={Graficos} alt="" className='object-cover lg:w-full lg:h-[20rem] md:w-full md:h-[10rem] md:rounded-lg bg-right-top'/>
                        </section>
                    </div>
                    {/* manejo de clientes /  ventas al mes*/}
                    <div className='flex flex-wrap items-center justify-evenly gap-5 lg:m-5 lg:p-5 md:m-0 md:p-0'>
                        <section className='bg-lightDash-400 lg:h-[13rem] lg:w-[30%] md:h-[11rem] md:w-[80%] rounded-md dark:text-black'>
                            <div className='flex flex-col items-center justify-center gap-5'>
                                <div>
                                    <h2 className='text-2xl font-bold'>Historial de ventas</h2>
                                </div>
                                <div className='flex  items-center justify-evenly lg:gap-12 md:gap-3'>
                                    <div className=''>
                                        <select name="" id=""  className='flex items-start rounded-md px-3 py-1 '>
                                            <option value="">Oct</option>
                                            <option value="">Sep</option>
                                            <option value="">Ags</option>
                                            <option value="">Jul</option>
                                            <option value="">Jun</option>
                                        </select>
                                    </div>
                                    <div className='w-auto  bg-white px-3 py-2'>
                                        <h2 className='w-auto mx-auto'>
                                            Lorem ipsum, dolor sit amet .
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </section>                
                    </div>
                </main>
            </div>
            {/* para celular */}
            <div className='flex flex-col md:hidden -z-20'>
                {/* card #1 */}
                <div className='W-[70%] h-[9rem] border bg-slate-200 rounded-md  m-5 relative top-[3rem] shadow-md shadow-gray-600'>
                   <div className='flex  items-center justify-between'>
                        <div className='bg-green-600 px-4 py-4 rounded-md relative bottom-[2rem] left-[1rem] shadow-md shadow-emerald-400'>
                           <RiWallet2Line className='text-2xl text-white'/>
                        </div>
                        <div className='flex flex-col gap-2 m-4'>
                            <h2 className='text-lg'>Today money</h2>
                            <p className='text-xl font-semibold'>$30.000</p>
                        </div>
                   </div>
                </div>
                {/* card 2# */}
                <div className='W-[70%] h-[9rem] border bg-slate-200 rounded-md  m-5 relative top-[3rem] shadow-md shadow-gray-600'>
                   <div className='flex  items-center justify-between'>
                        <div className='bg-red-600 px-4 py-4 rounded-md relative bottom-[2rem] left-[1rem] shadow-md shadow-orange-400'>
                           <RiBookLine className='text-2xl text-white'/>
                        </div>
                        <div className='flex flex-col gap-2 m-4'>
                            <h2 className='text-lg'>Today money</h2>
                            <p className='text-xl font-semibold'>$30.000</p>
                        </div>
                   </div>
                </div>
                {/* card #3 */}
                <div className='W-[70%] h-[9rem] border bg-slate-200 rounded-md  m-5 relative top-[3rem] shadow-md shadow-gray-600'>
                   <div className='flex  items-center justify-between'>
                        <div className='bg-orange-600 px-4 py-4 rounded-md relative bottom-[2rem] left-[1rem] shadow-md shadow-red-400'>
                           <RiBookLine className='text-2xl text-white'/>
                        </div>
                        <div className='flex flex-col gap-2 m-4'>
                            <h2 className='text-lg'>Today money</h2>
                            <p className='text-xl font-semibold'>$30.000</p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
