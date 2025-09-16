"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Lorem Ipsum Dolor",
    description: "Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
    technologies: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"],
    image: "/project1.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    title: "Consectetur Adipiscing",
    description: "Elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation.",
    technologies: ["Consectetur", "Adipiscing", "Elit", "Sed", "Eiusmod"],
    image: "/project2.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    title: "Tempor Incididunt",
    description: "Ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    technologies: ["Tempor", "Incididunt", "Labore", "Dolore", "Magna"],
    image: "/project3.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lorem Ipsum Dolor
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <span className="text-muted-foreground">Lorem Ipsum</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    Lorem Ipsum
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Consectetur
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Lorem Ipsum Dolor
          </Button>
        </div>
      </div>
    </section>
  )
}