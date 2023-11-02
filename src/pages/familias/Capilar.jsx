import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { RiStackLine } from "react-icons/ri";
import { TECollapse } from "tw-elements-react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { filterProductCategoriesThunk, groupFilterThunk } from '../../store/slice/product.slice';
import CardNew from '../Home/card/CardNew';
import Pagination from '../../components/Pagination/Pagination';
import { alert, button, useSelect } from '@material-tailwind/react';
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import Accesorios from './utils/accesorios';
import Electricos from './utils/electricos';
import CuidadoCapilar from './utils/cuidado-capilar';
import Coloracion from './utils/coloracion';
import Finalizado from './utils/finalizado';


function Capilar() {

    const { Codigo } = useParams();

    const [activeElement, setActiveElement] = useState("");
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    const [items, setItems] = useState([]);
    const [productsPage, setProductsPage] = useState(16);
    const [currentPage, setCurrentPage] = useState(1);
    // los multiplos que se van a recorrer en en la paginacion
    const lastIndex = currentPage * productsPage
    const firsIndex = lastIndex - productsPage
    const totalProduct = items.length;
    const [currentList, setCurrentList] = useState(1);
    // traer articulos de redux
    const productList = useSelector(state => state.product);
    // accesorios
    const [showDrop, setShowDrop] = useState(true);
    // electricos
    const [isOpen, setIsOpen] = useState(true);
    // cuidado capilar
    const [capillaryCare, setCapillarvCare] = useState(true);
    // COLORACION Y/O QUIMICOS
    const [coloration, setColoration] = useState(true);
    // finalizado
    const [finalized, setFinalized] = useState(true);


    const handleClick = (value) => {
        if (value === activeElement) {
            setActiveElement("");
        } else {
            setActiveElement(value);
        }
    };

    useEffect(() => {
        axios.get('http://190.60.237.163/traegrupos/?codigo=A')
            .then((res) => setCategories(res.data.RESP))
    }, [])

    useEffect(() => {
        axios.get("http://190.60.237.163/articulos/?familia=A&size=20&pag=2")
            .then(res => setItems(res.data.RESP))
    }, []);

    

    const nameCategories = [
        {
            id: 1,
            name: 'Accesorios',
        },
        {
            id: 2,
            name: 'Electricos',
        },
        {
            id: 3,
            name: 'Cuidado capilar',
        },
        {
            id: 4,
            name: 'Coloracion y/o quimicos',
        },
        {
            id: 5,
            name: 'Finalizado'
        }
    ]

    console.log(items)

    console.log(categories)

    return (
        <div className='h-[90vh] '>
           <h2 className='text-2xl font-bold text-center'>Componente de Capilar</h2>
           {/* categorias */}
           <div>
             {
                categories.map((category, i) => (
                    <div key={i}>
                        <button>leo {category.Grupos[0]?.Nombre}</button>
                    </div>
                ))
             }
           </div>
           {/* card */}
           <section className='w-1/2 h-5/6 '>
              
           </section>
        </div>
    )
}

export default Capilar;

