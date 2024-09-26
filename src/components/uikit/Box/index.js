import styles from './index.module.css';

export const Box = ({ children, className, Component = 'div', ...props }) => (
   <Component className={`${styles.box} ${className}`} {...props}>
      {children}
   </Component>
);