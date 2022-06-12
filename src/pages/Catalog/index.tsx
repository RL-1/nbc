import React from 'react'
import { RootState, useAppSelector } from '../../redux/store'
import { HomeItemType } from '../Home/redux/HomeSlice'
//@ts-ignore
import styles from './styles.module.css'

export const Catalog = () => {
    const item = useAppSelector((state) => state.home.item)
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
                </div>
            </div>
        </div>
    )
}