import {
  Page,
  PageCounter,
  PageFooter,
  PageHead,
  Kicker,
  PhotoBackdrop,
  ContentRequired,
} from './page-shell'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'
const TOTAL = '26'

/* PAGE 01 — COVER */
export function CoverPage() {
  return (
    <Page>
      <PhotoBackdrop
        src="/images/hero-court.png"
        alt="Aerial view of the USTA National Campus tennis facility"
        overlay={0.72}
        position="center"
        showPlaceholder={false}
      />

      {/* Top band */}
      <div className="absolute left-[0.5in] right-[0.5in] top-[0.5in] flex items-center justify-between">
        <img
          src="/images/atsports-logo.png"
          alt="AT Sports"
          className="w-auto"
          style={{ height: '0.5in' }}
        />
        <span
          className="font-display text-[8.5px] font-medium uppercase tracking-[0.22em]"
          style={{ color: MUTED }}
        >
          September 2026
        </span>
      </div>

      {/* Eyebrow + headline */}
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '2.15in' }}>
        <Kicker className="mb-5">Response to Request for Proposals</Kicker>
        <h1
          className="font-display font-bold text-balance"
          style={{ color: OFF, fontSize: '68px', lineHeight: 0.95, letterSpacing: '-0.025em' }}
        >
          Hard Court
          <br />
          Surface Systems
        </h1>
      </div>

      {/* Footer meta */}
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ bottom: '0.7in' }}>
        <div className="mb-4 h-px w-full" style={{ backgroundColor: 'rgba(185,196,203,0.24)' }} />
        <div className="flex items-end justify-between">
          <div>
            <div className="font-display text-[9px] font-semibold uppercase tracking-[0.22em]" style={{ color: BLUE_LIGHT }}>
              Prepared for
            </div>
            <div className="mt-1 font-display text-[17px] font-bold" style={{ color: OFF }}>
              USTA National Campus
            </div>
            <div className="font-sans text-[11px]" style={{ color: MUTED }}>
              Orlando, Florida
            </div>
          </div>
          <div className="text-right">
            <div className="font-display text-[9px] font-semibold uppercase tracking-[0.22em]" style={{ color: BLUE_LIGHT }}>
              Submitted by
            </div>
            <div className="mt-1 font-display text-[17px] font-bold" style={{ color: OFF }}>
              AT Sports
            </div>
            <div className="font-sans text-[11px]" style={{ color: MUTED }}>
              Acrytech Coatings System
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

/* PAGE 02 — LETTER OF COMMITMENT */
export function LetterPage() {
  const paragraphs = [
    'The USTA National Campus supports championship competition, player development, collegiate tennis, recreational programming and year-round tennis operations across multiple court environments.',
    'AT Sports is proposing more than an acrylic coating system. We are proposing a manufacturer-direct surface program built around performance, consistency, supply, technical support and continued development.',
    'From court-pace specification and material production through application support, performance verification and future resurfacing cycles, USTA will have direct access to the manufacturer responsible for the system.',
    'Our commitment is simple: help USTA establish and maintain a documented surface standard consistent with the performance and operational requirements of the USTA National Campus.',
  ]
  return (
    <Page>
      <PageCounter index="02" section="Letter of Commitment" total={TOTAL} />
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '1.3in' }}>
        <Kicker className="mb-4">A Letter of Commitment</Kicker>
        <h2
          className="font-display font-bold text-balance"
          style={{ color: OFF, fontSize: '40px', lineHeight: 1.0, letterSpacing: '-0.02em', maxWidth: '6in' }}
        >
          Built for the Home
          <br />
          of American Tennis.
        </h2>

        <div className="mt-8 grid grid-cols-[1fr_2.3in] gap-10">
          <div className="flex flex-col gap-4">
            {paragraphs.map((p, i) => {
              const emphasized = i === paragraphs.length - 1
              return (
                <p
                  key={i}
                  className="font-sans leading-relaxed"
                  style={{
                    color: emphasized ? OFF : 'rgba(245,246,246,0.82)',
                    fontSize: emphasized ? '15px' : '13px',
                    fontWeight: emphasized ? 600 : 400,
                  }}
                >
                  {p}
                </p>
              )
            })}

            {/* Signature */}
            <div className="mt-6">
              <img
                src="/images/brad-carroll-signature.png"
                alt="Signature of Brad Carroll"
                className="mb-2 w-auto object-contain"
                style={{ height: '0.62in' }}
              />
              <div className="h-px w-[2.6in]" style={{ backgroundColor: 'rgba(185,196,203,0.3)' }} />
              <div className="mt-3 flex items-center gap-2">
                <span className="font-display text-[12px] font-bold" style={{ color: OFF }}>
                  Brad Carroll
                </span>
              </div>
              <div className="mt-1 font-sans text-[10.5px]" style={{ color: MUTED }}>
                President, AT Sports
              </div>
            </div>
          </div>

          {/* Side rail — single concise commitment statement */}
          <div
            className="glass-strong flex flex-col justify-center"
            style={{ height: '300px', borderRadius: '14px', padding: '18px 0.34in 22px', borderTop: '2px solid #5da3ca' }}
          >
            <div className="font-display text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: BLUE_LIGHT }}>
              Our Commitment
            </div>
            <p className="mt-4 font-sans text-[13px] leading-relaxed text-pretty" style={{ color: 'rgba(245,246,246,0.82)' }}>
              A manufacturer-direct relationship focused on establishing and maintaining a consistent National Campus
              surface standard across the life of the agreement.
            </p>
          </div>
        </div>

        {/* Facility walkthrough image band */}
        <div className="mt-7">
          <div className="overflow-hidden" style={{ borderRadius: '14px', height: '1.95in', border: '1px solid rgba(185,196,203,0.16)' }}>
            <img
              src="/images/at-sports-facility-exterior.jpg"
              alt="AT Sports manufacturing headquarters and campus"
              className="h-full w-full object-cover"
              style={{ objectPosition: 'center 60%' }}
            />
          </div>
          <div className="mt-2 font-sans text-[9.5px]" style={{ color: MUTED }}>
            AT Sports manufacturing headquarters 
          </div>
        </div>
      </div>
      <PageFooter index="02" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}

/* PAGE 03 — EXECUTIVE PROPOSAL */
export function ExecutivePage() {
  const pillars = [
    {
      t: 'Two Performance Profiles',
      d: "Acrytech Coatings configurations developed around USTA's requested approximately CPR 38 and CPR 40 court-pace targets.",
    },
    {
      t: 'One Documented Standard',
      d: 'Defined system builds, mixing profiles, application requirements and court-performance records across Campus environments.',
    },
    {
      t: 'Manufacturer-Direct Support',
      d: 'Direct access to AT Sports technical, product-development, production, logistics and account resources throughout the program.',
    },
    {
      t: 'Multi-Year Campus Planning',
      d: 'Material forecasting, production planning, surface history and resurfacing cycles managed as one coordinated program.',
    },
  ]
  return (
    <Page>
      <PageHead
        index="03"
        section="Executive Proposal"
        kicker="Executive Proposal"
        title={
          <>
            A surface program
            <br />
            built for the
            <br />
            National Campus.
          </>
        }
        intro="The USTA National Campus combines multiple court environments, targeted performance profiles and recurring resurfacing cycles within one of the most visible tennis facilities in the country. AT Sports proposes managing those requirements as one coordinated surface program, connecting product specification, manufacturing, performance verification, technical support and long-term Campus planning."
        titleSize={32}
        width="6.6in"
      />

      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '4.25in' }}>
        <div className="grid grid-cols-2 gap-3.5">
          {pillars.map((p, i) => (
            <div
              key={p.t}
              className="glass flex items-start gap-4"
              style={{ borderRadius: '13px', padding: '0.28in 0.3in', minHeight: '1.42in' }}
            >
              <span
                className="font-display text-[26px] font-bold tabular-nums leading-none"
                style={{ color: BLUE_LIGHT, opacity: 0.85 }}
              >
                0{i + 1}
              </span>
              <div className="flex flex-col">
                <h3 className="font-display text-[14px] font-bold uppercase tracking-[0.04em]" style={{ color: OFF }}>
                  {p.t}
                </h3>
                <p className="mt-2 font-sans text-[10.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.74)' }}>
                  {p.d}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement band — visually prominent */}
        <div
          className="mt-5 flex flex-col items-center justify-center text-center"
          style={{ borderRadius: '14px', padding: '0.34in 0.3in', background: 'rgba(50,126,168,0.12)', border: '1px solid rgba(50,126,168,0.4)' }}
        >
          <div className="flex flex-wrap items-center justify-center gap-x-3">
            {['One manufacturer.', 'Two Performance Profiles.', 'One Documented Campus Program.'].map((t, i) => (
              <span key={i} className="font-display text-[24px] font-bold tracking-[-0.01em]" style={{ color: i === 2 ? BLUE_LIGHT : OFF }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <PageFooter index="03" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}
