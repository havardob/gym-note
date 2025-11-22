import { ReactNode, useEffect, useRef } from "react";

interface ClickOutsideProps {
  onClick: () => void;
  children: ReactNode;
}

export const ClickOutsideHandler = ({ onClick, children }: ClickOutsideProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        onClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClick]);

  return <span ref={wrapperRef}>{children}</span>;
};