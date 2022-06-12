import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import {CardCustom, CardCustomType} from '../../component/Card/Card';
import { useAppDispatch } from '../../redux/store';
import { homeCardMassive } from './component/CardItem/card';
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
  return (
    <div className={styles.main}>
        {homeCardMassive.map((item: CardCustomType, index: number) => {
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