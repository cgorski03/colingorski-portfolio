"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CSharpIcon,
  CPlusPlusIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  PythonIcon,
  SQLIcon,
  NextIcon,
  ReactIcon,
  TailwindIcon,
  DotNetIcon,
  NodeIcon,
  SQLServerIcon,
  AWSIcon,
  DockerIcon,
  GitIcon,
  StripeIcon
} from "@/components/ui/icons"

const skills = [
  {
    name: "C#",
    icon: <CSharpIcon />
  },
  {
    name: "C++",
    icon: <CPlusPlusIcon />
  },
  {
    name: "TypeScript",
    icon: <TypeScriptIcon />
  },
  {
    name: "JavaScript",
    icon: <JavaScriptIcon />
  },
  {
    name: "Python",
    icon: <PythonIcon />
  },
  {
    name: "SQL",
    icon: <SQLIcon />
  },
  {
    name: "Next.js",
    icon: <NextIcon />
  },
  {
    name: "React",
    icon: <ReactIcon />
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindIcon />
  },
  {
    name: ".NET",
    icon: <DotNetIcon />
  },
  {
    name: "Node.js",
    icon: <NodeIcon />
  },
  {
    name: "SQL Server",
    icon: <SQLServerIcon />
  },
  {
    name: "AWS",
    icon: <AWSIcon />
  },
  {
    name: "Docker",
    icon: <DockerIcon />
  },
  {
    name: "Stripe",
    icon: <StripeIcon />
  },
  {
    name: "Git",
    icon: <GitIcon />
  }
]

// TODO: I want the bullets to have associated technologies.
// This would allow me to make something that will filter the bullets by the specific bullets to point to specific  
// bullets that back up the techonolgy skills claim
const aboutData = {
  title: "About Me",
  description: [
    "Computer Science graduate from UConn passionate about building full-stack solutions to solve real problems. Earned B.S. with hands-on internships and entrepreneurial ventures.",
    "At Lockheed Martin, owned production software used by 200+ technicians, cutting job-search time from 12 min to 2 min. Founded ForeAdvantage Golf SaaS monitoring 610+ golf courses, growing to 20+ users.",
    "Technical expertise spans C/C++ systems programming to Next.js web development and AWS cloud infrastructure. Focused on creating software that delivers measurable value."
  ],
  experience: [
    {
      title: "Founder & Engineer",
      company: "ForeAdvantage Golf",
      period: "July 2024 - Present",
      achievements: [
        "Architected Next.js SaaS monitoring 610+ golf courses with Telegram alerts",
        "Built serverless AWS backend with 99.9% uptime"
      ],
      tech: ["Next.js", "TypeScript", "AWS", "Stripe"]
    },
    {
      title: "Software Engineer (Manufacturing)",
      company: "Lockheed Martin – Sikorsky",
      period: "July 2024 - Present",
      achievements: [
        "Engineered a full‑stack pick‑to‑light system (React, C#) that cut material‑location time by 80% (260+ technician hours monthly) by parsing job materials and driving a bin‑lights controller",
        "Shipped GitOps-style CI/CD for harness tests with a custom-built linter enforcing standards; containerized pipeline delivers 20s deploys with commit-linked, versioned releases and rollback"
      ],
      tech: ["TypeScript", "React", "C#", "AWS", "Docker", "Linux"],
    },
    {
      title: "Software Engineering Intern (Manufacturing)",
      company: "Lockheed Martin – Sikorsky",
      period: "May 2024 - July 2024",
      achievements: [
        "Engineered a React + C# job‑tracking app for 200+ technicians; 50% faster searches and ~70 hrs/week saved with end‑to‑end observability",
        "Engineered a WPF‑based interactive alternative to PDF design diagrams; completed initial trials and now driving the corporate adoption case"
      ],
      tech: ["TypeScript", "React", "C#", "WPF", "AWS"]
    }
  ]
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            {aboutData.title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: About + Skills */}
            <div className="space-y-8">
              <div className="space-y-4 text-muted-foreground">
                {aboutData.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Technical Skills</CardTitle>
                  <CardDescription>
                    Technologies and tools I work with
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1.5 rounded-md border border-transparent hover:border-border/30 transition-colors">
                        <span className="text-sm">{skill.icon}</span>
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Experience */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Professional Experience</CardTitle>
                  <CardDescription>
                    My career journey and achievements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {aboutData.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-accent pl-4 pb-4">
                      <h4 className="font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-sm text-muted-foreground mb-1">{exp.company} • {exp.period}</p>
                      {exp.note && <p className="text-xs text-muted-foreground italic mb-2">{exp.note}</p>}
                      <div className="text-sm text-muted-foreground space-y-1 mb-2">
                        {exp.achievements.map((achievement, idx) => (
                          <p key={idx}>• {achievement}</p>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {exp.tech.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs px-2 py-0.5 rounded-sm border border-transparent hover:border-border/20 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
