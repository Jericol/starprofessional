
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const ProductSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            const products = action.payload
            return products
        }
    }
})

export const getProductsThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('http://190.60.237.163/articulos/?size=2000')
        .then((res) => {
            dispatch(setProducts(res.data.RESP))
            console.log(res)
        })
        .finally(() => dispatch(setIsLoading(false)));
}

export const filterProductCategoriesThunk = (Codigo) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`http://190.60.237.163/articulos/?familia=${Codigo}&size=2000`)
        .then((res) => dispatch(setProducts(res.data.RESP)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const groupFilterThunk = (codigo) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`http://190.60.237.163/articulos/?familia=${codigo}&size=2000`)
        .then((res) => dispatch(setProducts(res.data.RESP)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const NameFiltredThunk = (newSearch) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get(`http://190.60.237.163/articulos/?buscar=${newSearch}&size=1000`)
        .then((res) => dispatch(setProducts(res.data.RESP)))
        .finally(() => dispatch(setIsLoading(false)));
}


export const { setProducts } = ProductSlice.actions;

export default ProductSlice.reducer;