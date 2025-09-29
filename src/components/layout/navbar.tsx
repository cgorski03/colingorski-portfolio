"use client"

import { Button } from "@/components/ui/button"


type NavbarProps = {
  onAboutClick: () => void;
  onProjectsClick: () => void;
  onContactClick: () => void;
}

export default function Navbar({ onAboutClick, onProjectsClick, onContactClick }: NavbarProps) {
  return (
    <header className="w-full bg-background border-b border-border">
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

