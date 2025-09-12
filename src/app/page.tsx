"use client"
import Scorecard from "@/components/scorecard/scorecard";
import { holes } from "@/data/holes";
import { ScorecardHole } from "@/types/hole";

export default function Home() {
	const onClickHole = (hole: ScorecardHole) => {
		console.log("Project clicked:", hole.name);
		// Handle project navigation here
	}

	return (
		<div className="max-w-8xl mx-auto px-6 lg:px-12 py-12">
			{/* Header */}
			<header className="text-center mb-16">
				<h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-wider mb-4">
					JOHN DOE - SOFTWARE ENGINEER
				</h1>
				<h2 className="text-xl md:text-3xl text-muted-foreground tracking-wide mb-2">THE 18 HOLES OF CODE</h2>
				<p className="text-lg md:text-xl text-muted-foreground tracking-wide">NAVIGATING THE FAIRWAYS OF CAREER.</p>
			</header>

			{/* Main Scorecard */}
			<main className="flex justify-center pb-16">
				<Scorecard holes={holes} onClickHole={onClickHole} />
			</main>
		</div>
	);
}
