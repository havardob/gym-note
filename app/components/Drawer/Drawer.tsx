import {ClickOutsideHandler} from "@/app/components/ClickOutside/ClickOutside";
import {ReactNode} from "react";

interface DrawerProps {
  title?: string;
  open?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

export const Drawer = ({title, open = false, onClose, children}: DrawerProps) => {
  const handleOnClose = () => {
    onClose?.()
  }

  return (
    <>
      <div className={"drawer"} data-open={open}>
        <ClickOutsideHandler onClick={handleOnClose}>
          <div className={"drawer__inner"} data-open={open}>
            <div className={"drawer__header"}>
              {title && (
                <div className={"drawer__title"}>{title}</div>
              )}
              <button className="drawer__close" onClick={handleOnClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                </svg>
                <span className={"u-visually-hidden"}>Close</span>
              </button>
            </div>
            <div className={"drawer__content"}>
              {children}
            </div>
          </div>
        </ClickOutsideHandler>
      </div>

      <style jsx>{`
         .drawer {
            background-color: transparent;
            transition: background-color .15s ease;
         }
         
         .drawer[data-open="true"] {
            position: fixed;
            inset: 0;
            transition: background-color .5s ease;
            background-color: rgba(0, 0, 0, .2);
            z-index: 900;
         }
         
         .drawer__inner {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            min-height: 60dvh;
            max-height: 95dvh;
            background-color: var(--color-background-neutral-default);
            border-top-left-radius: .5rem;
            border-top-right-radius: .5rem;
            box-shadow: 0 0 15px 0 rgba(0 0 0 / .125);
            transition: transform .25s ease;
            transform: translateY(100%);
         }

         .drawer__inner[data-open="true"] {
            visibility: revert;
            height: revert;
            z-index: 1;
            transition: transform .25s ease;
            transform: translateY(0);
         }

         .drawer__header {
            padding-inline: 1rem;
            padding-block: 1rem;
            padding-inline-end: 3.5rem;
            position: relative;
         }

         .drawer__close {
            position: absolute;
            top: .5rem;
            right: .5rem;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            display: grid;
            place-items: center;
            font-size: 1.5rem;
            border-color: var(--color-button-border-secondary);
            background-color: var(--color-button-background-secondary);
         }

         .drawer__content {
            padding-inline: 1rem;
         }
      `}</style>
    </>
  )
}