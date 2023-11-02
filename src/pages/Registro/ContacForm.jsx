import React from 'react'
import { Link } from 'react-router-dom';

function ContactForm() {
    return (
        <div className='h-screen '>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col items-center gap-3 relative top-[11rem]'>
                    <h2 className='text-3xl font-bold'>Elige cómo quieres que te llamemos</h2>
                    <p>Con este nombre nos comunicaremos contigo desde star professional</p>
                </div>
                {/* nombres y apellidos */}
                <div className='flex items-center gap-2 justify-around bg-white h-[12rem] w-[62rem] relative left-[35rem] top-[12rem] rounded-lg'>
                    {/* nombres */}
                    <div className='flex flex-col gap-3 '>
                        <label htmlFor="" className='text-xl font-semibold '>Nombres</label>
                        <input
                            type="text"
                            className='h-16 w-[18rem] border-2 border-slate-900 px-3 rounded-lg'
                            placeholder='Ej: Oscar alberto'
                        />
                    </div>
                    {/* apellidos */}
                    <div className='flex flex-col gap-3 '>
                        <label htmlFor="" className='text-xl font-semibold '>Apellidos</label>
                        <input
                            type="text"
                            className='h-16 w-[18rem] border-2 border-slate-900 px-3 rounded-lg'
                            placeholder='Ej: Suarez cagamarca'
                        />
                    </div>
                </div>

            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col items-center gap-3 relative top-[15rem]'>
                    <h2 className='text-3xl font-bold'>Ingresa tu documento de identificacion</h2>
                    <p>Con tu documento podras recibir tus facturas y tendras un usuario para manejar tus compras</p>
                </div>
                {/* documento */}
                <div className='flex items-center gap-2 justify-around bg-white h-[12rem] w-[62rem] relative left-[35rem] top-[17rem] rounded-lg'>
                    <div className='flex flex-col gap-2'>  
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Elije tu tipo de documento</option>
                            <option value="US">Cedula cuidadania</option>
                            <option value="CA">Cedula extrajeria</option>
                            <option value="FR">Nit</option>
                            <option value="DE">Pasaporte</option>
                        </select>
                        <input type="number" className='px-3 py-3 w-[20rem] border-2 border-black rounded-lg' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span>* no obligatorio</span>
                        <label htmlFor="">Adjunte archivos</label>
                        <input type="file"  className='h-12 w-[18rem] py-3 border-2 border-slate-900 px-3 rounded-lg'/>
                    </div>
                </div>
                {/* boton de continuar */}
                <div className='flex items-center relative left-[85rem] top-[19rem]'>
                    <button className='bg-blue-600 px-3 py-3 w-[12rem] rounded-lg text-white'>
                        <Link to='/register/panel'>
                            Continuar
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;
