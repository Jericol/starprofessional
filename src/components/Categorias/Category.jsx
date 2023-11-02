import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { filterProductCategoriesThunk, groupFilterThunk } from '../../store/slice/product.slice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Categories() {

    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [rotate, setRotate] = useState(false);
    const [open, setOpen] = useState(false);


    useEffect(() => {
        axios.get('http://190.60.237.163/traegrupos')
            .then(res => setCategories(res.data.RESP))
    }, [])

    console.log(categories)

    const handleGrupo = () => {
        navigate()
    }

    return (
       <div>
          
       </div>
    )
}

export default Categories;
