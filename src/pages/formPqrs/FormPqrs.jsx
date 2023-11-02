import React from 'react'

function FormPqrs() {
    return (
        <div className='pl-28 mb-6 h-[100rem] '>
            {/* para pc */}
            <div className='lg:flex hidden items-center justify-center font-monserrat'>
                <div className='border-2 border-gray-600 lg:w-[80rem]  dark:bg-[#1f1d2b]'>
                    {/* encabezado o titulo */}
                    <div className='py-4 px-2'>
                        <h2 className='text-2xl uppercase  text-center font-semibold border-2 border-gray-500 w-[]'>
                            formato pqrs mixto
                        </h2>
                    </div>
                    {/* fecha y checkbox */}
                    <div className='flex items-center justify-between border-2 border-gray-400 w-auto px-4 py-3 '>
                        <div className=''>
                            <label htmlFor="" className='text-2xl '>fecha: </label>
                            <input type="date" name="" id="" className='rounded-lg py-1 px-3' />
                        </div>
                        <div>
                            <label htmlFor="" className='text-2xl  pr-6'>
                                Anonimo
                            </label>
                            <input
                                type="checkbox"
                                className='accent-pink-300  focus:accent-pink-500 h-9 w-7 relative top-2'
                            />
                        </div>
                    </div>
                    <h2 className='text-2xl uppercase  text-center font-semibold'>1. datos peticionario</h2>
                    <p className='text-xl  text-center font-semibold mb-6'>
                        Si la petición es anónima no es necesario que diligencia las siguientes casillas:
                    </p>
                    {/* nombres y apellidos */}
                    <div className='flex items-center justify-around  border-2 border-gray-400 w-auto px-4 py-3'>
                        <div>
                            <label htmlFor="" className='font-semibold  text-xl'>Nombres </label>
                            <input
                                type="text"
                                className='w-[16rem] h-9 px-3'
                                placeholder='Ej: jhon jairo'
                            />
                        </div>
                        <div>
                            <label htmlFor="" className='font-semibold  text-xl'>Apellido </label>
                            <input
                                type="text"
                                className='w-[16rem] h-9 px-3'
                                placeholder='Ej: Goméz herrera'

                            />
                        </div>
                    </div>
                    {/* documentos */}
                    <div className='flex items-center justify-around py-4 px-2 border-2 border-gray-400 w-auto '>
                        <label htmlFor="" className='font-semibold  text-xl'>Documento de identidad:</label>
                        <label htmlFor="" className='font-semibold font-monserrat text-lg'>cedula</label>
                        <input type="checkbox" className='h-8 w-5 accent-green-400' />
                        <label htmlFor="" className='uppercase font-semibold font-monserrat text-lg'>nit</label>
                        <input type="checkbox" name="" id="" className='h-8 w-5 accent-green-400' />
                        <label htmlFor="numero" className='font-semibold  text-xl'>numero</label>
                        <input
                            type="text"
                            id='numero'
                            className='w-[16rem] h-9 px-3 rounded-lg'
                            placeholder='ingresa tu documento'
                        />
                    </div>
                    {/* datos de contacto */}
                    <h2 className='text-2xl uppercase  text-center font-semibold'>
                        2. datos de contacto
                    </h2>
                    {/* direccion y cuidad  */}
                    <p className='text-xl  text-center font-semibold mb-6'>
                        Indique y diligencie el medio de envío para la respuesta (solo una opción):
                    </p>
                    <div className='flex items-center justify-evenly gap-4 py-4 px-2 border-2 border-gray-400 w-auto '>
                        {/* direccion  */}
                        <div className='flex items-center gap-2'>
                            <label htmlFor="" className='font-semibold  text-xl'>
                                Direccion de correspondencia:
                            </label>
                            <input
                                type="text"
                                className='w-[16rem] h-9 px-3 rounded-lg'
                                placeholder='ingresa tu direccion'
                            />
                        </div>
                        {/* cuidad */}
                        <div className='flex items-center  gap-2'>
                            <label htmlFor="" className='font-semibold  text-xl'>cuidad:  </label>
                            <input
                                type="text"
                                className='w-[16rem] h-9 px-3 rounded-lg'
                                placeholder='Ej: Bogotá'
                            />
                        </div>
                    </div>
                    {/* correo - numero -  */}
                    <div className='flex items-center justify-around gap-4 py-4 px-2 border-2 border-gray-400 w-auto '>
                        <div className='flex flex-col items-center gap-2'>
                            <label htmlFor="" className='font-semibold text-xl'>
                                correo electronico
                            </label>
                            <input
                                type="text"
                                className='w-[16rem] h-9 px-3 rounded-lg pl-2'
                                placeholder='Ej: jhonHerrera@gmail.com'
                            />
                        </div>
                        {/* numero de contacto */}
                        <div className='flex items-center flex-col gap-2'>
                            <label htmlFor="" className='font-semibold  text-xl'>
                                Numero(s) de telefono(s) de contacto
                            </label>
                            <input
                                type="text"
                                className='w-[16rem] h-9 px-3 rounded-lg'
                                placeholder='Ej: jhonHerrera@gmail.com'
                            />
                        </div>
                    </div>
                    {/* 3. peticion */}
                    <h2 className='text-2xl uppercase  text-center font-semibold'>
                        3. petición
                    </h2>
                    <div className='flex items-center justify-around gap-4 py-4 px-2 border-2 border-gray-400 w-auto '>
                        <div className='flex items-center gap-2'>
                            <label htmlFor="" className=' font-semibold font-monserrat text-lg'>
                                Tiene que ver con garantía de un producto
                            </label>
                            <input
                                type="checkbox"
                                name=""
                                id=""
                                className='h-8 w-5 accent-green-400'
                            />
                        </div>
                        <div className='flex items-center gap-2'>
                            <label htmlFor="" className='font-semibold font-monserrat text-lg'>
                                Habeas data
                            </label>
                            <input
                                type="checkbox"
                                name=""
                                id=""
                                className='h-8 w-5 accent-green-400'
                            />
                        </div>
                    </div>
                    <div className='flex items-center justify-around gap-4 py-4 px-2 border-2 border-gray-400 w-auto '>
                        <div className='flex items-center flex-col gap-2'>
                            <label htmlFor="" className='font-semibold  text-xl'>
                                Indique el lugar donde sucedieron los hechos:
                            </label>
                            <input
                                type="text"
                                className='w-[46rem] h-9 px-3 rounded-lg pl-2'
                                placeholder='cuidad, barrio, localidad'
                            />

                        </div>
                    </div>
                    <div className='flex items-center justify-around gap-4 py-4 px-2 border-2 border-gray-400 w-auto '>
                        <div className='flex flex-col items-center'>
                            <label htmlFor="" className='font-semibold  text-xl'> Descripción: </label>
                            <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                className='w-[70rem] text-center px-4 py-4 rounded-lg'
                                placeholder='haga un relato claro y preciso de los hechos:'
                            />
                        </div>
                    </div>
                    <div className='flex items-center justify-around gap-4 py-4 px-2 border-2 border-gray-400 w-auto '>
                        <p className='font-semibold font-monserrat text-lg w-[90rem]'>
                            Dando cumplimiento a la Ley 1581 de 2012, en mi calidad de titular de la información, autorizo a
                            IMPORTADORA Y DISTRIBUIDORA STAR SAS de manera expresa, voluntaria, previa, explícita e irrevocable para que
                            recolecte, compile, confirme, notifique, emplee, analice, estudie, conserve, reciba, y disponga de mis datos
                            personales, los cuales serán utilizados para dar una respuesta oportuna y efectiva a mi solicitud. Manifiesto
                            que los datos aportados en esta solicitud son ciertos y que cumplen con los requisitos para acceder a la pretensión
                            realizada. De manera expresa informo que he sido informado(a) del tratamiento al que serán expuestos mis datos y su
                            finalidad, conforme a la “Política de protección de datos personales”, disponible en el Portal
                            <span className='text-blue-500'> Web www.starprofessional.com.co</span>
                        </p>
                    </div>
                    <div className='flex items-center justify-around gap-4 py-4 px-2 border-2 border-gray-400 w-auto '>
                        <div className='flex items-center gap-2'>
                            <label htmlFor="" className='font-semibold  text-xl'>Si</label>
                            <input type="checkbox" name="" id="" placeholder='si' className='h-8 w-5 accent-green-400'/>
                        </div>
                        <div className='flex items-center gap-2'>
                            <label htmlFor="" className='font-semibold  text-xl'>No</label>
                            <input type="checkbox" name="" id="" className='h-8 w-5 accent-green-400'/>

                        </div>
                    </div>
                    <div className='flex items-center justify-around gap-4 py-4 px-2 border-2 border-gray-400 w-auto '>
                        <input type="text" className='w-[22rem] h-[7rem] rounded-lg px-3 ' placeholder='Firma del peticionario'/>
                        <input type="text" className='w-[22rem] h-[7rem] rounded-lg px-3 ' placeholder='Recibido por'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormPqrs;
