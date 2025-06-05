import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EduPro - Premium Online Education Platform',
  description: 'Transform your future with EduPro\'s comprehensive online courses. Expert-led training in technology, business, design and more with industry-recognized certificates.',
  keywords: 'online courses, education, learning, professional development, certification, web development, data science, digital marketing',
  openGraph: {
    title: 'EduPro - Premium Online Education Platform',
    description: 'Transform your future with EduPro\'s comprehensive online courses. Expert-led training in technology, business, design and more.',
    type: 'website',
    url: 'https://edupro.com',
    images: [{
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduPro - Premium Online Education Platform',
    description: 'Transform your future with EduPro\'s comprehensive online courses. Expert-led training in technology, business, design and more.',
    images: ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎓</text></svg>" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "EduPro",
              description: "Premium online education platform offering professional development courses",
              url: "https://edupro.com",
              logo: "https://edupro.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                email: "support@edupro.com"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  )
}