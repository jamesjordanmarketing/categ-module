import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "../components/ui/sonner"

export const metadata: Metadata = {
  title: 'Document Categorization Workflow',
  description: 'Complete guided categorization for enhanced AI training',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background">
        {children}
        <Toaster />
      </body>
    </html>
  )
}