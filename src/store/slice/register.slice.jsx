import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const registerSlice = createSlice({
    name: 'register',
    initialState: "",
    reducers: {
        setRegistered: (state, action) => {
            const registered = action.payload
            return registered
        }
    }
})

export const registerThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post("http://190.60.237.163/regcliente/")
        .then((res) => dispatch(setRegistered(res.data.RESP)))
        .finally(() => dispatch(setIsLoading(false)));
}
export const { setRegistered } = registerSlice.actions;

export default registerSlice.reducer;
