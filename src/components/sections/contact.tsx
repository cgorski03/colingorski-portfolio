"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const contactMethods = [
  {
    title: "Email",
    description: "Get in touch for opportunities, collaborations, or just to say hello",
    value: "cgorski03@gmail.com",
    action: "Send Email",
    href: "mailto:cgorski03@gmail.com"
  },
  {
    title: "LinkedIn",
    description: "Connect with me professionally and view my career updates",
    value: "linkedin.com/in/colingorski",
    action: "Connect",
    href: "https://www.linkedin.com/in/colingorski/"
  },
  {
    title: "GitHub",
    description: "Explore my open source projects and code repositories",
    value: "github.com/cgorski03",
    action: "View Code",
    href: "https://github.com/cgorski03"
  }
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, and conversations about technology. Whether you have a project in mind or just want to connect, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{method.title}</CardTitle>
                <CardDescription>
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 font-mono">
                  {method.value}
                </p>
                <Button
                  asChild
                  className="w-full bg-blue-500 text-white hover:bg-blue-600"
                >
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
