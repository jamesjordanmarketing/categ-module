'use client'

import { SignInForm } from '@brighthub/auth-module'
import { useRouter } from 'next/navigation'

export default function SignInPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <SignInForm
        onSuccess={() => router.push('/dashboard')}
        onSignUpClick={() => router.push('/signup')}
        showOAuth={false}
        showMagicLink={false}
      />
    </div>
  )
}
