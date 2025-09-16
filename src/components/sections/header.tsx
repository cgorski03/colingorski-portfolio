"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm" : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-foreground">Portfolio</div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-accent transition-colors capitalize"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-foreground hover:text-accent transition-colors capitalize"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-accent transition-colors capitalize"
            >
              Contact
            </button>
          </div>

          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-all"
          >
            Hire Me
          </Button>
        </div>
      </nav>
    </header>
  )
}

