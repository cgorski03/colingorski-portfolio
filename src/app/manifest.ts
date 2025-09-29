import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Colin Gorski - Full-Stack Software Engineer',
    short_name: 'Colin Gorski',
    description: 'Full-stack software engineer specializing in TypeScript, React, AWS, and C#. Delivering measurable impact through optimized workflows and reliable software solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}