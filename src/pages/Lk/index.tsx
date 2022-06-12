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
import { useAppDispatch } from '../../redux/store';
import { authJoin } from '../isAuth/redux/loginSlice';
import { useNavigate } from 'react-router-dom';
interface LoginValueType { 
    name: string
    password: string
}
export const Lk = () => {
    const [goods, setGoods] = useState<CardCustomType>({
            name: "geforce 3060",
            info: "Malicious cyber attacks are becoming more advanced and more prevalent every day. Organizations need enhanced threat intelligence to be able to prepare for these cyber attacks. Learn how Infoblox can help your organization be ready for these threats and prevent data loss and downtime at the same time.",
            image: geforce3060img
        },
    )
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [value, setValue] = useState<LoginValueType>({
        name: '',
        password: ''
    })
    const handleChangeName = (e: string) => {
        setValue({ ...value, name: e })
    }
    const handleChangePassword = (e: string) => {
        setValue({ ...value, password: e })
    }
    const handleExit = () => {
        dispatch(authJoin(false))
        navigate('/')
    }
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
                            <Inputs type='text' value={value.name} handleChange={handleChangeName} />
                        </div>
                        <div className={styles.password}>
                            <div className={styles.name__title}>
                                Ваш пароль
                            </div>
                            <Inputs type='password' value={value.password} handleChange={handleChangePassword} />
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
                        Мои товари
                    </div>
                    <div>
                        <CardCustom
                            name={goods.name}
                            info={goods.info}
                            image={goods.image}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}