"use client";

import {useState} from "react";
import {Button} from "@/app/_components/Button/Button";
import {Drawer} from "@/app/_components/Drawer/Drawer";
import {Icon} from "@/app/_components/Icon/Icon";
import {Counter} from "@/app/_components/Counter/Counter";

export default function Page() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
    <div className={"u-max-content-width"}>
      <div className={"components"}>
        <section className={"component"}>
          <Button>Secondary Button</Button>
        </section>
        <section className={"component"}>
          <Button variant={"primary"}>Primary Button</Button>
        </section>
        <section className={"component"}>
          <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
          <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} title={"Drawer"}>
            <p>Hello</p>
          </Drawer>
        </section>
        <section className={"component"}>
          <div style={{display: "flex", "flexWrap": "wrap", gap: "1rem", fontSize: "1.5rem"}}>
          <Icon icon={"abs"} />
          <Icon icon={"arm"} />
          <Icon icon={"back"} />
          <Icon icon={"chest"} />
          <Icon icon={"shoulders"} />
          <Icon icon={"legs"} />
          </div>
        </section>
        <section className={"component"}>
          <Counter />
        </section>
      </div>
    </div>

    <style jsx>{`       
      .components {
         margin-block-start: 2rem;
         display: grid;
         row-gap: 2rem;
      }
      
      .component {
         padding-block: 1.5rem;
         padding-inline: 1rem;
         background-size: 40px 40px;
         border-block-end: 1px solid var(--color-border-neutral-default);
         border-inline-end: 1px solid var(--color-border-neutral-default);
         background-image:
            linear-gradient(to right, var(--color-border-neutral-default) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-border-neutral-default) 1px, transparent 1px);
      }
    `}</style>

    </>
  )
}