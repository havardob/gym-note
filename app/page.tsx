"use client";
import {Header} from "@/app/_components/Header/Header";
import {Button} from "@/app/_components/Button/Button";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className={"u-max-content-width"}>
          <Button>Add Exercise</Button>
          <Button variant={"primary"}>Log Session</Button>
        </div>
      </main>

      <style jsx>{`
         main {
            margin-block-start: 2rem;
         }
      `}</style>
    </>
  );
}
