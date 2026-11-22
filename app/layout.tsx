import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = { title: 'Palem Cleaning Services | A Cleaner Space. A Better Way.', description: 'Professional cleaning solutions designed to keep your spaces fresh, spotless and welcoming.' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
