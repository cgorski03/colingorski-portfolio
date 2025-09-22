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
  GitIcon
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
    name: "Git",
    icon: <GitIcon />
  }
]

const experience = [
  {
    title: "Software Engineering Intern",
    company: "Lockheed Martin – Sikorsky",
    period: "May 2024 - July 2024",
    description: "Owned full-stack job-tracking native app used by 200+ technicians, cutting average job-search time by over 50%. Spearheaded development of WPF interactive diagramming tool to replace 30-year-old PDF workflow and oversaw initial testing phase on shop floor."
  },
  {
    title: "Founder & Engineer",
    company: "ForeAdvantage Golf",
    period: "July 2024 - Present",
    description: "Shipped Next.js 15 SaaS monitoring 610+ golf courses with Telegram bot alerts. Built serverless AWS backend with Step Functions, integrated Stripe subscriptions and NextAuth.js"
  },
  {
    title: "Undergraduate Teaching Assistant",
    company: "University of Connecticut",
    period: "Aug 2023 - May 2024",
    description: "Maintained and graded 12 C assignments used by 300+ students. Led weekly lab sections and provided 1-on-1 tutoring for students where necessary to drive success."
  }
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Computer Science graduate from UConn passionate about full-stack solutions that solve real problems.
                Earned B.S. with 3.6 GPA through hands-on internships and entrepreneurial ventures.
              </p>
              <p>
                At Lockheed Martin, owned production software used by 200+ technicians, cutting job-search time
                from 12 min to 2 min. Founded ForeAdvantage Golf SaaS monitoring 610+ golf courses, growing to 20+ users.
              </p>
              <p>
                Technical expertise spans C/C++ systems programming to Next.js web development and AWS cloud infrastructure.
                Focused on creating software that delivers measurable value.
              </p>
            </div>
          </div>

          <div className="space-y-8">
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
                    <Badge key={index} variant="secondary" className="flex items-center gap-1.5">
                      <span className="text-sm">{skill.icon}</span>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional Experience</CardTitle>
                <CardDescription>
                  My career journey and achievements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-accent pl-4">
                    <h4 className="font-semibold text-foreground">{exp.title}</h4>
                    <p className="text-sm text-muted-foreground">{exp.company} • {exp.period}</p>
                    <p className="text-sm text-muted-foreground mt-1">{exp.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
