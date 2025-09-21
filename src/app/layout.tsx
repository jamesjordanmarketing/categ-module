import { AuthProvider } from '@brighthub/auth-module'
import './globals.css'
import { Toaster } from "../components/ui/sonner"

export const metadata = {
  title: 'Document Categorization System',
  description: 'Categorize and tag documents efficiently',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider
          supabaseUrl={process.env.NEXT_PUBLIC_SUPABASE_URL!}
          supabaseKey={process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}
          redirectTo="/dashboard"
        >
          {children}
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  )
}