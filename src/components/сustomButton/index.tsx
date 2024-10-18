import { IButtonProps } from "./types";
import styles from "./customButton.module.scss";

export default function CustomButton({ children, onClick, className, ...rest }: IButtonProps) {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`} {...rest}>
      {children}
    </button>
  );
}
