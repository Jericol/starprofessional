import { useState } from "react";


function Pagination({ productsPage, currentPage, totalProducts, setCurrentPage }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPage); i++) {
        pageNumbers.push(i)
    }


    const onPreviusPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const onSpecifyPage = (n) => {
        setCurrentPage(n)
    }



    return (
        <div>
            {/* para pc */}
            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-base h-10">
                    {/* boton izquierda */}
                    <li className="lg:flex hidden">
                        <button href="#" className={`flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500  border-gray-300 rounded-l-lg
                          hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 
                           relative left-[22rem] top-[2rem] transition-all duration-[.8s] ease-linear
                          ${currentPage >= pageNumbers.length ? 'disabled:bg-red-500' : ''}`}
                            onClick={onPreviusPage}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                               stroke="currentColor" className="w-9 h-9 bg-white rounded-lg dark:bg-slate-500 dark:text-white"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </button>
                    </li>
                    {
                        pageNumbers.map(noPage => (
                            <li key={noPage}>
                                <a href="#" className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${noPage === currentPage ? 'bg-blue-300' : ''}`}
                                    onClick={() => onSpecifyPage(noPage)}
                                >
                                    {noPage}
                                </a>
                            </li>
                        ))
                    }
                    {/* boton derecha */}
                    <li className="lg:flex hidden ">
                        <button href="#" className={`flex items-center justify-center px-2 h-10 leading-tight text-gray-500 relative left-[80rem] top-[2rem]
                          hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 
                          ${currentPage === 1 ? 'disabled:bg-red-500' : ''}`}
                            onClick={onNextPage}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                               stroke="currentColor" className="w-9 h-9 bg-white dark:bg-slate-500 rounded-lg dark:text-white"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </button>
                    </li>
                </ul>
            </nav>
            {/* para tablet */}
            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-base h-10">
                    <li className="md:flex hidden lg:hidden">
                        <button href="#" className={`flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500  border-gray-300 rounded-l-lg
                          hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 
                           relative left-[2rem] bottom-[3rem] transition-all duration-[.8s] ease-linear
                          ${currentPage >= pageNumbers.length ? 'disabled:bg-red-500' : ''}`}
                            onClick={onPreviusPage}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                              stroke="currentColor" className="w-9 h-9 bg-white dark:bg-slate-700 rounded-lg dark:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </li>
                    {
                        pageNumbers.map(noPage => (
                            <li key={noPage}>
                                <a href="#" className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${noPage === currentPage ? 'bg-blue-300' : ''}`}
                                    onClick={() => onSpecifyPage(noPage)}
                                >
                                    {noPage}
                                </a>
                            </li>
                        ))
                    }
                    <li className="md:flex hidden lg:hidden">
                        <button href="#" className={`flex items-center justify-center px-2 h-10 leading-tight text-gray-500 relative bottom-[3rem] left-[26rem]
                          hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 
                          ${currentPage === 1 ? 'disabled:bg-red-500' : ''}`}
                            onClick={onNextPage}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
                              stroke="currentColor" className="w-9 h-9 bg-white dark:bg-slate-700 rounded-lg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
            {/* para celular */}
            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-base h-10">
                    <li className="flex md:hidden">
                        <button href="#" className={`flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500  border-gray-300 rounded-l-lg
                          hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 
                           relative left-[2rem] bottom-[3rem] transition-all duration-[.8s] ease-linear
                          ${currentPage >= pageNumbers.length ? 'disabled:bg-red-500' : ''}`}
                            onClick={onPreviusPage}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 bg-white rounded-lg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </li>
                    {
                        pageNumbers.map(noPage => (
                            <li key={noPage}>
                                <a href="#" className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${noPage === currentPage ? 'bg-blue-300' : ''}`}
                                    onClick={() => onSpecifyPage(noPage)}
                                >
                                    {noPage}
                                </a>
                            </li>
                        ))
                    }
                    {/* para sm */}
                    <li className="flex md:hidden">
                        <button href="#" className={`flex items-center justify-center px-2 h-10 leading-tight text-gray-500 relative left-[13rem]  bottom-[3rem] 
                          hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white 
                          ${currentPage === 1 ? 'disabled:bg-red-500' : ''}`}
                            onClick={onNextPage}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 bg-white dark:bg-[#1f1d2b] rounded-lg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Pagination;
