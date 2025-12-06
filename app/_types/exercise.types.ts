export type Exercise = {
  id: string;
  title: string;
  type: ExerciseType;
  isNew: boolean;
}

export type ExerciseType = "arms" | "chest" | "back" | "shoulders" | "legs" | "abs";