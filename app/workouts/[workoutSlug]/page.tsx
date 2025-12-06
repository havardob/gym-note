import { Header } from "@/app/_components/Header/Header";

export default async function Page({ params }: { params: Promise<{ workoutSlug: string }>}) {
  const { workoutSlug } = await params;

  return (
    <>
      <Header />
      <main className={"l-workout"}>
        <hgroup className={"l-workout__header"}>
          <p className={"l-workout__subheading"}>Thu 20 Nov</p>
          <h1 className={"l-workout__heading"}>
            {workoutSlug}
          </h1>
        </hgroup>
      </main>
    </>
  );
}