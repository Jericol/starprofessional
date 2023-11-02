import React, { useState } from 'react';
import { RiMailLine, RiUserStarLine, RiSmartphoneLine, RiLock2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

function RegisterPanel() {

    const [check, setCheck] = useState(false);


    return (
        <div className='h-screen'>
            {/* panel para pc */}
            <div className='relative left-[42rem] top-[12rem] hidden lg:flex'>
                <div className='flex flex-col items-center justify-around container bg-white w-[39rem] h-[36rem]'>
                    <h2 className='font-semibold text-2xl text-black'>Listo para ser parte de algo grande, </h2>
                    {/* email  */}
                    <div className={`bg-white h-[6rem] w-[32rem] flex items-center gap-4 p-6 rounded-lg border border-slate-400 
                       `}
                    >
                        {/* icono de correo */}
                        <div className='border-2 border-slate-400 rounded-full px-3 py-3 relative left-8'>
                            <RiMailLine className='text-xl text-blue-500' />
                        </div>
                        {/* titulo y parrafo */}
                        <div className='flex flex-col items-center relative left-12'>
                            <h2>Agrega tu Email</h2>
                            <p className='text-sm '>Recibiras notificacion en tu cuenta</p>
                        </div>
                        {/* boton registro */}
                        <div className='relative left-[4rem]'>
                            <button className='bg-blue-500 px-2 py-2 text-white rounded-lg'>
                                <Link to='/register/panel/email'>
                                    Elegir
                                </Link>
                            </button>
                        </div>
                    </div>
                    {/* nombres / documento  */}
                    <div className={`bg-white  h-[6rem] w-[32rem] flex items-center gap-4 p-6 rounded-lg border border-slate-400 
                       `}
                    >
                        {/* icono de correo */}
                        <div className='border-2 border-slate-400 rounded-full px-3 py-3 relative left-8'>
                            <RiUserStarLine className='text-xl text-blue-500' />
                        </div>
                        {/* titulo y parrafo */}
                        <div className='flex flex-col items-center relative left-12'>
                            <h2>Elige tu nombre / Documento</h2>
                            <p className='text-sm w-[15rem]'>Ingresa tu nombre tu documento para que te lleguen tus facturas</p>
                        </div>
                        {/* boton registro */}
                        <div className='relative left-[4rem]'>
                            <button className='bg-blue-500 px-2 py-2 text-white rounded-lg'>
                                <Link to='/registro/panel/contact'>
                                    Elegir
                                </Link>
                            </button>
                        </div>
                    </div>
                    {/* telefono direccion de envio */}
                    <div className={`bg-white  h-[6rem] w-[32rem] flex items-center gap-4 p-6 rounded-lg border border-slate-400 
                       `}
                    >
                        {/* icono de correo */}
                        <div className='border-2 border-slate-400 rounded-full px-3 py-3 relative left-8'>
                            <RiSmartphoneLine className='text-xl text-blue-500' />
                        </div>
                        {/* titulo y parrafo */}
                        <div className='flex flex-col items-center relative left-12'>
                            <h2>Telefono / Direccion de envio</h2>
                            <p className='text-sm text-center w-[15rem]'>Te enviaremos los productos a tu nogocio o tu residencia</p>
                        </div>
                        {/* boton registro */}
                        <div className='relative left-[4rem]'>
                            <button className='bg-blue-500 px-2 py-2 text-white rounded-lg'>
                                <Link to='/register/panel/address'>
                                    Elegir
                                </Link>
                            </button>
                        </div>
                    </div>
                    {/* contraseña */}
                    <div className={`bg-white  h-[6rem] w-[32rem] flex items-center gap-4 p-6 rounded-lg border border-slate-400 
                       `}
                    >
                        {/* icono de correo */}
                        <div className='border-2 border-slate-400 rounded-full px-3 py-3 relative left-8'>
                            <RiLock2Line className='text-xl text-blue-500' />
                        </div>
                        {/* titulo y parrafo */}
                        <div className='flex flex-col items-center relative left-12'>
                            <h2>Crea tu contraseña</h2>
                            <p className='text-sm text-center w-[15rem]'>Mantendras tu cuenta protegida</p>
                        </div>
                        {/* boton registro */}
                        <div className='relative left-[4rem]'>
                            <button className='bg-blue-500 px-2 py-2 text-white rounded-lg'>
                                <Link to='/register/panel/email'>
                                    Elegir
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* panel para celular */}
            <div className='relative left-1 lg:hidden'>
                <div className='flex flex-col items-center justify-around container bg-white w-[22rem] h-[25rem] m-5'>
                    <h2 className='font-semibold text-lg text-black w-[18rem]'>Listo para ser parte de algo grande, </h2>
                    {/* email  */}
                    <div className={`bg-white h-[2rem] w-[20rem] flex items-center gap-4 p-6 rounded-lg border border-slate-400 
                       `}
                    >
                        {/* icono de correo */}
                        <div className='border-2 border-slate-400 rounded-full px-3 py-3 relative right-4'>
                            <RiMailLine className='text-lg text-blue-500' />
                        </div>
                        {/* titulo y parrafo */}
                        <div className='flex flex-col items-center relative left-1'>
                            <h2 className='text-sm'>Agrega tu Email</h2>
                        </div>
                        {/* boton registro */}
                        <div className='relative left-[1.5rem]'>
                            <button className='bg-blue-500 px-1 py-1 text-white rounded-lg'>
                                <Link to='/register/panel/email'>
                                    Elegir
                                </Link>
                            </button>
                        </div>
                    </div>
                    {/* nombres / documento  */}
                    <div className={`bg-white h-[2rem] w-[20rem] flex items-center gap-4 p-6 rounded-lg border border-slate-400 
                       `}
                    >
                        {/* icono de correo */}
                        <div className='border-2 border-slate-400 rounded-full px-3 py-3 relative right-4'>
                            <RiUserStarLine className='text-lg text-blue-500' />
                        </div>
                        {/* titulo y parrafo */}
                        <div className='flex flex-col items-center relative left-3'>
                            <h2 className='text-sm'>tu nombre y Documento</h2>
                        </div>
                        {/* boton registro */}
                        <div className='relative left-[1rem]'>
                            <button className='bg-blue-500 px-1 py-1 text-white rounded-lg'>
                                <Link to='/register/panel/email'>
                                    Elegir
                                </Link>
                            </button>
                        </div>
                    </div>
                    {/* telefono direccion de envio */}
                    <div className={`bg-white h-[2rem] w-[20rem] flex items-center gap-4 p-6 rounded-lg border border-slate-400 
                       `}
                    >
                        {/* icono de correo */}
                        <div className='border-2 border-slate-400 rounded-full px-3 py-3 relative right-4'>
                            <RiSmartphoneLine className='text-lg text-blue-500' />
                        </div>
                        {/* titulo y parrafo */}
                        <div className='flex flex-col items-center relative left-3'>
                            <h2 className='text-sm text-center'>Telefono y Direccion de envio</h2>
                        </div>
                        {/* boton registro */}
                        <div className='relative left-[1rem]'>
                            <button className='bg-blue-500 px-1 py-1 text-white rounded-lg'>
                                <Link to='/register/panel/email'>
                                    Elegir
                                </Link>
                            </button>
                        </div>
                    </div>
                    {/* contraseña */}
                    <div className={`bg-white h-[2rem] w-[20rem] flex items-center gap-4 p-6 rounded-lg border border-slate-400 
                       `}
                    >
                        {/* icono de correo */}
                        <div className='border-2 border-slate-400 rounded-full px-3 py-3 relative right-4'>
                            <RiLock2Line className='text-lg text-blue-500' />
                        </div>
                        {/* titulo y parrafo */}
                        <div className='flex flex-col items-center relative left-3'>
                            <h2 className='text-sm text-center'>Crear una contraseña</h2>
                        </div>
                        {/* boton registro */}
                        <div className='relative left-[1rem]'>
                            <button className='bg-blue-500 px-1 py-1 text-white rounded-lg'>
                                <Link to='/register/panel/email'>
                                    Elegir
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPanel
