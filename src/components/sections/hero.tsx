"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeroProps {
  onProjectsClick: () => void;
}

export default function Hero({ onProjectsClick }: HeroProps) {
  return (
    <header className="py-24 pt-32 px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Headshot */}
          <div className="flex-shrink-0">
            <div className="relative h-32 w-32 md:h-48 md:w-48">
              <Image
                src="/headshot.jpg"
                alt="Colin Gorski - Professional headshot of a full-stack software engineer specializing in TypeScript, React, and AWS"
                className="h-full w-full rounded-full object-cover"
                width={192}
                height={192}
                priority
              />
              {/* Optional: Add a subtle ring for flair */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/10" />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Grouped Headline for better structure and spacing */}
            <div className="mb-6">
              <h1 className="text-balance text-4xl font-bold text-foreground md:text-5xl">
                Full-Stack Software Engineer
              </h1>
              <p className="text-balance mt-2 text-2xl font-medium text-muted-foreground md:text-3xl">
                Delivering Measurable Impact
              </p>
            </div>

            <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
              From optimizing manufacturing workflows by 80% at Lockheed Martin
              to shipping a full-stack SaaS from idea to launch.
            </p>

            {/* Action Buttons */}
            <nav className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start" aria-label="Main navigation">
              <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600" onClick={onProjectsClick}>
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => window.open('https://resume.colingorski.com', '_blank')}
                aria-label="View resume in new tab"
              >
                View Resume
              </Button>
            </nav>
          </div>
        </div>
    </header>
  );
}
