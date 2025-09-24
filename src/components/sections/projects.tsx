"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import CodeBlock from "@/components/ui/code-block"

const projects = [
  {
    title: "ForeAdvantage Golf",
    description: "Next.js 15 SaaS monitoring 610+ golf courses with Telegram bot alerts. Serverless AWS backend with Stripe subscriptions achieving 99.9% uptime.",
    technologies: ["Next.js 15", "AWS", "Stripe", "NextAuth.js", "Telegram Bot"],
    liveUrl: "https://foreadvantagegolf.com",
    githubUrl: "https://github.com/cgorski03",
    preview: (
      <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
        <span className="text-muted-foreground">Project Preview</span>
      </div>
    )
  },
  {
    title: "Magic Folder",
    description: "Privacy-first semantic file-manager indexing 10k+ local documents without cloud calls. Faiss integration enables sub-50ms vector search with 95% precision.",
    technologies: ["C++20", "Faiss", "Ollama", "SQLite", "SQLCipher"],
    liveUrl: "https://github.com/cgorski03/magic-folder",
    githubUrl: "https://github.com/cgorski03/magic-folder",
    preview: (
      <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
        <span className="text-muted-foreground">Project Preview</span>
      </div>
    )
  },
  {
    title: "Stripe AWS Integration",
    description: "Production-ready serverless subscription management platform using Lambda, DynamoDB and real-time Stripe webhook processing.",
    technologies: ["AWS Lambda", "DynamoDB", "Stripe API", "AWS Cognito", "TypeScript", "AWS CDK"],
    liveUrl: "https://github.com/cgorski03/stripe-aws-integration",
    githubUrl: "https://github.com/cgorski03/stripe-aws-integration",
    preview: <CodeBlock />
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30 border-t border-border/50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent projects spanning full-stack web development, systems programming, and SaaS applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group duration-300 flex flex-col h-full space-between">
              <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                {project.preview}
              </div>
              <CardHeader className="flex-grow">
                <CardTitle className="group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4 overflow-x-auto min-h-[2.5rem]">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-blue-500 text-white hover:bg-blue-600">
                    Live Demo
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    View Code
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
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
