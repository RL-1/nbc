import { createSlice } from '@reduxjs/toolkit'

export interface HomeItemType {
    name: string
    link: string
    info: string
    image: string
    id: number
}
interface initialStateType {
    item: HomeItemType
}
const initialStateHome: initialStateType = {
    item: {
        name:'',
        link:'',
        image:'',
        id:0,
        info: ''
    }
}

export const homeSlice = createSlice({
  name: 'home',
  initialState: initialStateHome,
  reducers: {
    setItem(state, action){
        state.item = action.payload
    }
  },
})

export const { setItem } = homeSlice.actions
export default homeSlice.reducer