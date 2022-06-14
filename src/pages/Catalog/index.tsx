import { Button } from '@mui/material'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ModalCustom } from '../../component/Modal/Modal'
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store'
import { buyItem, HomeItemType } from '../Home/redux/HomeSlice'
import { boughtProductItem } from '../Lk/redux/LkSlice'
//@ts-ignore
import styles from './styles.module.css'

export const Catalog = () => {
    const item = useAppSelector((state: RootState) => state.home.item)
    const massive = useAppSelector((state: RootState) => state.home.homeCardMassive)
    const auth = useAppSelector((state: RootState) => state.login.auth)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [openModal, setOpenModal] = useState<boolean>(false)
    const handleOpen = () => setOpenModal(true)
    const handleClose = () => setOpenModal(false)
    const handleBuy = () => {
        const buyItemInfo = {
            value: item,
            auth: auth
        }
        if(auth){
            dispatch(boughtProductItem(item))
            dispatch(buyItem(buyItemInfo))
            navigate('/')
        } else{
            handleOpen()
        }
    }

    return(
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.image__box}>
                    <img src={item.image} className={styles.image}/>
                </div>
                <div className={styles.info}>
                    <h3 className={styles.title}>
                        {item.name}
                    </h3>
                    <div className={styles.text}>
                        {item.info}
                    </div>
                    <div className={styles.buttons}>
                    <ModalCustom 
                        handleClose={handleClose} 
                        handleOpen={handleOpen}
                        open={openModal}
                        buttonOpen={
                            <>
                                <Button 
                                    variant='contained' 
                                    color='success' 
                                    className={styles.button}
                                    onClick={handleBuy}
                                >
                                    Купить за 3 920 $
                                </Button>
                            </>
                        }
                    >
                        <NavLink to='/login' className={styles.modal__link}>
                            Авторизируйтесь
                        </NavLink> 
                    </ModalCustom>
                    </div>
                </div>
            </div>
        </div>
    )
}