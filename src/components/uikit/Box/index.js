import clsx from "clsx";
import styles from "./index.module.css";
import { forwardRef } from "react";

export const Box = forwardRef(({
  children,
  className,
  Component = "div",
  direction,
  align,
  justify,
  ...props
}, ref) => (
  <Component
    ref={ref}
    className={clsx([
      styles.box,
      className,
      direction === "column" && styles.column,
      align && styles[`align_${align}`],
      justify && styles[`justify_${justify}`],
    ])}
    {...props}
  >
    {children}
  </Component>
));

Box.displayName = 'Box';
