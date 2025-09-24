"use client"

import { Button } from "@/components/ui/button"

interface HeroProps {
  onProjectsClick: () => void;
  onDownloadResume: () => void;
}

export default function Hero({ onProjectsClick, onDownloadResume }: HeroProps) {
  return (
    <section className="py-24 pt-32">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Headshot */}
          <div className="flex-shrink-0">
            <div className="relative h-32 w-32 md:h-48 md:w-48">
              <img
                src="/headshot.jpg"
                alt="Professional headshot of Colin Gorski"
                className="h-full w-full rounded-full object-cover"
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
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600" onClick={onProjectsClick}>
                View Projects
              </Button>
              <Button variant="outline" size="lg" onClick={onDownloadResume}>
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
