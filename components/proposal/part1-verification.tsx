import { Page, PageCounter, PageFooter, PageHead, Kicker } from './page-shell'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'

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
      <PageCounter index="11" section="Substrate & Court Evaluation" />
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
      <PageFooter index="11" section="AT Sports Proposal" />
    </Page>
  )
}
