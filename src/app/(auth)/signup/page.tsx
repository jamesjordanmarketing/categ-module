'use client'

import { SignUpForm } from '@brighthub/auth-module'
import { useRouter } from 'next/navigation'

export default function SignUpPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <SignUpForm
        onSuccess={() => router.push('/dashboard')}
        onSignInClick={() => router.push('/signin')}
      />
    </div>
  )
}
