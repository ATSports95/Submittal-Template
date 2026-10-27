import type { ReactNode } from 'react'
import {
  Page,
  PageCounter,
  PageFooter,
  PageHead,
  Kicker,
} from './page-shell'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'
const TOTAL = '26'

/* PAGE 19 — STANFORD */
export function StanfordPage() {
  return (
    <Page>
      <PageCounter index="15" section="Case Study — Stanford" total={TOTAL} />

      {/* Full-bleed aerial hero */}
      <div className="absolute left-0 right-0 top-0 overflow-hidden" style={{ height: '4.05in' }}>
        <img src="/images/stanford-aerial.jpg" alt="Aerial view of Stanford's Arrillaga Tennis Center showing 12 championship outdoor courts" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(24,28,31,0.55) 0%, rgba(24,28,31,0) 30%, rgba(24,28,31,0.15) 55%, rgba(24,28,31,0.96) 100%)' }} />
        <div className="absolute left-[0.5in] right-[0.5in]" style={{ bottom: '0.3in' }}>
          <Kicker className="mb-2">Case Studies</Kicker>
          <h2 className="font-display font-bold text-balance" style={{ color: OFF, fontSize: '34px', lineHeight: 0.98, letterSpacing: '-0.02em' }}>
            Stanford University
          </h2>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="font-sans text-[11px]" style={{ color: BLUE_LIGHT }}>Arrillaga Tennis Center</span>
            <span className="font-sans text-[10px]" style={{ color: MUTED }}>Palo Alto, California</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '4.35in' }}>
        <div className="grid grid-cols-[minmax(0,1fr)_2.9in] gap-5">
          {/* Left — narrative + stats */}
          <div className="min-w-0">
            <div className="flex gap-4">
              <div>
                <div className="font-display font-bold tabular-nums" style={{ color: OFF, fontSize: '40px', lineHeight: 0.85 }}>12</div>
                <div className="mt-1.5 font-display text-[8.5px] font-semibold uppercase tracking-[0.14em]" style={{ color: MUTED }}>Championship<br />Outdoor Courts</div>
              </div>
              <div className="w-px" style={{ backgroundColor: 'rgba(185,196,203,0.2)' }} />
              <div>
                <div className="font-display font-bold tabular-nums" style={{ color: OFF, fontSize: '40px', lineHeight: 0.85 }}>~1,000</div>
                <div className="mt-1.5 font-display text-[8.5px] font-semibold uppercase tracking-[0.14em]" style={{ color: MUTED }}>Spectator<br />Seating</div>
              </div>
              <div className="w-px" style={{ backgroundColor: 'rgba(185,196,203,0.2)' }} />
              <div>
                <div className="font-display font-bold tabular-nums" style={{ color: OFF, fontSize: '40px', lineHeight: 0.85 }}>2026</div>
                <div className="mt-1.5 font-display text-[8.5px] font-semibold uppercase tracking-[0.14em]" style={{ color: MUTED }}>Opened<br />April</div>
              </div>
            </div>
            <p className="mt-6 font-sans text-[11.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.82)' }}>
              Opened in April 2026, Stanford&apos;s new Arrillaga Tennis Center was developed to support championship
              competition, daily athlete development and major collegiate events. The complex includes 12 championship
              outdoor courts, athlete-support facilities, spectator accommodations and covered practice courts,
              featuring AT Sports Acrytech Coatings surfacing system.
            </p>

            {/* Relevance callout */}
            <div className="mt-6" style={{ borderRadius: '13px', padding: '0.3in 0.3in', background: 'rgba(50,126,168,0.1)', border: '1px solid rgba(50,126,168,0.32)' }}>
              <div className="font-display text-[9px] font-semibold uppercase tracking-[0.18em]" style={{ color: BLUE_LIGHT }}>COMPARABLE PROJECT CHARACTERISTICS</div>
              <div className="mt-3 flex flex-col gap-2">
                {['Championship competition', 'Elite athlete development', 'Major collegiate environment', 'High-profile institutional facility', 'Acrytech surface system'].map((r) => (
                  <span key={r} className="font-sans text-[10.5px]" style={{ color: OFF }}><span style={{ color: BLUE_LIGHT }}>•</span> {r}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — supporting photo strip */}
          <div className="flex flex-col gap-3">
            {[
              { src: '/images/stanford-arrillaga.jpg', c: 'Arrillaga Tennis Center — Taube Pavilion covered courts' },
              { src: '/images/stanford-courts.jpg', c: 'Championship outdoor courts and spectator seating' },
            ].map((img) => (
              <div key={img.src} className="flex flex-col gap-1.5">
                <div className="overflow-hidden" style={{ borderRadius: '11px', height: '2.15in', border: '1px solid rgba(185,196,203,0.16)' }}>
                  <img src={img.src || "/placeholder.svg"} alt={img.c} className="h-full w-full object-cover" />
                </div>
                <span className="font-sans text-[8.5px] leading-snug" style={{ color: MUTED }}>{img.c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PageFooter index="15" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}

/* PAGE 21 — COURT 16 */
export function Court16Page() {
  return (
    <Page>
      <PageCounter index="16" section="Case Study — Court 16" total={TOTAL} />

      {/* Full-bleed hero */}
      <div className="absolute left-0 right-0 top-0 overflow-hidden" style={{ height: '3.5in' }}>
        <img src="/images/court16-brooklyn.jpg" alt="Court 16 Brooklyn indoor tennis facility with AT Sports Acrytech playing surface" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(24,28,31,0.52) 0%, rgba(24,28,31,0) 34%, rgba(24,28,31,0.22) 56%, rgba(24,28,31,0.97) 100%)' }} />
        <div className="absolute left-[0.5in] right-[0.5in]" style={{ bottom: '0.26in' }}>
          <Kicker className="mb-2">Case Study</Kicker>
          <h2 className="font-display font-bold text-balance" style={{ color: OFF, fontSize: '33px', lineHeight: 0.98, letterSpacing: '-0.02em', textTransform: 'capitalize' }}>
            Indoor tennis, multi-site consistency.
          </h2>
          <div className="mt-2.5 flex items-center gap-3">
            <span className="inline-flex items-center" style={{ borderRadius: '9px', padding: '0.1in 0.16in', background: 'rgba(255,255,255,0.92)' }}>
              <img src="/images/court16-logo.png" alt="Court 16 — Tennis Remixed" className="w-auto object-contain" style={{ height: '0.42in' }} />
            </span>
            <span className="font-display text-[9px] font-semibold uppercase tracking-[0.16em]" style={{ color: BLUE_LIGHT }}>
              Multi-sport indoor facilities
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '3.75in' }}>
        <p className="font-sans text-[11px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.82)', maxWidth: '6.4in' }}>
          AT Sports supports Court 16&apos;s expanding indoor tennis platform with an integrated 8mm CushionX +
          Acrytech Coatings system across multiple facilities, a repeatable approach to indoor court
          performance, player development and multi-site surface consistency.
        </p>

        {/* Three proof points */}
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {[
            { h: '8mm CushionX', b: 'Cushioned surface system delivering controlled shock absorption and consistent surface response.' },
            { h: 'Acrytech Coatings', b: 'Acrylic playing surface engineered for controlled texture, color and tennis performance.' },
            { h: 'Multi-Site Delivery', b: 'Implemented across Court 16 facilities in the New York City, Philadelphia and Boston markets.' },
          ].map((p) => (
            <div key={p.h} className="glass" style={{ borderRadius: '11px', padding: '0.2in 0.22in' }}>
              <div className="font-display text-[12px] font-bold uppercase tracking-[0.03em]" style={{ color: OFF }}>{p.h}</div>
              <p className="mt-1.5 font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>{p.b}</p>
            </div>
          ))}
        </div>

        {/* Lower grid — photo on left, callout on right */}
        <div className="mt-3 grid grid-cols-[1fr_3.2in] gap-4">
          <div className="flex flex-col gap-3">
            {/* Multi-site proof photo */}
            <div className="flex flex-col gap-1.5">
              <div className="overflow-hidden" style={{ borderRadius: '12px', height: '2.6in', border: '1px solid rgba(185,196,203,0.16)' }}>
                <img src="/images/court16-fishtown.jpg" alt="Court 16 Philadelphia facility with custom Acrytech surface graphics" className="h-full w-full object-cover" />
              </div>
              <span className="font-sans text-[8.5px] leading-snug" style={{ color: MUTED }}>
                Court 16 Philadelphia — custom surface graphics supporting youth-sized formats and year-round player development.
              </span>
            </div>
          </div>

          {/* Why it matters callout */}
          <div style={{ borderRadius: '12px', padding: '0.22in 0.26in', background: 'rgba(50,126,168,0.1)', border: '1px solid rgba(50,126,168,0.34)' }}>
            <div className="font-display text-[9px] font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_LIGHT }}>Why It Matters</div>
            <p className="mt-2 font-sans text-[9.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.82)' }}>
              A specified cushion and coating system can be repeated facility to facility, giving operators the same
              surface response and appearance across every location.
            </p>
            <p className="mt-2 font-sans text-[9px] leading-relaxed" style={{ color: MUTED }}>
              AT Sports surface technology is deployed across Court 16 facilities in multiple markets.
            </p>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-3 flex items-center" style={{ borderRadius: '12px', padding: '0.18in 0.28in', background: 'rgba(245,246,246,0.05)', borderLeft: '3px solid #5da3ca' }}>
          <span className="font-display text-[13px] font-bold uppercase tracking-[0.03em] text-balance" style={{ color: OFF }}>
            One surface platform. Multiple facilities. A consistent standard.
          </span>
        </div>

      </div>
      <PageFooter index="16" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}

/* PAGE 23 — COLLEGIATE & CLUB FACILITIES (LOGO WALL) */
type Facility = { name: string; logo?: string; caption: string }

const TENNIS_FACILITIES: Facility[] = [
  { name: 'Virginia Tech', logo: '/images/logos/virginia-tech.png', caption: 'Burrows-Burleson Tennis Center · Blacksburg, VA' },
  { name: 'Vanderbilt University', logo: '/images/logos/vanderbilt.png', caption: 'Lummis Family Tennis Center · Nashville, TN' },
  { name: 'Belmont University', logo: '/images/logos/belmont.png', caption: 'Beaman Family Tennis Complex · Nashville, TN' },
  { name: 'Farm & Forge', logo: '/images/logos/farm-forge.png', caption: 'Private racquet campus · College Grove, TN' },
  { name: 'Texas Tech University', logo: '/images/logos/texas-tech.png', caption: 'McLeod Tennis Center · Lubbock, TX' },
  { name: 'Georgia Tech', logo: '/images/logos/georgia-tech.png', caption: 'Ken Byers Tennis Complex · Atlanta, GA' },
  { name: 'Baylor University', caption: 'Hurd Tennis Center · Waco, TX' },
  { name: 'University of Oklahoma', caption: 'Headington Family Tennis Center · Norman, OK' },
]

const CLUB_FACILITIES: Facility[] = [
  { name: 'The Picklr', caption: 'Multiple locations' },
  { name: 'Dill Dinkers', caption: 'Multiple locations' },
  { name: 'Pickle Rage', caption: 'Multiple locations' },
  { name: 'The Pickle Pad', caption: 'Multiple locations' },
  { name: 'Chicken N Pickle', caption: 'Multiple locations' },
  { name: 'PACE Pickleball Club', caption: 'Multiple locations' },
  { name: 'The Hub Pickleball', caption: 'Multiple locations' },
  { name: 'The Pickle Club', caption: 'First CushionX facility in Australia' },
  { name: 'Club Volo', caption: 'Multiple locations' },
  { name: 'Invited', caption: 'Private country & city clubs' },
]

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-display text-[10.5px] font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_LIGHT }}>
        {children}
      </span>
      <div className="h-px flex-1" style={{ backgroundColor: 'rgba(185,196,203,0.2)' }} />
    </div>
  )
}

/** White plate with a uniform logo height; falls back to a wordmark until the logo file is supplied. */
function LogoPlate({ f, height, plate }: { f: Facility; height: string; plate: string }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center overflow-hidden"
      style={{ height: plate, borderRadius: '10px', padding: '0.1in 0.14in', background: '#ffffff' }}
    >
      {f.logo ? (
        <img src={f.logo} alt={`${f.name} logo`} className="w-auto object-contain" style={{ height, maxHeight: '100%', maxWidth: '88%' }} />
      ) : (
        <span className="text-center font-display text-[12px] font-bold uppercase leading-tight tracking-[0.04em]" style={{ color: '#202528' }}>
          {f.name}
        </span>
      )}
    </div>
  )
}

export function AdditionalExperiencePage() {
  return (
    <Page>
      <PageHead
        index="19"
        section="Experience"
        kicker="References · Facilities"
        title={<>Trusted by collegiate and club programs.</>}
        intro="Collegiate competition centers and private racquet clubs that rely on AT Sports surfaces for daily training and match play."
        titleSize={30}
        width="6.6in"
      />
      <div className="absolute left-[0.5in] right-[0.5in] flex flex-col" style={{ top: '2.85in', bottom: '0.82in', gap: '0.26in' }}>
        <section className="flex min-h-0 flex-[1.15] flex-col gap-3">
          <SectionLabel>Collegiate &amp; Club Tennis</SectionLabel>
          <div className="grid min-h-0 flex-1 grid-cols-4 grid-rows-2 gap-x-3 gap-y-4">
            {TENNIS_FACILITIES.map((f) => (
              <div key={f.name} className="flex min-h-0 flex-col">
                <LogoPlate f={f} height="0.52in" plate="0.95in" />
                <div className="mt-2 font-display text-[11.5px] font-bold leading-tight" style={{ color: OFF }}>{f.name}</div>
                <div className="mt-1 font-sans text-[8.5px] leading-snug" style={{ color: MUTED }}>{f.caption}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex min-h-0 flex-1 flex-col gap-3">
          <SectionLabel>Pickleball &amp; Racquet Clubs</SectionLabel>
          <div className="grid min-h-0 flex-1 grid-cols-5 grid-rows-2 gap-x-3 gap-y-4">
            {CLUB_FACILITIES.map((f) => (
              <div key={f.name} className="flex min-h-0 flex-col">
                <LogoPlate f={f} height="0.46in" plate="0.95in" />
                <div className="mt-1.5 text-center font-sans text-[8.5px] leading-snug" style={{ color: MUTED }}>{f.caption}</div>
              </div>
            ))}
          </div>
        </section>

        <p className="font-sans text-[8.5px] leading-relaxed" style={{ color: 'rgba(185,196,203,0.72)', maxWidth: '6.6in' }}>
          The brands shown represent only a portion of the organizations that choose AT Sports. Our surfacing systems are
          trusted at hundreds of additional facilities across North America and internationally.
        </p>
      </div>

      <PageFooter index="19" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}

/* PAGE 24 — PPA + MLP NATIONAL RACQUET PARTNERSHIPS */
export function NationalPartnershipsPage() {
  return (
    <Page>
      <PageHead
        index="20"
        section="National Partnerships"
        kicker="National Racquet Partnerships"
        title={
          <>
            Official Surface
            <br />
            Partnerships
          </>
        }
        titleSize={34}
        width="6.6in"
      />

      {/* Two large, balanced partnership blocks */}
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '2.55in' }}>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              logo: '/images/ppa-logo-white.png',
              logoAlt: 'PPA Tour',
              logoH: '0.42in',
              photo: '/images/ppa-aerial.jpg',
              photoAlt: 'Aerial view of a PPA Tour tournament complex with Acrytech competition courts',
              position: 'center',
              copy:
                'Acrytech serves as the official surface of the PPA Tour, supporting a national competition environment where surface consistency, event scheduling and presentation are highly visible.',
              quote: '“AT Sports is an integral partner of the PPA Tour.”',
            },
            {
              logo: '/images/mlp-logo-white.png',
              logoAlt: 'Major League Pickleball',
              logoH: '0.6in',
              photo: '/images/mlp-arena.jpg',
              photoAlt: 'Major League Pickleball arena match played on an Acrytech court',
              position: 'center',
              copy:
                'Acrytech & RollX also serve as the official surface of Major League Pickleball, extending AT Sports\u2019 experience across another nationally visible professional racquet-sport platform.',
              quote: null,
            },
          ].map((b) => (
            <div
              key={b.logoAlt}
              className="glass flex flex-col overflow-hidden"
              style={{ borderRadius: '14px', border: '1px solid rgba(185,196,203,0.16)' }}
            >
              {/* Event image with logo + designation overlaid */}
              <div className="relative overflow-hidden" style={{ height: '3.45in' }}>
                <img
                  src={b.photo || '/placeholder.svg'}
                  alt={b.photoAlt}
                  crossOrigin="anonymous"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: b.position, filter: 'contrast(1.04) brightness(0.86)' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, rgba(24,28,31,0.15) 0%, rgba(24,28,31,0.35) 45%, rgba(24,28,31,0.92) 100%)' }}
                />
                <span
                  className="absolute left-[0.2in] top-[0.2in] font-display text-[8px] font-semibold uppercase"
                  style={{
                    color: OFF,
                    letterSpacing: '0.2em',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    background: 'rgba(50,126,168,0.42)',
                    border: '1px solid rgba(93,163,202,0.7)',
                  }}
                >
                  Official Surface
                </span>
                <img
                  src={b.logo || '/placeholder.svg'}
                  alt={b.logoAlt}
                  crossOrigin="anonymous"
                  className="absolute left-[0.22in] bottom-[0.2in] w-auto object-contain"
                  style={{ height: b.logoH }}
                />
              </div>

              {/* Supporting copy */}
              <div className="flex flex-1 flex-col gap-2.5" style={{ padding: '0.24in 0.24in 0.26in' }}>
                <p className="font-sans text-[10px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.82)' }}>
                  {b.copy}
                </p>
                {b.quote && (
                  <div
                    className="mt-auto"
                    style={{ borderLeft: '2px solid #5da3ca', paddingLeft: '0.14in' }}
                  >
                    <p className="font-display text-[10px] font-semibold italic" style={{ color: BLUE_LIGHT }}>
                      {b.quote}
                    </p>
                    <p className="mt-0.5 font-sans text-[7.5px] uppercase tracking-[0.14em]" style={{ color: MUTED }}>
                      PPA Tour partnership letter
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Why it matters */}
        <div className="mt-7">
          <div className="flex items-center gap-3">
            <div className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] whitespace-nowrap" style={{ color: BLUE_LIGHT }}>
              Why It Matters
            </div>
            <div className="h-px flex-1" style={{ background: 'rgba(93,163,202,0.32)' }} />
          </div>
          <div className="mt-5 grid grid-cols-12 gap-6">
            {/* Primary takeaway */}
            <div className="col-span-7 flex flex-col">
              <h3
                className="font-display font-bold uppercase text-balance"
                style={{ color: OFF, fontSize: '25px', lineHeight: 1.02, letterSpacing: '-0.01em' }}
              >
                Proven under <span style={{ color: BLUE_LIGHT }}>concentrated play.</span>
              </h3>
              <p className="mt-3.5 font-sans text-[10.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.82)' }}>
                As the #1 court surface in professional pickleball and Official Surface of the PPA Tour and Major
                League Pickleball, Acrytech performs in an environment characterized by frequent starts, stops,
                lateral movement and concentrated player traffic. That high-use track record provides relevant
                evidence of coating durability for tennis facilities, where play is distributed across a
                significantly larger court footprint.
              </p>
            </div>

            {/* Supporting proof points */}
            <div className="col-span-5 flex flex-col justify-center gap-3">
              {[
                { label: 'National competition', copy: 'Surface performance across recurring professional events.' },
                { label: 'Concentrated play', copy: 'Repeated player movement within compact, high-use court areas.' },
                { label: 'Manufacturer support', copy: 'Direct product, event and technical support from AT Sports.' },
              ].map((p) => (
                <div
                  key={p.label}
                  className="flex gap-3"
                  style={{ paddingLeft: '0.14in', borderLeft: '2px solid rgba(93,163,202,0.55)' }}
                >
                  <div className="flex flex-col">
                    <span className="font-display text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color: BLUE_LIGHT }}>
                      {p.label}
                    </span>
                    <span className="mt-1 font-sans text-[9.5px] leading-snug" style={{ color: 'rgba(245,246,246,0.78)' }}>
                      {p.copy}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PageFooter index="20" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}
