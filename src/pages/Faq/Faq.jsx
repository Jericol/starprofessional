import Corporativo from '../../../public/img/BANNER-DESCRIPCION-CORPORATIVA.jpg';
import Vision from '../../../public/img/BANNER-VISION.jpg';
import Mision from '../../../public/img/BANNER-MISION.jpg';
import Valores from '../../../public/img/BANNER-VALORES-CORPORATIVOS.jpg'

function Faq() {
    return (
        <section className='lg:h-[160rem] md:h-[70rem] h-[40rem] overflow-hidden'>
            <header className=' '>
                <div className='mb-8'>
                    <img src="https://i.ibb.co/zHb5n6W/banner-edificio.jpg"
                        alt="foto-empresa"
                        className='md:h-[16rem] lg:w-full lg:h-[28rem] h-[9rem]'
                    />
                </div>
                <div className="lg:relative lg:top-36">
                    <img
                        src={Corporativo}
                        alt=""
                        className="hover:shadow-lg hover:shadow-gray-500 hover:transition-all hover:transform hover:duration-[.4s] dark:hover:shadow-md dark:hover:shadow-white"
                    />
                </div>
                {/* mision y vision */}
                <div className="flex items-center justify-center gap-12 lg:relative lg:top-[16rem] lg:left-2 md:relative md:top-[3rem] relative top-[2rem]">
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <img 
                               className="lg:h-auto md:w-[63rem]  rounded-lg hover:shadow-lg hover:shadow-slate-500 hover:transition hover:transform hover:duration-[.10s] 
                                dark:hover:shadow-md dark:hover:shadow-white object-cover" 
                               src={Vision}
                               alt="" 
                            />
                        </div>
                        <div>
                            <img 
                               className="h-auto w-[63rem] rounded-lg hover:shadow-lg hover:shadow-slate-500 hover:transition hover:transform hover:duration-[.10s] 
                               dark:hover:shadow-md dark:hover:shadow-white  object-cover" 
                               src={Mision} 
                               alt="" 
                            />
                        </div>
                    </div>
                </div>
                {/* valores corporativos */}
                <div className="lg:relative lg:top-[25rem] lg:left-[29rem] md:relative md:top-[4rem] relative top-[4rem]">
                    {/* para pc */}
                    <img 
                       src={Valores}
                       alt="" 
                       className="lg:flex hidden md:hidden h-auto lg:w-[80rem] md:w-[50rem] object-cover rounded-lg hover:shadow-gray-500 hover:transition-all hover:transform hover:duration-[.4s] "
                    />
                    {/* para tablet */}
                    <img 
                       src={Valores}
                       alt="" 
                       className="flex lg:hidden object-cover "
                    />
                </div>
            </header>
        </section>
    )
}

export default Faq;
