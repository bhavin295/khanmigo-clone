import Link from 'next/link'

export default function TermsPage() {
  const updatedAt = 'March 20, 2026'

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#FFF6E8',
        color: '#0F172A',
        fontFamily: 'Nunito, sans-serif',
        padding: '40px 20px 64px',
      }}
    >
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <div style={{ marginBottom: 20 }}>
          <Link
            href="/signup"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
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
            Back to signup
          </Link>
        </div>

        <section
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(15,23,42,0.10)',
            borderRadius: 24,
            padding: '28px 24px',
            boxShadow: '0 14px 34px rgba(15,23,42,0.08)',
          }}
        >
          <h1
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: 'clamp(30px, 4vw, 44px)',
              lineHeight: 1.1,
              marginBottom: 8,
            }}
          >
            Terms of Use
          </h1>
          <p style={{ color: 'rgba(15,23,42,0.64)', fontSize: 14, marginBottom: 24 }}>
            Last updated: {updatedAt}
          </p>

          <div style={{ display: 'grid', gap: 18, lineHeight: 1.7, fontSize: 15 }}>
            <section>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, marginBottom: 6 }}>1. Acceptance of Terms</h2>
              <p>
                By accessing and using TutorAI, you agree to these Terms of Use and our Privacy Policy. If you do not agree,
                please do not use the service.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, marginBottom: 6 }}>2. Educational Purpose</h2>
              <p>
                TutorAI is designed for educational support for learners, teachers, and families. Like leading education AI products,
                the system is intended to guide critical thinking rather than provide direct answer dumping for assignments.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, marginBottom: 6 }}>3. Accounts and Eligibility</h2>
              <p>
                You are responsible for your account credentials and activity. If you are under the age required in your region, a parent
                or guardian must provide permission and supervise account usage where applicable.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, marginBottom: 6 }}>4. Acceptable Use</h2>
              <p>
                You agree not to misuse the platform, including attempts to bypass safeguards, submit harmful content, scrape private data,
                or disrupt service availability. We may suspend accounts that violate these terms.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, marginBottom: 6 }}>5. Safety and Moderation</h2>
              <p>
                To support a safe learning experience, interactions may be monitored and reviewed by automated systems. We reserve the right
                to take action when activity appears unsafe, abusive, or inconsistent with educational use.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, marginBottom: 6 }}>6. Intellectual Property</h2>
              <p>
                TutorAI, including software, branding, and interface elements, is protected by intellectual property laws. You may not copy,
                reverse engineer, or distribute platform content except as explicitly allowed.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, marginBottom: 6 }}>7. Service Availability</h2>
              <p>
                We may modify, pause, or discontinue features at any time to improve quality, safety, or reliability. We do not guarantee
                uninterrupted service and are not liable for temporary outages.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, marginBottom: 6 }}>8. Disclaimers</h2>
              <p>
                AI responses may occasionally be incomplete or inaccurate. TutorAI is provided on an “as is” and “as available” basis and
                should be used with educator or parent judgment when important decisions are involved.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, marginBottom: 6 }}>9. Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. Continued use after changes become effective means you accept the revised Terms.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, marginBottom: 6 }}>10. Contact</h2>
              <p>
                For questions regarding these Terms, contact support through the app contact channels.
              </p>
            </section>
          </div>
        </section>
      </div>
    </main>
  )
}
