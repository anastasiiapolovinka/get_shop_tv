import clsx from "clsx";
import { Button } from "../uikit";
import styles from "./index.module.css";

export const MainBtn = ({ className, children, ...props }) => (
  <Button className={clsx([styles.btn, className])} {...props}>
    {children}
  </Button>
);
