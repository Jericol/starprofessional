import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';
import getConfig from '../../utils/getConfig';

export const PurchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases: (state, action) => {
            const purchases = action.payload
            return purchases
        }
    }
})

export const getPurchasesThunk = () => (dispatch) => {
    dispatch( setIsLoading(true));
    return  axios.get(`http://190.60.237.163/vtascliente?cli=42126542&fecdes=2021/01/01&fechas=2022/06/01`, getConfig())
        .then((res) => dispatch(setPurchases(res.data.RESP)))
        .finally(() => dispatch(setIsLoading(false)));
}


export const { setPurchases  } = PurchasesSlice.actions;

export default PurchasesSlice.reducer;
