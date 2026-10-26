import { Page, PageCounter, PageFooter, PageHead, Kicker } from './page-shell'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'
const TOTAL = '26'

/* PAGE 16 — PERFORMANCE TESTING */
export function LabTestedPage() {
  return (
    <Page>
      <PageHead
        index="12"
        section="Performance Testing"
        kicker="Performance Testing"
        title={
          <>
            From material behavior
            <br />
            to finished-surface response.
          </>
        }
        titleSize={28}
        width="6.8in"
      />

      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '2.55in' }}>
        <p className="font-sans text-[11px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.72)', maxWidth: '5.6in' }}>
          Acrytech performance is evaluated through third-party material testing and finished-surface testing focused on
          the characteristics that influence court performance.
        </p>

        {/* 01 — THIRD-PARTY MATERIAL TESTING */}
        <div className="mt-7">
          <SectionLabel n="01" t="Third-Party Material Testing" source="H.B. Fuller testing" />
        </div>
        <div className="mt-6 grid grid-cols-3">
          {/* Accelerated weathering */}
          <div className="pr-8">
            <div className="flex items-baseline">
              <span className="font-display font-bold tabular-nums" style={{ color: OFF, fontSize: '46px', lineHeight: 0.85, letterSpacing: '-0.03em' }}>5,555</span>
              <span className="ml-1.5 font-display text-[15px] font-light" style={{ color: BLUE_LIGHT }}>hrs</span>
            </div>
            <h3 className="mt-3 font-display text-[11px] font-bold uppercase tracking-[0.08em]" style={{ color: BLUE_LIGHT }}>Accelerated Weathering</h3>
            <p className="mt-2 font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>
              ASTM G154 Cycle 1
              <br />
              H.B. Fuller North America
            </p>
          </div>

          {/* No film failure */}
          <div className="px-8" style={{ borderLeft: '1px solid rgba(185,196,203,0.18)' }}>
            <h3 className="font-display text-[24px] font-bold uppercase tracking-[0.01em]" style={{ color: OFF, lineHeight: 1.02 }}>
              No Film
              <br />
              Failure Observed
            </h3>
            <p className="mt-3 font-sans text-[9.5px] uppercase tracking-[0.06em]" style={{ color: BLUE_LIGHT }}>
              Cracking · Chalking · Checking · Peeling · Flaking
            </p>
            <p className="mt-2 font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>
              No coating-film failure of these types was observed in the reported accelerated-weathering program.
            </p>
          </div>

          {/* Scrub resistance */}
          <div className="pl-8" style={{ borderLeft: '1px solid rgba(185,196,203,0.18)' }}>
            <div className="flex items-baseline gap-3">
              <span className="font-display font-bold tabular-nums" style={{ color: OFF, fontSize: '46px', lineHeight: 0.85 }}>2&times;</span>
              <span className="font-display text-[17px] font-bold tabular-nums" style={{ color: MUTED }}>
                266 <span style={{ color: BLUE_LIGHT }}>&rarr;</span> <span style={{ color: BLUE_LIGHT }}>536</span>
              </span>
            </div>
            <h3 className="mt-3 font-display text-[11px] font-bold uppercase tracking-[0.08em]" style={{ color: BLUE_LIGHT }}>Scrub Resistance</h3>
            <p className="mt-2 font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>
              ASTM D2486 cycles to failure &mdash; approximately 2&times; scrub resistance in the reported comparison.
            </p>
          </div>
        </div>

        {/* 02 — FINISHED-SURFACE PERFORMANCE */}
        <div className="mt-14">
          <SectionLabel n="02" t="Finished-Surface Performance" source="firefly sports testing" />
        </div>

        <div className="mt-6 grid grid-cols-[2.2in_1fr] items-stretch gap-10">
          {/* Central editorial label — breadth of testing is the visual story */}
          <div className="flex flex-col justify-center">
            <h3 className="font-display font-bold uppercase" style={{ color: OFF, fontSize: '30px', lineHeight: 0.94, letterSpacing: '-0.01em' }}>
              Performance
              <br />
              evaluated
              <br />
              <span style={{ color: BLUE_LIGHT }}>beyond court pace.</span>
            </h3>
            <p className="mt-4 font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>
              Acrytech surface-development testing evaluates multiple characteristics of the finished playing surface,
              providing additional performance data beyond court-pace classification.
            </p>
          </div>

          {/* Four performance areas — equal editorial columns */}
          <div className="grid grid-cols-4" style={{ borderTop: '1px solid rgba(185,196,203,0.22)', borderBottom: '1px solid rgba(185,196,203,0.22)' }}>
            {[
              { n: '01', t: 'Surface Friction', d: 'Dry + wet surface testing' },
              { n: '02', t: 'Ball Response', d: 'Vertical rebound + trajectory' },
              { n: '03', t: 'Surface Mechanics', d: 'Force reduction + vertical deformation' },
              { n: '04', t: 'Energy Response', d: 'Energy restitution' },
            ].map((c, i) => (
              <div
                key={c.t}
                className="flex flex-col py-8"
                style={{
                  borderRight: i < 3 ? '1px solid rgba(185,196,203,0.12)' : 'none',
                  paddingLeft: i === 0 ? '0' : '0.2in',
                  paddingRight: '0.16in',
                }}
              >
                <span className="font-display text-[9px] font-semibold tabular-nums" style={{ color: MUTED }}>{c.n}</span>
                <span className="mt-3 font-display text-[12px] font-bold uppercase leading-tight tracking-[0.04em]" style={{ color: OFF }}>{c.t}</span>
                <span className="mt-2.5 font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>{c.d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing band */}
        <div className="mt-10 flex items-center justify-between gap-8" style={{ borderRadius: '13px', padding: '0.32in 0.4in', background: 'rgba(50,126,168,0.1)', border: '1px solid rgba(50,126,168,0.32)' }}>
          <p className="font-display text-[16px] font-bold text-balance" style={{ color: OFF, lineHeight: 1.15, maxWidth: '3.6in' }}>
            Material behavior and finished-surface response,{' '}
            <span style={{ color: BLUE_LIGHT }}>independently tested.</span>
          </p>
          <p className="font-sans text-[10px] leading-relaxed" style={{ color: MUTED, maxWidth: '3in' }}>
            Detailed testing data and available supporting documentation are included in the technical appendices of this
            submittal.
          </p>
        </div>
      </div>
      <PageFooter index="12" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}

function SectionLabel({ n, t, source }: { n: string; t: string; source?: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-display text-[13px] font-bold tabular-nums" style={{ color: BLUE_LIGHT }}>{n}</span>
      <span className="font-display text-[13px] font-bold uppercase tracking-[0.08em]" style={{ color: OFF }}>{t}</span>
      <div className="ml-1 h-px flex-1" style={{ backgroundColor: 'rgba(185,196,203,0.2)' }} />
      {source && (
        <span className="font-display text-[8.5px] font-semibold uppercase tracking-[0.12em] whitespace-nowrap" style={{ color: BLUE_LIGHT }}>
          {source}
        </span>
      )}
    </div>
  )
}

/* PAGE 17 — PRODUCT RESPONSIBILITY */
export function ProductResponsibilityPage() {
  const free = ['Asbestos', 'Lead', 'Mercury', 'Heavy metals', 'PCB', 'Formaldehyde']
  return (
    <Page>
      <PageCounter index="13" section="DOCUMENTED PRODUCT RESPONSIBILITY" total={TOTAL} />
      <div className="absolute left-[0.5in]" style={{ top: '1.3in', width: '4.15in' }}>
        <Kicker className="mb-4">Product Responsibility</Kicker>
        <h2 className="font-display font-bold text-balance" style={{ color: OFF, fontSize: '34px', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
          Documented
          <br />
          product chemistry.
        </h2>

        <div className="mt-7 flex flex-col gap-4">
          {[
            { t: 'Acrytech Color', lines: ['100% acrylic latex', 'Self-crosslinking technology'], voc: '42 g/L' },
            { t: 'Acrytech Resurfacer', lines: ['100% acrylic latex', 'Self-crosslinking technology'], voc: '43 g/L' },
          ].map((p) => (
            <div key={p.t} className="glass flex items-center justify-between gap-4" style={{ borderRadius: '13px', padding: '0.4in 0.38in', borderLeft: '2px solid #5da3ca' }}>
              <div className="min-w-0">
                <div className="font-display text-[16px] font-bold uppercase tracking-[0.03em]" style={{ color: OFF }}>{p.t}</div>
                {p.lines.map((l) => (
                  <div key={l} className="mt-0.5 font-sans text-[11px]" style={{ color: MUTED }}>{l}</div>
                ))}
              </div>
              <div className="shrink-0 text-right">
                <div className="font-display text-[42px] font-bold tabular-nums" style={{ color: BLUE_LIGHT, lineHeight: 0.9, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>{p.voc}</div>
                <div className="mt-1 font-display text-[8.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: MUTED }}>Published VOC</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contains no + closing */}
      <div className="absolute right-[0.5in]" style={{ top: '2.5in', width: '2.9in' }}>
        <div className="glass" style={{ borderRadius: '13px', padding: '0.46in 0.4in' }}>
          <div className="font-display text-[9px] font-semibold uppercase tracking-[0.2em]" style={{ color: MUTED }}>
            Acrytech Color  — Contains No
          </div>
          <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-6">
            {free.map((f) => (
              <div key={f} className="flex items-center gap-2.5">
                <span className="font-display text-[14px] font-light" style={{ color: BLUE_LIGHT }}>—</span>
                <span className="font-sans text-[12px]" style={{ color: OFF }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-[6px] font-sans text-[10px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.74)' }}>
          Product information from the published Acrytech Color Technical Data Sheet.
        </p>
      </div>

      {/* Full-width product / lab image band */}
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '6.5in' }}>
        <div className="overflow-hidden" style={{ borderRadius: '14px', height: '3.2in', border: '1px solid rgba(185,196,203,0.16)' }}>
          <img
            src="/images/mixing-drum.jpg"
            alt="AT Sports technician mixing a drum of blue Acrytech acrylic coating during production"
            crossOrigin="anonymous"
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center 45%' }}
          />
        </div>
        <div className="mt-2 font-sans text-[9.5px]" style={{ color: MUTED }}>
          Published chemistry and VOC values are backed by AT Sports lab verification and technical data sheets.
        </div>
      </div>
      <PageFooter index="13" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}
