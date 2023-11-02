import React from 'react'
import { RiSurveyLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Registro() {
    return (
        <div className='container h-screen'>
            {/* para pc  */}
            <div className='max-w-xl lg:relative lg:left-[47rem] lg:top-[9rem] bg-white border-2 border-black h-[40rem] hidden lg:flex'>
                {/* logo y titulos principales */}
                <div className='flex flex-col items-center mb-8 relative left-16 top-12'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor" className="w-36 h-36 mb-4 text-emerald-400"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                    <h1 className='text-center text-2xl font-semibold w-[22rem] mb-6'>Para crear tu cuenta te pediremos algunos datos</h1>
                    <p className='text-gray-600 text-xl text-center w-[25rem]'>Regístrate y sé parte de algo especial y Descubre un mundo de posibilidades</p>
                </div>
                {/* checkbos y politicas de tratamientos de datos */}
                <div className='flex items-center w-auto mb-8 relative  top-[7rem] right-[24rem]'>
                    <input type="checkbox" className="to-blue-500 relative left-12 w-4 h-6" />
                    <p className='text-xl relative left-[4.5rem] w-[25rem]'>
                        Acepto los Términos y condiciones y autorizo el uso de mis datos de acuerdo a la Declaración de Privacidad.
                    </p>
                </div>
                {/* borones de registro */}
                <div className='flex flex-col items-center gap-4 relative top-[29.8rem] right-[44rem]'>
                    <button className='bg-blue-500 px-3 py-3 text-white w-[22rem] rounded-lg'>
                        <Link to='/register/panel'>
                            Crear cuenta personal
                        </Link>
                    </button>
                    <button className='bg-blue-200 px-3 py-3 text-blue-600 w-[22rem] rounded-lg'>
                        Crear cuenta empresarial
                    </button>
                </div>
            </div>
            {/* para celular */}
            <div className='border-2 border-black h-[34rem] m-6 bg-white lg:hidden'>
                {/* logo y titulos principales */}
                <div className='flex flex-col items-center mb-8 relative top-12'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor" className="w-26 h-16 mb-4 text-emerald-400"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                    <h1 className='text-center text-lg font-semibold w-[22rem] mb-6'>Para crear tu cuenta te pediremos algunos datos</h1>
                    <p className='text-gray-600 text-base text-center w-[20rem]'>Regístrate y sé parte de algo especial y Descubre un mundo de posibilidades</p>
                </div>
                {/* checkbos y politicas de tratamientos de datos */}
                <div className='flex items-center w-auto mb-8 relative top-12'>
                    <input type="checkbox" className="to-blue-500 relative left-4 w-4 h-6" />
                    <p className='text-sm w-[17.4rem] relative left-8'>
                        Acepto los Términos y condiciones y autorizo el uso de mis datos de acuerdo a la Declaración de Privacidad.
                    </p>
                </div>
                {/* borones de registro */}
                <div className='flex flex-col items-center gap-4 relative top-12'>
                    <button className='bg-blue-500 px-3 py-3 text-white w-[16rem] rounded-lg'>
                        <Link to='/register/panel'>
                            Crear cuenta personal
                        </Link>
                    </button>
                    <button className='bg-blue-200 px-3 py-3 text-blue-600 w-[16rem] rounded-lg'>
                        Crear cuenta empresarial
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Registro;
