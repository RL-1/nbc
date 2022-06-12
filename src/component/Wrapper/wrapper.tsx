import React from 'react';
//@ts-ignore
import styles from './styles.module.css'

export const Wrapper = ({ children }:any): React.ReactElement => {
    return(
        <div className={styles.wrapper}>{children}</div>
    )
}