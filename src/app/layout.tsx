
// default imports
import { Geist, Geist_Mono } from "next/font/google"
import { AuthProvider } from './AuthProvider'
import "./globals.css"

// import components
import Navbar from '@/components/Navbar'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: 'Kinde Auth',
  description: 'Kinde with Next.js App Router'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />

          <main className='w-full flex-1 max-w-7xl mx-auto pt-10 px-4 lg:px-0'>
            {children}
          </main>

        </body>
      </html>
    </AuthProvider>
  )
}
