"use client"
import Header from "@/components/header";
import Hero from "@/components/hero";
import { holes } from "@/data/holes";
import { ScorecardHole } from "@/types/hole";

export default function Home() {
  const onClickHole = (hole: ScorecardHole) => {
    console.log("Project clicked:", hole.name);
    // Handle project navigation here
  }

  return (
    <>
      <Header />
      <Hero />
    </>
  );
}
