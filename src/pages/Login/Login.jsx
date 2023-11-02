import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Usuario from '../../../public/img/usuario.jpg'
import { useDispatch } from 'react-redux';
import LinkSeccion from '../../components/Botonup/LinkSeccion';
import { checkIdThunk } from '../../store/slice/cart.slice';


function Login({ theme, setTheme }) {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [sesion, setSesion] = useState([])


    // peticion de login de usuario
    const submit = (data) => {
        console.log(data)
        axios.post("http://190.60.237.163/logincli", data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("token", res.data.jwt)
                navigate("/dashboard")
            })
            .catch(error => {
                if (error.response) {
                    console.log("Respuesta del servidor:", error.response.data);
                } else if (error.request) {
                    console.log("No se recibió respuesta del servidor:", error.request);
                } else {
                    console.log("Error al hacer la solicitud:", error.message);
                }
            });
        dispatch(checkIdThunk())
    }

    const handleHide = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <div className='mx-auto container p-5 h-screen dark:bg-[#1f1d2b]' >
            <div className='flex items-center justify-center' >
                {/* login de usuario */}
                <section className=' h-auto w-[27rem] rounded-lg dark:text-white text-black relative md:-top-[2rem] top-[2rem] lg:top-[2rem]'>
                    <form action="" className='flex flex-col items-center  gap-4 z-20' onSubmit={handleSubmit(submit)}>
                        {
                            theme === 'light' ?
                                <img
                                    src="../../../public/img/ICONO STAR PRO-01.png"
                                    alt=""
                                    className='object-cover lg:w-[12rem] lg:h-[12rem] md:w-[200px] w-[200px]'
                                />
                                :
                                <img
                                    src="../../../public/img/ICONO STAR PRO-02.png"
                                    alt=""
                                    className='object-cover lg:w-[12rem] lg:h-[12rem]'
                                />
                        }
                        <h2 className='text-center text-2xl font-bold relative bottom-9 tracking-wide'>
                            Login de usuarios
                        </h2>
                        {/* usuario */}
                        <div className='flex flex-col items-start gap-2'>
                            <label htmlFor="usuario" className='text-xl font-semibold'>Iniciar sesion</label>
                            <input
                                type="text"
                                name='usuario'
                                className='rounded-lg lg:w-[20rem] lg:h-[2.5rem] md:px-3 border-2 border-slate-400 md:py-3 lg:py-0 md:w-[24rem] 
                                 w-[19rem] px-3 py-2'
                                placeholder='Ingresa tu usuario'
                                required
                                {...register('usuario')}
                            />
                        </div>
                        {/* contraseña */}
                        <div className='flex flex-col items-start gap-4 '>
                            <label htmlFor="" className='text-xl font-semibold tracking-wide'>Contraseña</label>
                            <input
                                type="password"
                                name="password"
                                className='rounded-lg lg:w-[20rem] lg:h-[2.5rem] md:px-3 md:py-3 lg:py-0 md:w-[24rem] border-2 border-slate-400
                                 w-[19rem] px-3 py-2'
                                placeholder='Ingresa tu contraseña'
                                required
                                {...register('clave')}
                            />
                        </div>
                        {/* olvide contraseña / register */}
                        <div className='flex items-center justify-between gap-14 text-blue-600'>
                            {/* olvide la contraseña */}
                            <section>
                                <h2 className='cursor-pointer hover:!scale-125 transition duration-[0.3s]'>
                                    Olvide la contraseña
                                </h2>
                            </section>
                            {/* register */}
                            <section>
                                <Link to='/register'>
                                    <h2 className='cursor-pointer hover:!scale-125 transition duration-[0.3s]'>
                                        Registrate
                                    </h2>
                                </Link>
                            </section>
                        </div>
                        {/* buton */}
                        <div className='flex flex-col items-center justify-center gap-4 md:gap-6 md:p-0 p-2'>
                            <button className='rounded-lg px-2 py-2 md:px-3 md:py-3  bg-blue-600 text-white w-[18rem] md:w-[23rem]'>
                                Iniciar sesion
                            </button>
                            <button className='rounded-lg px-2 py-2 md:px-3 md:py-3 bg-blue-600 text-white w-[18rem] md:w-[23rem]'>
                                <Link to='/LoginAdmin'>
                                    sesion administrador
                                </Link>
                            </button>
                        </div>
                    </form>
                </section>
            </div>
            <div className="w-full bg-gray-400 dark:bg-[#2d2a3f] h-auto relative top-[3rem] md:top-[10rem] rounded-md">
                <div className="flex items-center justify-center md:gap-[4rem] gap-3 lg:gap-[12rem] dark:text-white py-8">
                    <Link to="/" className="uppercase text-sm md:text-2xl tracking-[2px] py-2 px-2 bg-white dark:dark:bg-[#262131] rounded-md font-semibold">
                        ir al inicio
                    </Link>
                    <Link to="/newProduct" className="uppercase text-sm md:text-2xl tracking-[2px] py-2 px-2 bg-white dark:dark:bg-[#262131] rounded-md font-semibold">
                        ir a productos
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;
