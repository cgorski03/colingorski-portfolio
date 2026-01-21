"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CSharpIcon,
  CPlusPlusIcon,
  TypeScriptIcon,
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
    name: "TypeScript",
    icon: <TypeScriptIcon />
  },
  {
    name: "C++",
    icon: <CPlusPlusIcon />
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
    name: ".NET",
    icon: <DotNetIcon />
  },
  {
    name: "Node.js",
    icon: <NodeIcon />
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
    name: "SQL Server",
    icon: <SQLServerIcon />
  },
  {
    name: "React",
    icon: <ReactIcon />
  },
  {
    name: "Next.js",
    icon: <NextIcon />
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindIcon />
  },
  {
    name: "Git",
    icon: <GitIcon />
  },
  {
    name: "Stripe",
    icon: <StripeIcon />
  }
]

// TODO: I want the bullets to have associated technologies.
// This would allow me to make something that will filter the bullets by the specific bullets to point to specific  
// bullets that back up the techonolgy skills claim
const aboutData = {
  title: "About Me",
  description: [
    "I’m a backend‑leaning full‑stack engineer who loves turning real‑world workflows into reliable software. UConn CS grad with a systems‑level C/C++ foundation that keeps me focused on performance, correctness, and observability.",
    "I work end‑to‑end: model the data and APIs, build the services, wire up CI/CD and containerized deploys, and instrument everything so issues are traceable and rollbacks are fast. I value static types and automation to reduce toil and errors.",
    "My daily tools are TypeScript, SQL, Docker, and AWS. I enjoy shipping products, and I’m always looking for roles where ownership and measurable impact matter."
  ],
  experience: [
    {
      title: "Founder & Engineer",
      company: "ForeAdvantage Golf",
      period: "July 2024 - Present",
      achievements: [
        "Shipped Next.js 15 SaaS monitoring 610+ golf courses with Telegram bot alerts and Stripe subscriptions",
        "Deployed serverless AWS backend with 99.9% uptime; grew to 20+ users, surfacing 1,300+ tee times"
      ],
      tech: ["Next.js", "TypeScript", "AWS", "Stripe", "PostgreSQL"]
    },
    {
      title: "Software Engineer (Manufacturing)",
      company: "Lockheed Martin – Sikorsky",
      period: "July 2025 - Present",
      achievements: [
        "Led greenfield design of manufacturing observability platform on Kubernetes (OpenTelemetry, Prometheus), saving $180k/year",
        "Engineered pick‑to‑light system cutting material‑location time by 80%, saving $350k annually",
        "Shipped GitOps CI/CD with full audit traceability for DoD compliance; 20s containerized deploys"
      ],
      tech: ["Kubernetes", "C#", "TypeScript", "OpenTelemetry", "Docker"],
    },
    {
      title: "Software Engineering Intern",
      company: "Lockheed Martin – Sikorsky",
      period: "May 2024 - July 2025",
      achievements: [
        "Owned job‑tracking app for 200+ technicians; cut search time from 12 to 2 min, saving $86k annually",
        "Architected WPF harness‑diagramming tool replacing 30‑year‑old PDF workflow; reduced wiring errors by 8%"
      ],
      tech: ["C#", "TypeScript", "WPF", "MSSQL", "Oracle SQL"]
    }
  ]
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-border/50" aria-labelledby="about-heading">
      <div className="mb-16">
        <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
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
                <div className="flex flex-wrap gap-2" role="list" aria-label="Technical skills">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1.5 rounded-md border border-transparent hover:border-border/30 transition-colors" role="listitem">
                      <span className="text-sm" aria-hidden="true">{skill.icon}</span>
                      <span>{skill.name}</span>
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
                  <article key={index} className="border-l-2 border-accent pl-4 pb-4">
                    <h3 className="font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{exp.company} • {exp.period}</p>
                    <ul className="text-sm text-muted-foreground space-y-1 mb-2" role="list">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1" role="list" aria-label={`Technologies used at ${exp.company}`}>
                      {exp.tech.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs px-2 py-0.5 rounded-sm border border-transparent hover:border-border/20 transition-colors" role="listitem">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </article>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
