import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function LoginAdmin() {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // peticion del login de admin
    const admin = (data) => {
        console.log(data)
        axios.post("http://190.60.237.163/login", data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("token", res.data.jwt)
                navigate("/dashboard")
            })
            .catch(error => {
                if (error.response) {
                    console.log("Respuesta del servidor:", error.response.data)
                } else if (error.request) {
                    console.log("Nose recibio respuesta del servidor:", error.request)
                } else {
                    console.log("Error al hacer la peticion:", error.message)
                }
            });
    }


    return (
        <div className='mx-auto container p-5 h-screen z-20'>
            <div className='flex items-center justify-center'>
                {/* login de administrador */}
                <video autoPlay loop muted className='absolute -z-10'>
                    <source src='../../../public/img/BACKGROUND.mp4 ' className='-z-10' />
                </video>
                <section className='border z-50 bg-[#1d1f2d] h-[39rem] w-[27rem] rounded-md dark:text-white text-black relative top-[7rem]'>
                    <form className='flex flex-col items-start m-5 gap-4 z-20 text-white' onSubmit={handleSubmit(admin)}>
                        <img
                            src="../../../public/img/ICONO STAR PRO-02.png"
                            alt=""
                            className='object-cover lg:w-[12rem] lg:h-[12rem]'
                        />
                        <h2 className='text-center text-2xl font-bold relative bottom-9 tracking-wide'>
                            Login de asesores
                        </h2>
                        {/* usuario */}
                        <div className='flex flex-col items-start gap-2'>
                            <label className='text-xl font-semibold'>Iniciar sesion</label>
                            <input
                                type="text"
                                className='rounded-lg lg:w-[20rem] lg:h-[2.5rem] px-3'
                                placeholder='ingresa tu usuario'
                                required
                                {...register("usuario")}
                            />
                        </div>
                        {/* contraseña */}
                        <div className='flex flex-col items-start gap-2 '>
                            <label htmlFor="" className='text-xl font-semibold '>Contraseña</label>
                            <input
                                type="password"
                                name='password'
                                placeholder='ingresa tu contraseña'
                                required
                                className='rounded-lg lg:w-[20rem] lg:h-[2.5rem] px-3'
                                {...register('clave')}
                            />
                        </div>
                        {/* boton */}
                        <div className='flex flex-col items-center gap-1'>
                            <button className='rounded-lg px-3 py-3 bg-blue-600 text-white w-[20rem]'>
                                sesion administrador
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default LoginAdmin;
