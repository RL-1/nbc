import React from 'react'
//@ts-ignore
import styles from './styles.module.css'

export const Footer = () => {
    const [value, setValue] = React.useState(0);

  return (
    <div className={styles.footer}>
        <div className={styles.footer__content}></div>
    </div>
  );
}