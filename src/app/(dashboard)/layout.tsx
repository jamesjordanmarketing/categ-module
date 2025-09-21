import { Suspense } from 'react'
import { ProtectedRoute } from '@brighthub/auth-module'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute redirectTo="/signin">
      <div className="min-h-screen bg-background">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        }>
          {children}
        </Suspense>
      </div>
    </ProtectedRoute>
  )
}