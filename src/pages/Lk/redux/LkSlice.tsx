import { createSlice } from '@reduxjs/toolkit'
import { HomeCardMassiveType, HomeItemType } from '../../Home/redux/HomeSlice'


interface initialStateType {
    boughtProduct: HomeItemType[],
    myProduct: HomeCardMassiveType[]
}
const initialStateLogin: initialStateType = {
    boughtProduct: [],
    myProduct: []
}

export const lkSlice = createSlice({
  name: 'lk',
  initialState: initialStateLogin,
  reducers: {
    boughtProductItem(state, action) {
        state.boughtProduct.push(action.payload)
    },
    addProduct(state, action) {
        state.myProduct.push(action.payload)
    },
    deleteProduct(state, action) {
      state.myProduct = state.myProduct.filter(
        (e, index) => action.payload !== index
      )
    }
  },
})

export const { boughtProductItem, addProduct, deleteProduct } = lkSlice.actions
export default lkSlice.reducer