import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NameFiltredThunk } from '../../store/slice/product.slice';
import { RiSearchLine } from "react-icons/ri";

function SearchBar() {

    const [newSearch, setNewSearch] = useState("");
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    console.log(newSearch)



    return (
        <>
            {/* nueva barra de busqueda pc */}
            <form className='lg:flex items-center lg:justify-end md:justify-center' >
                <label htmlFor="defaultSearch" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <article className="relative ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-[24rem] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 
                       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Buscar tu producto favorito" required
                        value={newSearch}
                        onChange={(e) => setNewSearch(e.target.value)}
                    />
                    <span type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                        focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => dispatch(NameFiltredThunk(`${newSearch}`))}
                    >
                        Buscar
                    </span>
                </article>
            </form>
        </>
    )
}

export default SearchBar;
