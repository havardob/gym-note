'use client';

import { useState } from 'react';
import { Button } from '@/app/_components/Button/Button';
import { Drawer } from '@/app/_components/Drawer/Drawer';
import { Icon } from '@/app/_components/Icon/Icon';
import { Counter } from '@/app/_components/Counter/Counter';
import { WorkoutItem } from "@/app/_components/WorkoutItem/WorkoutItem";
import { ItemList } from "@/app/_components/ItemList/ItemList";
import { ExerciseItem } from "@/app/_components/ExerciseItem/ExerciseItem";
import { Badge } from "@/app/_components/Badge/Badge";

export default function Page() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <div className={'u-max-content-width'}>
        <div className={'components'}>
          <section className={'component'}>
            <Button>Secondary Button</Button>
          </section>
          <section className={'component'}>
            <Button variant={'primary'}>Primary Button</Button>
          </section>
          <section className={'component'}>
            <Button variant={'primary'} shape={"pill"}>Pill Button</Button>
          </section>
          <section className={'component'}>
            <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
            <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} title={'Drawer'}>
              <p>Hello</p>
            </Drawer>
          </section>
          <section className={'component'}>
            <div style={{ display: 'flex', 'flexWrap': 'wrap', gap: '1rem', fontSize: '1.5rem' }}>
              <Icon icon={'abs'}/>
              <Icon icon={'arm'}/>
              <Icon icon={'back'}/>
              <Icon icon={'chest'}/>
              <Icon icon={'shoulders'}/>
              <Icon icon={'legs'}/>
            </div>
          </section>
          <section className={'component'}>
            <Counter/>
          </section>
          <section className={'component'}>
            <WorkoutItem
              title={"Legs + Arms"}
              details={[
                { label: "6 exercises" },
                { label: "24 sets" },
                { label: "12 increases", icon: "chevron-up", variant: "success" }
              ]}
              date={"Thu 20 Nov"}
            />
          </section>
          <section className={'component'}>
            <ItemList title={"November"}>
              <WorkoutItem
                title={"Legs + Arms"}
                details={[
                  { label: "6 exercises" },
                  { label: "24 sets" },
                  { label: "12 increases", icon: "chevron-up", variant: "success" }
                ]}
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
          </section>
          <section className={'component'}>
            <ExerciseItem
              icon={"arm"}
              title={"Hammer Curls"}
              badge={<Badge>New</Badge> }
            />
          </section>
          <section className={'component'}>
            <ItemList title={"November"}>
              <ExerciseItem
                icon={"arm"}
                title={"Hammer Curls"}
              />
              <ExerciseItem
                variant={"success"}
                icon={"chest"}
                title={"Incline Dumbbell Press"}
              />
            </ItemList>
          </section>
        </div>
      </div>

      <style jsx>{`
          .components {
              margin-block-start: 2rem;
              display: grid;
              row-gap: 2rem;
              padding-block: 2rem;
          }

          .component {
              padding-block: 1.5rem;
              padding-inline: 1rem;
              background-size: 40px 40px;
              border-block-end: 1px solid var(--color-white-3);
              border-inline-end: 1px solid var(--color-white-3);
              background-image: linear-gradient(to right, var(--color-white-3) 1px, transparent 1px),
              linear-gradient(to bottom, var(--color-white-3) 1px, transparent 1px);
          }
      `}</style>

    </>
  );
}