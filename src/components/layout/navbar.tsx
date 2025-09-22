"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"


type NavbarProps = {
  onAboutClick: () => void;
  onProjectsClick: () => void;
  onContactClick: () => void;
}

export default function Navbar({ onAboutClick, onProjectsClick, onContactClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm" : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-foreground">Colin Gorski </div>
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={onAboutClick}
              className="text-foreground hover:text-accent transition-colors capitalize"
            >
              About
            </button>
            <button
              onClick={onProjectsClick}
              className="text-foreground hover:text-accent transition-colors capitalize"
            >
              Projects
            </button>
            <button
              onClick={onContactClick}
              className="text-foreground hover:text-accent transition-colors capitalize"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

