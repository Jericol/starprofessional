import React from 'react'
import { Link } from 'react-router-dom'

function LinkSeccion() {
    return (
        <div className="w-full bg-gray-400 h-auto relative top-[14rem] rounded-md">
            <div className="flex items-center justify-center  gap-[12rem] dark:text-white py-8">
                <Link to="/" className="uppercase text-2xl tracking-[2px] py-2 px-2 bg-white dark:bg-black rounded-md font-semibold">
                    ir a home
                </Link>
                <Link to="/newProduct" className="uppercase text-2xl tracking-[2px] py-2 px-2 bg-white dark:bg-black rounded-md font-semibold">
                    ir a productos
                </Link>
                <Link to="/login" className="uppercase text-2xl tracking-[2px] py-2 px-2 bg-white dark:bg-black rounded-md font-semibold">
                    ir a acceder
                </Link>
            </div>
        </div>
    )
}

export default LinkSeccion;
