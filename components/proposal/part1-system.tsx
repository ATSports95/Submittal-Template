import { Page, PageCounter, PageFooter, PageHead, Kicker } from './page-shell'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'
const TOTAL = '26'

/* PAGE 09 — PROPOSED SURFACE SYSTEM */
export function SurfaceSystemPage() {
  const layers = [
    { t: 'Finished Playing Surface', d: '', head: true },
    { t: 'Acrytech Top Coat', d: 'Clear Coat', usta: true },
    { t: 'Acrytech Color', d: 'Texture Coating #2', usta: true },
    { t: 'Acrytech Color', d: 'Texture Coating #1', usta: true },
    { t: 'Acrytech Resurfacer', d: 'Surface preparation / leveling layer' },
    { t: 'Primer / Sealer', d: 'Where required by substrate conditions' },
    { t: 'Repairs + Substrate', d: 'Existing asphalt or concrete', base: true },
  ]
  return (
    <Page>
      <PageCounter index="07" section="Proposed Surface System" total={TOTAL} />
      <div className="absolute left-[0.5in]" style={{ top: '1.2in', width: '3.5in' }}>
        <Kicker className="mb-4">PROPOSED USTA SYSTEM BUILD</Kicker>
        <h2 className="font-display font-bold text-balance" style={{ color: OFF, fontSize: '31px', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
          The Acrytech
          <br />
          Coatings system.
        </h2>
        <p className="mt-4 font-sans text-[11.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.78)' }}>
          A documented acrylic surface system configured for the performance requirements of the National Campus.
        </p>
        <div className="mt-5 flex flex-col gap-3">
          <p className="font-sans text-[10.5px] leading-relaxed" style={{ color: MUTED }}>
            Acrytech is a colored and textured acrylic surfacing system designed for asphalt, concrete and existing
            sports surfaces.
          </p>
          <p className="font-sans text-[10.5px] leading-relaxed" style={{ color: MUTED }}>
            The system specification requires work to conform to ASBA guidelines and requires tennis surfaces to be ITF
            court-pace classified.
          </p>
        </div>

        {/* USTA build callout */}
        <div className="mt-6" style={{ borderRadius: '13px', padding: '0.26in 0.26in', background: 'rgba(50,126,168,0.1)', border: '1px solid rgba(50,126,168,0.34)' }}>
          <div className="font-display text-[9px] font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_LIGHT }}>
            Requested USTA Build
          </div>
          <div className="mt-2 flex items-baseline gap-4">
            <div>
              <span className="font-display text-[30px] font-bold tabular-nums" style={{ color: OFF }}>02</span>
              <span className="ml-2 font-display text-[11px] font-semibold uppercase" style={{ color: MUTED }}>Texture Coats</span>
            </div>
            <div>
              <span className="font-display text-[30px] font-bold tabular-nums" style={{ color: OFF }}>01</span>
              <span className="ml-2 font-display text-[11px] font-semibold uppercase" style={{ color: MUTED }}>Top Coat</span>
            </div>
          </div>
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
                  USTA
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
          Built around the campus.
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-5">
          {[
            { cpr: '~38', level: 'Level 3', label: 'Medium', range: '35–39 CPR classification range', apps: 'Team USA court banks / pickleball', badge: '/images/itf-level-3-medium.png', badgeAlt: 'ITF Classified Court Pace badge — Category 3, Medium' },
            { cpr: '~40', level: 'Level 4', label: 'Medium-Fast', range: '40–44 CPR classification range', apps: 'Championship / Player Development / Indoor / Collegiate', badge: '/images/itf-level-4-medium-fast.png', badgeAlt: 'ITF Classified Court Pace badge — Category 4, Medium-Fast' },
          ].map((p) => (
            <div key={p.level} className="glass" style={{ borderRadius: '14px', padding: '0.42in 0.4in' }}>
              <div className="flex items-start justify-between">
                <div className="flex items-baseline gap-3">
                  <span className="font-display font-bold tabular-nums" style={{ color: OFF, fontSize: '62px', lineHeight: 0.85, letterSpacing: '-0.03em' }}>
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
                  Targeted USTA Applications
                </div>
                <div className="mt-1 flex items-start gap-2">
                  <span className="font-sans text-[10px] leading-snug" style={{ color: OFF }}>{p.apps}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-7 font-sans text-[11px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.76)' }}>
          Acrytech Color can be configured across Medium and Medium-Fast court-pace profiles through controlled
          aggregate selection and loading. AT Sports&apos; published Acrytech Color specification includes separate
          Medium and Medium-Fast aggregate profiles.
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

        {/* Bottom statement */}
        <div className="mt-7 text-center" style={{ borderRadius: '13px', padding: '0.3in 0.36in', background: 'rgba(50,126,168,0.1)', border: '1px solid rgba(50,126,168,0.32)' }}>
          <p className="font-display text-[16px] font-bold text-balance" style={{ color: OFF }}>
            Two targeted performance profiles.{' '}
            <span style={{ color: BLUE_LIGHT }}>One Acrytech surface platform.</span>
          </p>
        </div>
      </div>
      <PageFooter index="08" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}

/* PAGE 11 — PACE ENGINEERED */
export function PaceEngineeredPage() {
  const profiles = [
    { level: 'Level 3', label: 'Medium', a: 'AFS-55', w: '200 lbs' },
    { level: 'Level 4', label: 'Medium-Fast', a: 'AFS-60', w: '150 lbs' },
  ]
  return (
    <Page>
      <PageHead
        index="09"
        section="Court Pace"
        kicker="Pace Is Engineered Into the System"
        title={
          <>
            Pace is not
            <br />
            an afterthought.
          </>
        }
        titleSize={32}
      />

      {/* Equation */}
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '2.55in' }}>
        <div className="flex items-center justify-center gap-4" style={{ borderRadius: '14px', padding: '0.34in', background: 'rgba(245,246,246,0.03)', border: '1px solid rgba(185,196,203,0.16)' }}>
          {[
            { t: 'Aggregate', op: '+' },
            { t: 'Loading', op: '+' },
            { t: 'Application Profile', op: '=' },
            { t: 'Court Pace', accent: true },
          ].map((e, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="font-display text-[15px] font-bold uppercase tracking-[0.04em]" style={{ color: e.accent ? BLUE_LIGHT : OFF }}>
                {e.t}
              </span>
              {e.op && <span className="font-display text-[20px] font-light" style={{ color: MUTED }}>{e.op}</span>}
            </div>
          ))}
        </div>

        {/* Published profiles */}
        <div className="mt-6 font-display text-[9px] font-semibold uppercase tracking-[0.2em]" style={{ color: MUTED }}>
          Published Acrytech Color Profiles
        </div>
        <div className="mt-3 grid grid-cols-2 gap-4">
          {profiles.map((p) => (
            <div
              key={p.level}
              className="glass-strong"
              style={{ borderRadius: '14px', padding: '0.42in 0.4in', borderTop: '2px solid #5da3ca' }}
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-[16px] font-bold uppercase tracking-[0.04em]" style={{ color: BLUE_LIGHT }}>
                  {p.level}
                </span>
                <span className="font-display text-[16px] font-semibold uppercase tracking-[0.04em]" style={{ color: OFF }}>
                  / {p.label}
                </span>
              </div>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <div className="font-display text-[31px] font-bold" style={{ color: OFF, lineHeight: 1 }}>{p.a}</div>
                  <div className="mt-1.5 font-sans text-[10px] uppercase tracking-[0.1em]" style={{ color: MUTED }}>Aggregate</div>
                </div>
                <div className="text-right">
                  <div className="font-display text-[31px] font-bold tabular-nums" style={{ color: OFF, lineHeight: 1 }}>{p.w}</div>
                  <div className="mt-1.5 font-sans text-[10px] uppercase tracking-[0.1em]" style={{ color: MUTED }}>Loading</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <span className="inline-block h-[5px] w-[5px] rounded-full" style={{ backgroundColor: MUTED }} />
          <p className="font-sans text-[10px]" style={{ color: MUTED }}>
            Additional published Acrytech profiles available.
          </p>
        </div>

        <p className="mt-5 font-sans text-[11px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.78)' }}>
          For the National Campus, the final written surface profiles will be developed around USTA&apos;s requested
approximately CPR 38 and CPR 40 targets and the specified two-texture coats / one-top coat application. 
        </p>

        {/* Supporting image — controlled aggregate loading during batching */}
        <div className="mt-6">
          <div className="overflow-hidden" style={{ borderRadius: '13px', height: '2.6in', border: '1px solid rgba(185,196,203,0.16)' }}>
            <img
              src="/images/plant-mixing-drum.png"
              alt="Controlled aggregate blending during Acrytech color batching at the AT Sports plant"
              crossOrigin="anonymous"
              className="h-full w-full object-cover"
              style={{ objectPosition: 'center 45%' }}
            />
          </div>
          <p className="mt-2 font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>
            Aggregate selection and loading are controlled during batching 
          </p>
        </div>
      </div>
      <PageFooter index="09" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}
