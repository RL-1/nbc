import { createSlice } from '@reduxjs/toolkit'

interface accountType {
  login: string,
  password: string
  law?: 'user' | 'admin',
}
interface initialStateType {
    auth: boolean,
    token: string | null,
    account: accountType[]
    lk: accountType
}
const initialStateLogin: initialStateType = {
    auth: false,
    token: localStorage.getItem('token'),
    account:[
      {
        login:'admin',
        password:'admin',
        law: 'admin'
      },
      {
        login:'Alcatraz',
        password:'qwerty123',
        law: 'user'
      },
  ],
  lk: {
    login: '',
    password:'',
  }
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialStateLogin,
  reducers: {
    authJoin(state, action) {
      state.auth = action.payload
    },
    login(state, action) {
      state.lk = {
        ...action.payload,
        law: 'user'
      }
    },
    register(state, action) {
      state.lk = {
        ...action.payload,
        law: 'user',
      }
      state.account.push({
        ...action.payload,
        law: 'user'
      })
    }
  },
})

export const { authJoin, login, register } = loginSlice.actions
export default loginSlice.reducer