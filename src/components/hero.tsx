"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-full bg-muted border-2 border-accent/20 flex items-center justify-center">
              <img
                src="/headshot.jpg"
                alt="Professional headshot"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Software Engineer</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
              I create thoughtful digital experiences through clean, efficient code and user-centered design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
                Get In Touch
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

