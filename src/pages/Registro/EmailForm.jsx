import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function EmailForm() {

    const [ valid, setValid ] = useState(false)

    
    return (
        <div className='h-screen'>
            <div className='flex flex-col gap-4 items-center relative left-[53rem] top-[5rem] bg-white h-[30rem] w-[28rem] rounded-lg' >
                <div className='flex flex-col  gap-5 pt-11 relative top-[6rem]'>
                    <label htmlFor="" className='text-3xl font-bold '>Ingresa tu e-mail</label>
                    <p className='font-xl text-gray-500'>Asegurate de tener acceso a él</p>
                    <input
                        type="text"
                        className='h-12 w-[22rem] rounded-lg border border-blue-600  hover:border-2 hover:border-purple-500'
                        required   
                    />
                    <button 
                       className={`w-[22rem] rounded-lg px-3 py-3 text-white bg-blue-500 relative top-[2rem] cursor-pointer placeholder:px-4`}     
                    >
                        <Link to='/register/panel'>
                            Continuar
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EmailForm
