import React, { useEffect, useRef, useState } from 'react';
import Logo from "../../../public/Logo/STARPROFESSIONAL.png";
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from '../../store/slice/register.slice';


function Register() {

    const form = useRef(null);
    const dispatch = useDispatch();
    const registro = useSelector(state => state.register)

   console.log(registro)

   useEffect(() => {
     
     dispatch(registerThunk())

   }, [dispatch])

    return (
        <article className='h-[100rem] flex items-start justify-center'>
           <div>
                <h2 className='text-lg text-center font-bold'>Registro de clientes star</h2>
                <div className='border-2 border-red-500 h-screen w-[80rem]'>

                </div>
           </div>
        </article>
    )
}

export default Register;












