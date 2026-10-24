import { Page, PageCounter, PageFooter, PageHead, Kicker } from './page-shell'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'
const TOTAL = '26'

/* PAGE 09 — PROPOSED SURFACE SYSTEM */
export function SurfaceSystemPage() {
  const layers = [
    { t: 'Finished Playing Surface', d: 'Line paint per court layout', head: true },
    { t: 'Acrytech Color', d: 'Concentrate finish coat', usta: true },
    { t: 'Acrytech Color', d: 'Textured color coats', usta: true },
    { t: 'Acrytech Resurfacer', d: 'Surface preparation / leveling layer' },
    { t: 'Primer / Sealer', d: 'Where required by substrate conditions' },
    { t: 'Repairs + Substrate', d: 'Faultline crack repair where required · asphalt or concrete', base: true },
  ]
  return (
    <Page>
      <PageCounter index="07" section="Proposed Surface System" total={TOTAL} />
      <div className="absolute left-[0.5in]" style={{ top: '1.2in', width: '3.5in' }}>
        <Kicker className="mb-4">System Build</Kicker>
        <h2 className="font-display font-bold text-balance" style={{ color: OFF, fontSize: '31px', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
          The Acrytech
          <br />
          Coatings system.
        </h2>
        <p className="mt-4 font-sans text-[11.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.78)' }}>
          A documented acrylic surface system configured to the performance requirements of each project.
        </p>
        <div className="mt-5 flex flex-col gap-3">
          <p className="font-sans text-[10.5px] leading-relaxed" style={{ color: MUTED }}>
            Acrytech is a colored and textured acrylic surfacing system designed for asphalt, concrete and existing
            sports surfaces.
          </p>
        </div>

        {/* Typical build callout */}
        <div className="mt-6" style={{ borderRadius: '13px', padding: '0.22in 0.26in', background: 'rgba(50,126,168,0.1)', border: '1px solid rgba(50,126,168,0.34)' }}>
          <div className="font-display text-[9px] font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_LIGHT }}>
            Build Per Specification
          </div>
          <p className="mt-2 font-sans text-[10.5px] leading-relaxed" style={{ color: OFF }}>
            The number of resurfacer and color coats, the color selections and the court-pace profile are confirmed for
            each project in the system specification (Appendix A).
          </p>
        </div>

        {/* Finished-surface reference image */}
        <div className="mt-6">
          <div className="overflow-hidden" style={{ borderRadius: '13px', height: '3in', border: '1px solid rgba(185,196,203,0.16)' }}>
            <img
              src="/images/court-texture-sunset.png"
              alt="Close detail of a finished Acrytech textured color surface with a white line at sunset"
              crossOrigin="anonymous"
              className="h-full w-full object-cover"
              style={{ objectPosition: 'center' }}
            />
          </div>
          <p className="mt-2 font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>
            The finished playing surface, Acrytech color texture coatings over a prepared substrate.
          </p>
        </div>
      </div>

      {/* Layer diagram — primary page visual */}
      <div className="absolute right-[0.5in]" style={{ top: '1.2in', width: '3.7in' }}>
        <div className="flex flex-col gap-2.5">
          {layers.map((l, i) => (
            <div
              key={i}
              className="flex items-center justify-between"
              style={{
                borderRadius: '11px',
                padding: l.head || l.base ? '0.26in 0.3in' : '0.34in 0.3in',
                background: l.head
                  ? 'rgba(50,126,168,0.2)'
                  : l.usta
                    ? 'rgba(50,126,168,0.1)'
                    : 'rgba(245,246,246,0.04)',
                border: l.usta ? '1px solid rgba(50,126,168,0.34)' : '1px solid rgba(185,196,203,0.14)',
              }}
            >
              <div>
                <div className="font-display text-[14px] font-bold" style={{ color: l.head ? BLUE_LIGHT : OFF }}>
                  {l.t}
                </div>
                {l.d && <div className="mt-0.5 font-sans text-[9.5px]" style={{ color: MUTED }}>{l.d}</div>}
              </div>
              {l.usta && (
                <span className="font-display text-[8px] font-semibold uppercase tracking-[0.14em]" style={{ color: BLUE_LIGHT }}>
                  Acrytech
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-3 text-center font-sans text-[8.5px] uppercase tracking-[0.16em]" style={{ color: MUTED }}>
          System build, top to substrate
        </p>
      </div>
      <PageFooter index="07" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}

/* PAGE 10 — COURT PACE */
export function CourtPacePage() {
  return (
    <Page>
      <PageCounter index="08" section="Court Pace" total={TOTAL} />
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '1.1in' }}>
        <Kicker className="mb-3">Court Pace</Kicker>
        <h2 className="font-display font-bold text-balance" style={{ color: OFF, fontSize: '30px', lineHeight: 1.02, letterSpacing: '-0.02em' }}>
          Two profiles.
          <br />
          Matched to the court.
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-5">
          {[
            { cpr: '35–39', level: 'Level 3', label: 'Medium', range: 'ITF Category 3 classification range', apps: 'Recreational and club tennis · pickleball · multi-sport courts', badge: '/images/itf-level-3-medium.png', badgeAlt: 'ITF Classified Court Pace badge — Category 3, Medium' },
            { cpr: '40–44', level: 'Level 4', label: 'Medium-Fast', range: 'ITF Category 4 classification range', apps: 'Competition, collegiate, player-development and indoor tennis', badge: '/images/itf-level-4-medium-fast.png', badgeAlt: 'ITF Classified Court Pace badge — Category 4, Medium-Fast' },
          ].map((p) => (
            <div key={p.level} className="glass" style={{ borderRadius: '14px', padding: '0.42in 0.4in' }}>
              <div className="flex items-start justify-between">
                <div className="flex items-baseline gap-3">
                  <span className="font-display font-bold tabular-nums" style={{ color: OFF, fontSize: '52px', lineHeight: 0.85, letterSpacing: '-0.03em' }}>
                    {p.cpr}
                  </span>
                  <span className="font-display text-[15px] font-light" style={{ color: BLUE_LIGHT }}>CPR</span>
                </div>
                <img
                  src={p.badge || "/placeholder.svg"}
                  alt={p.badgeAlt}
                  className="shrink-0"
                  style={{ width: '0.82in', height: 'auto' }}
                />
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="font-display text-[13px] font-bold uppercase tracking-[0.06em]" style={{ color: BLUE_LIGHT }}>{p.level}</span>
                <span className="font-display text-[13px] font-semibold uppercase tracking-[0.06em]" style={{ color: OFF }}>{p.label}</span>
              </div>
              <div className="mt-1 font-sans text-[10px]" style={{ color: MUTED }}>{p.range}</div>
              <div className="mt-4 border-t pt-3" style={{ borderColor: 'rgba(185,196,203,0.16)' }}>
                <div className="font-display text-[8px] font-semibold uppercase tracking-[0.16em]" style={{ color: MUTED }}>
                  Typical Applications
                </div>
                <div className="mt-1 flex items-start gap-2">
                  <span className="font-sans text-[10px] leading-snug" style={{ color: OFF }}>{p.apps}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-7 font-sans text-[11px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.76)' }}>
          Acrytech Color is configured to the Medium or Medium-Fast profile through controlled aggregate selection and
          loading during batching.
        </p>

        {/* Independent proof — single Level 3 result, asymmetric editorial layout */}
        <div className="mt-7 flex items-stretch gap-6" style={{ borderRadius: '13px', padding: '0.34in 0.36in', background: 'rgba(50,126,168,0.12)', border: '1px solid rgba(50,126,168,0.36)' }}>
          <div className="flex flex-col justify-center pr-6" style={{ flex: '0 0 3.1in' }}>
            <div className="font-display text-[9px] font-semibold uppercase tracking-[0.16em]" style={{ color: BLUE_LIGHT }}>
              Independently Tested
            </div>
            <div className="mt-1 font-display text-[40px] font-bold" style={{ color: OFF, lineHeight: 0.95 }}>
              ITF Recognized
            </div>
            <div className="mt-2 font-display text-[10px] font-semibold uppercase tracking-[0.05em]" style={{ color: OFF }}>
              Acrytech Color Coatings <span style={{ color: MUTED }}>· Category 3 &amp; Category 4</span>
            </div>
          </div>
          <div className="flex flex-col justify-center border-l pl-6" style={{ borderColor: 'rgba(93,163,202,0.4)' }}>
            <p className="font-sans text-[10.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.82)' }}>
              Acrytech color coatings are officially recognized by the International Tennis Federation (ITF) under both{' '}
              <span className="font-semibold" style={{ color: OFF }}>Category 3</span> and{' '}
              <span className="font-semibold" style={{ color: OFF }}>Category 4</span>.
            </p>
            <p className="mt-2 font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>
              This recognition confirms our coatings meet ITF performance standards for pace, bounce and playing
              characteristics.
            </p>
          </div>
        </div>

        {/* Published aggregate profiles (formerly a separate Pace Profiles page) */}
        <div className="mt-7 font-display text-[9px] font-semibold uppercase tracking-[0.2em]" style={{ color: MUTED }}>
          Published Acrytech Color Profiles · Aggregate + Loading
        </div>
        <div className="mt-3 grid grid-cols-2 gap-5">
          {[
            { level: 'Level 3', label: 'Medium', a: 'AFS-55', w: '200 lbs' },
            { level: 'Level 4', label: 'Medium-Fast', a: 'AFS-60', w: '150 lbs' },
          ].map((p) => (
            <div key={p.level} className="glass-strong flex items-center justify-between gap-4" style={{ borderRadius: '13px', padding: '0.22in 0.26in', borderTop: '2px solid #5da3ca' }}>
              <span className="font-display text-[12px] font-bold uppercase tracking-[0.04em]" style={{ color: BLUE_LIGHT }}>
                {p.level} <span style={{ color: OFF }}>/ {p.label}</span>
              </span>
              <span className="text-right">
                <span className="font-display text-[16px] font-bold" style={{ color: OFF }}>{p.a}</span>
                <span className="ml-2 font-display text-[16px] font-bold tabular-nums" style={{ color: OFF }}>· {p.w}</span>
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3 font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>
          The court-pace profile for each project is set in the system specification. Where a project calls for a specific
          CPR target, AT Sports confirms the aggregate profile and application before production. Additional published
          profiles are available.
        </p>
      </div>
      <PageFooter index="08" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}
