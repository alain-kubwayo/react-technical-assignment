import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

type ButtonProps = {
  loading?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  loading,
  ...props
}) => {
  return (
    <button className={`btn ${className}`} {...props}>
      {loading && <span className="loading loading-spinner" />}
      {children}
    </button>
  );
};
export default Button;
