import "./WorkoutItem.css";
import { IconType } from "@/app/_types/icon.types";
import { Icon } from "@/app/_components/Icon/Icon";
import { StatusType } from "@/app/_types/core.types";
import Link from 'next/link';

type WorkoutItemDetailType = {
  label: string;
  variant?: StatusType;
  icon?: IconType;
}

interface WorkoutItemProps {
  title: string;
  details?: WorkoutItemDetailType[];
  date?: string;
  href?: string;
}

export const WorkoutItem = ({ title, details, date, href = "#" }: WorkoutItemProps) => {
  return (
    <Link href={href}>
      <article className={"workout-item"}>
        <div className={"workout-item__content"}>
          <h3 className={"workout-item__title"}>{title}</h3>
          {(details && details?.length > 0) && (
            <div className={"workout-item__details"}>
              {details?.map((detail) => (
                <div className={"workout-item__detail"} data-variant={detail.variant} key={detail.label}>
                  {detail.icon && (
                    <Icon icon={detail.icon}/>
                  )}
                  <span>{detail.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        {date && (
          <div className={"workout-item__date"}>
            {date}
          </div>
        )}
      </article>
    </Link>
  );
};