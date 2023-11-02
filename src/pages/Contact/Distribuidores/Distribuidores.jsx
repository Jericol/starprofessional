import BannerDistri from '../../../../public/img/BANNER-ATENCIÓN-DISTRIBUIDORES.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { RiArrowUpSFill, RiArrowDownSFill, RiStarSFill } from "react-icons/ri";
import { EffectCoverflow, Pagination, Navigation, EffectCards } from 'swiper';
// imagenes beneficios
import Ganancias from '../../../../public/img/ganancias.jpg';
import Acompañamiento from '../../../../public/img/acompañamiento.jpg';
import Descuentos from '../../../../public/img/descuentos.jpg';
import Envios from '../../../../public/img/envios.jpg';
import CallCenter from '../../../../public/img/call-center.jpg';
// imagenes para testimonios
import TestimonyFirst from '../../../../public/img/testimonio1.jpg';
import TestimonySecond from '../../../../public/img/testimonio2.jpg';
import TestimonyThird from '../../../../public/img/testimonio3.jpg';
import TestimonyFourth from '../../../../public/img/testimonio-4-4.jpg';
import TestimonyFifth from '../../../../public/img/testimonio-4-4.jpg';
import { useState } from 'react';


function Distribuidores() {

    // estado de ganancias
    const [money, setMoney] = useState(false);
    // estado para acompañamiento
    const [asistent, setAsistent] = useState(false);
    // estado para callcenter
    const [callCenter, setCallCenter] = useState(false);
    // estado para envios
    const [send, setSend] = useState(false);
    // estado para descuentos
    const [sould, setSould] = useState(false);


    return (
        <div className="mx-auto h-auto p-0 m-0 box-border">
            {/* para pc / tablet */}
            <header className='md:flex md:flex-col '>
                {/* banner distribuidores*/}
                <section className='mb-8'>
                    <img
                        src={BannerDistri}
                        alt="Banner-de-distribuidor"
                        className="w-full object-cover"
                    />
                </section>
                {/* titulo / parrafo */}
                <section className='flex flex-col items-center justify-center gap-4 mb-8 p-5 m-5'>
                    <h2 className='lg:text-3xl md:text-2xl md:text-center text-xl text-center md:w-auto font-semibold '>
                        Potencia tus Ganancias como distribuidor: únete a nosotros
                    </h2>
                    <p className='lg:w-2/4 md:text-xl md:h-auto  md:text-center w-auto overflow-y-auto h-[14rem] text-center'>
                        ¿Estás listo para un emocionante viaje hacia el éxito? Únete a nuestra red de distribución y descubre un mundo de oportunidades ilimitadas. Aquí,
                        te ofrecemos mucho más que un simple programa de distribución. Te proporcionamos las herramientas para ganar más, un apoyo personalizado que te hará brillar y
                        ventajas que te destacarán en el mercado. Con envíos a todo el país, un servicio al cliente excepcional y descuentos exclusivos, estamos comprometidos a ayudarte a
                        alcanzar tus metas. Nuestros distribuidores son estrellas en ascenso, y tú podrías ser el próximo. ¿Estás listo para elevar tus ganancias y tu carrera?
                        Únete a nosotros y comienza a brillar hoy mismo.
                    </p>
                </section>
                <span className='mb-8'></span>
                {/* card / beneficios */}
                <div className='mb-14'>
                    <div className='flex flex-wrap items-center justify-center gap-5 h-auto'>
                        {/* ganancias */}
                        <div className='lg:w-[25%] h-2/4 border border-slate-500 rounded-md dark:border-slate-200 dark:bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 
                          bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 md:w-[19rem] w-[20rem]'
                        >
                            <img src={Ganancias} alt="" className='shadow-md shadow-black rounded-t-md object-cover' />
                            <button onClick={() => setMoney(!money)}
                                className='p-5 m-4 border border-gray-500 bg-slate-100 lg:w-[28rem] md:w-[16.8rem] w-[18rem] dark:bg-[#1d1f2b] rounded-md shadow-md shadow-black dark:border-slate-300'
                            >
                                {/* titulo / logo */}
                                <h2 className='text-center tracking-wide lg:text-2xl md:text-xl font-bold'>Ganancias</h2>
                                <div className='relative lg:left-[22rem] lg:bottom-[1.5rem] md:left-[14rem] md:bottom-[1.2rem] left-[13rem] bottom-[1.2rem]'>
                                    {
                                        money ?
                                            <RiArrowDownSFill />
                                            :
                                            <RiArrowUpSFill />
                                    }
                                </div>
                                {/* sidebar */}
                                <div className={`${money ? '' : 'hidden'}`}>
                                    <p className='font-normal'>
                                        Descubre una oportunidad única en la industria Ofrecemos los márgenes de ganancia más atractivos, precios altamente
                                        competitivos en productos de alta calidad y te respaldamos con asistencia personalizada y recursos eficientes oportunidades de crecimiento
                                        continuo para que tus ganancias crezcan a medida que tu negocio se expande
                                    </p>

                                </div>
                            </button>
                        </div>
                        {/* Acompañamiento */}
                        <div className='lg:w-[25%] md:w-[19rem] w-[20rem] h-2/4 border border-slate-500 rounded-md dark:border-slate-200 dark:bg-gradient-to-t dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500
                          bg-gradient-to-t from-pink-600 via-pink-500 to-pink-400'
                        >
                            <img src={Acompañamiento} alt="" className='shadow-md shadow-black rounded-t-md object-cover' />
                            <button onClick={() => setAsistent(!asistent)}
                                className='p-5 m-4 border border-gray-500 bg-slate-100 lg:w-[28rem] md:w-[16.8rem] w-[18rem] dark:bg-[#1d1f2b] rounded-md shadow-md shadow-black dark:border-slate-300'
                            >
                                {/* titulo / logo */}
                                <h2 className='text-center tracking-wide lg:text-2xl md:text-xl font-bold '>Acompañamiento</h2>
                                <div className='relative lg:left-[22rem] lg:bottom-[1.5rem] md:left-[14rem] md:bottom-[1.2rem] left-[13.4rem] bottom-[1.2rem]'>
                                    {
                                        asistent ?
                                            <RiArrowDownSFill />
                                            :
                                            <RiArrowUpSFill />
                                    }
                                </div>
                                {/* sidebar */}
                                <div className={`${asistent ? '' : 'hidden'}`}>
                                    <p className='font-normal'>
                                        En nuestra red de distribución, entendemos que tu éxito es nuestro éxito. Es por eso que ofrecemos un enfoque personalizado
                                        que va más allá de la simple transacción.
                                        Cuando te unes a nosotros como distribuidor, recibirás un nivel de acompañamiento que te hará sobresalir. Nuestro equipo de expertos
                                        está dedicado a brindarte asesoramiento
                                    </p>
                                </div>
                            </button>
                        </div>
                        {/* servicio al cliente */}
                        <div className='lg:w-[25%] md:w-[19rem] w-[20rem] h-2/4 border border-slate-500 rounded-md dark:border-slate-200 dark:bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500
                          bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400'
                        >
                            <img src={CallCenter} alt="" className='shadow-md shadow-black rounded-t-md object-cover' />
                            <button onClick={() => setCallCenter(!callCenter)}
                                className='p-5 m-4 border border-gray-500 bg-slate-100 lg:w-[28rem] md:w-[16.8rem] w-[18rem] dark:bg-[#1d1f2b] rounded-md shadow-md shadow-black dark:border-slate-300'
                            >
                                {/* titulo / boton */}
                                <h2 className='text-center tracking-wide lg:text-2xl md:text-xl font-bold'>Servicio al cliente</h2>
                                <div className='relative lg:left-[22rem] lg:bottom-[1.5rem] md:left-[14rem] md:bottom-[1.2rem] left-[14rem] bottom-[1.2rem]'>
                                    {
                                        callCenter ?
                                            <RiArrowDownSFill />
                                            :
                                            <RiArrowUpSFill />
                                    }
                                </div>
                                {/* sidebar */}
                                <div className={`${callCenter ? '' : 'hidden'}`}>
                                    <p className='font-normal'>
                                        En nuestra red de distribución, no solo te proporcionamos productos excepcionales, sino que también te respaldamos con un compromiso
                                        inquebrantable hacia tu éxito. Entendemos que cada distribuidor es único y enfrenta desafíos específicos en su camino
                                        Es por eso que ofrecemos un soporte y asistencia
                                    </p>
                                </div>
                            </button>
                        </div>
                        {/* envios */}
                        <div className='lg:w-[25%] md:w-[19rem] w-[20rem] h-2/4 border border-slate-500 rounded-md dark:border-slate-200 dark:bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500
                          bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400'
                        >
                            <img src={Envios} alt="" className='shadow-md shadow-black rounded-t-md object-cover' />
                            <button onClick={() => setSend(!send)}
                                className='p-5 m-4 border border-gray-500 bg-slate-100 lg:w-[28rem] md:w-[16.8rem] w-[18rem] dark:bg-[#1d1f2b] rounded-md shadow-md shadow-black dark:border-slate-400'
                            >
                                {/* titulo / boton */}
                                <h2 className='lg:text-2xl md:text-xl tracking-wide text-center font-bold'>Envios a todo el pais</h2>
                                <div className='relative lg:left-[22rem] lg:bottom-[1.5rem] md:left-[14rem] md:bottom-[1.2rem] left-[14rem] bottom-[1.3rem]'>
                                    {
                                        send ?
                                            <RiArrowDownSFill />
                                            :
                                            <RiArrowUpSFill />
                                    }
                                </div>
                                {/* sidebar */}
                                <div className={`${send ? '' : 'hidden'}`}>
                                    <p className='font-bangers font-normal'>
                                        Tu alcance no tiene límites. Ofrecemos envíos a todos los rincones de Colombia, lo que significa
                                        que puedes llegar a clientes en ciudades, pueblos y áreas remotas por igual
                                        Nuestra amplia red logística garantiza entregas rápidas y seguras en todo el país. Así que, sin importar
                                        dónde te encuentres o dónde estén tus clientes, Tu éxito no tiene fronteras con nosotros.
                                    </p>
                                </div>
                            </button>
                        </div>
                        {/* descuentos y promociones */}
                        <div className='lg:w-[25%] md:w-[19rem] w-[20rem] h-2/4 border border-slate-500 rounded-md dark:border-slate-200 dark:bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500
                          bg-gradient-to-r from-pink-600 to-pink-400'
                        >
                            <img src={Descuentos} alt="" className='shadow-md shadow-black rounded-t-md objec-cover' />
                            <button onClick={() => setSould(!sould)}
                                className='p-5 m-4 border border-gray-500 bg-slate-100 lg:w-[28rem] md:w-[16.8rem] w-[18rem] dark:bg-[#1f1d2b] rounded-md shadow-md dark:border-slate-400'
                            >
                                {/* titulo / boton */}
                                <h2 className='text-center lg:text-2xl md:text-xl tracking-wide font-bold'>promociones</h2>
                                <div className='relative lg:left-[22rem] lg:bottom-[1.5rem] md:left-[13rem] md:bottom-[1.2rem] left-[14rem] bottom-[1.2rem]'>
                                    {
                                        sould ?
                                            <RiArrowDownSFill />
                                            :
                                            <RiArrowUpSFill />
                                    }
                                </div>
                                {/* sidebar */}
                                <div className={`${sould ? '' : 'hidden'}`}>
                                    <p className='font-normal'>
                                        valoramos a nuestros socios y lo demostramos con promociones exclusivas que te brindarán ventajas adicionales. Sabemos que el éxito
                                        en la distribución se basa en oportunidades y márgenes atractivos. Es por eso que regularmente ofrecemos promociones especiales
                                        también obtendrás oportunidades adicionales para incrementar tus beneficios
                                    </p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                {/* card / testimonios */}
                <div className='mb-6'>
                    <div className='md:flex md:flex-wrap items-center justify-center gap-4'>
                        <section className='lg:w-[18%] md:w-[25%] w-[80%] mx-auto h-2/6 border border-slate-900 rounded-md bg-white dark:bg-[#1d1f2b]'>
                            <img 
                               src={TestimonyFirst} 
                               alt="" 
                               className='shadow-md shadow-black dark:shadow-white rounded-full m-4 object-cover lg:w-[12rem] md:w-[9rem] w-[12rem] mx-auto border 
                                border-slate-800' 
                            />
                            <div className='flex items-center justify-center mb-6'>
                                <RiStarSFill className='text-xl text-yellow-400' />
                                <RiStarSFill className='text-xl text-yellow-400' />
                                <RiStarSFill className='text-xl text-yellow-400' />
                                <RiStarSFill className='text-xl text-yellow-400' />
                                <RiStarSFill className='text-xl text-yellow-400' />
                            </div>
                            <p className='text-center w-auto h-auto p-5 lg:overflow-hidden lg:h-auto md:overflow-y-auto md:h-[4rem]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, minus quas.
                                Consectetur nesciunt facilis magni tenetur sint impedit culpa dolorem?
                            </p>
                        </section>
                        <section className='lg:w-[18%] md:w-[25%] w-[80%] mx-auto h-2/6 border border-slate-900 bg-white dark:bg-[#1d1f2b]'>
                            <img 
                               src={TestimonySecond} 
                               alt="" 
                               className='shadow-md shadow-black dark:shadow-white rounded-full m-4 object-cover lg:w-[12rem] md:w-[9rem] w-[12rem] mx-auto border 
                                border-slate-800' 
                            />
                            <div className='flex items-center justify-center mb-6'>
                                <RiStarSFill className='text-xl text-yellow-400' />
                                <RiStarSFill className='text-xl text-yellow-400' />
                                <RiStarSFill className='text-xl text-yellow-400' />
                                <RiStarSFill className='text-xl text-yellow-400' />
                                <RiStarSFill className='text-xl text-yellow-400' />
                            </div>
                            <p className='text-center w-auto h-auto p-4 lg:overflow-hidden lg:h-auto md:overflow-x-auto md:h-[4rem]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Non ex harum reprehenderit quae et cum voluptatibus quod nulla, neque hic!
                                molestias ut ea voluptatum dolorum
                            </p>
                        </section>
                        <section className='lg:w-[18%] md:w-[25%] w-[80%] mx-auto h-2/6 border border-slate-900 bg-white dark:bg-[#1d1f2b]'>
                            <img 
                               src={TestimonyFourth} 
                               alt="" 
                               className='shadow-md shadow-black dark:shadow-white rounded-full m-4 object-cover lg:w-[12rem] md:w-[9rem] w-[12rem] mx-auto border 
                                border-slate-800' 
                            />
                            <div className='flex items-center justify-center mb-6'>
                                <RiStarSFill className='text-xl text-yellow-400' />
                                <RiStarSFill className='text-xl text-yellow-400' />
                                <RiStarSFill className='text-xl text-yellow-400' />
                                <RiStarSFill className='text-xl text-yellow-400' />
                                <RiStarSFill className='text-xl text-yellow-400' />
                            </div>
                            <p className='text-center w-auto p-4 lg:overflow-hidden lg:h-auto md:overflow-y-auto md:h-[4rem]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero totam
                                molestias ut ea voluptatum dolorum quam modi enim repellat?
                            </p>
                        </section>
                        <section className='lg:w-[18%] md:w-[25%] w-[80%] mx-auto h-2/6 border border-slate-900 bg-white dark:bg-[#1d1f2b]'>
                            <img 
                               src={TestimonyFourth} 
                               alt="" 
                               className='shadow-md shadow-black dark:shadow-white rounded-full m-4 object-cover lg:w-[12rem] md:w-[9rem] w-[12rem] mx-auto border 
                                border-slate-800' 
                            />
                            <div className='flex items-center justify-center mb-6'>
                                <RiStarSFill className='text-xl text-yellow-400' />
                                <RiStarSFill className='text-xl text-yellow-400' />
                                <RiStarSFill className='text-xl text-yellow-400' />
                                <RiStarSFill className='text-xl text-yellow-400' />
                                <RiStarSFill className='text-xl text-yellow-400' />
                            </div>
                            <p className='text-center lg:w-auto lg:h-auto lg:overflow-hidden md:overflow-y-auto md:h-[4rem] p-4'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Impedit vero totam molestias ut ea voluptatum dolorum quam modi enim repellat?
                            </p>
                        </section>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Distribuidores;
