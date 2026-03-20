'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { SignupIllustration } from '@/components/auth/SignupIllustration'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const normalizedEmail = email.trim().toLowerCase()

    if (!normalizedEmail) {
      setError('Please enter your email address.')
      setSuccess(null)
      return
    }

    if (!validateEmail(normalizedEmail)) {
      setError('Please enter a valid email address.')
      setSuccess(null)
      return
    }

    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const supabase = createClient()
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(normalizedEmail, {
        redirectTo: `${window.location.origin}/login`,
      })

      if (resetError) {
        setError(resetError.message)
        setLoading(false)
        return
      }

      setSuccess('Reset link sent. Check your inbox (and spam folder).')
      setLoading(false)
    } catch (err) {
      console.error('Forgot password error:', err)
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        fontFamily: "var(--font-dm, 'DM Sans', sans-serif)",
        ['--bg-base' as string]: '#FFF6E8',
        ['--bg-surface' as string]: '#FFFFFF',
        ['--bg-card' as string]: '#FFFFFF',
        ['--bg-input' as string]: 'rgba(15,23,42,0.02)',
        ['--border' as string]: 'rgba(15,23,42,0.12)',
        ['--border-md' as string]: 'rgba(15,23,42,0.18)',
        ['--text' as string]: '#0F172A',
        ['--text-muted' as string]: 'rgba(15,23,42,0.68)',
        ['--text-faint' as string]: 'rgba(15,23,42,0.40)',
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
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'none' }} />
        <div style={{ position: 'absolute', width: 360, height: 360, borderRadius: 38, background: 'rgba(167,139,250,0.12)', border: '1px solid rgba(167,139,250,0.28)', transform: 'rotate(-18deg)', top: -90, right: -150, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: 34, background: 'rgba(45,212,191,0.12)', border: '1px solid rgba(45,212,191,0.28)', transform: 'rotate(14deg)', bottom: -110, left: -120, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 220, height: 220, borderRadius: 28, background: 'rgba(96,165,250,0.12)', border: '1px solid rgba(96,165,250,0.30)', transform: 'rotate(-12deg)', top: '46%', right: -80, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 160, height: 160, borderRadius: 24, background: 'rgba(255,189,46,0.12)', border: '1px solid rgba(255,189,46,0.32)', transform: 'rotate(24deg)', top: '22%', left: -70, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: 11, background: 'rgba(167,139,250,0.18)', border: '0.5px solid rgba(167,139,250,0.30)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17 }}>
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
              Reset and get back to learning.
            </h2>
            <p style={{ marginTop: 8, color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.7, maxWidth: 320 }}>
              Enter your account email and we&apos;ll send a secure password reset link.
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: 32 }}>
            <Link
              href="/login"
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
              <span style={{ width: 20, height: 20, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(167,139,250,0.24)', lineHeight: 1 }}>
                ←
              </span>
              Back to login
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
            Forgot password?
          </h1>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: 14,
              lineHeight: 1.6,
              marginBottom: 28,
            }}
          >
            No worries. We&apos;ll send reset instructions to your email.
          </p>

          <form onSubmit={handleSubmit} noValidate style={{ display: 'grid', gap: 16 }}>
            <div>
              <label
                style={{
                  display: 'block',
                  color: 'var(--text-muted)',
                  fontSize: 13,
                  fontWeight: 500,
                  marginBottom: 6,
                  textAlign: 'left',
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

            {error ? (
              <div className="text-sm rounded-xl px-4 py-3" style={{ background: 'rgba(239,68,68,0.1)', border: '0.5px solid rgba(239,68,68,0.25)', color: '#B91C1C' }}>
                {error}
              </div>
            ) : null}

            {success ? (
              <div className="text-sm rounded-xl px-4 py-3" style={{ background: 'rgba(16,185,129,0.1)', border: '0.5px solid rgba(16,185,129,0.3)', color: '#047857' }}>
                {success}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                border: 'none',
                borderRadius: 11,
                padding: '12px 16px',
                color: '#FFFFFF',
                background: '#7C3AED',
                fontSize: 14,
                fontWeight: 700,
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
                boxShadow: '0 8px 20px rgba(124,58,237,0.2)',
                transition: 'all 0.15s',
                fontFamily: "var(--font-dm, 'DM Sans', sans-serif)",
              }}
            >
              {loading ? 'Sending reset link...' : 'Send reset link'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
