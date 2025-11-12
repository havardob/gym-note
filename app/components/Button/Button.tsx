import {ButtonHTMLAttributes, ReactNode} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export const Button = ({children, variant = "secondary", ...rest }: ButtonProps) => {
  return (
    <>
      <button className={"button"} data-variant={variant} {...rest}>
        <span>{children}</span>
      </button>

      <style jsx>{`
         .button {
            display: inline-flex;
            align-items: center;
            padding: .5em 1em;
            border-radius: .25rem;
            border: 1px solid var(--color-button-border-secondary);
            background-color: var(--color-button-background-secondary);
            color: var(--color-button-text-secondary);
            
            &:hover {
               background-color: var(--color-button-background-secondary-hover);
            }
         }
         
         .button[data-variant='primary'] {
            border: none;
            background-color: var(--color-button-background-primary);
            color: var(--color-button-text-primary);
            
            &:hover {
               background-color: var(--color-button-background-primary-hover);
            }
         }
      `}</style>
    </>
  )
}