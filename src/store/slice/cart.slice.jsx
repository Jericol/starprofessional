import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';
import axios from 'axios';
import headerConfig from '../../utils/headerConfig';


export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (state, action) => {
            const purchasesCart = action.payload
            return purchasesCart;
        }
    }
})




export const checkIdThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post("http://190.60.237.163/encabezadoped", {})
        .then((res) => dispatch(setCart(res.data.RESP)))
        .finally(() => dispatch(setIsLoading(false)));
}


// funcion antigua 
  export const getCartThunk = (data) => (dispatch) => {
      dispatch(setIsLoading(true));
      return axios.post('http://190.60.237.163/verdetalleped', headerConfig(data))
          .then((res) => dispatch(setCart(res.data.RESP)))
          .finally(() => dispatch(setIsLoading(false)));
  }


 export const addCartThunk = (data) => (dispatch) => {
     dispatch(setIsLoading(true));
     return axios.post("http://190.60.237.163/itempedido",  headerConfig(data))
         .then((res) => dispatch(setCart(res.data.RESP)))
         .catch(() => alert('hubo un error'))
         .finally(() => dispatch(setIsLoading(false)));
 }

 export const findCartThunk = (data) => (dispatch) => {
     dispatch(setIsLoading(true));
     return axios.post("http://190.60.237.163/finpedido", {}, headerConfig(data))
         .then(() => dispatch(setCart()))
         .finally(() => dispatch(setIsLoading(false)));
 }


export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
// http://190.60.237.163/regcliente/
// http://190.60.237.163/?itempedido