import { createSlice } from '@reduxjs/toolkit'
import { HomeItemType } from '../../Home/redux/HomeSlice'


interface initialStateType {
    boughtProduct: HomeItemType[]
}
const initialStateLogin: initialStateType = {
    boughtProduct: []
}

export const lkSlice = createSlice({
  name: 'login',
  initialState: initialStateLogin,
  reducers: {
    boughtProductItem(state, action) {
        state.boughtProduct.push(action.payload)
    }
  },
})

export const { boughtProductItem } = lkSlice.actions
export default lkSlice.reducer