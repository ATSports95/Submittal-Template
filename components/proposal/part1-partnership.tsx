import { Page, PageFooter, PageHead, Kicker, PhotoBackdrop } from './page-shell'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'
const TOTAL = '26'

/* PAGE 25 — PARTNERSHIP COMMITMENT / CAMPUS SURFACE PARTNERSHIP */
export function PartnershipInvestmentPage() {
  const items = [
    {
      n: '01',
      t: 'Tennis Court Acrylic Materials',
      d: 'Acrytech materials for scheduled National Campus tennis court resurfacing.',
      primary: true,
    },
    {
      n: '02',
      t: 'Pickleball Court Acrylic Materials',
      d: 'Acrytech materials for scheduled National Campus pickleball court resurfacing.',
      primary: true,
    },
    {
      n: '03',
      t: 'Court Coatings Application',
      d: 'Application of Acrytech acrylic coatings by a certified Acrytech installer for scheduled National Campus tennis and pickleball court resurfacing. Court construction and structural repairs are not included.',
      primary: true,
      accent: true,
    },
    {
      n: '04',
      t: 'Technical Support',
      d: 'Manufacturer technical guidance and field support.',
    },
    {
      n: '05',
      t: 'Surface Testing',
      d: 'Court-surface performance testing and verification.',
    },
    {
      n: '06',
      t: 'Product Development / R&D Access',
      d: 'Access to AT Sports product-development resources.',
    },
  ]
  return (
    <Page>
      <PageHead
        index="25"
        section="Partnership Commitment"
        kicker="Partnership Commitment"
        title={
          <>
            A three-year
            <br />
            campus surface partnership.
          </>
        }
        titleSize={28}
        width="6.8in"
      />
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '2.2in' }}>
        <p className="font-sans text-[11px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.82)', maxWidth: '6.6in' }}>
          AT Sports proposes a three-year in-kind partnership supporting scheduled USTA National Campus court
          resurfacing through Acrytech materials, installation, technical resources and surface-performance support.
        </p>

        {/* WHAT USTA RECEIVES — six horizontal line items */}
        <div className="mt-6">
          <div className="font-display text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: BLUE_LIGHT }}>
            What USTA Receives
          </div>
          <div className="mt-3" style={{ borderTop: '1px solid rgba(185,196,203,0.2)' }}>
            {items.map((it) => (
              <div
                key={it.n}
                className="flex items-center justify-between gap-6"
                style={{
                  padding: it.primary ? '0.155in 0.24in' : '0.12in 0.24in',
                  borderBottom: '1px solid rgba(185,196,203,0.16)',
                  borderLeft: it.accent ? `2px solid ${BLUE_LIGHT}` : '2px solid transparent',
                  background: it.accent
                    ? 'rgba(50,126,168,0.12)'
                    : it.primary
                      ? 'rgba(245,246,246,0.03)'
                      : 'transparent',
                }}
              >
                <div className="flex items-baseline gap-4" style={{ maxWidth: '5.8in' }}>
                  <span
                    className="font-display font-bold tabular-nums shrink-0"
                    style={{ color: it.primary ? BLUE_LIGHT : MUTED, fontSize: it.primary ? '13px' : '11px', width: '0.34in' }}
                  >
                    {it.n}
                  </span>
                  <div>
                    <div
                      className="font-display font-bold uppercase leading-tight tracking-[0.02em]"
                      style={{ color: OFF, fontSize: it.primary ? '13.5px' : '11.5px' }}
                    >
                      {it.t}
                    </div>
                    <p className="mt-1 font-sans text-[9.5px] leading-snug" style={{ color: MUTED }}>{it.d}</p>
                  </div>
                </div>
                <span
                  className="font-display font-bold uppercase tracking-[0.18em] shrink-0 text-right"
                  style={{ color: BLUE_LIGHT, fontSize: it.primary ? '11px' : '10px' }}
                >
                  Included
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM FEATURE BOX */}
        <div
          className="mt-6 flex items-stretch justify-between gap-8"
          style={{ borderRadius: '14px', padding: '0.32in 0.4in', background: 'rgba(50,126,168,0.1)', border: '1px solid rgba(50,126,168,0.4)' }}
        >
          <div style={{ maxWidth: '4.2in' }}>
            <div className="font-display text-[13px] font-bold uppercase tracking-[0.06em]" style={{ color: OFF }}>
              Three-Year In-Kind Commitment
            </div>
            <p className="mt-2.5 font-sans text-[10px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.82)' }}>
              AT Sports will provide Acrytech surfacing materials, coating application labor through a certified Acrytech
              installer, and manufacturer resources to support scheduled National Campus resurfacing throughout the
              three-year partnership.
            </p>
            <p className="mt-2.5 font-sans text-[9px] leading-snug" style={{ color: MUTED }}>
              First right of refusal for renewal following the initial three-year term.
            </p>
          </div>
          <div className="w-px shrink-0" style={{ backgroundColor: 'rgba(93,163,202,0.35)' }} />
          <div className="flex flex-col items-center justify-center text-center">
            <div className="font-display font-bold uppercase leading-none tracking-[0.02em]" style={{ color: OFF, fontSize: '20px' }}>
              Materials
            </div>
            <div className="my-1 font-display font-bold leading-none" style={{ color: BLUE_LIGHT, fontSize: '20px' }}>+</div>
            <div className="font-display font-bold uppercase leading-none tracking-[0.02em]" style={{ color: OFF, fontSize: '20px' }}>
              Application
            </div>
            <div className="mt-3 flex w-full items-center gap-2.5">
              <div className="h-px flex-1" style={{ backgroundColor: 'rgba(93,163,202,0.5)' }} />
              <span className="font-display text-[12px] font-bold uppercase tracking-[0.3em]" style={{ color: BLUE_LIGHT }}>Included</span>
              <div className="h-px flex-1" style={{ backgroundColor: 'rgba(93,163,202,0.5)' }} />
            </div>
          </div>
        </div>
      </div>
      <PageFooter index="25" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}

/* PAGE 31 — CLOSING */
export function ClosingPage() {
  return (
    <Page>
      <PhotoBackdrop src="/images/closing.png" alt="Professional tennis court at dusk" overlay={0.68} showPlaceholder={false} />

      <div className="absolute left-[0.5in] right-[0.5in] top-[0.5in] flex items-center justify-between">
        <img src="/images/atsports-logo.png" alt="AT Sports" className="w-auto" style={{ height: '0.34in' }} />
        <span className="font-display text-[8.5px] font-medium uppercase tracking-[0.22em]" style={{ color: MUTED }}>Closing</span>
      </div>

      <div className="absolute left-[0.5in] right-[0.5in]" style={{ bottom: '2.9in' }}>
        <Kicker className="mb-5">In Closing</Kicker>
        <h1 className="font-display font-bold text-balance" style={{ color: OFF, fontSize: '54px', lineHeight: 0.98, letterSpacing: '-0.025em' }}>
          Built for the
          <br />
          home of
          <br />
          American tennis.
        </h1>
      </div>

      <div className="absolute left-[0.5in] right-[0.5in]" style={{ bottom: '1.4in', maxWidth: '5.4in' }}>
        <p className="font-sans text-[11.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.85)' }}>
          AT Sports is prepared to support the USTA National Campus through direct manufacturing, documented Acrytech
          surface systems, performance testing, technical support, planned material supply and multi-year surface
          management.
        </p>
      </div>

      <div className="absolute left-[0.5in] right-[0.5in]" style={{ bottom: '0.6in' }}>
        <div className="mb-3 h-px w-full" style={{ backgroundColor: 'rgba(185,196,203,0.24)' }} />
        <div className="flex items-end justify-between">
          <div>
            <div className="font-display text-[15px] font-bold" style={{ color: OFF }}>AT Sports</div>
            <div className="font-display text-[9px] font-semibold uppercase tracking-[0.18em]" style={{ color: BLUE_LIGHT }}>Built with purpose.</div>
          </div>
          <div className="text-right font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>
            189 Etowah Industrial Court, Canton, GA 30114
            <br />
            770-734-3000
          </div>
        </div>
      </div>
    </Page>
  )
}
