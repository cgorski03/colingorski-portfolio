"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Synchrony Analytics - Capstone",
    description: "TODO",
    technologies: ["Next.js 15", "TypeScript", "MongoDB", "AWS", "Recharts"],
    image: "/project1.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    title: "Magic Folder",
    description: "Built privacy-first, semantic file-manager that indexes and searches 10k+ local documents without cloud calls. Integrated Faiss for sub-50ms vector similarity search with 95% top-5 precision on user queries.",
    technologies: ["C++20", "Faiss", "Ollama", "SQLite", "SQLCipher"],
    image: "/project2.jpg",
    liveUrl: "https://github.com/cgorski03/magic-folder",
    githubUrl: "https://github.com/cgorski03/magic-folder"
  },
  {
    title: "ForeAdvantage Golf",
    description: "Shipped Next.js 15 SaaS monitoring 610+ golf courses with Telegram bot alerts. Built serverless AWS backend with Step Functions, integrated Stripe subscriptions and NextAuth.js, achieving 99.9% uptime.",
    technologies: ["Next.js 15", "AWS", "Stripe", "NextAuth.js", "Telegram Bot"],
    image: "/project3.jpg",
    liveUrl: "https://foreadvantagegolf.com",
    githubUrl: "https://github.com/cgorski03"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent projects spanning full-stack web development, systems programming, and SaaS applications. Each project demonstrates different aspects of my technical skills and problem-solving approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <span className="text-muted-foreground">Project Preview</span>
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
                  <Button size="sm" className="flex-1 bg-blue-500 text-white hover:bg-blue-600">
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
