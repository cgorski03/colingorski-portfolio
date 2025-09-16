"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const contactMethods = [
  {
    title: "Lorem Ipsum",
    description: "Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore",
    value: "lorem@ipsum.com",
    action: "Lorem Ipsum",
    href: "mailto:lorem@ipsum.com"
  },
  {
    title: "Consectetur",
    description: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    value: "linkedin.com/in/loremipsum",
    action: "Consectetur",
    href: "https://linkedin.com/in/loremipsum"
  },
  {
    title: "Adipiscing",
    description: "Elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim",
    value: "github.com/loremipsum",
    action: "Adipiscing",
    href: "https://github.com/loremipsum"
  }
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lorem Ipsum Dolor
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
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
                  className="w-full"
                  variant="outline"
                >
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Lorem Ipsum Dolor Sit?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Lorem Ipsum
            </Button>
            <Button size="lg" variant="outline">
              Consectetur
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}