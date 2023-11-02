import React from 'react'
import { Link } from 'react-router-dom';

function AddressForm() {
    return (
        <div className='h-screen'>
            {/* info de telefono */}
            <div className='relative top-[3rem]'>
                <div className='flex flex-col items-center justify-center gap-3 relative top-[6rem]'>
                    <h2 className='text-3xl font-semibold'>¡Déjanos tu Teléfono para estar en Contacto</h2>
                    <p>Dejanos tu numero de contacto para informarte de los nuevos productos</p>
                </div>
                <div className='container flex gap-5 bg-white h-[8rem] w-[62rem] relative left-[38rem] top-[8rem] rounded-lg'>
                    <div className='flex flex-col items-center justify-center gap-4 relative left-[4rem]'>
                        <label className='text-xl font-semibold'>
                            Numero de contacto
                        </label>
                        <input 
                        type="number" 
                        className='border-2 border-slate-700 h-9 w-[20rem] px-3 py-4'
                        placeholder='+57'
                        min="10" max="10"
                        required
                        />
                    </div>
                    <div className='flex flex-col  justify-center gap-4 relative left-[17rem]'>
                        <label className='text-xl font-semibold'>
                            Numero secundario
                        </label>
                        <input 
                        type="number" 
                        className='border-2 border-slate-700 h-9 w-[20rem] px-3 py-4'
                        placeholder='+57'
                        min="10" max="10"
                        required
                        />
                    </div>
                </div>
            </div>
            {/* info de direccion de envio */}
            <div className='relative top-[10rem]'>
                <div className='flex flex-col items-center justify-center gap-3 relative top-[6rem]'>
                    <h2 className='text-3xl font-semibold space-x-2'>Ubicación para la Entrega: ¡Cuéntanos Dónde Estás!</h2>
                    <p>En esta direccion enviaremos todos tus pedidos </p>
                </div>
                <div className='container flex items-center  gap-9 bg-white h-[10rem] w-[62rem] relative left-[38rem] top-[8rem] rounded-lg'>
                    <div className='flex flex-col  justify-center gap-4 relative left-[4rem]'>
                        <label htmlFor="" className='text-lg font-semibold'>Dirección principal </label>
                        <input 
                           type="text"
                           className='border-2 border-slate-700 h-12 w-[20rem] rounded-lg' 
                        
                        />
                    </div>
                    <div className='flex flex-col  justify-center gap-4 relative left-[17rem]'>
                        <label htmlFor="" className='text-lg font-semibold'>Dirección secundaria: </label>
                        <input 
                           type="text"
                           className='border-2 border-slate-700 h-12 w-[20rem] rounded-lg' 
                        
                        />
                    </div>
                </div>
            </div>
            {/* botones */}
            <div className='relative left-[64rem] top-[20rem]'>
                <button className='px-3 py-3 bg-blue-600 text-white w-[12rem] rounded-lg'>
                    <Link to='/register/panel'>Continuar</Link>
                </button>
            </div>
        </div>
    )
}

export default AddressForm;

