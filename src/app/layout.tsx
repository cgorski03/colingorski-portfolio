import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Colin Gorski - Full-Stack Software Engineer",
    template: "%s | Colin Gorski"
  },
  description: "Full-stack software engineer specializing in TypeScript, React, AWS, and C#. Delivering measurable impact through optimized workflows and reliable software solutions. View my portfolio of projects including SaaS applications and manufacturing automation.",
  keywords: [
    "Colin Gorski",
    "software engineer",
    "full-stack developer",
    "TypeScript",
    "React",
    "Next.js",
    "AWS",
    "C#",
    "portfolio",
    "SaaS",
    "manufacturing automation",
    "Lockheed Martin",
    "ForeAdvantage Golf"
  ],
  authors: [{ name: "Colin Gorski", url: "https://colingorski.com" }],
  creator: "Colin Gorski",
  publisher: "Colin Gorski",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://colingorski.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://colingorski.com',
    title: 'Colin Gorski - Full-Stack Software Engineer',
    description: 'Full-stack software engineer specializing in TypeScript, React, AWS, and C#. Delivering measurable impact through optimized workflows and reliable software solutions.',
    siteName: 'Colin Gorski Portfolio',
    images: [
      {
        url: '/headshot.jpg',
        width: 1200,
        height: 630,
        alt: 'Colin Gorski - Professional Headshot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colin Gorski - Full-Stack Software Engineer',
    description: 'Full-stack software engineer specializing in TypeScript, React, AWS, and C#. Delivering measurable impact through optimized workflows.',
    images: ['/headshot.jpg'],
    creator: '@colingorski',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Colin Gorski",
    "jobTitle": "Full-Stack Software Engineer",
    "description": "Full-stack software engineer specializing in TypeScript, React, AWS, and C#. Delivering measurable impact through optimized workflows and reliable software solutions.",
    "url": "https://colingorski.dev",
    "image": "https://colingorski.dev/headshot.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/colingorski/",
      "https://github.com/cgorski03"
    ],
    "email": "cgorski03@gmail.com",
    "knowsAbout": [
      "TypeScript",
      "React",
      "Next.js",
      "AWS",
      "C#",
      "JavaScript",
      "Python",
      "SQL",
      "Docker",
      "Git",
      "Stripe",
      "Manufacturing Automation",
      "SaaS Development"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "ForeAdvantage Golf",
        "role": "Founder & Engineer"
      },
      {
        "@type": "Organization",
        "name": "Lockheed Martin – Sikorsky",
        "role": "Software Engineer (Manufacturing)"
      }
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Connecticut",
      "department": "Computer Science"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
