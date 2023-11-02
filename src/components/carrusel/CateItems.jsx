import React from 'react';
import Barberia from '../../../public/img/CATEGORIAS-PRINCIPALES-(BARBERIA).jpg'
import Capilar from '../../../public/img/CATEGORIAS-PRINCIPALES-(CAPILAR).jpg'
import Pestañas from '../../../public/img/CATEGORIAS-PRINCIPALES-(MAQUILLAJE-Y-PESTAÑAS).jpg'
import Uñas from '../../../public/img/CATEGORIAS-PRINCIPALES-(UÑAS).jpg'


function CateItems() {
    return (
        <div className=''>
            <div className="md:grid md:grid-cols-2 md:gap-2 m-8 grid grid-cols-1 gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={Capilar} alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={Barberia} alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={Pestañas} alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={Uñas} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default CateItems;
