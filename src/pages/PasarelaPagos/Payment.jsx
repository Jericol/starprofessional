import React from 'react'

function Payment() {
    return (
        <div className='h-screen '>
            <h2>EStas en metodos de pago</h2>
            <div className='bg-white h-[62rem] w-full m-8 p-8 border-2 border-slate-400 container relative left-[17rem]'>
                <div className='flex items-center gap-3 m-4'>
                    <div className='bg-white border border-slate-400 rounded-lg flex-1 h-[52rem]'>
                        {/* informacion de envio */}
                        <div className='flex items-center gap-4 container'>
                            <div className='flex flex-col gap-4 relative left-7 bottom-[19rem]'>
                                <h2 className='text-2xl font-semibold '>Informacion de contacto</h2>
                                <input 
                                type="text" 
                                className='h-12 w-96 border border-slate-400 px-4'
                                placeholder='Email'
                                />
                            </div>
                            <div className='border border-slate-400  w-[28rem] relative left-14 top-5 h-[47rem]'>
                                <div className='flex flex-col gap-3 relative left-6 top-5'>
                                    <label htmlFor="" className='font-semibold text-lg'>Tu nombre</label>
                                    <input 
                                       type="text" 
                                       className='h-12 w-96 border px-3 border-black rounded-lg'
                                       placeholder='Tu nombre'
                                    />
                                </div>
                                <div className='relative left-6 top-9'>
                                    <label htmlFor="" className='font-semibold text-lg'>Direccion de envio</label>
                                    <input 
                                       type="text" 
                                       className='h-12 w-96 border px-3 border-black rounded-lg'
                                       placeholder='Tu direccion de envio'
                                    />
                                </div>
                                <div className='flex flex-col gap-3 px-3 relative left-3 top-10'>
                                    <label htmlFor="" className='relative top-3 font-semibold text-lg'>Cuidad</label>
                                    <input 
                                      type="text" 
                                      className='h-12 w-96 border px-3 border-black rounded-lg'
                                      placeholder='Ingresa tu cuidad'
                                    />
                                </div>
                                <div className='flex flex-col gap-3 relative left-6 top-12'>
                                    <label htmlFor="" className='font-semibold text-lg relative top-3'>Tu numero de contacto</label>
                                    <input 
                                      type="number" 
                                      className='h-12 w-96 border px-3 border-black rounded-lg'
                                      placeholder='Ingresa tu numero de telefono'
                                    />
                                </div>
                                <div className='flex flex-col gap-4 relative top-[3rem]'>
                                    <label htmlFor="" className='relative top-6 left-5 text-lg font-semibold'>Observaciones</label>
                                    <textarea cols="30" rows="10" className='m-4 p-4 border border-slate-500 rounded-lg' placeholder='Escribe observacion extra '>
                                    </textarea>
                                </div>
                            </div> 
                        </div>
                        {/* metodos de pago */}
                        <div className='border border-slate-500 h-[39.3rem] w-[26rem] p-4 m-4 relative bottom-[39rem]'>
                            <div className='flex items-center justify-around gap-4'>
                                <div className='h-[3rem] w-[10rem] border border-slate-400 px-3 py-2 rounded-lg'>
                                    <h2 className='text-xl font-semibold text-center'>Bancos</h2>

                                </div>
                                <div className='h-[3rem] border border-slate-400 px-3 py-2 rounded-lg'>
                                    <h2 className='text-xl font-semibold'>Trasferencias</h2>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 mb-3 relative bottom-[69rem] left-[2rem]'>
                            <section className='w-[24rem] h-[11rem] border border-slate-300 rounded-lg relative bottom-[4.0rem]'>
                                <h2 className='text-center text-xl mb-3 font-semibold relative top-3'>Bancolombia</h2>
                                <img 
                                  src="https://i.ibb.co/vkGMFvt/logo-boton-bancolombia.png" 
                                  alt="" 
                                  className='h-[7rem] pl-8 cursor-pointer'
                                />
                            </section>
                            <section className='w-[24rem] h-[9rem] bg-sky-400'></section>
                        </div>
                    </div>
                    <div className='bg-emerald-600 h-[40rem] w-[30rem]'>
                        leonardo
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
