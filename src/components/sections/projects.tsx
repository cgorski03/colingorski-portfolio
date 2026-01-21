"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import TerminalBlock from "@/components/ui/terminal-block"
import Image from "next/image"
import { ExternalSiteIcon } from "@/components/ui/icons"
import { useEffect } from "react"
import { Receipt } from "lucide-react"

const PARCENER_PRIMARY = "oklch(0.6716 0.1368 48.513)"
const PARCENER_FOREGROUND = "oklch(0.2101 0.0318 264.6645)"

const ReceiptVisual = () => (
    <div className="w-full h-full bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center p-6 select-none font-sans">
        <div
            className="w-48 bg-white border rounded-xl shadow-sm p-4 flex flex-col gap-3 relative overflow-hidden"
            style={{ borderColor: 'rgba(0,0,0,0.08)' }}
        >
            {/* Decorative top border using Parcener Primary */}
            <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: PARCENER_PRIMARY }}
            />

            <div className="flex items-center justify-between border-b pb-2 border-zinc-100">
                <div className="flex items-center gap-2">
                    <div
                        className="p-1 rounded-md flex items-center justify-center"
                        style={{ backgroundColor: `color-mix(in srgb, ${PARCENER_PRIMARY}, transparent 90%)` }}
                    >
                        <Receipt
                            className="w-3.5 h-3.5"
                            style={{ color: PARCENER_PRIMARY }}
                        />
                    </div>
                    <span
                        className="text-[11px] font-bold tracking-tight"
                        style={{ color: PARCENER_FOREGROUND }}
                    >
                        Parcener
                    </span>
                </div>
                <span className="text-[9px] text-zinc-400 font-mono">#8092</span>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between text-[10px] text-zinc-600">
                    <span className="font-medium">Spicy Miso Ramen</span>
                    <span>$16.00</span>
                </div>
                <div className="flex justify-between text-[10px] text-zinc-600">
                    <span className="font-medium">Asahi Draft</span>
                    <span>$9.00</span>
                </div>
                <div className="flex justify-between text-[10px] text-zinc-400">
                    <span>Tax & Tip (20%)</span>
                    <span>$5.50</span>
                </div>
            </div>

            <div className="pt-2 border-t border-dashed border-zinc-200 mt-auto">
                <div className="flex justify-between items-end">
                    <span className="text-[10px] font-medium text-zinc-500">Your Share</span>
                    <span
                        className="text-sm font-bold leading-none"
                        style={{ color: PARCENER_PRIMARY }}
                    >
                        $30.50
                    </span>
                </div>
            </div>
        </div>
    </div>
)

const projects = [
    {
        title: "Parcener",
        description: "Receipt-splitting app with AI-powered OCR achieving 96% first-parse accuracy in 8 seconds. Real-time collaborative rooms with 40+ active uploaders.",
        technologies: ["TypeScript", "TanStack Start", "PostgreSQL", "Cloudflare Workers", "Google Gen AI"],
        liveUrl: "https://parcener.app",
        githubUrl: "https://github.com/cgorski03/parcener",
        preview: <ReceiptVisual />,
        brandColor: PARCENER_PRIMARY
    },
    {
        title: "ForeAdvantage Golf",
        description: "Next.js SaaS monitoring 610+ golf courses with Telegram bot alerts. Serverless AWS backend with 99.9% uptime, 20+ users, 1,300+ tee times surfaced.",
        technologies: ["Next.js", "AWS CDK", "Stripe", "PostgreSQL", "NextAuth.js", "Telegram API"],
        liveUrl: "https://foreadvantagegolf.com",
        preview: (
            <Image
                src="/foreadvantagegolf.png"
                alt="ForeAdvantage Golf project preview"
                width={400}
                height={225}
                className="w-full h-full object-cover"
            />
        )
    },
    {
        title: "Magic Folder",
        description: "Privacy-first semantic file-manager indexing 10k+ local documents without cloud calls. Faiss integration enables sub-50ms vector search with 95% precision.",
        technologies: ["C++20", "Faiss", "Ollama", "SQLite", "SQLCipher"],
        githubUrl: "https://github.com/cgorski03/magic-folder",
        preview: <TerminalBlock />
    },
]

export default function Projects() {
    useEffect(() => {
        const projectStructuredData = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Featured Projects",
            "description": "Recent projects spanning full-stack web development, systems programming, and SaaS applications",
            "itemListElement": projects.map((project, index) => ({
                "@type": "CreativeWork",
                "position": index + 1,
                "name": project.title,
                "description": project.description,
                "url": project.liveUrl || project.githubUrl,
                "author": {
                    "@type": "Person",
                    "name": "Colin Gorski"
                },
                "keywords": project.technologies.join(", ")
            }))
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(projectStructuredData);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <section id="projects" className="py-24 px-6 bg-muted/30 border-t border-border/50" aria-labelledby="projects-heading">
            <div className="text-center mb-16">
                <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Featured Projects
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Recent projects spanning full-stack web development, systems programming, and SaaS applications.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Featured projects">
                {projects.map((project, index) => (
                    <Card key={index} className="group duration-300 flex flex-col h-full space-between overflow-hidden" role="listitem">
                        <div className="aspect-video bg-muted border-b overflow-hidden">
                            {project.preview}
                        </div>
                        <CardHeader className="flex-grow">
                            <CardTitle className="group-hover:text-accent transition-colors flex items-center justify-between">
                                {project.title}
                            </CardTitle>
                            <CardDescription className="mb-4">
                                {project.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="mt-auto">
                            <div className="flex flex-wrap gap-2 mb-4 overflow-x-auto min-h-[2.5rem]" role="list" aria-label={`Technologies used in ${project.title}`}>
                                {project.technologies.map((tech, techIndex) => (
                                    <Badge key={techIndex} variant="secondary" className="text-xs px-2 py-0.5 rounded-sm border border-transparent hover:border-border/20 transition-colors whitespace-nowrap" role="listitem">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                {project.liveUrl && (
                                    <Button
                                        size="sm"
                                        className="flex-1 text-white hover:opacity-90 transition-opacity"
                                        style={{
                                            // Dynamic styling: Use Brand color if available, otherwise default blue
                                            backgroundColor: project.brandColor || '#3b82f6'
                                        }}
                                        asChild
                                    >
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1" aria-label={`View live demo of ${project.title}`}>
                                            Live Website
                                            <ExternalSiteIcon aria-hidden="true" />
                                        </a>
                                    </Button>
                                )}
                                {project.githubUrl && (
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="flex-1"
                                        asChild
                                        style={project.brandColor ? {
                                            // Subtle styling for code button if brand color exists
                                            borderColor: `color-mix(in srgb, ${project.brandColor}, transparent 80%)`,
                                            color: `color-mix(in srgb, ${project.brandColor}, black 20%)`
                                        } : {}}
                                    >
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1" aria-label={`View source code for ${project.title}`}>
                                            View Code
                                            <ExternalSiteIcon aria-hidden="true" />
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="text-center mt-12">
                <p className="text-muted-foreground">
                    See more on{" "}
                    <a
                        href="https://github.com/cgorski03"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 underline underline-offset-4 transition-colors"
                    >
                        GitHub
                    </a>
                </p>
            </div>
        </section>
    )
}
