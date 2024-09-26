"use client"
import styles from './index.module.css';

export const Button = ({ type = 'button', className, handleClick = () => {},  children, ...props }) => {
   const btnClassName = `${styles.btn} ${className}`;
   return <button onClick={handleClick} className={btnClassName} type={type} {...props}>{children}</button>;
}