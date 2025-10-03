"use client"

import { LinkedInIcon, GitHubIcon, SourceCodeIcon } from "@/components/ui/icons"

interface SocialLink {
  href: string
  label: string
  icon: React.ReactNode
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/colingorski/",
    label: "LinkedIn Profile",
    icon: <LinkedInIcon />
  },
  {
    href: "https://github.com/cgorski03",
    label: "GitHub Profile",
    icon: <GitHubIcon />
  },
  {
    href: "https://github.com/cgorski03/colingorski-portfolio",
    label: "View Source Code",
    icon: <SourceCodeIcon />
  }
]

interface SocialLinksProps {
  size: "mobile" | "desktop"
}

function SocialLinks({ size }: SocialLinksProps) {
  const iconSize = size === "mobile" ? "w-6 h-6" : "w-5 h-5"
  const gap = size === "mobile" ? "gap-6" : "gap-4"
  const padding = size === "mobile" ? "p-2" : ""

  return (
    <div className={`flex items-center ${gap}`}>
      {socialLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-muted-foreground hover:text-foreground transition-colors ${padding}`}
          aria-label={link.label}
        >
          <div className={iconSize}>
            {link.icon}
          </div>
        </a>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-5xl px-4 py-6 md:py-8">
        {/* Mobile Layout */}
        <div className="flex flex-col items-center space-y-6 md:hidden">
          {/* Name */}
          <h3 className="text-lg font-semibold text-foreground">Colin Gorski</h3>

          {/* Social Links */}
          <SocialLinks size="mobile" />

          {/* Email */}
          <a
            href="mailto:cgorski03@gmail.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            cgorski03@gmail.com
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Colin Gorski</p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-3 gap-4 items-center">
          {/* Left: Name and Email */}
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-6 justify-self-start">
            <h3 className="text-lg font-semibold text-foreground">Colin Gorski</h3>
            <a
              href="mailto:cgorski03@gmail.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              cgorski03@gmail.com
            </a>
          </div>

          {/* Center: Social Links */}
          <div className="justify-self-center">
            <SocialLinks size="desktop" />
          </div>

          {/* Right: Copyright */}
          <div className="flex items-center text-sm text-muted-foreground justify-self-end">
            <p>© {new Date().getFullYear()} Colin Gorski</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
