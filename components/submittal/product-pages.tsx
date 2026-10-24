import { Page, PageFooter, Kicker, ContentRequired } from '@/components/proposal/page-shell'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'
const RULE = 'rgba(185,196,203,0.12)'

/* ---------------------------------------------------------------------------
   ACRYTECH — APPLICATION & COVERAGE
   Rates are the published Acrytech coverage rates used in AT Sports
   material estimates (gal per square yard, per coat).
   --------------------------------------------------------------------------- */
const RATES = [
  { product: 'Acrytech Resurfacer', note: 'Textured resurfacer', coats: 1, rate: 0.07 },
  { product: 'Acrytech Color', note: 'Textured color', coats: 2, rate: 0.0675 },
  { product: 'Acrytech Color', note: 'Concentrate finish coat', coats: 1, rate: 0.045 },
]
const AREAS = [
  { label: 'Tennis court', sub: '60 × 120 ft · 7,200 SF', sy: 800 },
  { label: 'Pickleball court', sub: '30 × 60 ft · 1,800 SF', sy: 200 },
  { label: 'Per 1,000 SF', sub: '111.1 SY', sy: 1000 / 9 },
]
const fmt = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })

export function CoveragePage() {
  const steps = [
    { t: 'Evaluate', d: 'Substrate condition, cure, moisture and drainage reviewed before coating.' },
    { t: 'Repair', d: 'Cracks, depressions and damaged areas corrected; primer or sealer where required.' },
    { t: 'Resurface', d: 'Acrytech Resurfacer fills and levels the surface texture.' },
    { t: 'Color', d: 'Textured Acrytech Color coats build color, texture and court pace.' },
    { t: 'Finish', d: 'Concentrate finish coat, then lines painted to the court layout.' },
  ]
  return (
    <Page>
      <div className="absolute left-[0.5in]" style={{ top: '1.15in', width: '6.6in' }}>
        <Kicker className="mb-3">Application &amp; Coverage</Kicker>
        <h2 className="font-display font-bold" style={{ color: OFF, fontSize: '32px', lineHeight: 1.02, letterSpacing: '-0.015em' }}>
          Applied in sequence.
          <br />
          Estimated by the court.
        </h2>
      </div>

      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '2.75in' }}>
        {/* Application sequence */}
        <div className="grid grid-cols-5 gap-2.5">
          {steps.map((s, i) => (
            <div key={s.t} className="glass flex flex-col" style={{ borderRadius: '12px', padding: '0.2in 0.18in', minHeight: '1.35in', borderTop: i === steps.length - 1 ? '2px solid #5da3ca' : undefined }}>
              <span className="font-display text-[9px] font-semibold tabular-nums" style={{ color: BLUE_LIGHT }}>0{i + 1}</span>
              <span className="mt-1.5 font-display text-[12px] font-bold uppercase tracking-[0.04em]" style={{ color: OFF }}>{s.t}</span>
              <span className="mt-1.5 font-sans text-[9px] leading-relaxed" style={{ color: MUTED }}>{s.d}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 font-sans text-[10px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.74)' }}>
          Substrate cure and moisture limits, minimum air and surface temperatures, weather conditions, mixing, dilution
          and cure time between coats are defined in the Acrytech Application Instructions and Technical Data Sheets.
        </p>

        {/* Coverage table */}
        <div className="mt-6 flex items-center gap-3">
          <span className="font-display text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_LIGHT }}>
            Estimated Material Quantities
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: 'rgba(185,196,203,0.2)' }} />
          <span className="font-sans text-[8.5px] uppercase tracking-[0.12em]" style={{ color: MUTED }}>Gallons</span>
        </div>

        <div className="mt-3 glass overflow-hidden" style={{ borderRadius: '13px' }}>
          <div
            className="grid items-end font-display text-[8.5px] font-semibold uppercase tracking-[0.14em]"
            style={{ gridTemplateColumns: '2.1in 0.5in 0.85in repeat(3, 1fr)', padding: '0.16in 0.28in', background: 'rgba(50,126,168,0.14)', color: MUTED }}
          >
            <span>Product</span>
            <span className="text-center">Coats</span>
            <span className="text-right">Gal / SY / coat</span>
            {AREAS.map((a) => (
              <span key={a.label} className="text-right">
                <span style={{ color: OFF }}>{a.label}</span>
                <br />
                <span className="font-sans text-[7.5px] normal-case tracking-normal">{a.sub}</span>
              </span>
            ))}
          </div>
          {RATES.map((r, i) => (
            <div
              key={r.note}
              className="grid items-center"
              style={{ gridTemplateColumns: '2.1in 0.5in 0.85in repeat(3, 1fr)', padding: '0.14in 0.28in', borderTop: i === 0 ? 'none' : `1px solid ${RULE}` }}
            >
              <span>
                <span className="font-display text-[11.5px] font-bold" style={{ color: OFF }}>{r.product}</span>
                <span className="ml-2 font-sans text-[9.5px]" style={{ color: MUTED }}>{r.note}</span>
              </span>
              <span className="text-center font-display text-[12px] tabular-nums" style={{ color: OFF }}>{r.coats}</span>
              <span className="text-right font-display text-[12px] tabular-nums" style={{ color: MUTED }}>{r.rate.toFixed(r.rate === 0.0675 ? 4 : 3)}</span>
              {AREAS.map((a) => (
                <span key={a.label} className="text-right font-display text-[13px] font-bold tabular-nums" style={{ color: OFF }}>
                  {fmt(r.rate * r.coats * a.sy)}
                </span>
              ))}
            </div>
          ))}
          <div
            className="grid items-center"
            style={{ gridTemplateColumns: '2.1in 0.5in 0.85in repeat(3, 1fr)', padding: '0.14in 0.28in', borderTop: '1px solid rgba(93,163,202,0.45)', background: 'rgba(50,126,168,0.08)' }}
          >
            <span className="font-display text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color: BLUE_LIGHT }}>Total system</span>
            <span />
            <span />
            {AREAS.map((a) => (
              <span key={a.label} className="text-right font-display text-[14px] font-bold tabular-nums" style={{ color: BLUE_LIGHT }}>
                {fmt(RATES.reduce((t, r) => t + r.rate * r.coats * a.sy, 0))}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-3 font-sans text-[9px] leading-relaxed" style={{ color: MUTED }}>
          Estimates based on published Acrytech coverage rates for a typical build of one resurfacer coat, two textured
          color coats and one concentrate finish coat. Areas shown are playing area plus standard run-out. Final quantities
          depend on substrate texture, porosity, application method and the number of coats specified. Line paint,
          primer, sealer and crack-repair materials are estimated separately.
        </p>
      </div>

      <PageFooter />
    </Page>
  )
}

/* ---------------------------------------------------------------------------
   CUSHIONX — SYSTEM BUILD
   --------------------------------------------------------------------------- */
export function CushionXSystemPage() {
  const layers: { t: string; d: string; kind?: 'head' | 'acry' | 'cush' | 'base'; confirm?: string }[] = [
    { t: 'Finished Playing Surface', d: 'Line paint per court layout', kind: 'head' },
    { t: 'Acrytech Color', d: 'Textured color and finish coats', kind: 'acry' },
    { t: 'Acrytech Resurfacer / Fill Coats', d: 'Seals and fills the cushion surface', kind: 'acry', confirm: 'Coat count' },
    { t: 'CushionX Rubber Rolls', d: '4mm · 6mm · 8mm recycled raw rubber', kind: 'cush' },
    { t: 'Adhesive', d: 'Bonds the cushion layer to the substrate', confirm: 'Product' },
    { t: 'Prepared Substrate', d: 'Asphalt or concrete, repaired and primed per specification', kind: 'base' },
  ]
  return (
    <Page>
      <div className="absolute left-[0.5in]" style={{ top: '1.2in', width: '3.5in' }}>
        <Kicker className="mb-4">System Build</Kicker>
        <h2 className="font-display font-bold text-balance" style={{ color: OFF, fontSize: '31px', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
          The CushionX
          <br />
          cushion system.
        </h2>
        <p className="mt-4 font-sans text-[11.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.78)' }}>
          A recycled-rubber cushion layer bonded to the substrate and finished with the Acrytech acrylic coatings
          system.
        </p>
        <p className="mt-3 font-sans text-[10.5px] leading-relaxed" style={{ color: MUTED }}>
          The cushion layer adds shock absorption and comfort underfoot, while the Acrytech finish provides the color,
          texture and court pace of the playing surface.
        </p>

        {/* Thickness options */}
        <div className="mt-6 font-display text-[9px] font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_LIGHT }}>
          Cushion Thickness Options
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2.5">
          {['4', '6', '8'].map((mm) => (
            <div key={mm} className="glass-strong text-center" style={{ borderRadius: '12px', padding: '0.2in 0.1in', borderTop: '2px solid #5da3ca' }}>
              <div className="font-display font-bold tabular-nums" style={{ color: OFF, fontSize: '34px', lineHeight: 0.9 }}>
                {mm}
                <span className="ml-0.5 text-[13px] font-light" style={{ color: BLUE_LIGHT }}>mm</span>
              </div>
              <div className="mt-1.5 font-sans text-[8.5px] uppercase tracking-[0.1em]" style={{ color: MUTED }}>Rubber roll</div>
            </div>
          ))}
        </div>
        <div className="mt-3">
          <ContentRequired>Typical use by thickness</ContentRequired>
        </div>

        <div className="mt-6">
          <div className="overflow-hidden" style={{ borderRadius: '13px', height: '2.3in', border: '1px solid rgba(185,196,203,0.16)' }}>
            <img src="/images/indoor-courts.png" alt="Indoor courts finished with a cushioned acrylic surface" className="h-full w-full object-cover" />
          </div>
          <p className="mt-2 font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>
            Cushion system finished with Acrytech color coatings.
          </p>
        </div>
      </div>

      <div className="absolute right-[0.5in]" style={{ top: '1.2in', width: '3.7in' }}>
        <div className="flex flex-col gap-2.5">
          {layers.map((l) => (
            <div
              key={l.t}
              className="flex items-center justify-between gap-3"
              style={{
                borderRadius: '11px',
                padding: l.kind === 'cush' ? '0.5in 0.3in' : l.kind === 'head' || l.kind === 'base' ? '0.24in 0.3in' : '0.3in 0.3in',
                background:
                  l.kind === 'head'
                    ? 'rgba(50,126,168,0.2)'
                    : l.kind === 'cush'
                      ? 'repeating-linear-gradient(135deg, rgba(245,246,246,0.07) 0 6px, rgba(245,246,246,0.03) 6px 12px)'
                      : l.kind === 'acry'
                        ? 'rgba(50,126,168,0.1)'
                        : 'rgba(245,246,246,0.04)',
                border:
                  l.kind === 'acry' || l.kind === 'cush'
                    ? '1px solid rgba(50,126,168,0.4)'
                    : '1px solid rgba(185,196,203,0.14)',
              }}
            >
              <div className="min-w-0">
                <div className="font-display text-[14px] font-bold" style={{ color: l.kind === 'head' ? BLUE_LIGHT : OFF }}>{l.t}</div>
                <div className="mt-0.5 font-sans text-[9.5px]" style={{ color: MUTED }}>{l.d}</div>
                {l.confirm && (
                  <div className="mt-1.5">
                    <ContentRequired>{l.confirm} to confirm</ContentRequired>
                  </div>
                )}
              </div>
              {(l.kind === 'acry' || l.kind === 'cush') && (
                <span className="shrink-0 font-display text-[8px] font-semibold uppercase tracking-[0.14em]" style={{ color: BLUE_LIGHT }}>
                  {l.kind === 'cush' ? 'CushionX' : 'Acrytech'}
                </span>
              )}
            </div>
          ))}
        </div>
        <p className="mt-3 text-center font-sans text-[8.5px] uppercase tracking-[0.16em]" style={{ color: MUTED }}>
          System build, top to substrate
        </p>
      </div>
      <PageFooter />
    </Page>
  )
}

/* ---------------------------------------------------------------------------
   CUSHIONX — PERFORMANCE
   Values awaiting CushionX test reports.
   --------------------------------------------------------------------------- */
export function CushionXPerformancePage() {
  const metrics = [
    { t: 'Force Reduction', d: 'Shock absorbed by the surface compared with concrete.', unit: '%' },
    { t: 'Vertical Deformation', d: 'How much the surface gives under an athlete’s foot.', unit: 'mm' },
    { t: 'Ball Rebound', d: 'Consistency of vertical ball response across the court.', unit: '%' },
    { t: 'Surface Friction', d: 'Dry and wet traction of the finished playing surface.', unit: '' },
  ]
  return (
    <Page>
      <div className="absolute left-[0.5in]" style={{ top: '1.15in', width: '6.6in' }}>
        <Kicker className="mb-3">Performance</Kicker>
        <h2 className="font-display font-bold" style={{ color: OFF, fontSize: '32px', lineHeight: 1.02, letterSpacing: '-0.015em' }}>
          Comfort you can measure.
        </h2>
        <p className="mt-3 text-[12px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.78)' }}>
          CushionX performance is measured on the finished surface: how much impact the system absorbs, how it responds
          underfoot, and how the ball plays off the Acrytech finish.
        </p>
      </div>

      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '2.85in' }}>
        <div className="grid grid-cols-2 gap-3.5">
          {metrics.map((m) => (
            <div key={m.t} className="glass flex flex-col" style={{ borderRadius: '13px', padding: '0.3in 0.32in', minHeight: '1.75in' }}>
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.08em]" style={{ color: BLUE_LIGHT }}>{m.t}</span>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-display font-bold" style={{ color: 'rgba(245,246,246,0.35)', fontSize: '40px', lineHeight: 0.9 }}>—</span>
                {m.unit && <span className="font-display text-[14px] font-light" style={{ color: BLUE_LIGHT }}>{m.unit}</span>}
              </div>
              <p className="mt-3 font-sans text-[10px] leading-relaxed" style={{ color: MUTED }}>{m.d}</p>
              <div className="mt-auto pt-3">
                <ContentRequired>Test value · by thickness</ContentRequired>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-6 flex items-stretch gap-6"
          style={{ borderRadius: '13px', padding: '0.3in 0.36in', background: 'rgba(50,126,168,0.12)', border: '1px solid rgba(50,126,168,0.36)' }}
        >
          <div className="flex flex-col justify-center pr-6" style={{ flex: '0 0 2.9in' }}>
            <div className="font-display text-[9px] font-semibold uppercase tracking-[0.16em]" style={{ color: BLUE_LIGHT }}>Acrytech Finish</div>
            <div className="mt-1 font-display text-[30px] font-bold" style={{ color: OFF, lineHeight: 0.95 }}>ITF Recognized</div>
            <div className="mt-2 font-display text-[10px] font-semibold uppercase tracking-[0.05em]" style={{ color: MUTED }}>Category 3 &amp; Category 4</div>
          </div>
          <div className="flex flex-col justify-center border-l pl-6" style={{ borderColor: 'rgba(93,163,202,0.4)' }}>
            <p className="font-sans text-[10.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.82)' }}>
              The CushionX playing surface is finished with Acrytech color coatings, recognized by the International
              Tennis Federation for court pace under Category 3 (Medium) and Category 4 (Medium-Fast).
            </p>
            <div className="mt-2">
              <ContentRequired>Confirm ITF classification applies over cushion</ContentRequired>
            </div>
          </div>
        </div>

      </div>
      <PageFooter />
    </Page>
  )
}
