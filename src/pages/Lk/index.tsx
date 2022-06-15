import React, { useState } from 'react'
//@ts-ignore
import styles from './styles.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Icon } from '@mui/material';
import { Inputs } from '../../component/Input/input';
import { CardCustom, CardCustomType } from '../../component/Card/Card';
//@ts-ignore
import geforce3060img from '../../assets/images/gf3060.jpg'
//@ts-ignore
import avatar from '../../assets/images/avatar.png'
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { authJoin } from '../isAuth/redux/loginSlice';
import { useNavigate } from 'react-router-dom';
import { ModalCustom } from '../../component/Modal/Modal';
import { CreateProduct } from './component/createProduct/createProduct';
import { ItemProduct } from './component/itemProduct/itemProduct';
interface LoginValueType { 
    login: string
    password: string
    law: 'admin' | 'user'
}
export const Lk = () => {
    const [goods, setGoods] = useState<CardCustomType>({
            name: "geforce 3060",
            info: "Malicious cyber attacks are becoming more advanced and more prevalent every day. Organizations need enhanced threat intelligence to be able to prepare for these cyber attacks. Learn how Infoblox can help your organization be ready for these threats and prevent data loss and downtime at the same time.",
            image: geforce3060img
        },
    )
    const [value, setValue] = useState<LoginValueType>({
        login: '',
        password: '',
        law: 'user'
    })
    const [openModal, setOpenModal] = useState<boolean>(false)
    const lk = useAppSelector((state: RootState) => state.login.lk)
    const boughtProduct = useAppSelector((state: RootState) => state.lk.boughtProduct)
    const myProduct = useAppSelector((state: RootState) => state.lk.myProduct)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleChangeName = (e: string) => {
        setValue({ ...value, login: e })
    }
    const handleChangePassword = (e: string) => {
        setValue({ ...value, password: e })
    }
    const handleExit = () => {
        dispatch(authJoin(false))
        navigate('/')
    }
    const handleOpen = () => setOpenModal(true)
    const handleClose = () => setOpenModal(false)
    
    return(
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <div className={styles.avatar}>
                        <img src={avatar} alt='avatar' className={styles.avatar__icon}/>
                    </div>
                    <div className={styles.data}>
                        <div className={styles.name}>
                            <div className={styles.name__title}>
                                Ваше имя
                            </div>
                            <Inputs type='text' value={lk.login} handleChange={handleChangeName} />
                        </div>
                        <div className={styles.password}>
                            <div className={styles.name__title}>
                                Ваш пароль
                            </div>
                            <Inputs type='password' value={lk.password} handleChange={handleChangePassword} />
                        </div>
                        <Button 
                          variant='contained' 
                          color='error' 
                          className={styles.button}
                          onClick={handleExit}
                        >
                            Выход
                        </Button>
                    </div>
                </div>
                <div className={styles.goods}>
                    <div className={styles.goods__title}>
                        Купленные товары
                    </div>
                    <div className={styles.goods__product}>
                        {boughtProduct.length > 0 ? (
                            boughtProduct.map((item) => {
                                return(
                                    <CardCustom
                                        name={item.name}
                                        info={item.info}
                                        image={item.image}
                                    />
                                )
                            })
                        ) : <div>У вас пока нет купленных товаров {`:<`}</div>}
                    </div>
                </div>
                <div className={styles.goods}>
                    <div className={styles.goods__title}>
                        Мои товары
                    </div>
                    <CreateProduct />
                    <div className={styles.goods__product}>
                        <ItemProduct />
                    </div>
                </div>
            </div>
        </div>
    )
}