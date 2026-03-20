import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Fraunces, Nunito } from 'next/font/google'
import { RevealOnScroll } from '@/components/landing/RevealOnScroll'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-fraunces',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-nunito',
})

export default async function LandingPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) redirect('/dashboard')

  return (
    <div
      className={`${fraunces.variable} ${nunito.variable}`}
      style={{
        minHeight: '100vh',
        background: 'var(--l-bg-base)',
        color: 'var(--l-text)',
        fontFamily: 'var(--font-nunito, Nunito, sans-serif)',
        overflowX: 'hidden',
        // Landing theme variables (scoped to this page)
        ['--l-bg-base' as any]: '#FFF6E8',
        ['--l-bg-surface' as any]: '#FFFFFF',
        ['--l-bg-card' as any]: '#FFFFFF',
        ['--l-border' as any]: 'rgba(15, 23, 42, 0.12)',
        ['--l-text' as any]: '#0F172A',
        ['--l-text-muted' as any]: 'rgba(15, 23, 42, 0.68)',
        ['--l-text-faint' as any]: 'rgba(15, 23, 42, 0.36)',
        ['--l-grad' as any]: '#7C3AED',
        ['--l-grad-soft' as any]: 'rgba(124,58,237,0.10)',
        ['--l-coral' as any]: '#FF6B6B',
        ['--l-sunshine' as any]: '#FFBD2E',
        ['--l-sky' as any]: '#60A5FA',
        ['--l-mint' as any]: '#2DD4BF',
        ['--l-lavender' as any]: '#A78BFA',
      }}
    >
      <nav
        className="landing-nav px-6 md:px-20"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(230, 243, 255, 0.96)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(37,99,235,0.20)',
          paddingTop: 14,
          paddingBottom: 14,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              background: '#FFFFFF',
              border: '0.5px solid rgba(45,212,191,0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 16,
              boxShadow: '0 12px 28px rgba(45,212,191,0.14)',
            }}
          >
            🎓
          </div>
          <span style={{ fontSize: 21, fontWeight: 900, fontFamily: 'var(--font-fraunces, Fraunces, serif)', letterSpacing: '-0.4px' }}>
            <span style={{ color: 'var(--l-text)' }}>Tutor</span>
            <span style={{ color: '#059669' }}>AI</span>
          </span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Link
            href="/login"
            style={{
              border: '0.5px solid rgba(15,23,42,0.12)',
              background: 'var(--l-bg-surface)',
              color: 'var(--l-text-muted)',
              borderRadius: 9,
              padding: '7px 18px',
              textDecoration: 'none',
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            style={{
              background: '#7C3AED',
              color: '#fff',
              borderRadius: 9,
              padding: '8px 20px',
              textDecoration: 'none',
              fontSize: 13,
              fontWeight: 600,
              boxShadow: '0 12px 28px rgba(124,58,237,0.22)',
            }}
          >
            Get started free
          </Link>
        </div>
      </nav>

      <section
        className="hero-padding px-6 md:px-20"
        style={{
          background: 'var(--l-bg-base)',
          paddingTop: 96,
          paddingBottom: 80,
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
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
            width: 460,
            height: 460,
            borderRadius: 44,
            background: 'rgba(167,139,250,0.14)',
            border: '1px solid rgba(167,139,250,0.28)',
            transform: 'rotate(-16deg)',
            top: -170,
            left: -230,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 380,
            height: 380,
            borderRadius: 38,
            background: 'rgba(96,165,250,0.14)',
            border: '1px solid rgba(96,165,250,0.30)',
            transform: 'rotate(14deg)',
            top: -130,
            right: -170,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 320,
            height: 320,
            borderRadius: 34,
            background: 'rgba(45,212,191,0.14)',
            border: '1px solid rgba(45,212,191,0.30)',
            transform: 'rotate(-10deg)',
            bottom: -170,
            left: '41%',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 220,
            height: 220,
            borderRadius: 24,
            background: 'rgba(255,189,46,0.12)',
            border: '1px solid rgba(255,189,46,0.30)',
            transform: 'rotate(22deg)',
            top: '33%',
            left: -80,
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'rgba(167,139,250,0.14)',
                    border: '1px solid rgba(167,139,250,0.38)',
                    borderRadius: 100,
                    padding: '6px 14px',
                    fontSize: 12,
                    color: '#6D28D9',
                    fontWeight: 700,
                    boxShadow: '0 2px 8px rgba(124,58,237,0.10)',
                    marginBottom: 26,
                  }}
                >
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#A78BFA', display: 'inline-block' }} />
                  AI-powered education platform
                </div>

                <h1
                  style={{
                    fontFamily: 'var(--font-fraunces, Fraunces, serif)',
                    fontSize: 'clamp(28px, 4.2vw, 52px)',
                    fontWeight: 800,
                    lineHeight: 1.03,
                    letterSpacing: '-2px',
                    marginBottom: 12,
                    color: 'var(--l-text)',
                    textShadow: '0 10px 26px rgba(15, 23, 42, 0.06)',
                  }}
                >
                  <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>The smarter way to</span>
                  <br />
                  learn anything.
                </h1>

                <p
                  style={{
                    color: 'var(--l-text-muted)',
                    fontSize: 'clamp(15px, 1.5vw, 19px)',
                    lineHeight: 1.7,
                    maxWidth: 560,
                    margin: '0 auto 30px',
                  }}
                >
                  Personalized AI tutoring that guides students to answers instead of giving them away.
                  Built for students, teachers, and parents.
                </p>

                <div className="flex justify-center md:justify-start gap-14 mb-14 flex-wrap">
                  <Link
                    href="/signup"
                    style={{
                      background: '#7C3AED',
                      borderRadius: 14,
                      padding: '15px 38px',
                      fontFamily: 'var(--font-fraunces, Fraunces, serif)',
                      fontSize: 15,
                      fontWeight: 800,
                      textDecoration: 'none',
                      color: '#fff',
                      boxShadow: '0 12px 28px rgba(124,58,237,0.24)',
                    }}
                  >
                    Start learning free →
                  </Link>
                  <Link
                    href="/login"
                    style={{
                      background: 'var(--l-bg-surface)',
                      border: '0.5px solid rgba(15,23,42,0.12)',
                      borderRadius: 14,
                      padding: '15px 38px',
                      color: 'rgba(15,23,42,0.72)',
                      textDecoration: 'none',
                      fontSize: 15,
                      fontWeight: 700,
                    }}
                  >
                    Sign in to dashboard
                  </Link>
                </div>
              </div>

              <div
                className="landing-float-gentle landing-lift-on-hover"
                style={{
                  maxWidth: 760,
                  margin: '0 auto',
                  background: 'var(--l-bg-card)',
                  border: '0.5px solid rgba(167,139,250,0.20)',
                  borderRadius: 22,
                  overflow: 'hidden',
                  boxShadow: '0 20px 56px rgba(15, 23, 42, 0.10)',
                }}
              >
                <div
                  style={{
                      background: 'var(--l-bg-surface)',
                    borderBottom: '0.5px solid rgba(15,23,42,0.08)',
                    padding: '12px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                  }}
                >
                  <div style={{ display: 'flex', gap: 6 }}>
                    {['#FF6B6B', '#FFBD2E', '#2DD4BF'].map((color) => (
                      <span key={color} style={{ width: 10, height: 10, borderRadius: '50%', background: color, display: 'inline-block' }} />
                    ))}
                  </div>
                  <div style={{ margin: '0 auto', fontSize: 12, color: 'var(--l-text-muted)' }}>TutorAI · Math · Grade 8 · Algebra</div>
                  <div
                    style={{
                      background: 'rgba(45,212,191,0.16)',
                      color: '#0D9488',
                      fontSize: 10,
                      fontWeight: 800,
                      borderRadius: 100,
                      padding: '3px 10px',
                    }}
                  >
                    ● Live
                  </div>
                </div>

                <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { role: 'ai', text: "Hi! Let's tackle this together. When you see x² + 5x + 6 = 0, what's the first thing you'd try?" },
                    { role: 'user', text: 'I think I need to factor it?' },
                    { role: 'ai', text: 'Exactly! 🎉 Now - can you find two numbers that multiply to 6 and add up to 5?' },
                    { role: 'user', text: '2 and 3?' },
                    { role: 'ai', text: 'Perfect! 🌟 2 × 3 = 6 and 2 + 3 = 5. So now can you write the factored form? It looks like (x + ?)(x + ?).' },
                  ].map((message, index) =>
                    message.role === 'ai' ? (
                      <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 10,
                            background: '#FFFFFF',
                            border: '0.5px solid rgba(45,212,191,0.35)',
                            boxShadow: '0 10px 20px rgba(45,212,191,0.12)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 14,
                            flexShrink: 0,
                          }}
                        >
                          🎓
                        </div>
                        <div
                          style={{
                            background: 'rgba(167,139,250,0.10)',
                            border: '0.5px solid rgba(167,139,250,0.22)',
                            borderRadius: '4px 14px 14px 14px',
                            padding: '10px 13px',
                            fontSize: 13.5,
                            color: 'var(--l-text)',
                            maxWidth: '82%',
                            lineHeight: 1.6,
                            textAlign: 'left',
                          }}
                        >
                          {message.text}
                        </div>
                      </div>
                    ) : (
                      <div
                        key={index}
                        style={{
                          alignSelf: 'flex-end',
                          background: 'rgba(255,107,107,0.18)',
                          border: '0.5px solid rgba(255,107,107,0.22)',
                          color: 'rgba(15,23,42,0.90)',
                          borderRadius: '18px 18px 4px 18px',
                          padding: '10px 13px',
                          fontSize: 13.5,
                          maxWidth: '72%',
                          lineHeight: 1.6,
                          textAlign: 'left',
                        }}
                      >
                        {message.text}
                      </div>
                    )
                  )}
                </div>

                <div
                  style={{
                    background: 'var(--l-bg-surface)',
                    borderTop: '0.5px solid rgba(15,23,42,0.08)',
                    padding: '10px 14px',
                    display: 'flex',
                    gap: 10,
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      background: 'rgba(15,23,42,0.04)',
                      border: '0.5px solid rgba(15,23,42,0.08)',
                      borderRadius: 9,
                      color: 'rgba(15,23,42,0.42)',
                      padding: '10px 14px',
                      fontSize: 12,
                      textAlign: 'left',
                      fontWeight: 700,
                    }}
                  >
                    Ask your tutor anything...
                  </div>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: '#FFFFFF',
                      border: '0.5px solid rgba(45,212,191,0.35)',
                      boxShadow: '0 10px 20px rgba(45,212,191,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--l-text)',
                      fontSize: 14,
                      fontWeight: 900,
                      lineHeight: 1,
                    }}
                  >
                    ↑
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section
        className="landing-section-padding"
        style={{
          background: 'var(--l-bg-surface)',
          borderTop: '0.5px solid rgba(15, 23, 42, 0.06)',
          borderBottom: '0.5px solid rgba(15, 23, 42, 0.06)',
          padding: '28px 80px',
          width: '100%',
        }}
      >
        <RevealOnScroll>
          <div
            className="stats-grid-4"
            style={{
              maxWidth: 1100,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 16,
              textAlign: 'center',
            }}
          >
          {[
            { value: '10k+', label: 'Active learners', valueColor: '#7C3AED' },
            { value: '4', label: 'Core subjects', valueColor: '#2DD4BF' },
            { value: '3', label: 'Roles supported', valueColor: '#FFBD2E' },
            { value: 'Free', label: 'To get started', valueColor: '#60A5FA' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="landing-lift-on-hover"
              style={{
                borderRadius: 18,
                background: 'var(--l-bg-surface)',
                border: '0.5px solid rgba(15,23,42,0.08)',
                padding: '18px 14px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-fraunces, Fraunces, serif)',
                  fontSize: 28,
                  fontWeight: 900,
                  letterSpacing: '-0.5px',
                  color: stat.valueColor,
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: 12, color: 'var(--l-text-muted)', marginTop: 3, fontWeight: 700 }}>{stat.label}</div>
            </div>
          ))}
          </div>
        </RevealOnScroll>
      </section>

      <section
        className="landing-section-padding"
        style={{
          borderTop: '0.5px solid rgba(15, 23, 42, 0.08)',
          borderBottom: '0.5px solid rgba(15, 23, 42, 0.08)',
          padding: '24px 56px',
          background: 'var(--l-bg-surface)',
        }}
      >
        <RevealOnScroll>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
            <span style={{ fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--l-text-faint)', fontWeight: 800 }}>
              Designed for
            </span>
            {['Middle School', 'High School', 'Math & Algebra', 'Reading & Writing', 'Science'].map((item, index, arr) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                <span style={{ color: 'var(--l-text-muted)', fontSize: 13, fontWeight: 800 }}>{item}</span>
                {index < arr.length - 1 ? <span style={{ color: 'rgba(15, 23, 42, 0.20)', fontSize: 16 }}>·</span> : null}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <section className="landing-section-padding" style={{ background: 'var(--l-bg-surface)', padding: '88px 64px', textAlign: 'center' }}>
        <RevealOnScroll>
          <div>
            <div style={{ fontSize: 11, color: '#6D28D9', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase' }}>What you get</div>
            <h2 style={{ fontFamily: 'var(--font-fraunces, Fraunces, serif)', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, letterSpacing: '-0.8px', color: 'var(--l-text)', marginTop: 14 }}>
              Everything in one platform.
            </h2>

            <div className="roles-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, maxWidth: 1100, margin: '48px auto 0' }}>
              {[
                { icon: '🎒', title: 'For students', desc: 'Socratic AI that guides thinking, never gives away answers.', background: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.22)', iconBg: 'rgba(167,139,250,0.16)', titleColor: '#6D28D9', descColor: 'rgba(109,40,217,0.88)' },
                { icon: '👩‍🏫', title: 'For teachers', desc: 'Lesson plans, quizzes, and rubrics generated in minutes.', background: 'rgba(45,212,191,0.12)', border: 'rgba(45,212,191,0.20)', iconBg: 'rgba(45,212,191,0.16)', titleColor: '#0D9488', descColor: 'rgba(13,148,136,0.88)' },
                { icon: '👨‍👩‍👧', title: 'For parents', desc: "Full visibility into your child's learning journey.", background: 'rgba(255,189,46,0.14)', border: 'rgba(255,189,46,0.24)', iconBg: 'rgba(255,189,46,0.18)', titleColor: '#B45309', descColor: 'rgba(180,83,9,0.88)' },
                { icon: '📐', title: 'Math & algebra', desc: 'Step-by-step problem solving with hints, not answers.', background: 'rgba(96,165,250,0.12)', border: 'rgba(96,165,250,0.22)', iconBg: 'rgba(96,165,250,0.16)', titleColor: '#2563EB', descColor: 'rgba(37,99,235,0.88)' },
                { icon: '📖', title: 'Reading & writing', desc: 'Comprehension coaching and essay feedback built in.', background: 'rgba(255,107,107,0.12)', border: 'rgba(255,107,107,0.22)', iconBg: 'rgba(255,107,107,0.16)', titleColor: '#E11D48', descColor: 'rgba(225,29,72,0.88)' },
                { icon: '🛡️', title: 'Safe & moderated', desc: 'Every conversation monitored automatically for student safety.', background: 'rgba(167,139,250,0.10)', border: 'rgba(167,139,250,0.20)', iconBg: 'rgba(167,139,250,0.14)', titleColor: '#7C3AED', descColor: 'rgba(124,58,237,0.84)' },
              ].map((card) => (
                <div
                  key={card.title}
                  className="landing-lift-on-hover"
                  style={{ borderRadius: 20, padding: 28, border: `1.5px solid ${card.border}`, background: card.background, textAlign: 'left', boxShadow: '0 14px 30px rgba(15,23,42,0.06)' }}
                >
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: card.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 21, marginBottom: 16 }}>{card.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-fraunces, Fraunces, serif)', fontSize: 16, fontWeight: 900, color: card.titleColor, marginBottom: 8 }}>{card.title}</h3>
                  <p style={{ color: card.descColor, fontSize: 13, lineHeight: 1.65 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="landing-section-padding" style={{ background: 'var(--l-bg-surface)', padding: '88px 64px' }}>
        <RevealOnScroll>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ fontSize: 11, color: '#6D28D9', fontWeight: 900, letterSpacing: '1.5px', textTransform: 'uppercase' }}>How it works</div>
            <h2 style={{ fontFamily: 'var(--font-fraunces, Fraunces, serif)', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, letterSpacing: '-0.8px', color: 'var(--l-text)', marginTop: 14 }}>
              Guided learning, not just answers.
            </h2>

            <div className="how-row-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 64, alignItems: 'center', marginTop: 52 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-fraunces, Fraunces, serif)', fontSize: 72, fontWeight: 900, lineHeight: 1, marginBottom: -10, color: '#A78BFA' }}>
                  01
                </div>
                <h3 style={{ fontFamily: 'var(--font-fraunces, Fraunces, serif)', fontSize: 24, fontWeight: 900, color: 'var(--l-text)', marginBottom: 10 }}>
                  Ask anything, get guided
                </h3>
                <p style={{ fontSize: 15, color: 'var(--l-text-muted)', lineHeight: 1.7 }}>
                  Our AI tutor uses the Socratic method - it never just hands you the answer. Instead it
                  breaks down your thinking, asks the right follow-up questions, and helps you reach the
                  solution yourself.
                </p>
              </div>

              <div className="landing-lift-on-hover" style={{ background: 'var(--l-bg-card)', border: '0.5px solid rgba(15,23,42,0.10)', borderRadius: 18, overflow: 'hidden', boxShadow: '0 4px 20px rgba(15,23,42,0.05)' }}>
                <div style={{ background: 'rgba(96,165,250,0.10)', borderBottom: '0.5px solid rgba(15,23,42,0.08)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ width: 8, height: 8, background: 'var(--l-mint)', borderRadius: '50%', display: 'inline-block' }} />
                  <span style={{ fontSize: 11, color: '#2563EB', fontWeight: 900 }}>📐 ALGEBRA SESSION</span>
                </div>
                <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ background: 'rgba(167,139,250,0.10)', border: '0.5px solid rgba(167,139,250,0.18)', borderRadius: 10, padding: '9px 12px', fontSize: 12, color: '#6D28D9' }}>
                    What do you already know about factoring?
                  </div>
                  <div style={{ alignSelf: 'flex-end', background: 'rgba(255,107,107,0.16)', border: '0.5px solid rgba(255,107,107,0.22)', color: '#0F172A', borderRadius: 10, padding: '9px 12px', fontSize: 12, fontWeight: 800 }}>
                    I know I need two numbers...
                  </div>
                  <div style={{ background: 'rgba(167,139,250,0.10)', border: '0.5px solid rgba(167,139,250,0.18)', borderRadius: 10, padding: '9px 12px', fontSize: 12, color: '#6D28D9' }}>
                    Great start! What should those two numbers add up to?
                  </div>
                </div>
              </div>
            </div>

            <div className="how-row-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 64, alignItems: 'center', marginTop: 64 }}>
              <div className="landing-lift-on-hover" style={{ background: 'var(--l-bg-card)', border: '0.5px solid rgba(15,23,42,0.10)', borderRadius: 18, overflow: 'hidden', boxShadow: '0 4px 20px rgba(15,23,42,0.05)' }}>
                <div style={{ background: 'rgba(45,212,191,0.10)', borderBottom: '0.5px solid rgba(15,23,42,0.08)', padding: '12px 16px' }}>
                  <span style={{ fontSize: 11, color: '#0D9488', fontWeight: 900 }}>📊 PROGRESS OVERVIEW</span>
                </div>
                <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { label: 'Math', width: '78%', text: '#60A5FA', color: '#60A5FA' },
                    { label: 'Reading', width: '62%', text: '#2DD4BF', color: '#2DD4BF' },
                    { label: 'Science', width: '45%', text: '#FFBD2E', color: '#FFBD2E' },
                    { label: 'Writing', width: '88%', text: '#FF6B6B', color: '#FF6B6B' },
                  ].map((bar) => (
                    <div key={bar.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ width: 52, fontSize: 12, color: 'var(--l-text-muted)', fontWeight: 800 }}>{bar.label}</span>
                      <div style={{ flex: 1, height: 6, background: 'rgba(15,23,42,0.08)', borderRadius: 100 }}>
                        <div style={{ width: bar.width, height: '100%', background: bar.color, borderRadius: 100 }} />
                      </div>
                      <span style={{ fontSize: 12, color: bar.text, fontWeight: 900 }}>{bar.width}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-fraunces, Fraunces, serif)', fontSize: 72, fontWeight: 900, lineHeight: 1, marginBottom: -10, color: '#60A5FA' }}>
                  02
                </div>
                <h3 style={{ fontFamily: 'var(--font-fraunces, Fraunces, serif)', fontSize: 24, fontWeight: 900, color: 'var(--l-text)', marginBottom: 10 }}>
                  Track every step of progress
                </h3>
                <p style={{ fontSize: 15, color: 'var(--l-text-muted)', lineHeight: 1.7 }}>
                  Teachers and parents get a clear picture of what&apos;s being learned and where students
                  need help.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="landing-section-padding" style={{ background: 'var(--l-bg-surface)', padding: '88px 64px', textAlign: 'center' }}>
        <RevealOnScroll>
          <div>
            <div style={{ fontSize: 11, color: '#6D28D9', fontWeight: 900, letterSpacing: '1.5px', textTransform: 'uppercase' }}>Who it&apos;s for</div>
            <h2 style={{ fontFamily: 'var(--font-fraunces, Fraunces, serif)', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 900, letterSpacing: '-0.8px', color: 'var(--l-text)', marginTop: 14 }}>
              One platform, three perspectives.
            </h2>

            <div className="roles-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: 1100, margin: '48px auto 0' }}>
              {[
                { title: 'Students', icon: '🎒', accentColor: '#A78BFA', background: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.22)', iconBg: 'rgba(167,139,250,0.16)', titleColor: '#6D28D9', bodyColor: 'rgba(109,40,217,0.88)', dot: '#7C3AED', body: 'Get step-by-step guidance that builds real understanding - not just the right answer.', items: ['Socratic AI tutoring', 'Math, Reading, Science & Writing', 'Progress tracking & streaks'] },
                { title: 'Teachers', icon: '👩‍🏫', accentColor: '#2DD4BF', background: 'rgba(45,212,191,0.12)', border: 'rgba(45,212,191,0.20)', iconBg: 'rgba(45,212,191,0.16)', titleColor: '#0D9488', bodyColor: 'rgba(13,148,136,0.88)', dot: '#059669', body: 'Cut hours of prep time with AI-generated lesson plans, quizzes, and rubrics.', items: ['Lesson plan generator', 'Assignment & quiz creator', 'Class performance analytics'] },
                { title: 'Parents', icon: '👨‍👩‍👧', accentColor: '#FFBD2E', background: 'rgba(255,189,46,0.14)', border: 'rgba(255,189,46,0.24)', iconBg: 'rgba(255,189,46,0.18)', titleColor: '#B45309', bodyColor: 'rgba(180,83,9,0.88)', dot: '#FF6B6B', body: "Stay involved and informed with full visibility into your child's learning journey.", items: ['Real-time progress monitoring', 'Conversation safety log', 'Weekly summary reports'] },
              ].map((card) => (
                <div
                  key={card.title}
                  className="landing-lift-on-hover"
                  style={{ background: card.background, border: `1.5px solid ${card.border}`, borderRadius: 20, padding: 28, textAlign: 'left', position: 'relative', boxShadow: '0 14px 30px rgba(15,23,42,0.05)' }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: card.accentColor }} />
                  <div style={{ width: 52, height: 52, borderRadius: 15, background: card.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 16 }}>{card.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-fraunces, Fraunces, serif)', fontSize: 18, fontWeight: 900, color: card.titleColor, marginBottom: 6 }}>{card.title}</h3>
                  <p style={{ fontSize: 13, color: card.bodyColor, lineHeight: 1.65, marginBottom: 14 }}>{card.body}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {card.items.map((item) => (
                      <div key={item} style={{ fontSize: 12, color: card.bodyColor }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: card.dot, display: 'inline-block', marginRight: 6, verticalAlign: 'middle' }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="landing-section-padding" style={{ background: 'var(--l-bg-surface)', padding: '52px 56px' }}>
        <RevealOnScroll>
          <div
            className="stats-grid-4"
            style={{
              maxWidth: 1100,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 24,
              textAlign: 'center',
            }}
          >
            {[
              { value: '10k+', label: 'Active learners', valueColor: '#7C3AED' },
              { value: '4', label: 'Core subjects', valueColor: '#2DD4BF' },
              { value: '3', label: 'Roles supported', valueColor: '#FFBD2E' },
              { value: 'Free', label: 'To get started', valueColor: '#60A5FA' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="landing-lift-on-hover"
                style={{
                  borderRadius: 20,
                  padding: '24px 18px',
                  background: 'var(--l-bg-surface)',
                  border: '0.5px solid rgba(15,23,42,0.08)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-fraunces, Fraunces, serif)',
                    fontSize: 32,
                    fontWeight: 900,
                    letterSpacing: '-0.8px',
                  color: stat.valueColor,
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: 12, color: 'var(--l-text-muted)', marginTop: 4, fontWeight: 800 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <section className="landing-section-padding" style={{ background: 'var(--l-bg-surface)', padding: '80px 64px', textAlign: 'center' }}>
        <RevealOnScroll>
          <div
            className="cta-card-padding landing-lift-on-hover"
            style={{
              maxWidth: 1000,
              margin: '0 auto',
              background: 'var(--l-bg-card)',
              border: '0.5px solid rgba(167,139,250,0.22)',
              borderRadius: 28,
              padding: '64px 48px',
              boxShadow: '0 16px 48px rgba(15,23,42,0.10)',
            }}
          >
            <h2 style={{ fontFamily: 'var(--font-fraunces, Fraunces, serif)', fontSize: 36, fontWeight: 900, letterSpacing: '-0.8px', color: 'var(--l-text)', marginBottom: 12 }}>
              Start learning smarter.
            </h2>
            <p style={{ fontSize: 15, color: 'var(--l-text-muted)', marginBottom: 32, lineHeight: 1.65 }}>
              Join thousands already using TutorAI. Free to start, no credit card needed.
            </p>
            <Link
              href="/signup"
              style={{
                display: 'inline-block',
                  background: '#7C3AED',
                borderRadius: 12,
                padding: '14px 32px',
                fontFamily: 'var(--font-fraunces, Fraunces, serif)',
                fontSize: 15,
                fontWeight: 900,
                textDecoration: 'none',
                color: '#fff',
                boxShadow: '0 8px 24px rgba(124,58,237,0.28)',
              }}
            >
              Create your free account →
            </Link>
          </div>
        </RevealOnScroll>
      </section>

      <footer className="footer-responsive" style={{ background: '#D9EAFD', borderTop: '1px solid rgba(37,99,235,0.24)', padding: '28px 64px' }}>
        <RevealOnScroll>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
              <div
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 8,
                  background: '#FFFFFF',
                  border: '0.5px solid rgba(45,212,191,0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                }}
              >
                🎓
              </div>
              <span style={{ fontFamily: 'var(--font-fraunces, Fraunces, serif)', color: 'var(--l-text-faint)', fontSize: 16, fontWeight: 900, letterSpacing: '-0.2px' }}>
                <span style={{ color: 'var(--l-text-faint)' }}>Tutor</span>
                <span style={{ color: '#059669' }}>AI</span>
              </span>
            </Link>
            <span style={{ fontSize: 12, color: 'var(--l-text-faint)', fontWeight: 700 }}>© 2026 TutorAI. All rights reserved.</span>
            <div style={{ display: 'flex', gap: 20 }}>
              <Link href="/terms" style={{ fontSize: 12, color: 'rgba(15,23,42,0.30)', textDecoration: 'none', fontWeight: 800 }}>
                Terms
              </Link>
              <Link href="/privacy" style={{ fontSize: 12, color: 'rgba(15,23,42,0.30)', textDecoration: 'none', fontWeight: 800 }}>
                Privacy
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </footer>
    </div>
  )
}
