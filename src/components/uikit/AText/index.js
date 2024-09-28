import clsx from "clsx";
import styles from "./index.module.css";

export const AText = ({
  children,
  className,
  Component = "p",
  variant = "txt_1",
  ...props
}) => (
  <Component className={clsx([styles[variant], className])} {...props}>
    {children}
  </Component>
);
