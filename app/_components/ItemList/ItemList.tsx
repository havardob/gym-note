import { Children, isValidElement, ReactNode } from "react";
import { WorkoutItem } from "@/app/_components/WorkoutItem/WorkoutItem";
import { ExerciseItem } from "@/app/_components/ExerciseItem/ExerciseItem";
import "./ItemList.css";

interface WorkoutListProps {
  title: string;
  children: ReactNode;
}

export const ItemList = ({ title, children }: WorkoutListProps) => {
  const items = Children.toArray(children);

  for (const child of items) {
    if (!isValidElement(child)) {
      throw new Error(`${child} is not a valid element`);
    }

    if (child.type !== WorkoutItem && child.type !== ExerciseItem) {
      throw new Error("WorkoutList children must be <WorkoutItem> or <ExerciseItem> components");
    }
  }

  return (
    <div className={"item-list"}>
      <h2 className={"item-list__title"}>
        {title}
      </h2>
      <div className={"item-list__list"}>
        {children}
      </div>
    </div>
  );
};