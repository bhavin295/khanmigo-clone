'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Eye, EyeOff } from 'lucide-react'
import { SignupIllustration } from '@/components/auth/SignupIllustration'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const nextPath = searchParams.get('next') ?? '/dashboard'
  const errorParam = searchParams.get('error')

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const supabase = createClient()
    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    })
    if (loginError) {
      const msg = loginError.message.toLowerCase()
      if (msg.includes('email not confirmed')) {
        setError('Please confirm your email first. Check your inbox.')
      } else if (msg.includes('invalid login credentials')) {
        setError('Incorrect email or password. Please try again.')
      } else {
        setError(loginError.message)
      }
      setLoading(false)
      return
    }
    if (data.user) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', data.user.id)
        .single()
      const destination = !profile?.role ? '/onboarding' : nextPath
      router.push(destination)
    }
    setLoading(false)
  }

  const handleGoogleLogin = async () => {
    setGoogleLoading(true)
    setError(null)
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: { access_type: 'offline', prompt: 'consent' },
      },
    })
    if (error) {
      setError(error.message)
      setGoogleLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        fontFamily: "var(--font-dm, 'DM Sans', sans-serif)",
      }}
    >
      <div
        className="hidden lg:flex"
        style={{
          width: '45%',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          background: '#EFE2CC',
          borderRight: '1px solid rgba(15,23,42,0.14)',
          padding: '44px 48px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'none',
          }}
        />

        <div
          style={{
            position: 'absolute',
            width: 360,
            height: 360,
            borderRadius: 38,
            background: 'rgba(167,139,250,0.12)',
            border: '1px solid rgba(167,139,250,0.28)',
            transform: 'rotate(-18deg)',
            top: -90,
            right: -150,
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'absolute',
            width: 300,
            height: 300,
            borderRadius: 34,
            background: 'rgba(45,212,191,0.12)',
            border: '1px solid rgba(45,212,191,0.28)',
            transform: 'rotate(14deg)',
            bottom: -110,
            left: -120,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 220,
            height: 220,
            borderRadius: 28,
            background: 'rgba(96,165,250,0.12)',
            border: '1px solid rgba(96,165,250,0.30)',
            transform: 'rotate(-12deg)',
            top: '46%',
            right: -80,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 160,
            height: 160,
            borderRadius: 24,
            background: 'rgba(255,189,46,0.12)',
            border: '1px solid rgba(255,189,46,0.32)',
            transform: 'rotate(24deg)',
            top: '22%',
            left: -70,
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 11,
                background: 'rgba(167,139,250,0.18)',
                border: '0.5px solid rgba(167,139,250,0.30)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 17,
              }}
            >
              🎓
            </div>
            <span style={{ fontSize: 21, fontWeight: 900, fontFamily: 'var(--font-sora, Fraunces, serif)', letterSpacing: '-0.4px' }}>
              <span style={{ color: 'var(--text)' }}>Tutor</span>
              <span style={{ color: '#059669' }}>AI</span>
            </span>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 0', textAlign: 'center' }}>
            <SignupIllustration />
            <h2 style={{ marginTop: 14, color: 'var(--text)', fontFamily: "var(--font-sora, 'Sora', sans-serif)", fontSize: 26, fontWeight: 900, letterSpacing: '-0.6px' }}>
              Learn smarter with AI guidance.
            </h2>
            <p style={{ marginTop: 8, color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, maxWidth: 320 }}>
              Personalized tutoring for students, powerful tools for teachers, and peace of mind for parents.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          background: 'var(--bg-surface)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 32px',
          overflowY: 'auto',
        }}
      >
        <div style={{ width: '100%', maxWidth: 400 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: 10,
              marginBottom: 32,
              width: '100%',
            }}
          >
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                textDecoration: 'none',
                color: '#6D28D9',
                fontWeight: 800,
                fontSize: 13,
                background: 'rgba(167,139,250,0.14)',
                border: '0.5px solid rgba(167,139,250,0.32)',
                borderRadius: 999,
                padding: '8px 13px',
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(167,139,250,0.24)',
                  lineHeight: 1,
                }}
              >
                ←
              </span>
              Back to Home
            </Link>
          </div>

          <h1
            style={{
              color: 'var(--text)',
              fontFamily: "var(--font-sora, 'Sora', sans-serif)",
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: '-0.6px',
              marginBottom: 6,
            }}
          >
            Welcome back
          </h1>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: 14,
              lineHeight: 1.6,
              marginBottom: 28,
            }}
          >
            Sign in to continue to your dashboard.
          </p>

          {errorParam ? (
            <div
              style={{
                background: 'rgba(239,68,68,0.1)',
                border: '0.5px solid rgba(239,68,68,0.25)',
                color: 'rgba(252,165,165,1)',
                borderRadius: 10,
                padding: '10px 14px',
                fontSize: 13,
                marginBottom: 16,
              }}
            >
              {decodeURIComponent(errorParam)}
            </div>
          ) : null}

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={googleLoading}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              background: '#FFFFFF',
              border: '0.5px solid var(--border)',
              borderRadius: 12,
              padding: '12px 16px',
              color: 'var(--text)',
              fontSize: 14,
              fontWeight: 600,
              cursor: googleLoading ? 'not-allowed' : 'pointer',
              opacity: googleLoading ? 0.7 : 1,
              boxShadow: '0 10px 24px rgba(15,23,42,0.12)',
              marginBottom: 20,
              transition: 'all 0.15s',
              fontFamily: "var(--font-dm, 'DM Sans', sans-serif)",
            }}
          >
            {googleLoading ? (
              <svg style={{ width: 18, height: 18, animation: 'spin 1s linear infinite' }} viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" opacity="0.3" />
                <path fill="rgba(255,255,255,0.75)" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            )}
            {googleLoading ? 'Redirecting...' : 'Continue with Google'}
          </button>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 20,
            }}
          >
            <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
            <span
              style={{
                color: 'var(--text-faint)',
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                whiteSpace: 'nowrap',
              }}
            >
              or sign in with email
            </span>
            <div style={{ flex: 1, height: '0.5px', background: 'var(--border)' }} />
          </div>

          <form onSubmit={handleEmailLogin} noValidate>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    color: 'var(--text-muted)',
                    fontSize: 13,
                    fontWeight: 500,
                    marginBottom: 6,
                  }}
                >
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  style={{
                    width: '100%',
                    background: 'var(--bg-input)',
                    border: '0.5px solid var(--border)',
                    borderRadius: 11,
                    padding: '12px 14px',
                    color: 'var(--text)',
                    fontSize: 14,
                    outline: 'none',
                    transition: 'border-color 0.15s, box-shadow 0.15s',
                    fontFamily: "var(--font-dm, 'DM Sans', sans-serif)",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#7C3AED'
                    e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.1)'
                    e.target.style.background = 'rgba(124,58,237,0.06)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--border)'
                    e.target.style.boxShadow = 'none'
                    e.target.style.background = 'var(--bg-input)'
                  }}
                />
              </div>

              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 6,
                  }}
                >
                  <label
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: 13,
                      fontWeight: 500,
                    }}
                  >
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    style={{
                      color: '#5B21B6',
                      fontSize: 12,
                      textDecoration: 'none',
                      fontWeight: 800,
                    }}
                  >
                    Forgot password?
                  </Link>
                </div>

                <div style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    style={{
                      width: '100%',
                      background: 'var(--bg-input)',
                      border: '0.5px solid var(--border)',
                      borderRadius: 11,
                      padding: '12px 44px 12px 14px',
                      color: 'var(--text)',
                      fontSize: 14,
                      outline: 'none',
                      transition: 'border-color 0.15s, box-shadow 0.15s',
                      fontFamily: "var(--font-dm, 'DM Sans', sans-serif)",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#7C3AED'
                      e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.1)'
                      e.target.style.background = 'rgba(124,58,237,0.06)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border)'
                      e.target.style.boxShadow = 'none'
                      e.target.style.background = 'var(--bg-input)'
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    style={{
                      position: 'absolute',
                      right: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-muted)',
                      cursor: 'pointer',
                      padding: 0,
                      display: 'flex',
                    }}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {error ? (
                <div
                  style={{
                    background: 'rgba(239,68,68,0.1)',
                    border: '0.5px solid rgba(239,68,68,0.25)',
                    color: 'rgba(252,165,165,1)',
                    borderRadius: 10,
                    padding: '10px 14px',
                    fontSize: 13,
                  }}
                >
                  {error}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  background: loading ? 'rgba(15,23,42,0.06)' : 'var(--grad)',
                  border: 'none',
                  borderRadius: 12,
                  padding: '13px 16px',
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.75 : 1,
                  transition: 'all 0.15s',
                  boxShadow: loading ? 'none' : '0 4px 16px rgba(124,58,237,0.3)',
                  fontFamily: "var(--font-sora, 'Sora', sans-serif)",
                  letterSpacing: '-0.2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                }}
              >
                {loading ? (
                  <>
                    <svg style={{ width: 16, height: 16, animation: 'spin 1s linear infinite' }} viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
                      <path fill="white" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z" />
                    </svg>
                    Signing in...
                  </>
                ) : (
                  'Sign In →'
                )}
              </button>
            </div>
          </form>

          <p
            style={{
              textAlign: 'center',
              marginTop: 22,
              color: 'var(--text-faint)',
              fontSize: 14,
            }}
          >
            Don&apos;t have an account?{' '}
            <Link
              href="/signup"
              style={{
                color: '#5B21B6',
                fontWeight: 800,
                textDecoration: 'none',
              }}
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}
