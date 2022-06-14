import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import {CardCustom, CardCustomType} from '../../component/Card/Card';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { setItem } from './redux/HomeSlice';
//@ts-ignore
import styles from './styles.module.css'

export const Home = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleItemOpen = (item: CardCustomType, index: number) => {
    const element = {
        id: index,
        ...item
    }
    dispatch(setItem(element))
    navigate(`catalog/${index}`)
  }
  const Product = useAppSelector((state: RootState) => state.home.homeCardMassive)
  return (
    <div className={styles.main}>
        {Product.map((item: CardCustomType, index: number) => {
            return(
                <div onClick={() => handleItemOpen(item,index+1)}>
                    <CardCustom 
                        name={item.name}
                        info={item.info}
                        image={item.image}
                    /> 
                </div>
            )
        })}
    </div>
  );
}