import { createSlice } from '@reduxjs/toolkit'
//@ts-ignore
import geforce3060img from '../../../assets/images/gf3060.jpg';
//@ts-ignore
import geforce2060img from '../../../assets/images/gf2080.jpg';
//@ts-ignore
import i510400img from '../../../assets/images/i510040.jfif';


export interface HomeItemType {
    name: string
    link: string
    info: string
    image: string
    id: number
}
export interface HomeCardMassiveType {
    name: string
    info: string
    image: string
}
interface initialStateType {
    item: HomeItemType,
    homeCardMassive: HomeCardMassiveType[]
}
const initialStateHome: initialStateType = {
    item: {
        name:'',
        link:'',
        image:'',
        id:0,
        info: ''
    },
    homeCardMassive: [
        {
            name: "geforce 3060",
            info: "Malicious cyber attacks are becoming more advanced and more prevalent every day. Organizations need enhanced threat intelligence to be able to prepare for these cyber attacks. Learn how Infoblox can help your organization be ready for these threats and prevent data loss and downtime at the same time.",
            image: geforce3060img
        },
        {
            name: "geforce 2060",
            info: "Malicious cyber attacks are becoming more advanced and more prevalent every day. Organizations need enhanced threat intelligence to be able to prepare for these cyber attacks. Learn how Infoblox can help your organization be ready for these threats and prevent data loss and downtime at the same time.",
            image: geforce2060img
        },
        {
            name: "i5 10400",
            info: "Malicious cyber attacks are becoming more advanced and more prevalent every day. Organizations need enhanced threat intelligence to be able to prepare for these cyber attacks. Learn how Infoblox can help your organization be ready for these threats and prevent data loss and downtime at the same time.",
            image: i510400img
        },
        {
            name: "geforce 3060",
            info: "Malicious cyber attacks are becoming more advanced and more prevalent every day. Organizations need enhanced threat intelligence to be able to prepare for these cyber attacks. Learn how Infoblox can help your organization be ready for these threats and prevent data loss and downtime at the same time.",
            image: geforce3060img
        },
        {
            name: "geforce 2060",
            info: "Malicious cyber attacks are becoming more advanced and more prevalent every day. Organizations need enhanced threat intelligence to be able to prepare for these cyber attacks. Learn how Infoblox can help your organization be ready for these threats and prevent data loss and downtime at the same time.",
            image: geforce2060img
        },
        {
            name: "i5 10400",
            info: "Malicious cyber attacks are becoming more advanced and more prevalent every day. Organizations need enhanced threat intelligence to be able to prepare for these cyber attacks. Learn how Infoblox can help your organization be ready for these threats and prevent data loss and downtime at the same time.",
            image: i510400img
        },
        {
            name: "geforce 3060",
            info: "Malicious cyber attacks are becoming more advanced and more prevalent every day. Organizations need enhanced threat intelligence to be able to prepare for these cyber attacks. Learn how Infoblox can help your organization be ready for these threats and prevent data loss and downtime at the same time.",
            image: geforce3060img
        },
        {
            name: "geforce 2060",
            info: "Malicious cyber attacks are becoming more advanced and more prevalent every day. Organizations need enhanced threat intelligence to be able to prepare for these cyber attacks. Learn how Infoblox can help your organization be ready for these threats and prevent data loss and downtime at the same time.",
            image: geforce2060img
        },
        {
            name: "i5 10400",
            info: "Malicious cyber attacks are becoming more advanced and more prevalent every day. Organizations need enhanced threat intelligence to be able to prepare for these cyber attacks. Learn how Infoblox can help your organization be ready for these threats and prevent data loss and downtime at the same time.",
            image: i510400img
        },
    ]
}

export const homeSlice = createSlice({
  name: 'home',
  initialState: initialStateHome,
  reducers: {
    setItem(state, action){
        state.item = action.payload
    },
    buyItem(state, action){
        if(action.payload.auth) {
            state.homeCardMassive = state.homeCardMassive.filter(
                (e, index) => action.payload.value.id - 1 !== index)
        }
    },
    addProductHome(state, action){
        state.homeCardMassive.push(action.payload)
    },
    deleteProductHome(state, action) {
        state.homeCardMassive = state.homeCardMassive.filter(
          (e, index) => action.payload !== index
        )
      }
  },
})

export const { setItem, buyItem, addProductHome, deleteProductHome } = homeSlice.actions
export default homeSlice.reducer