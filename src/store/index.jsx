import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slice/isLoading.slice'
import productSlice from './slice/product.slice'
import purchasesSlice from './slice/purchases.slice'
import cartSlice from './slice/cart.slice'
import registerSlice from './slice/register.slice'

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        product: productSlice,
        purchases: purchasesSlice,
        cart: cartSlice,
        register: registerSlice
    }
})
