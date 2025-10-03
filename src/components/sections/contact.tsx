"use client"

import { EmailIcon, GitHubIcon, LinkedInIcon } from "../ui/icons"

const contactMethods = [
  {
    title: "Email",
    value: "cgorski03@gmail.com",
    href: "mailto:cgorski03@gmail.com",
    icon: <EmailIcon />
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/colingorski",
    href: "https://www.linkedin.com/in/colingorski/",
    icon: <LinkedInIcon />
  },
  {
    title: "GitHub",
    value: "github.com/cgorski03",
    href: "https://github.com/cgorski03",
    icon: <GitHubIcon />
  }
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-border/50" aria-labelledby="contact-heading">
      <div className="text-center mb-16">
        <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Always interested in new opportunities and collaborations.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-16" role="list" aria-label="Contact methods">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors group"
            role="listitem"
            aria-label={`Contact via ${method.title}: ${method.value}`}
          >
            <div className="text-muted-foreground group-hover:text-foreground transition-colors" aria-hidden="true">
              {method.icon}
            </div>
            <div>
              <p className="font-medium text-sm">{method.title}</p>
              <p className="text-xs text-muted-foreground font-mono">{method.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
