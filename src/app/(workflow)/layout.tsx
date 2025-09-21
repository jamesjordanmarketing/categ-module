import { Suspense } from 'react'
import { ProtectedRoute } from '@brighthub/auth-module'
import { WorkflowProgressServer } from '../../components/server/WorkflowProgressServer'

export default function WorkflowLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute redirectTo="/signin">
      <div className="min-h-screen bg-background">
        <div className="flex">
          {/* Progress Sidebar */}
          <div className="w-80 border-r bg-muted/30 min-h-screen">
            <div className="p-6 space-y-6">
              <Suspense fallback={<div className="animate-pulse h-32 bg-muted rounded"></div>}>
                <WorkflowProgressServer />
              </Suspense>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            }>
              {children}
            </Suspense>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}