import "./Badge.css";
import { StatusType } from "@/app/_types/core.types";

interface BadgeProps {
  variant?: StatusType;
  children: string;
}

export const Badge = ({ variant = "info", children }: BadgeProps) => {
  return (
    <span className={"badge"}>
      <span className={"badge__indicator"} data-variant={variant}></span>
      <span className={"badge__label"} data-variant={variant}>{children}</span>
    </span>
  );
};