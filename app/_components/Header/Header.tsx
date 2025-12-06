import Link from 'next/link';
import "./Header.css";
import { Icon } from "@/app/_components/Icon/Icon";

export const Header = () => {
  return (
    <header className={'header'}>
      <div className={'u-max-content-width'}>
        <div className={'header__inner'}>
          <div className={'header__logo'}>
            <Link href={'/'}>GymNote</Link>
          </div>
          <button className={'header__menu-toggle'}>
            <span>Menu</span>
            <Icon icon={"arrow-wide-down"} />
          </button>
        </div>
      </div>
    </header>
  );
};