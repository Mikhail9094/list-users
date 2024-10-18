import { Link } from "react-router-dom";
import { CustomLinkProps } from "./types";
import styles from "./customLink.module.scss";

export default function CustomLink({ to, children, className, ...rest }: CustomLinkProps) {
  return (
    <Link className={`${styles.link} ${className}`} to={to} {...rest}>
      {children}
    </Link>
  );
}
