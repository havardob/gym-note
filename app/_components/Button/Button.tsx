import { ButtonHTMLAttributes, ReactNode } from 'react';
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  shape?: 'square' | 'pill';
}

export const Button = ({ children, variant = 'secondary', shape = "square", ...rest }: ButtonProps) => {
  return (
    <button className={'button'} data-variant={variant} data-shape={shape} {...rest}>
      <span>{children}</span>
    </button>
  );
};