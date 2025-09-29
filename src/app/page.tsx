"use client"
import React, { useRef } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => scrollToSection(aboutRef);
  const scrollToProjects = () => scrollToSection(projectsRef);
  const scrollToContact = () => scrollToSection(contactRef);

  return (
    <>
      <Navbar 
        onAboutClick={scrollToAbout}
        onProjectsClick={scrollToProjects}
        onContactClick={scrollToContact}
      />
      <div className="container mx-auto max-w-6xl">
        <div ref={heroRef}>
          <Hero 
            onProjectsClick={scrollToProjects}
          />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}
