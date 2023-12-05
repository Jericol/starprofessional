import { Link, useNavigate } from 'react-router-dom';
import {
    RiShoppingCart2Line, RiAccountPinCircleLine, RiMoonClearFill,
    RiSunLine, RiSearch2Line
} from "react-icons/ri";
import { BsPatchCheck } from "react-icons/bs";
import { useCallback, useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import LogoStarB from '../../../assets/LOGO STAR SVG.svg'
import Group from '../Categorias/Grupos/Group';
import Pdf from '../../files/CATALOGO CLIENTES 23 SEPTIEMBRE.pdf'
import { useDispatch } from 'react-redux';
import { getCartThunk } from '../../store/slice/cart.slice';
import ButtonArrow from '../ButtonArrow/ButtonArrow';
import ListItems from './ListItems';
import ListItemsSm from './ListItemsSm';


// eslint-disable-next-line react/prop-types
function AppNavbar() {

    const [hide, setHide] = useState(false);
    // estado para dark mode
    const [theme, setTheme] = useState('light');
    // estado del logo para menu hamburguesa
    const [logo, setLogo] = useState(false);
    // estado para busqueda de productos
    const [search, setSearch] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    console.log("hola");

    const logout = () => {
        localStorage.setItem("usuario", "")
        navigate("/login")
    }

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])


    const handleClick = () => {
        setTheme(theme === "dark" ? "light" : "dark")
        setHide(!hide)
    }

    useEffect(() => {
        dispatch(getCartThunk())
    }, [])

    return (
        <header className='container mx-auto  h-auto' >
            <section className='flex flex-col gap-3 dark:bg-[#1f1d2b] dark:text-white'>
                <div className='flex items-center justify-between gap-4 border-b border-b-gray-700 px-2 lg:px-0'>
                    {/* hamburguesa */}
                    <article className='flex border border-slate-300 dark:border-[#1f1d2b] w-9 h-9 '>
                        <div className=''>
                            <button className='flex md:hidden z-20' onClick={() => setLogo(!logo)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    stroke="currentColor" className="w-6 h-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                </svg>
                            </button>
                                <div className={`absolute top-[6rem] z-20 bg-slate-300  dark:bg-[#1f1d2b] dark:text-white  w-[16rem] h-[38rem] rounded-lg border-r border-slate-700
                                    ${logo ? 'left-0' : '-left-full'} pl-2  transition-all duration-[.8s] overflow-x-hidden border-b border-slate-700`}
                                >
                                    {/* lista de menu */}
                                    <ul className='border-2 flex flex-col items-center justify-center gap-8 pt-9'>
                                      <ListItemsSm 
                                        logo={logo}
                                        setLogo={setLogo}
                                      />
                                    </ul>
                                </div>
                        </div>
                    </article>
                    {/* logo */}
                    <article className='flex items-center justify-center gap-2 lg:pl-5 md:pl-[3rem] pl-8'>
                        {
                            theme ?
                                <img src="../../../public/img/ICONO STAR PRO-01.png" alt="" className='object-cover object-center w-[100px] md:w-[200px] grow' />
                                :
                                <img src="../../../public/img/ICONO STAR PRO-02.png" alt="" />
                        }
                    </article>
                    {/* user menu */}
                    <ul className='flex items-center gap-4 md:gap-7 lg:gap-8'>
                        <li>
                            <RiSearch2Line
                                onClick={() => setSearch(!search)}
                                className='md:text-3xl text-lg hover:!scale-125 transition duration-[3.8s] dark:hover:text-blue-300 hover:text-blue-600 
                               text-black dark:text-white cursor-pointer'
                            />
                            <button className={`${search ? '' : 'hidden'} absolute top-[8rem] lg:right-[6rem]   w-full h-auto  `}
                                onClick={() => setSearch(!search)}
                            >
                                <SearchBar />
                            </button>
                        </li>
                        <li>
                            <RiShoppingCart2Line className='md:text-3xl text-xl hover:!scale-125 transition duration-[.8s] hover:text-green-400' />
                        </li>
                        <li onClick={handleClick} className='dark:text-gray-300 lg:flex items-center cursor-pointer  
                                rounded-md '
                        >
                            <Link className='flex justify-center w-7 h-7 md:w-10 md:h-10 rounded-xl bg-yellow-500 dark:bg-[#2C3976] md:rounded-bl-xl md:rounded-tl-xl 
                                hover:!scale-125 transition duration-[.8s] dark:border dark:border-slate-300 border border-b-black'

                            >
                                {hide ?
                                    <RiMoonClearFill className='text-white text-sm md:text-lg relative top-[5px] md:top-[11px]' />
                                    :
                                    <RiSunLine className='text-white text-sm md:text-lg relative top-[5px] md:top-[11px]' />}
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* menu list */}
                <div className='py-4 relative bottom-2 px-4 lg:px-0'>
                    <ListItems  />
                </div>
            </section>
        </header>
    )
}

export default AppNavbar;