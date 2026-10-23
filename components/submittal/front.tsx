import { Page, PageFooter, Kicker, PhotoBackdrop, DividerRule } from '@/components/proposal/page-shell'
import { COMPANY, type ProductConfig, type ProjectInfo } from '@/lib/submittal'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'

/** Shows a filled value, or a dashed placeholder that prints blank. */
function Field({ value, placeholder }: { value: string; placeholder: string }) {
  if (value) return <>{value}</>
  return <span className="field-empty">{placeholder}</span>
}

/* COVER — personalized from the rep's project details */
export function CoverPage({ product, info }: { product: ProductConfig; info: ProjectInfo }) {
  return (
    <Page>
      <PhotoBackdrop
        src={product.key === 'cushionx' ? '/images/indoor-courts.png' : '/images/cover-courts.png'}
        alt="Tennis courts finished with an AT Sports surface system"
        overlay={0.72}
        position="center"
        showPlaceholder={false}
      />

      <div className="absolute left-[0.5in] right-[0.5in] top-[0.5in] flex items-center justify-between">
        <img src="/images/atsports-logo.png" alt="AT Sports" className="w-auto" style={{ height: '0.5in' }} />
        <span className="font-display text-[8.5px] font-medium uppercase tracking-[0.22em]" style={{ color: MUTED }}>
          <Field value={info.date} placeholder="Submittal date" />
        </span>
      </div>

      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '2.15in' }}>
        <Kicker className="mb-5">Product Submittal · {product.name}</Kicker>
        <h1
          className="font-display font-bold text-balance"
          style={{ color: OFF, fontSize: '68px', lineHeight: 0.95, letterSpacing: '-0.025em' }}
        >
          {product.coverTitle[0]}
          <br />
          {product.coverTitle[1]}
        </h1>
        {info.specSection && (
          <div className="mt-5 font-display text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: MUTED }}>
            Specification Section {info.specSection}
          </div>
        )}
      </div>

      <div className="absolute left-[0.5in] right-[0.5in]" style={{ bottom: '0.7in' }}>
        <div className="mb-4 h-px w-full" style={{ backgroundColor: 'rgba(185,196,203,0.24)' }} />
        <div className="flex items-end justify-between gap-8">
          <div className="min-w-0">
            <div className="font-display text-[9px] font-semibold uppercase tracking-[0.22em]" style={{ color: BLUE_LIGHT }}>
              Prepared for
            </div>
            <div className="mt-1 font-display text-[17px] font-bold" style={{ color: OFF }}>
              <Field value={info.project} placeholder="Project name" />
            </div>
            <div className="font-sans text-[11px]" style={{ color: MUTED }}>
              <Field value={[info.preparedFor, info.location].filter(Boolean).join(' · ')} placeholder="Customer · Location" />
            </div>
          </div>
          <div className="shrink-0 text-right">
            <div className="font-display text-[9px] font-semibold uppercase tracking-[0.22em]" style={{ color: BLUE_LIGHT }}>
              Submitted by
            </div>
            <div className="mt-1 font-display text-[17px] font-bold" style={{ color: OFF }}>
              AT Sports
            </div>
            <div className="font-sans text-[11px]" style={{ color: MUTED }}>
              {product.system}
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

/* TRANSMITTAL + CONTENTS */
export function TransmittalPage({
  product,
  info,
  contents,
}: {
  product: ProductConfig
  info: ProjectInfo
  contents: { label: string; page: number }[]
}) {
  const rows: { k: string; v: string; p: string }[] = [
    { k: 'Project', v: info.project, p: 'Project name' },
    { k: 'Location', v: info.location, p: 'City, State' },
    { k: 'Prepared for', v: info.preparedFor, p: 'Owner / GC / contractor' },
    { k: 'Architect / Engineer', v: info.architect, p: '—' },
    { k: 'Specification section', v: info.specSection, p: 'Section number and title' },
    { k: 'Product / system', v: product.system, p: '' },
    { k: 'Manufacturer', v: `AT Sports, Inc. · ${COMPANY.address}`, p: '' },
    { k: 'Submittal date', v: info.date, p: 'Date' },
  ]
  return (
    <Page>
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '0.75in' }}>
        <Kicker className="mb-3">Submittal Transmittal</Kicker>
        <h2 className="font-display font-bold" style={{ color: OFF, fontSize: '30px', lineHeight: 1.02, letterSpacing: '-0.015em' }}>
          Product submittal information.
        </h2>

        {/* Project data */}
        <div className="mt-6 glass" style={{ borderRadius: '13px', padding: '0.08in 0.32in' }}>
          {rows.map((r, i) => (
            <div
              key={r.k}
              className="grid items-baseline"
              style={{
                gridTemplateColumns: '1.9in 1fr',
                padding: '0.1in 0',
                borderBottom: i === rows.length - 1 ? 'none' : '1px solid rgba(185,196,203,0.12)',
              }}
            >
              <span className="font-display text-[8.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: MUTED }}>
                {r.k}
              </span>
              <span className="font-sans text-[11.5px]" style={{ color: OFF }}>
                <Field value={r.v} placeholder={r.p} />
              </span>
            </div>
          ))}
        </div>

        {/* Rep contact */}
        <div
          className="mt-4 grid grid-cols-[1.9in_1fr] items-center"
          style={{ borderRadius: '13px', padding: '0.2in 0.32in', background: 'rgba(50,126,168,0.1)', border: '1px solid rgba(50,126,168,0.34)' }}
        >
          <span className="font-display text-[8.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BLUE_LIGHT }}>
            AT Sports Contact
          </span>
          <div>
            <div className="font-display text-[13px] font-bold" style={{ color: OFF }}>
              <Field value={info.repName} placeholder="Representative name" />
              {info.repTitle && (
                <span className="ml-2 font-sans text-[10.5px] font-normal" style={{ color: MUTED }}>
                  {info.repTitle}
                </span>
              )}
            </div>
            <div className="mt-0.5 font-sans text-[10.5px]" style={{ color: MUTED }}>
              <Field value={[info.repEmail, info.repPhone].filter(Boolean).join('  ·  ')} placeholder="Email · Phone" />
            </div>
          </div>
        </div>

        {/* Contents */}
        <div className="mt-7 flex items-center gap-3">
          <span className="font-display text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_LIGHT }}>
            Contents
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: 'rgba(185,196,203,0.2)' }} />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-x-8">
          {[contents.slice(0, Math.ceil(contents.length / 2)), contents.slice(Math.ceil(contents.length / 2))].map((col, ci) => (
            <div key={ci} className="flex flex-col">
              {col.map((c) => (
                <div
                  key={c.label}
                  className="flex items-baseline gap-2"
                  style={{ padding: '0.065in 0', borderBottom: '1px solid rgba(185,196,203,0.08)' }}
                >
                  <span className="font-sans text-[10.5px]" style={{ color: 'rgba(245,246,246,0.86)' }}>
                    {c.label}
                  </span>
                  <span className="flex-1" />
                  <span className="font-display text-[10px] font-semibold tabular-nums" style={{ color: BLUE_LIGHT }}>
                    {String(c.page).padStart(2, '0')}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="mt-4 font-sans text-[9px] leading-relaxed" style={{ color: MUTED }}>
          Technical data sheets, safety data sheets, warranty and supporting documents are listed in the Technical
          Appendices and attached to this submittal.
        </p>
      </div>
      <PageFooter />
    </Page>
  )
}

/* INTRODUCTION LETTER */
export function LetterPage({ product }: { product: ProductConfig }) {
  const paragraphs =
    product.key === 'cushionx'
      ? [
          'Thank you for considering AT Sports for your project. This submittal documents the CushionX cushioned surface system, a recycled-rubber cushion layer finished with Acrytech acrylic color coatings.',
          'AT Sports formulates, manufactures and supports its surfacing systems from our facility in Canton, Georgia. You work directly with the manufacturer responsible for the products — from specification and production through installation support.',
          'The pages that follow describe the system build, the cushion options and finish, performance data, and the technical documentation, warranty and installation guidance that support it.',
          'Our commitment is simple: a documented surface system, backed by the people who make it.',
        ]
      : [
          'Thank you for considering AT Sports for your project. This submittal documents the Acrytech Coatings System, a colored and textured acrylic surfacing system for tennis, pickleball and multi-sport courts.',
          'AT Sports formulates, manufactures and supports Acrytech from our facility in Canton, Georgia. You work directly with the manufacturer responsible for the system — from specification and production through installation support.',
          'The pages that follow describe the system build, court-pace profiles, performance testing and product chemistry, and the technical documentation, warranty and installation guidance that support it.',
          'Our commitment is simple: a documented surface system, backed by the people who make it.',
        ]
  return (
    <Page>
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '1.3in' }}>
        <Kicker className="mb-4">Introduction</Kicker>
        <h2
          className="font-display font-bold text-balance"
          style={{ color: OFF, fontSize: '40px', lineHeight: 1.0, letterSpacing: '-0.02em', maxWidth: '6in' }}
        >
          Built by the people
          <br />
          who make the surface.
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

            <div className="mt-6">
              <img
                src="/images/brad-carroll-signature.png"
                alt="Signature of Brad Carroll"
                className="mb-2 w-auto object-contain"
                style={{ height: '0.62in' }}
              />
              <div className="h-px w-[2.6in]" style={{ backgroundColor: 'rgba(185,196,203,0.3)' }} />
              <div className="mt-3 font-display text-[12px] font-bold" style={{ color: OFF }}>
                Brad Carroll
              </div>
              <div className="mt-1 font-sans text-[10.5px]" style={{ color: MUTED }}>
                President, AT Sports
              </div>
            </div>
          </div>

          <div
            className="glass-strong flex flex-col justify-center"
            style={{ height: '300px', borderRadius: '14px', padding: '18px 0.34in 22px', borderTop: '2px solid #5da3ca' }}
          >
            <div className="font-display text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: BLUE_LIGHT }}>
              Manufacturer Direct
            </div>
            <p className="mt-4 font-sans text-[13px] leading-relaxed text-pretty" style={{ color: 'rgba(245,246,246,0.82)' }}>
              Formulated, manufactured and supported by AT Sports in Canton, Georgia since 1995.
            </p>
          </div>
        </div>

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
            AT Sports manufacturing headquarters, Canton, Georgia
          </div>
        </div>
      </div>
      <PageFooter />
    </Page>
  )
}

/* WHY THIS SYSTEM — four pillars */
export function WhyPage({ product }: { product: ProductConfig }) {
  const pillars =
    product.key === 'cushionx'
      ? [
          { t: 'Cushioned Comfort', d: 'A recycled-rubber cushion layer adds shock absorption and comfort underfoot beneath the playing surface.' },
          { t: 'Thickness Options', d: 'CushionX rolls are available in 4mm, 6mm and 8mm thicknesses to match the level of cushion the project requires.' },
          { t: 'Acrytech Finish', d: 'Finished with Acrytech acrylic color coatings, ITF classified for court pace under Category 3 and Category 4.' },
          { t: 'Manufacturer-Direct Support', d: 'Direct access to AT Sports technical, product-development and production resources before, during and after installation.' },
        ]
      : [
          { t: 'Two Performance Profiles', d: 'Medium and Medium-Fast court-pace profiles, ITF classified under Category 3 and Category 4.' },
          { t: 'One Documented System', d: 'Defined system builds, mixing profiles, application requirements and coverage rates for every project.' },
          { t: 'Independently Tested', d: 'Third-party material testing and finished-surface performance testing beyond court-pace classification.' },
          { t: 'Manufacturer-Direct Support', d: 'Direct access to AT Sports technical, product-development and production resources before, during and after installation.' },
        ]
  const statement =
    product.key === 'cushionx'
      ? ['One manufacturer.', 'Cushion to finish coat.', 'One documented system.']
      : ['One manufacturer.', 'Two performance profiles.', 'One documented system.']
  return (
    <Page>
      <div className="absolute left-[0.5in]" style={{ top: '1.15in', width: '6.6in' }}>
        <Kicker className="mb-3">Why {product.name}</Kicker>
        <h2 className="font-display font-bold text-pretty" style={{ color: OFF, fontSize: '32px', lineHeight: 1.02, letterSpacing: '-0.015em' }}>
          A complete surface system,
          <br />
          documented and supported.
        </h2>
        <p className="mt-3 text-[12px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.78)' }}>
          {product.key === 'cushionx'
            ? 'CushionX combines a cushion layer and an acrylic playing surface into one specified system, manufactured and supported by AT Sports, for tennis, pickleball and multi-sport courts where player comfort matters.'
            : 'Acrytech connects product specification, manufacturing, performance testing and technical support into one system, manufactured and supported by AT Sports, for tennis, pickleball and multi-sport courts.'}
        </p>
      </div>

      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '3.35in' }}>
        <div className="grid grid-cols-2 gap-3.5">
          {pillars.map((p, i) => (
            <div key={p.t} className="glass flex items-start gap-4" style={{ borderRadius: '13px', padding: '0.28in 0.3in', minHeight: '1.42in' }}>
              <span className="font-display text-[26px] font-bold tabular-nums leading-none" style={{ color: BLUE_LIGHT, opacity: 0.85 }}>
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

        <div
          className="mt-5 flex flex-col items-center justify-center text-center"
          style={{ borderRadius: '14px', padding: '0.34in 0.3in', background: 'rgba(50,126,168,0.12)', border: '1px solid rgba(50,126,168,0.4)' }}
        >
          <div className="flex flex-wrap items-center justify-center gap-x-3">
            {statement.map((t, i) => (
              <span key={i} className="font-display text-[22px] font-bold tracking-[-0.01em]" style={{ color: i === 2 ? BLUE_LIGHT : OFF }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 overflow-hidden" style={{ borderRadius: '14px', height: '1.45in', border: '1px solid rgba(185,196,203,0.16)' }}>
          <img
            src={product.key === 'cushionx' ? '/images/court16-fishtown.jpg' : '/images/coating-spread.jpg'}
            alt={product.key === 'cushionx' ? 'Indoor courts finished with CushionX and Acrytech' : 'Acrytech coating being applied to a court'}
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center 50%' }}
          />
        </div>
      </div>
      <PageFooter />
    </Page>
  )
}

/* CLOSING / CONTACT */
export function ClosingPage({ product, info }: { product: ProductConfig; info: ProjectInfo }) {
  return (
    <Page>
      <PhotoBackdrop src="/images/closing.png" alt="Tennis court at dusk" overlay={0.68} showPlaceholder={false} />

      <div className="absolute left-[0.5in] right-[0.5in] top-[0.5in] flex items-center justify-between">
        <img src="/images/atsports-logo.png" alt="AT Sports" className="w-auto" style={{ height: '0.34in' }} />
      </div>

      <div className="absolute left-[0.5in] right-[0.5in]" style={{ bottom: '3.4in' }}>
        <Kicker className="mb-5">Next Steps</Kicker>
        <h1 className="font-display font-bold text-balance" style={{ color: OFF, fontSize: '54px', lineHeight: 0.98, letterSpacing: '-0.025em' }}>
          Built with
          <br />
          purpose.
        </h1>
        <p className="mt-5 max-w-[5.2in] font-sans text-[11.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.85)' }}>
          Questions about this submittal, product samples, color drawdowns or project-specific documentation can be
          directed to your AT Sports representative.
        </p>
      </div>

      <div className="absolute left-[0.5in] right-[0.5in]" style={{ bottom: '1.45in' }}>
        <div className="grid grid-cols-2 gap-4">
          <div className="glass-strong" style={{ borderRadius: '13px', padding: '0.24in 0.28in', borderTop: '2px solid #5da3ca' }}>
            <div className="font-display text-[8.5px] font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_LIGHT }}>
              Your Representative
            </div>
            <div className="mt-2 font-display text-[15px] font-bold" style={{ color: OFF }}>
              <Field value={info.repName} placeholder="Representative name" />
            </div>
            <div className="font-sans text-[10px]" style={{ color: MUTED }}>
              {info.repTitle || 'AT Sports'}
            </div>
            <div className="mt-2 font-sans text-[10.5px] leading-relaxed" style={{ color: OFF }}>
              <Field value={info.repEmail} placeholder="Email" />
              <br />
              <Field value={info.repPhone} placeholder="Phone" />
            </div>
          </div>
          <div className="glass" style={{ borderRadius: '13px', padding: '0.24in 0.28in' }}>
            <div className="font-display text-[8.5px] font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_LIGHT }}>
              Technical Support
            </div>
            <div className="mt-2 font-display text-[15px] font-bold" style={{ color: OFF }}>
              AT Sports, Inc.
            </div>
            <div className="font-sans text-[10px]" style={{ color: MUTED }}>
              {product.system}
            </div>
            <div className="mt-2 font-sans text-[10.5px] leading-relaxed" style={{ color: OFF }}>
              {COMPANY.phone}
              <br />
              {COMPANY.web}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[0.5in] right-[0.5in]" style={{ bottom: '0.6in' }}>
        <DividerRule opacity={0.24} />
        <div className="mt-3 flex items-end justify-between">
          <div>
            <div className="font-display text-[15px] font-bold" style={{ color: OFF }}>AT Sports</div>
            <div className="font-display text-[9px] font-semibold uppercase tracking-[0.18em]" style={{ color: BLUE_LIGHT }}>Built with purpose.</div>
          </div>
          <div className="text-right font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>
            {COMPANY.address}
            <br />
            {COMPANY.phone}
          </div>
        </div>
      </div>
    </Page>
  )
}
