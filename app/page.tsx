'use client';
import { Header } from '@/app/_components/Header/Header';
import { Button } from '@/app/_components/Button/Button';
import "./Page.css";
import { EmptyState } from "@/app/_components/EmptyState/EmptyState";
import { ItemList } from "@/app/_components/ItemList/ItemList";
import { WorkoutItem } from "@/app/_components/WorkoutItem/WorkoutItem";

export default function Home() {
  const workouts: string[] = ["test"];


  return (
    <>
      <Header/>
      <main className={"l-frontpage"}>
        <div className={'u-max-content-width'}>
          <h1 className={"l-frontpage__heading"}>Workouts</h1>
        </div>
        {workouts.length > 0 ? (
          <div className={"l-frontpage__workouts"}>

            <ItemList title={"November"}>
              <WorkoutItem
                title={"Legs + Arms"}
                details={[
                  { label: "6 exercises" },
                  { label: "24 sets" },
                  { label: "12 increases", icon: "chevron-up", variant: "success" }
                ]}
                href={"/workouts/1"}
                date={"Thu 20 Nov"}
              />
              <WorkoutItem
                title={"Chest"}
                details={[
                  { label: "6 exercises" },
                  { label: "24 sets" },
                  { label: "7 increases", icon: "chevron-up", variant: "success" }
                ]}
                date={"Tue 18 Nov"}
              />
            </ItemList>
          </div>
        ) : (
          <div className={'u-max-content-width'}>
            <div className={"l-frontpage__empty"}>
              <EmptyState title={"Track your weight progress"} icon={"arm"}
                description={"Track your sets and reps each time you work out to see your progress. Get started by tracking your first exercise."}>
                <Button variant={'primary'}>Track Exercise</Button>
              </EmptyState>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
