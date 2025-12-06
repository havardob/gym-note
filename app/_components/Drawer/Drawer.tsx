import { ReactNode } from 'react';
import { ClickOutsideHandler } from '@/app/_components/ClickOutside/ClickOutside';
import { Icon } from '@/app/_components/Icon/Icon';
import "./Drawer.css";

interface DrawerProps {
  title?: string;
  open?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

export const Drawer = ({ title, open = false, onClose, children }: DrawerProps) => {
  const handleOnClose = () => {
    onClose?.();
  };

  return (
    <div className={'drawer'} data-open={open}>
      <ClickOutsideHandler onClick={handleOnClose}>
        <div className={'drawer__inner'} data-open={open}>
          <div className={'drawer__header'}>
            {title && (
              <div className={'drawer__title'}>{title}</div>
            )}
            <button className="drawer__close" onClick={handleOnClose}>
              <Icon icon={'close'} />
              <span className={'u-visually-hidden'}>Close</span>
            </button>
          </div>
          <div className={'drawer__content'}>
            {children}
          </div>
        </div>
      </ClickOutsideHandler>
    </div>
  );
};