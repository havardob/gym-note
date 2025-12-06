import "./ExcerciseItem.css";
import { IconType } from "@/app/_types/icon.types";
import { Icon } from "@/app/_components/Icon/Icon";
import { Children, isValidElement, ReactNode } from "react";
import { Badge } from "@/app/_components/Badge/Badge";
import { StatusType } from "@/app/_types/core.types";

interface ExerciseItemProps {
  title: string;
  icon: IconType;
  badge?: ReactNode;
  variant?: StatusType;
}

export const ExerciseItem = ({ title, icon, badge, variant }: ExerciseItemProps) => {
  const badgeNodes = Children.toArray(badge);

  for (const child of badgeNodes) {
    if (!isValidElement(child)) {
      throw new Error(`${child} is not a valid element`);
    }

    if (child.type !== Badge) {
      throw new Error("Badge must be a <Badge>components");
    }
  }

  return (
    <article className={"exercise-item"}>
      <div className={"exercise-item__icon"} data-variant={variant}>
        <Icon icon={icon} />
        {variant === "success" && (
          <span className={"exercise-item__icon-indicator"}><Icon icon={"check-circle"} /></span>
        )}
      </div>
      <div className={"exercise-item__content"}>
        <h3 className={"exercise-item__title"}>{title}</h3>
        {badge && <div className={"exercise-item__badge"}>{badge}</div>}
      </div>
    </article>
  );
};