import { IconType } from "@/app/_types/icon.types";
import { ReactNode } from "react";
import { Icon } from "@/app/_components/Icon/Icon";
import "./EmptyState.css";

interface EmptyStateProps {
    title: string;
    description?: string;
    icon?: IconType;
    children?: ReactNode;
}

export const EmptyState = ({ title, description, icon, children }: EmptyStateProps) => {
  return (
    <div className="empty-state">
      {icon && (
        <div className="empty-state__icon"><Icon icon={icon}/></div>
      )}
      <div className={"empty-state__header"}>
        <h2 className={"empty-state__title"}>{title}</h2>
        {description && (<p className={"empty-state__description"}>{description}</p>)}
      </div>
      {children !== undefined && (
        <div className={"empty-state__content"}>{children}</div>
      )}
    </div>
  );
};