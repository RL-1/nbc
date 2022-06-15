import { Button } from '@mui/material'
import React, { useState } from 'react'
import { CardCustom } from '../../../../component/Card/Card'
import { ModalCustom } from '../../../../component/Modal/Modal'
import { RootState, useAppDispatch, useAppSelector } from '../../../../redux/store'
import { deleteProductHome } from '../../../Home/redux/HomeSlice'
import { deleteProduct } from '../../redux/LkSlice'
//@ts-ignoree
import styles from './styles.module.css'

export const ItemProduct = () => {
    const myProduct = useAppSelector((state: RootState) => state.lk.myProduct)
    const dispatch = useAppDispatch()
    const [openModal, setOpenModal] = useState<boolean>(false)
    const handleOpen = () => setOpenModal(true)
    const handleClose = () => setOpenModal(false)
    const home = useAppSelector((state: RootState) => state.home.homeCardMassive)
    const handleDeleteProduct = (index: number) => {
        dispatch(deleteProduct(index))
        dispatch(deleteProductHome(home.length-index))
        handleClose()
    }
    return(
        <>
        {myProduct.length > 0 ? (
            myProduct.map((item, index) => {
                return(
                    <ModalCustom
                        handleClose={handleClose}
                        handleOpen={handleOpen}
                        open={openModal}
                        buttonOpen={
                            <div onClick={handleOpen}>
                                <CardCustom
                                    name={item.name}
                                    info={item.info}
                                    image={item.image}
                                />
                            </div>
                        }
                    >
                        <div>Вы действительно хотите удалить ?</div>
                        <Button variant='contained' color='success' onClick={handleClose}>
                            Отменить
                        </Button>
                        <Button 
                          variant='contained' 
                          color='error' 
                          onClick={() => handleDeleteProduct(index)}
                        >
                            Удалить
                        </Button>
                    </ModalCustom>
                )
            })
        ) : <div>Вы пока не добавили товары {`:<`}</div>
         }
        </>
    )
}