"use client"

import { Button } from "@/components/ui/button"

interface HeroProps {
  onProjectsClick: () => void;
  onDownloadResume: () => void;
}

export default function Hero({ onProjectsClick, onDownloadResume }: HeroProps) {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-muted border-2 border-accent/20 flex items-center justify-center">
              <img
                src="/headshot.jpg"
                alt="Professional headshot"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Full-Stack Software Engineer</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
              Computer Science graduate building full-stack solutions that deliver measurable impact. From optimizing production workflows at Lockheed Martin to launching ForeAdvantage Golf SaaS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button
                size="lg"
                className="bg-blue-500 text-white hover:bg-blue-600"
                onClick={onProjectsClick}
              >
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
  )
}

