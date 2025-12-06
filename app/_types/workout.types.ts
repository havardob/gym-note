import { Exercise } from "@/app/_types/exercise.types";

export type Workout = {
  id: string;
  title: string;
  date: string;
  exercises: Exercise[]
}