import { createSlice } from '@reduxjs/toolkit'

interface accountType {
  login: string,
  password: string
}
interface initialStateType {
    auth: boolean,
    token: string | null,
    account: accountType[]
}
const initialStateLogin: initialStateType = {
    auth: false,
    token: localStorage.getItem('token'),
    account:[
      {
        login:'admin',
        password:'admin'
      },
  ]
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialStateLogin,
  reducers: {
    authJoin(state, action) {
      state.auth = action.payload
      localStorage.setItem('token', 'asdfklakw234lkfalww')
    },
  },
})

export const { authJoin } = loginSlice.actions
export default loginSlice.reducer