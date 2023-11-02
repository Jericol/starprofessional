import React, { useEffect, useReducer, useState } from 'react';
import { RiCloseFill, RiArrowDownSLine, RiBarChartLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../../store/slice/purchases.slice';
import { findCartThunk, getCartThunk } from '../../store/slice/cart.slice';
import { Link, useNavigate } from 'react-router-dom';
import './cart.css'

function Cart() {

    // usereducer 

    const dispatch = useDispatch();
    const cartList = useSelector(state => state.cart);
    const navigate = useNavigate();
    



    useEffect(() => {
        dispatch(getCartThunk())

    }, []);


    return (
        <div className='bg-slate-200/90 border-l-2 border-l-black dark:bg-[#1f1d2b] h-full'>
           
        </div>
    )
}

export default Cart;
