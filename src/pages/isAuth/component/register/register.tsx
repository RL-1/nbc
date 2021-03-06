import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Inputs } from '../../../../component/Input/input';
import { RootState, useAppDispatch, useAppSelector } from '../../../../redux/store';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';
//@ts-ignore fix
import styles from './styles.module.css';
import { authJoin, login, register } from '../../redux/loginSlice';

interface LoginValueType { 
    login: string
    password: string
}
export const Register = () => {

    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useAppDispatch()
    const account = useAppSelector((state:RootState) => state.login.account)
    const navigate = useNavigate()
    const [value, setValue] = useState<LoginValueType>({
        login: '',
        password: ''
    })

    function handleAuthJoin() {
        dispatch(authJoin(true))
        dispatch(register(value))
        handleClickVariant('success')
        navigate('/lk')
    }
    function handleClickVariant(variant: VariantType){
      enqueueSnackbar(`${variant}!`, { variant });
    };
    const handleChangeName = (e: string) => {
        setValue({ ...value, login: e })
    }
    const handleChangePassword = (e: string) => {
        setValue({ ...value, password: e })
    }
    const regExpName = () => {
        const regex = new RegExp('^(?=.*[a-z])');
        return regex.exec(value.login)
    }
    const regExpPassword = () => {
        const regex = new RegExp('^(?=.*[a-z])');
        return regex.exec(value.password)
    }
    const handleCheckAccount = () => {
        let checkAccount = account.filter((item) => {
            return item.login === value.login
        })
        return regExpName() && regExpPassword() && checkAccount?.length === 0
    }
    const handleJoin = () => {
        handleCheckAccount() ? (
            handleAuthJoin()  
        ) : (
            handleClickVariant('error')
        )
    }
    return(
        <div className={styles.box}>
            <div className={styles.content}>
                <h2 className={styles.title}>
                    ??????????????????????
                </h2>
                <div className={styles.input__holder}>
                    <div>??????????</div>
                    <Inputs type='text' value={value.login} handleChange={handleChangeName} />
                </div>
                <div className={styles.input__holder}>
                    <div>????????????</div>
                    <Inputs type='password' value={value.password} handleChange={handleChangePassword} />
                </div>
                <div 
                    className={value.login.length > 0 && value.password.length > 0 ? 
                    styles.button__join : styles.button__join__active}
                    onClick={handleJoin}
                >
                    ??????????
                </div>
            </div>
        </div>
    )
}