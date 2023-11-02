import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { filterProductCategoriesThunk, getProductsThunk } from "../../store/slice/product.slice";
import { RiShoppingCartLine, RiArrowDownSFill, RiSubtractFill, RiAddLine } from "react-icons/ri";
import { FcInTransit, FcShipped } from "react-icons/fc";

import Cart from "../../components/cart/Cart";
import Pagination from "../../components/Pagination/Pagination";
import { getCartThunk } from "../../store/slice/cart.slice";
import LinkSeccion from "../../components/Botonup/LinkSeccion";


function ProductsDetail() {

    const { Codigo } = useParams();
    const dispatch = useDispatch();
    const newsSuggested = useSelector(state => state.product)
    const totalProduct = newsSuggested.length;
    const [productsPage, setProductsPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);

    const lastIndex = currentPage * productsPage;
    const firsIndex = lastIndex - productsPage;

    const [news, setNews] = useState([]);
    const navigate = useNavigate();

    const [Cantidad, setCantidad] = useState(1);
    const [codeItem, setCodeItem] = useState(false);


    // PARA FILTRAR CATEGORIAS 
    useEffect(() => {
        axios.get(`http://190.60.237.163/articulos/?buscar=${Codigo}&size=1`)
            .then(res => {
                setNews(res.data.RESP)
                // console.log(res.data.RESP[0]?.CodFami)
                dispatch(filterProductCategoriesThunk(res.data.RESP[0]?.CodFami))
            })
            .catch(error => {
                if (error.menssage) {
                    console.log("no resivimos nuestra peticion")
                } else {
                    console.log("solicitud rechazada")
                }
            })
    }, [Codigo]);

    // console.log(news)
    // encabezado de verdatalle de carrito
    const Authentication = (data) => {
        axios.post("190.60.237.163/encabezadoped", data)
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data)
                    localStorage.setItem("id", res.data.id)
                } else {
                    console.log('error en la respuesta')
                }
            })
            .catch(error => {
                console.log(error, 'error en endpoint encabezado')
            })
    }


    return (
        <div className="lg:h-[200rem] dark:bg-[#1f1d2b] dark:text-white md:h-auto">
            <div className="mx-auto   mb-5 container ">
                {/* detalles para pc */}
                < div className="container lg:flex items-center bg-white dark:bg-[#1f1d2b] border-2 border-slate-400 rounded-lg hidden " >
                    {
                        news.map(items => (
                            <>
                                <div className=" flex-1 lg:h-[80rem]">
                                    {/* imagen de producto */}
                                    <div className="lg:relative lg:left-[16rem] mb-4">
                                        <img src={items.Foto} alt={items.Descripcion} className="lg:w-[600px] hover:transform hover:scale-(1.2)" />
                                    </div>
                                    {/* caracteristicas del producto */}
                                    <h2 className="text-2xl font-semibold text-black dark:text-white pl-12 mb-4">Características del producto</h2>
                                    <div className="grid grid-cols-2 gap-6 m-4 dark:text-white">
                                        {/* caracteristicas principales */}
                                        <div className="border border-slate-400 h-[19rem] rounded-lg text-black ">
                                            <h2 className="text-lg font-semibold text-center dark:text-white">Características principales</h2>
                                            <div className="flex flex-col gap-11 relative top-[3rem]">
                                                <div className="flex items-center justify-around bg-slate-300 py-3">
                                                    <p className="font-semibold text-lg">Marca:</p>
                                                    <p className="font-semibold text-lg">{items.Marca}</p>
                                                </div>
                                                <div className="flex items-center justify-around bg-slate-300 py-3">
                                                    <p className="font-semibold text-lg">Referencia:</p>
                                                    <p className="font-semibold text-lg">{items.Codigo}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* medidas */}
                                        <div className="border border-slate-400 h-[19rem] rounded-lg text-black ">
                                            <h2 className="text-lg font-semibold text-center dark:text-white">Otros</h2>
                                            <div className="flex flex-col gap-4 relative top-[2rem]">
                                                <div className="flex items-center justify-around bg-slate-300 py-3">
                                                    <p className="font-semibold text-lg">Alto:</p>
                                                    <p className="font-semibold text-lg">{items.Alto} cm</p>
                                                </div>
                                                <div className="flex items-center justify-around bg-slate-300 py-3">
                                                    <p className="font-semibold text-lg">Largo:</p>
                                                    <p className="font-semibold text-lg">{items.Largo} cm</p>
                                                </div>
                                                <div className="flex items-center justify-around bg-slate-300 py-3">
                                                    <p className="font-semibold text-lg">Ancho:</p>
                                                    <p className="font-semibold text-lg">{items.Ancho} cm</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* descripcion larga  */}
                                    <div className="border border-slate-400 flex gap-4 rounded-lg h-[22rem] mx-4">
                                        <div className="">
                                            <h2 className="text-lg font-semibold text-center py-3 dark:text-white text-black">Descripcion</h2>
                                            <p className="text-black font-semibold  text-xl text-center lg:px-4 dark:text-white">{items.Adicional}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* TITULO REFERENCIA TITULO Y PRECIO */}
                                <div className="lg:w-[25rem] lg:h-[100rem] lg:relative lg:top-[5rem]">
                                    <div className="mr-4 px-3 py-3 h-[90rem] border-2 border-slate-400 rounded-lg">
                                        <div className="flex flex-col items-center relative top-[4rem]">
                                            <div>
                                                <h2 className="text-2xl font-semibold text-start text-black dark:text-white">{items.Descripcion}</h2>
                                            </div>
                                            {/* precio */}
                                            <div className="relative right-[6.4rem] mb-6">
                                                <p className="text-4xl font-semibold text-black dark:text-white">
                                                    $ {items.Precio}
                                                </p>
                                            </div>
                                            {/* referencia - codigo */}
                                            <span className="text-2xl font-semibold  bottom-[1rem]">Ref: {items.Codigo}</span>
                                            {/* escalas de precios */}
                                            <div className='flex items-center justify-around gap-4 text-black dark:text-white border border-slate-400 px-2 py-1 
                                              rounded-lg w-[22rem] mb-2'
                                            >
                                                <p className='text-xs md:text-sm lg:text-xl'>2und</p>
                                                <p className='text-xs md:text-sm lg:text-xl'>6und</p>
                                                <p className='text-xs md:text-sm lg:text-xl'>12und</p>
                                            </div>
                                            <div className='flex items-center justify-around gap-4 w-[22rem] mb-4'>
                                                <span className='md:font-semibold lg:text-lg md:text-sm text-xs'>{items.Precio3}</span>
                                                <span className='md:font-semibold lg:text-lg md:text-sm text-xs'>{items.Precio4}</span>
                                                <span className='md:font-semibold lg:text-lg md:text-sm text-xs'>{items.Precio5}</span>
                                            </div>
                                            {/* envios contraentrega y gratis */}
                                            <div className="mb-6 ">
                                                <div className="flex flex-col gap-4">
                                                    <div className="flex items-center gap-5">
                                                        <FcInTransit className="text-4xl" />
                                                        <p className="text-base font-medium">Envios contraentrega Solo Bogotá</p>
                                                    </div>
                                                    <div className="flex items-center gap-5">
                                                        <FcShipped className="text-4xl" />
                                                        <p>Envío grátis por pedidos superiores a $150.000</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* tiempo de envios */}
                                            <div className="mb-8">
                                                <p className="text-lg font-semibold text-gray-500 dark:text-white">Envios a nivel nacional</p>
                                                <p className="text-lg text-gray-600  dark:text-white">
                                                    Las entregas seran de 1 a 3 dias a nivel bogotá y a nivel nacional de 5 a 7 dias habiles, Ten en cuenta que sabados, domingos y festivos no son dias habiles
                                                </p>
                                            </div>
                                        </div>
                                        {/* redes sociales */}
                                        <div className="mb-6">
                                            <div className="flex items-center justify-around gap-4 pt-[4rem] mb-6">
                                                {/* tiktok */}
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48" className="bg-white rounded-2xl">
                                                    <path fill="#212121" fillRule="evenodd" d="M10.904,6h26.191C39.804,6,42,8.196,42,10.904v26.191 C42,39.804,39.804,42,37.096,42H10.904C8.196,42,6,39.804,6,37.096V10.904C6,8.196,8.196,6,10.904,6z" clipRule="evenodd"></path><path fill="#ec407a" fillRule="evenodd" d="M29.208,20.607c1.576,1.126,3.507,1.788,5.592,1.788v-4.011 c-0.395,0-0.788-0.041-1.174-0.123v3.157c-2.085,0-4.015-0.663-5.592-1.788v8.184c0,4.094-3.321,7.413-7.417,7.413 c-1.528,0-2.949-0.462-4.129-1.254c1.347,1.376,3.225,2.23,5.303,2.23c4.096,0,7.417-3.319,7.417-7.413L29.208,20.607L29.208,20.607 z M30.657,16.561c-0.805-0.879-1.334-2.016-1.449-3.273v-0.516h-1.113C28.375,14.369,29.331,15.734,30.657,16.561L30.657,16.561z M19.079,30.832c-0.45-0.59-0.693-1.311-0.692-2.053c0-1.873,1.519-3.391,3.393-3.391c0.349,0,0.696,0.053,1.029,0.159v-4.1 c-0.389-0.053-0.781-0.076-1.174-0.068v3.191c-0.333-0.106-0.68-0.159-1.03-0.159c-1.874,0-3.393,1.518-3.393,3.391 C17.213,29.127,17.972,30.274,19.079,30.832z" clipRule="evenodd"></path><path fill="#fff" fillRule="evenodd" d="M28.034,19.63c1.576,1.126,3.507,1.788,5.592,1.788v-3.157 c-1.164-0.248-2.194-0.856-2.969-1.701c-1.326-0.827-2.281-2.191-2.561-3.788h-2.923v16.018c-0.007,1.867-1.523,3.379-3.393,3.379 c-1.102,0-2.081-0.525-2.701-1.338c-1.107-0.558-1.866-1.705-1.866-3.029c0-1.873,1.519-3.391,3.393-3.391 c0.359,0,0.705,0.056,1.03,0.159V21.38c-4.024,0.083-7.26,3.369-7.26,7.411c0,2.018,0.806,3.847,2.114,5.183 c1.18,0.792,2.601,1.254,4.129,1.254c4.096,0,7.417-3.319,7.417-7.413L28.034,19.63L28.034,19.63z" clipRule="evenodd"></path><path fill="#81d4fa" fillRule="evenodd" d="M33.626,18.262v-0.854c-1.05,0.002-2.078-0.292-2.969-0.848 C31.445,17.423,32.483,18.018,33.626,18.262z M28.095,12.772c-0.027-0.153-0.047-0.306-0.061-0.461v-0.516h-4.036v16.019 c-0.006,1.867-1.523,3.379-3.393,3.379c-0.549,0-1.067-0.13-1.526-0.362c0.62,0.813,1.599,1.338,2.701,1.338 c1.87,0,3.386-1.512,3.393-3.379V12.772H28.095z M21.635,21.38v-0.909c-0.337-0.046-0.677-0.069-1.018-0.069 c-4.097,0-7.417,3.319-7.417,7.413c0,2.567,1.305,4.829,3.288,6.159c-1.308-1.336-2.114-3.165-2.114-5.183 C14.374,24.749,17.611,21.463,21.635,21.38z" clipRule="evenodd"></path>
                                                </svg>
                                                {/* facebook */}
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48" className="bg-white rounded-full">
                                                    <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                                                </svg>
                                                {/* instagram */}
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48" className="bg-white rounded-2xl">
                                                    <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"></stop><stop offset=".328" stopColor="#ff543f"></stop><stop offset=".348" stopColor="#fc5245"></stop><stop offset=".504" stopColor="#e64771"></stop><stop offset=".643" stopColor="#d53e91"></stop><stop offset=".761" stopColor="#cc39a4"></stop><stop offset=".841" stopColor="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"></stop><stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        {/* botones de compra y añadir al carrito */}
                                        <div className="mb-6">
                                            <div className="flex flex-col gap-5 pt-8">
                                                <button className="px-3 py-3 text-center text-lg font-semibold bg-blue-500 rounded-lg text-white">
                                                    <Link to='/payment'>
                                                        Añadir al carrito
                                                    </Link>
                                                </button>
                                                <button className="px-3 py-3 text-center text-lg font-semibold bg-blue-200 rounded-lg text-blue-600">
                                                    Comprar ahora
                                                </button>
                                            </div>
                                        </div>
                                        {/* referencias y codigo */}
                                        <div className={` `}>
                                            {/* boton de desplazamiento */}
                                            <button onClick={() => setCodeItem(!codeItem)}>
                                                <h2 className="text-xl font-semibold relative left-[4rem]">Escoge tu referencia</h2>
                                                {/* icono  */}
                                                <div className="cursor-pointer relative left-[17.5rem] bottom-[1.4rem]">
                                                    {
                                                        codeItem ?
                                                            <RiAddLine className="text-lg" />
                                                            :
                                                            <RiSubtractFill className="text-lg" />
                                                    }
                                                </div>
                                            </button>
                                            {/* sidebar */}
                                            <div className={`border border-slate-400 w-[22.3rem] h-[14rem] ${!codeItem ? '' : 'hidden'}`}>
                                                <div className="flex flex-col items-center justify-around gap-4 pt-4">
                                                    <label htmlFor="" className=" ">Numero de referencia</label>
                                                    <input type="number" name="" id="" className="border border-slate-500 rounded-lg px-2 mb-6" />
                                                    <label htmlFor="" className=" ">Cantidad</label>
                                                    <input type="number" name="" id="" className="border border-slate-500 rounded-lg px-2 mb-6" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
                {/* detalles para tablet */}
                <div className="container md:flex md:items-center bg-white dark:bg-[#1f1d2b] border-2 border-slate-400 rounded-lg lg:hidden hidden">
                    {
                        news.map(items => (
                            <>
                                <div className="flex-1 h-[50rem]">
                                    {/* imagen de producto */}
                                    <div className="relative left-[6rem] mb-4">
                                        <img src={items.Foto} alt={items.Descripcion} className="w-[300px]" />
                                    </div>
                                    {/* caracteristicas del producto */}
                                    <h2 className="text-xl font-semibold dark:text-white pl-12 mb-4">Características del producto</h2>
                                    <div className="grid grid-cols-2 gap-6 m-4 dark:text-white">
                                        {/* caracteristicas principales */}
                                        <div className="border border-slate-400 h-[14rem] rounded-lg text-black">
                                            <div className="flex flex-col gap-11 relative top-[2rem]">
                                                <div className="flex items-center justify-around bg-slate-300 py-3">
                                                    <p className=" text-lg">Marca:</p>
                                                    <p className=" text-sm">{items.Marca}</p>
                                                </div>
                                                <div className="flex items-center justify-around bg-slate-300 py-3">
                                                    <p className="text-sm">Ref:</p>
                                                    <p className="text-sm">{items.Codigo}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* medidad */}
                                        <div className="border border-slate-400 h-[14rem] rounded-lg text-black">
                                            <div className="flex flex-col gap-4 relative top-[2rem]">
                                                <div className="flex items-center justify-around bg-slate-300 py-3">
                                                    <p className="text-sm">Alto:</p>
                                                    <p className="text-sm">{items.Alto} cm</p>
                                                </div>
                                                <div className="flex items-center justify-around bg-slate-300 py-3">
                                                    <p className="text-sm">Largo:</p>
                                                    <p className="text-sm">{items.Largo} cm</p>
                                                </div>
                                                <div className="flex items-center justify-around bg-slate-300 py-3">
                                                    <p className="text-sm">Ancho:</p>
                                                    <p className="text-sm">{items.Ancho} cm</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* descripcion larga */}
                                    <div className="border border-slate-400 flex gap-4 rounded-lg h-[14rem] w-[30rem] relative left-1">
                                        <div>
                                            <h2 className="text-lg font-semibold text-center py-3 dark:text-white text-black">Descripcion</h2>
                                            <p className="text-black font-semibold  text-sm text-center lg:px-4 dark:text-white">{items.Adicional}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* TITULO  REFERENCIA Y PRECIO */}
                                <div className="w-[17rem] h-[60rem] relative top-[1.5rem]">
                                    <div className="mr-4 px-3 py-3 h-[55rem] border-2 border-slate-400 rounded-lg">
                                        <div className="flex flex-col items-center relative top-[2rem]">
                                            {/* titulo de producto */}
                                            <div>
                                                <h2 className="text-sm font-semibold text-black dark:text-white mb-4">{items.Descripcion}</h2>
                                            </div>
                                            {/* precio */}
                                            <div className="relative left-1 mb-6 flex flex-col items-center gap-2">
                                                <div className="">
                                                    <p className="text-xl pl-3 font-semibold text-black dark:text-white">${items.Precio}</p>
                                                </div>

                                                <div className="">
                                                    <span className="text-base pr-6 font-semibold text-black dark:text-white">Referencia: {items.Codigo}</span>
                                                </div>
                                            </div>
                                            <span className="relative right-[2.2rem] text-lg font-semibold mb-6">Stock: Disponible</span>
                                            {/* envios contra entrega */}
                                            <div className="mb-6 ">
                                                <div className="flex flex-col gap-4">
                                                    <div className="flex items-center gap-5">
                                                        <FcInTransit className="text-4xl" />
                                                        <p className="text-sm font-medium">Envios contraentrega Solo Bogotá</p>
                                                    </div>
                                                    <div className="flex items-center gap-5">
                                                        <FcShipped className="text-4xl" />
                                                        <p className="text-sm">Envío grátis por pedidos superiores a $150.000</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* tiempo de envios */}
                                            <div className="mb-4">
                                                <p className="text-sm font-semibold text-gray-500 dark:text-white">Envios a nivel nacional</p>
                                                <p className="text-sm text-gray-600  dark:text-white">
                                                    Las entregas seran de 1 a 3 dias a nivel bogotá y a nivel nacional de 5 a 7 dias habiles, Ten en cuenta que sabados, domingos y festivos no son dias habiles
                                                </p>
                                            </div>
                                            {/* botones de compra y añadir al carrito */}
                                            <div >
                                                <div className="flex flex-col gap-5 pt-8 mb-6">
                                                    <button className="px-3 py-3 text-center text-lg font-semibold bg-blue-500 rounded-lg text-white">
                                                        <Link to='/payment'>Comprar ahora</Link>

                                                    </button>
                                                    <button className="px-3 py-3 text-center text-lg font-semibold bg-blue-200 rounded-lg text-blue-600">añadir al carrito</button>
                                                </div>
                                            </div>
                                            {/* medios de pago */}
                                            <div>
                                                <div className="border border-slate-400 h-[14rem] w-[15rem]">
                                                    <h2 className="text-center ">Medios de pago</h2>
                                                    <div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
                {/* detalles para celular */}
                <div className="container flex items-center h-[88rem] bg-white dark:bg-[#1f1d2b] border-2 border-slate-400 rounded-lg md:hidden">
                    {
                        news.map(items => (
                            <>
                                {/* contenido */}
                                <div className="flex-1 h-[50rem] relative bottom-[12rem]">
                                    {/* titulo */}
                                    <div className="mb-4">
                                        <h2 className="text-xl text-center max-w-xs relative left-12">{items.Descripcion}</h2>
                                    </div>
                                    {/* imagen del producto */}
                                    <div className="relative left-[5rem] mb-4">
                                        <img
                                            src={items.Foto}
                                            alt={items.Descripcion}
                                            className="w-[200px] shadow-md shadow-gray-300 rounded-lg "
                                        />
                                    </div>
                                    {/* precio */}
                                    <div className="relative left-[3rem] mb-6 flex items-center gap-9">
                                        <div>
                                            <p className="text-xl font-semibold text-black dark:text-white">$ {items.Precio}</p>
                                        </div>
                                        <div>
                                            <span className="text-xl font-semibold text-black dark:text-white">Referencia: {items.Codigo}</span>
                                        </div>
                                    </div>
                                    {/* contraentrega */}
                                    <div className="mb-6 ">
                                        <div className="flex flex-col ">
                                            <div className="flex items-center gap-5">
                                                <FcInTransit className="text-3xl" />
                                                <p className="text-sm font-medium">Envios contraentrega Solo Bogotá</p>
                                            </div>
                                            <div className="flex items-center gap-5">
                                                <FcShipped className="text-3xl" />
                                                <p className="text-sm">Envío grátis por pedidos superiores a $150.000</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* botones de compra y añadir al carrito */}
                                    <div >
                                        <div className="flex flex-col items-center gap-5 pt-8 mb-6">
                                            <button className="px-3 py-3 text-center text-xs w-[17rem] font-semibold bg-blue-500 rounded-lg text-white">Comprar ahora</button>
                                            <button className="px-3 py-3 text-center text-xs w-[17rem] font-semibold bg-blue-200 rounded-lg text-blue-600">añadir al carrito</button>
                                        </div>
                                    </div>
                                    {/* caracteristicas del producto */}
                                    <h2 className="text-xl font-semibold dark:text-white pl-12 mb-4">Características del producto</h2>
                                    <div className="grid grid-cols-2 gap-6 m-4 dark:text-white">
                                        {/* caracteristicas principales */}
                                        <div className="border border-slate-400 h-[14rem] rounded-lg text-black">
                                            <div className="flex flex-col gap-11 relative top-[2rem]">
                                                <div className="flex items-center justify-around bg-slate-300 py-3">
                                                    <p className=" text-lg">Marca:</p>
                                                    <p className=" text-sm">{items.Marca}</p>
                                                </div>
                                                <div className="flex items-center justify-around bg-slate-300 py-3">
                                                    <p className="text-lg">Ref:</p>
                                                    <p className="text-sm">{items.Codigo}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* medidad */}
                                        <div className="border border-slate-400 h-[14rem] rounded-lg text-black">
                                            <div className="flex flex-col gap-4 relative top-[2rem]">
                                                <div className="flex items-center justify-around bg-slate-300 py-3">
                                                    <p className="text-sm">Alto:</p>
                                                    <p className="text-sm">{items.Alto} cm</p>
                                                </div>
                                                <div className="flex items-center justify-around bg-slate-300 py-3">
                                                    <p className="text-sm">Largo:</p>
                                                    <p className="text-sm">{items.Largo} cm</p>
                                                </div>
                                                <div className="flex items-center justify-around bg-slate-300 py-3">
                                                    <p className="text-sm">Ancho:</p>
                                                    <p className="text-sm">{items.Ancho} cm</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* descripcion larga */}
                                        <div className="border border-slate-400 flex gap-4 rounded-lg h-[22rem] w-[22rem] relative left-1">
                                            <div>
                                                <h2 className="text-lg font-semibold text-center py-3 dark:text-white text-black">Descripcion</h2>
                                                <p className="text-black font-semibold  text-sm text-center lg:px-4 dark:text-white">{items.Adicional}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </>
                        ))
                    }
                </div>
                {/* seccion detalles */}
                <h2 className="lg:relative lg:top-[8rem] lg:text-center lg:font-semibold lg:text-4xl">Productos Similares</h2>
                {/* productos similares */}
                <section className='lg:pl-16 lg:relative lg:top-[12rem] p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-28 font-monserrat font-semibold overflow-y-auto h-[60rem] mb-6'>
                    {
                        newsSuggested?.map(newsItem => (
                            <section key={newsItem.Codigo} onClick={() => navigate(`/productsDetail/${newsItem?.Codigo}`)}
                                className='bg-white text-black dark:bg-[#1f1d2b] p-8 rounded-xl flex flex-col items-center gap-2 
                                 dark:text-gray-300 text-center border-2 border-black '
                            >
                                <img
                                    src={newsItem?.Foto}
                                    alt=""
                                    className='object-cover w-60 cursor-pointer'
                                />
                                <p>{newsItem?.Descripcion}</p>
                                <span>REF: {newsItem?.Codigo}</span>
                                <p>$: {newsItem?.Precio}</p>
                                <div className='flex items-center justify-around gap-4 text-black border-2 rounded-lg dark:text-white border-slate-400 px-2 py-1 
                                   '
                                >
                                    <p className='text-xs md:text-sm lg:text-xl'>2und</p>
                                    <p className='text-xs md:text-sm lg:text-xl'>6und</p>
                                    <p className='text-xs md:text-sm lg:text-xl'>12und</p>
                                </div>
                                <div className='flex items-center justify-around gap-4'>
                                    <span className='md:font-semibold lg:text-lg md:text-sm text-xs'>{newsItem.Precio3}</span>
                                    <span className='md:font-semibold lg:text-lg md:text-sm text-xs'>{newsItem.Precio4}</span>
                                    <span className='md:font-semibold lg:text-lg md:text-sm text-xs'>{newsItem.Precio5}</span>
                                </div>
                                <section>
                                    <button
                                        className="px-7 py-3 bg-blue-500 rounded-lg font-bold transform text-white hover:bg-green-400 
                                        hover:scale-110 hover:text-black transition duration-500"
                                    >
                                        Añadir al carrito
                                    </button>
                                </section>
                            </section>
                        ))
                        // .slice(firsIndex, lastIndex)
                    }
                    {/* <Pagination
                        productsPage={productsPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        totalProduct={totalProduct}

                    /> */}
                </section>
                <div className="w-full bg-slate-400 h-auto relative rounded-md p-5 dark:bg-[#332f46]">
                    <div className="flex items-center justify-center gap-4 lg:gap-[12rem] dark:text-white py-8">
                    <Link to="/" className="uppercase text-md md:text-2xl tracking-[2px] py-1 px-1 md:py-2 md:px-2 bg-white dark:dark:bg-[#262131] rounded-md font-semibold">
                            ir a inicio
                        </Link>
                        <Link to="/newProduct" className="uppercase text-md md:text-2xl tracking-[2px] py-1 px-1 md:py-2 md:px-2 bg-white dark:dark:bg-[#262131] rounded-md font-semibold">
                            ir a productos
                        </Link>
                        <Link to="/login" className="uppercase md:text-2xl tracking-[2px] md:py-2 md:px-2 py-1 px-2 bg-white dark:dark:bg-[#262131] rounded-md font-semibold">
                            ir a acceder
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductsDetail;
