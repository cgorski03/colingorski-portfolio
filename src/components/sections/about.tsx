"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  "C#", "C++", "TypeScript", "JavaScript", "Python", "Java", "SQL",
  "Next.js", "React", "Node.js", ".NET", "MongoDB", "SQL Server", "MySQL",
  "AWS", "Docker", "Git", "Tailwind CSS", "Express", "Vue.js"
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
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a Computer Science graduate from the University of Connecticut with a passion for building
                full-stack solutions that solve real-world problems. I earned my B.S. in Computer Science
                and gained hands-on experience through professional and personal ventures.
              </p>
              <p>
                As a Software Engineering Intern at Lockheed Martin, I owned production software used by 200+
                technicians, delivering measurable impact through optimized workflows and cost savings.
                Simultaneously, I founded ForeAdvantage Golf, a SaaS platform that monitors tee times 610+ golf courses
                and has grown to 20+ users within 6 months.
              </p>
              <p>
                My technical expertise spans from low-level systems programming in C/C++ to modern web development
                with Next.js and cloud infrastructure on AWS. I'm passionate about creating software that delivers
                real value, whether it's optimizing production workflows or building consumer-facing applications that help people spend more time doing what is important.
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
                    <Badge key={index} variant="secondary">
                      {skill}
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
