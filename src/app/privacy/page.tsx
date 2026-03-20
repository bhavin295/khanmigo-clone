import Link from 'next/link'

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p style={{ color: 'rgba(15,23,42,0.64)', fontSize: 14, marginBottom: 24 }}>
            Last updated: {updatedAt}
          </p>

          <div style={{ display: 'grid', gap: 18, lineHeight: 1.7, fontSize: 15 }}>
            <section>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, marginBottom: 6 }}>1. Information We Collect</h2>
              <p>
                We collect account details (such as name and email), learning interactions, and basic technical data to provide, secure,
                and improve TutorAI.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, marginBottom: 6 }}>2. How We Use Data</h2>
              <p>
                Data is used to operate the platform, personalize learning support, maintain safety systems, provide customer support, and
                improve product quality.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, marginBottom: 6 }}>3. Student and Family Safety</h2>
              <p>
                We prioritize learner safety. Interactions may be processed through moderation systems to identify unsafe or policy-violating
                behavior and keep the platform focused on education.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, marginBottom: 6 }}>4. Data Sharing</h2>
              <p>
                We do not sell personal data. We may share limited data with trusted service providers that help us run the platform,
                subject to contractual privacy and security obligations.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, marginBottom: 6 }}>5. Data Retention</h2>
              <p>
                We retain data only as long as needed for service operation, legal obligations, and safety requirements. Retention periods
                may vary by data type.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, marginBottom: 6 }}>6. Your Choices and Rights</h2>
              <p>
                You can request account updates or deletion, subject to applicable law and operational limits. You may also manage
                communication preferences in the app.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, marginBottom: 6 }}>7. Cookies and Similar Technologies</h2>
              <p>
                We use cookies and similar technologies for authentication, security, analytics, and product performance.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, marginBottom: 6 }}>8. Security Measures</h2>
              <p>
                We use administrative, technical, and organizational safeguards to protect data, but no method of transmission or storage
                is fully risk-free.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, marginBottom: 6 }}>9. Policy Updates</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes become effective when posted with the updated date.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 24, marginBottom: 6 }}>10. Contact</h2>
              <p>
                For privacy questions or requests, contact support through the app contact channels.
              </p>
            </section>
          </div>
        </section>
      </div>
    </main>
  )
}
