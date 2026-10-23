import { ArrowRight } from 'lucide-react'
import { Page, PageCounter, PageFooter, PageHead, Kicker } from './page-shell'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'
const TOTAL = '26'

/* PAGE 10 — CAMPUS SURFACE MANAGEMENT */
export function PerformanceVerificationPage() {
  const lifecycle = [
    { n: '01', t: 'Build', d: 'Approved surface profile and documented installation.' },
    { n: '02', t: 'Verify', d: 'On-court performance testing.' },
    { n: '03', t: 'Document', d: 'Installation, material and measured performance record.' },
    { n: '04', t: 'Plan', d: 'Surface history supports future maintenance and resurfacing planning.' },
  ]
  const record = [
    { k: 'Court Group', v: 'Team USA', strong: true },
    { k: 'Surface Date', v: '03 / 2027' },
    { k: 'System', v: 'Acrytech Color' },
    { k: 'Target CPR', v: '38' },
    { k: 'Measured CPR', v: '39 — Illustrative', accent: true },
    { k: 'Batch ID', v: 'XXXXX', muted: true },
    { k: 'Installer', v: 'XXXXX', muted: true },
    { k: 'Next Review', v: 'XXXXX', muted: true },
  ]
  const chain = ['Surface Record', 'Performance History', 'Next Review', 'Resurfacing Plan']
  return (
    <Page>
      <PageHead
        index="10"
        section="Campus Surface Management"
        kicker="Campus Surface Management"
        title={
          <>
            Documented performance.
            <br />
            Planned resurfacing.
          </>
        }
        intro="AT Sports proposes maintaining a surface record for each applicable court group, connecting the specified system, installation history and measured performance to future Campus surface planning."
        titleSize={32}
        width="6.7in"
      />

      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '2.95in' }}>
        {/* SECTION 1 — Lifecycle: Build -> Verify -> Document -> Plan */}
        <div className="flex items-stretch justify-between gap-3">
          {lifecycle.map((f, i) => (
            <div key={f.n} className="flex flex-1 items-stretch gap-3">
              <div className="flex flex-1 flex-col">
                <span className="font-display font-bold tabular-nums" style={{ color: BLUE_LIGHT, fontSize: '44px', lineHeight: 0.85 }}>
                  {f.n}
                </span>
                <div className="mt-3 h-px w-full" style={{ background: 'rgba(93,163,202,0.4)' }} />
                <h3 className="mt-3 font-display text-[13px] font-bold uppercase tracking-[0.06em]" style={{ color: OFF }}>
                  {f.t}
                </h3>
                <p className="mt-2 font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>
                  {f.d}
                </p>
              </div>
              {i < lifecycle.length - 1 && (
                <div className="flex shrink-0 items-start pt-2.5">
                  <ArrowRight size={18} strokeWidth={2.5} color={BLUE_LIGHT} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* SECTION 2 — Illustrative Campus Surface Record (hero) */}
        <div className="mt-9">
          <p className="font-sans text-[11.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.85)', maxWidth: '6.4in' }}>
            A record for each court group connects the specified system, installation, material history and measured
            performance to a continuing Campus surface history.
          </p>

          <div
            className="mt-4 overflow-hidden"
            style={{ borderRadius: '14px', border: '1px solid rgba(93,163,202,0.45)', background: 'rgba(245,246,246,0.04)' }}
          >
            {/* Header band */}
            <div
              className="flex items-center justify-between"
              style={{ padding: '0.24in 0.34in', background: 'rgba(50,126,168,0.16)', borderBottom: '1px solid rgba(93,163,202,0.4)' }}
            >
              <div>
                <div className="font-display text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: OFF }}>
                  USTA National Campus
                </div>
                <div className="mt-1 font-display text-[22px] font-bold" style={{ color: BLUE_LIGHT }}>
                  Surface Record
                </div>
              </div>
              <span
                className="font-sans text-[8.5px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: OFF, borderRadius: '5px', padding: '0.06in 0.14in', background: 'rgba(245,246,246,0.14)', border: '1px solid rgba(245,246,246,0.3)' }}
              >
                Illustrative Sample
              </span>
            </div>

            {/* Fields — two columns */}
            <div className="grid grid-cols-2" style={{ padding: '0.1in 0.34in 0.2in' }}>
              {record.map((r, i) => {
                const last = i === record.length - 1
                return (
                  <div
                    key={r.k}
                    className="flex items-center justify-between"
                    style={{
                      padding: '0.14in 0',
                      borderBottom: last ? 'none' : '1px solid rgba(185,196,203,0.12)',
                      borderRight: i % 2 === 0 && !last ? '1px solid rgba(185,196,203,0.12)' : 'none',
                      paddingLeft: i % 2 === 0 ? 0 : '0.34in',
                      paddingRight: i % 2 === 0 ? '0.34in' : 0,
                    }}
                  >
                    <span className="font-sans text-[11px]" style={{ color: MUTED }}>{r.k}</span>
                    <span
                      className="font-display text-[14px] tabular-nums"
                      style={{
                        color: r.accent ? BLUE_LIGHT : r.muted ? 'rgba(185,196,203,0.6)' : OFF,
                        fontWeight: r.strong || r.accent ? 700 : 500,
                        letterSpacing: r.muted ? '0.1em' : undefined,
                      }}
                    >
                      {r.v}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* SECTION 3 — From record to resurfacing plan */}
        <div className="mt-8">
          <div
            className="flex items-center justify-between"
            style={{ borderRadius: '13px', padding: '0.28in 0.34in', background: 'rgba(245,246,246,0.03)', border: '1px solid rgba(185,196,203,0.16)' }}
          >
            {chain.map((c, i) => (
              <div key={c} className="flex items-center gap-3">
                <span
                  className="font-display text-[12.5px] font-bold uppercase tracking-[0.04em]"
                  style={{ color: i === 0 || i === chain.length - 1 ? BLUE_LIGHT : OFF }}
                >
                  {c}
                </span>
                {i < chain.length - 1 && <ArrowRight size={16} strokeWidth={2.5} color="rgba(93,163,202,0.7)" />}
              </div>
            ))}
          </div>
          <p className="mt-3 font-sans text-[10.5px] leading-relaxed" style={{ color: MUTED, maxWidth: '6.6in' }}>
            Surface history provides a documented reference for future maintenance and resurfacing decisions, including
            performance targets, material requirements and scheduling.
          </p>
        </div>
      </div>

      <PageFooter index="10" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}

/* PAGE 11 — SUBSTRATE & COURT EVALUATION */
export function SubstrateEvaluationPage() {
  const considerations = [
    'Concrete cure',
    'Moisture migration',
    'Vapor barriers',
    'Surface profile',
    'Efflorescence',
    'Contamination',
    'Depressions',
    'Crack conditions',
    'Primer compatibility',
  ]
  return (
    <Page>
      <PageCounter index="11" section="Substrate & Court Evaluation" total={TOTAL} />
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '1.3in' }}>
        <div className="grid items-stretch" style={{ gridTemplateColumns: '4.1in 1fr', gap: '0.5in' }}>
          {/* Left — narrative + moisture callout */}
          <div className="flex flex-col">
            <Kicker className="mb-4">Substrate &amp; Court Evaluation</Kicker>
            <h2 className="font-display font-bold text-balance" style={{ color: OFF, fontSize: '32px', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
              Performance starts
              <br />
              below the coating.
            </h2>
            <div className="mt-5 flex flex-col gap-4">
              <p className="font-sans text-[14px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.8)' }}>
                The performance of an acrylic court surface depends on the condition and preparation of the substrate
                beneath it.
              </p>
              <p className="font-sans text-[14px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.8)' }}>
                AT Sports maintains technical guidance addressing concrete design, curing, moisture, preparation and
                primer compatibility before acrylic coatings are installed.
              </p>
            </div>

            {/* Moisture callout — pinned to the bottom of the column */}
            <div className="mt-auto pt-6" style={{ borderRadius: '13px' }}>
              <div style={{ borderRadius: '13px', padding: '0.26in', background: 'rgba(50,126,168,0.1)', border: '1px solid rgba(50,126,168,0.34)' }}>
                <div className="font-display text-[12px] font-bold uppercase tracking-[0.06em]" style={{ color: BLUE_LIGHT }}>
                  Moisture Evaluation
                </div>
                <p className="mt-2 font-sans text-[10.5px] leading-relaxed" style={{ color: OFF }}>
                  AT Sports technical guidance references ASTM F1869 and ASTM F2170 methods for evaluating concrete
                  moisture conditions.
                </p>
              </div>
            </div>
          </div>

          {/* Right — considerations list, stretched to match the left column */}
          <div className="glass flex h-full flex-col" style={{ borderRadius: '13px', padding: '0.3in 0.28in 3px' }}>
            <div className="font-display text-[9px] font-semibold uppercase tracking-[0.2em]" style={{ color: MUTED }}>
              Technical Considerations
            </div>
            <div className="mt-4 flex flex-1 flex-col justify-between gap-2.5">
              {considerations.map((c, i) => (
                <div key={c} className="flex items-center gap-3 border-b pb-2.5" style={{ borderColor: i === considerations.length - 1 ? 'transparent' : 'rgba(185,196,203,0.12)' }}>
                  <span className="font-display text-[9px] font-semibold tabular-nums" style={{ color: BLUE_LIGHT }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-sans text-[11px]" style={{ color: OFF }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full-width site image */}
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '5.9in' }}>
        <div className="overflow-hidden" style={{ borderRadius: '13px', height: '2.25in', border: '1px solid rgba(185,196,203,0.16)' }}>
          <img
            src="/images/court-substrate-eval.jpg"
            alt="AT Sports crew assessing and preparing a worn tennis court substrate on site"
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center 42%' }}
          />
        </div>
        <p className="mt-2 font-sans text-[10px] leading-relaxed" style={{ color: MUTED }}>
          On-site substrate assessment and surface preparation ahead of an acrylic coating system.
        </p>
      </div>

      {/* Closing band */}
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ bottom: '1in' }}>
        <div className="text-center" style={{ borderRadius: '13px', padding: '0.28in', background: 'rgba(245,246,246,0.03)', border: '1px solid rgba(185,196,203,0.16)' }}>
          <p className="font-display text-[14px] font-bold" style={{ color: OFF }}>
            The surface system begins with understanding the surface below it.
          </p>
        </div>
      </div>
      <PageFooter index="11" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}
