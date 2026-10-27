import { existsSync } from 'node:fs'
import path from 'node:path'
import { BadgeCheck, Factory, FlaskConical, ScanBarcode } from 'lucide-react'
import { Page, PageFooter, Kicker, PhotoBackdrop, DividerRule } from '@/components/proposal/page-shell'
import { COMPANY, GENERIC_EDITION, type ProductConfig, type ProjectInfo } from '@/lib/submittal'
import { PART_HEADING, type SpecPart } from '@/lib/spec-part'
import { Body, FillPhoto } from './acrytech-pages'

export type ContentsEntry = { label: string; page: number; part?: SpecPart }

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'

/** Shows a filled value, or a dashed placeholder that prints blank. */
function Field({ value, placeholder }: { value: string; placeholder: string }) {
  if (value) return <>{value}</>
  return <span className="field-empty">{placeholder}</span>
}

/* COVER — personalized from the rep's project details */
export function CoverPage({ product, info, generic = false }: { product: ProductConfig; info: ProjectInfo; generic?: boolean }) {
  return (
    <Page>
      {product.key === 'cushionx' ? (
        <PhotoBackdrop src="/images/indoor-courts.png" alt="Indoor courts finished with an AT Sports surface system" overlay={0.72} position="center" showPlaceholder={false} />
      ) : (
        <div className="absolute inset-0 overflow-hidden">
          <img src="/images/pour-blue.jpg" alt="Acrytech color coating poured onto a finished court surface" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: 'center 70%' }} />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(24,28,31,0.94) 0%, rgba(24,28,31,0.82) 30%, rgba(24,28,31,0.2) 58%, rgba(24,28,31,0.15) 78%, rgba(24,28,31,0.85) 100%)' }}
          />
        </div>
      )}

      <div className="absolute left-[0.5in] right-[0.5in] top-[0.5in] flex items-center justify-between">
        <img src="/images/atsports-logo.png" alt="AT Sports" className="w-auto" style={{ height: '0.5in' }} />
        <span className="font-display text-[8.5px] font-medium uppercase tracking-[0.22em]" style={{ color: MUTED }}>
          {generic ? `Edition ${GENERIC_EDITION}` : <Field value={info.date} placeholder="Submittal date" />}
        </span>
      </div>

      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '2.15in' }}>
        <Kicker className="mb-5">Product Submittal Package · {product.name}</Kicker>
        <h1
          className="font-display font-bold text-balance"
          style={{ color: OFF, fontSize: '68px', lineHeight: 0.95, letterSpacing: '-0.025em' }}
        >
          {product.coverTitle[0]}
          <br />
          {product.coverTitle[1]}
        </h1>
        {!generic && info.specSection && (
          <div className="mt-5 font-display text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: MUTED }}>
            Specification Section {info.specSection}
          </div>
        )}
      </div>

      <div className="absolute left-[0.5in] right-[0.5in]" style={{ bottom: '0.7in' }}>
        <div className="mb-4 h-px w-full" style={{ backgroundColor: 'rgba(185,196,203,0.24)' }} />
        <div className="flex items-end justify-between gap-8">
          {generic ? (
            <div className="ml-auto flex min-w-0 flex-col items-end text-right">
  {product.key === 'acrytech' && (
                <img
                  src="/images/acrytech-logo-tag-white.png"
                  alt="Acrytech"
                  className="mt-2 block w-auto"
                  style={{ height: '0.45in' }}
                />
              )}
            </div>
          ) : (
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
          )}
          {!generic && (
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
          )}
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
  contents: ContentsEntry[]
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
                padding: '0.08in 0',
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
        <div className="mt-5 flex items-center gap-3">
          <span className="font-display text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_LIGHT }}>
            Contents
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: 'rgba(185,196,203,0.2)' }} />
        </div>
        <div className="mt-2">
          <GroupedContents contents={contents} rowPad="0.035in" labelSize="10.5px" />
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

/* PRODUCT INFORMATION + CONTENTS — generic replacement for the transmittal */
export function ProductInfoPage({
  product,
  contents,
}: {
  product: ProductConfig
  contents: ContentsEntry[]
}) {
  const rows: { k: string; v: string }[] = [
    { k: 'Product / system', v: product.system },
    { k: 'Manufacturer', v: `AT Sports, Inc. · ${COMPANY.address}` },
    { k: 'Phone', v: COMPANY.phone },
    { k: 'Website', v: COMPANY.web },
    { k: 'Specification section', v: 'Athletic Surfacing — for use under the project’s athletic surfacing section' },
  ]
  return (
    <Page>
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '0.85in' }}>
        <Kicker className="mb-3">Product Submittal Package</Kicker>
        <h2 className="font-display font-bold" style={{ color: OFF, fontSize: '30px', lineHeight: 1.02, letterSpacing: '-0.015em' }}>
          Product submittal information.
        </h2>

      </div>
      <Body top="1.75in" gap="0.24in">
        <div className="glass" style={{ borderRadius: '13px', padding: '0.06in 0.32in' }}>
          {rows.map((r, i) => (
            <div
              key={r.k}
              className="grid items-baseline"
              style={{
                gridTemplateColumns: '1.9in 1fr',
                padding: '0.11in 0',
                borderBottom: i === rows.length - 1 ? 'none' : '1px solid rgba(185,196,203,0.12)',
              }}
            >
              <span className="font-display text-[9px] font-semibold uppercase tracking-[0.16em]" style={{ color: MUTED }}>
                {r.k}
              </span>
              <span className="font-sans text-[12px]" style={{ color: OFF }}>
                {r.v}
              </span>
            </div>
          ))}
        </div>

        <div>
          <ContentsList contents={contents} />
        </div>
        <FillPhoto src="/images/warehouse-drums.jpg" alt="Acrytech drums and silica sand staged in the AT Sports warehouse, Canton, Georgia" position="center 55%" caption="Acrytech products staged for shipment at the AT Sports facility in Canton, Georgia." />
      </Body>
      <PageFooter />
    </Page>
  )
}

/**
 * Contents rows flowed into two columns. Entries tagged with a spec part are
 * grouped under "Part N — …" headings; untagged front/close items stay ungrouped.
 */
function GroupedContents({ contents, rowPad, labelSize }: { contents: ContentsEntry[]; rowPad: string; labelSize: string }) {
  const rows: ({ kind: 'heading'; label: string } | ({ kind: 'item' } & ContentsEntry))[] = []
  let current: SpecPart | undefined
  for (const c of contents) {
    if (c.part && c.part !== current) {
      rows.push({ kind: 'heading', label: PART_HEADING[c.part] })
    }
    current = c.part
    rows.push({ kind: 'item', ...c })
  }
  return (
    <div style={{ columnCount: 2, columnGap: '2rem' }}>
      {rows.map((r) =>
        r.kind === 'heading' ? (
          <div
            key={r.label}
            className="font-display text-[8px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: MUTED, padding: '0.09in 0 0.02in', breakAfter: 'avoid', breakInside: 'avoid' }}
          >
            {r.label}
          </div>
        ) : (
          <div
            key={r.label}
            className="flex items-baseline gap-2"
            style={{ padding: `${rowPad} 0`, borderBottom: '1px solid rgba(185,196,203,0.08)', breakInside: 'avoid' }}
          >
            <span className="font-sans" style={{ fontSize: labelSize, color: 'rgba(245,246,246,0.86)' }}>
              {r.label}
            </span>
            <span className="flex-1" />
            <span className="font-display text-[10px] font-semibold tabular-nums" style={{ color: BLUE_LIGHT }}>
              {String(r.page).padStart(2, '0')}
            </span>
          </div>
        ),
      )}
    </div>
  )
}

function ContentsList({ contents }: { contents: ContentsEntry[] }) {
  return (
    <>
      <div className="flex items-center gap-3">
        <span className="font-display text-[10.5px] font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_LIGHT }}>
          Contents
        </span>
        <div className="h-px flex-1" style={{ backgroundColor: 'rgba(185,196,203,0.2)' }} />
      </div>
      <div className="mt-3">
        <GroupedContents contents={contents} rowPad="0.05in" labelSize="11px" />
      </div>
      <p className="mt-3 font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>
        Technical data sheets, safety data sheets, warranty and supporting documents are listed in the Technical
        Appendices and attached to this submittal.
      </p>
    </>
  )
}

/* INTRODUCTION LETTER */
export function LetterPage({ product, info, generic = false }: { product: ProductConfig; info: ProjectInfo; generic?: boolean }) {
  const section = info.specSection ? `Section ${info.specSection}` : 'the athletic surfacing section'
  const target = generic ? 'a project specification' : 'the project specification'
  const paragraphs =
    product.key === 'cushionx'
      ? [
          `AT Sports submits the CushionX Cushion Surface System for review under ${section}. CushionX is a recycled-rubber cushion layer finished with Acrytech acrylic color coatings, for tennis, pickleball and multi-sport courts.`,
          `This package contains the product data, system build, test data, installation guidance and warranty documentation needed to evaluate the system against ${target}. Technical and safety data sheets are attached in the Technical Appendices.`,
          'AT Sports formulates, manufactures and supports its surfacing systems in Canton, Georgia, so questions on product data, substrate conditions or substitutions go directly to the manufacturer.',
        ]
      : [
          `AT Sports submits the Acrytech Coatings System for review under ${section}. Acrytech is a colored and textured 100% acrylic surfacing system for asphalt, concrete and existing tennis, pickleball and multi-sport courts.`,
          `This package contains the product data, guide specification, test data, installation requirements and warranty documentation needed to evaluate Acrytech against ${target}. Technical and safety data sheets are attached in the Technical Appendices.`,
          'AT Sports formulates, manufactures and supports Acrytech in Canton, Georgia, so questions on product data, substrate conditions or substitutions go directly to the manufacturer.',
        ]
  return (
    <Page>
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '1.0in' }}>
        <Kicker className="mb-4">Introduction</Kicker>
        <h2
          className="font-display font-bold text-balance"
          style={{ color: OFF, fontSize: '40px', lineHeight: 1.0, letterSpacing: '-0.02em', maxWidth: '6in' }}
        >
          Submitted for
          <br />
          specification review.
        </h2>

        <div className="mt-7 grid grid-cols-[1fr_2.3in] gap-10">
          <div className="flex flex-col gap-3.5">
            {paragraphs.map((p, i) => (
              <p key={i} className="font-sans text-[12.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.82)' }}>
                {p}
              </p>
            ))}

            <div className="mt-3">
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
            style={{ borderRadius: '14px', padding: '18px 0.34in 22px', borderTop: '2px solid #5da3ca' }}
          >
            <div className="font-display text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: BLUE_LIGHT }}>
              Requested Action
            </div>
            <p className="mt-4 font-sans text-[13px] leading-relaxed text-pretty" style={{ color: 'rgba(245,246,246,0.82)' }}>
              List {product.name} by AT Sports, Inc. as an approved manufacturer, or accept it as an approved equal to the
              basis-of-design product.
            </p>
          </div>
        </div>
      </div>
      <Body top="7.35in">
        <FillPhoto src="/images/rollx-warehouse-court.jpeg" alt="Red and blue pickleball court finished in the AT Sports warehouse, with stacked Acrytech drums behind it" position="center 68%" caption="Acrytech-coated court in the AT Sports warehouse, Canton, Georgia." />
      </Body>
      <PageFooter />
    </Page>
  )
}

/* MANUFACTURER QUALIFICATIONS — replaces the earlier About / Manufacturer Direct pages */
export function ManufacturerPage({ product }: { product: ProductConfig; generic?: boolean }) {
  const stats = [
    { n: '30+', l: 'Years manufacturing' },
    { n: 'Cat. 3 & 4', l: 'ITF court pace classification' },
    { n: 'PPA Tour & MLP', l: 'Official surface' },
    { n: 'Hundreds', l: 'Facilities across North America and internationally' },
  ]
  const proofs = [
    { Icon: Factory, t: 'In-house manufacturing', d: 'Formulated, produced and quality-controlled in Canton, GA.' },
    { Icon: ScanBarcode, t: 'Batch traceability', d: 'Every batch color-matched to a reference standard and recorded.' },
    { Icon: FlaskConical, t: 'Direct technical support', d: 'In-house product development and chemistry team.' },
    { Icon: BadgeCheck, t: 'Certified installation', d: 'Installed by AT Sports-certified crews to published guidelines.' },
  ]
  const lines = [
    { name: 'Acrytech', d: 'Acrylic sports surface coatings' },
    { name: 'CushionX', d: 'Cushioned sports surfaces' },
    { name: 'Faultline', d: 'Court crack-repair systems' },
    { name: 'RollX', d: 'Portable sports surfaces' },
  ]
  const LOGO_H = '0.46in'
  const credentials: { label: string; dark?: boolean; logos: { src: string; alt: string; h?: string }[] }[] = [
    // ASBA source has ~16% transparent margin top and bottom, so it renders taller to match the other marks
    { label: 'ASBA member since 2015', logos: [{ src: '/images/asba-member-logo.png', alt: 'Member, American Sports Builders Association', h: '0.68in' }] },
    {
      label: 'ITF classified',
      logos: [
        { src: '/images/itf-level-3-medium.png', alt: 'ITF Classified Court Pace, Category 3 Medium' },
        { src: '/images/itf-level-4-medium-fast.png', alt: 'ITF Classified Court Pace, Category 4 Medium-Fast' },
      ],
    },
    { label: 'Official Surface, PPA Tour', dark: true, logos: [{ src: '/images/ppa-logo-white.png', alt: 'PPA Tour' }] },
    { label: 'Official Surface, Major League Pickleball', dark: true, logos: [{ src: '/images/mlp-logo-white.png', alt: 'Major League Pickleball' }] },
  ]
  return (
    <Page>
      <Body top="0.95in" gap="0.26in">
        <header>
          <Kicker className="mb-3">About AT Sports</Kicker>
          <h2 className="font-display font-bold text-balance" style={{ color: OFF, fontSize: '32px', lineHeight: 1.02, letterSpacing: '-0.015em' }}>
            Manufacturer-direct since 1995.
          </h2>
          <p className="mt-3 max-w-[6.6in] font-sans text-[11.5px] leading-relaxed text-pretty" style={{ color: 'rgba(245,246,246,0.78)' }}>
            AT Sports formulates, manufactures and supports its sports-surface systems in Canton, Georgia, with one
            company responsible from raw material to finished court.
          </p>
        </header>

        <div className="grid grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.l} style={{ borderTop: '2px solid #327ea8', paddingTop: '0.12in' }}>
              <div className="whitespace-nowrap font-display text-[21px] font-bold leading-none" style={{ color: OFF, letterSpacing: '-0.015em' }}>
                {s.n}
              </div>
              <div className="mt-2 font-display text-[8px] font-semibold uppercase leading-snug tracking-[0.12em]" style={{ color: MUTED }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-3">
          {credentials.map((c) => (
            <figure key={c.label} className="flex flex-col gap-2">
              <div
                className="flex items-center justify-center gap-2 overflow-hidden"
                style={{
                  height: '0.78in',
                  borderRadius: '10px',
                  background: c.dark ? '#14181b' : '#ffffff',
                  border: c.dark ? '1px solid rgba(185,196,203,0.18)' : 'none',
                }}
              >
                {c.logos.map((l) => (
                  <img key={l.src} src={l.src} alt={l.alt} className="w-auto shrink-0 object-contain" style={{ height: l.h ?? LOGO_H }} />
                ))}
              </div>
              <figcaption className="text-center font-display text-[8px] font-semibold uppercase leading-snug tracking-[0.12em]" style={{ color: MUTED }}>
                {c.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          {proofs.map(({ Icon, t, d }) => (
            <div key={t} className="flex items-start gap-3">
              <div
                className="flex shrink-0 items-center justify-center"
                style={{ width: '0.36in', height: '0.36in', borderRadius: '9px', background: 'rgba(50,126,168,0.16)', border: '1px solid rgba(50,126,168,0.4)' }}
              >
                <Icon className="h-4 w-4" style={{ color: BLUE_LIGHT }} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-[11px] font-bold uppercase tracking-[0.06em]" style={{ color: OFF }}>{t}</div>
                <p className="mt-0.5 font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>{d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid min-h-0 flex-1 gap-5" style={{ gridTemplateColumns: '2.6in 1fr' }}>
          <div className="flex min-h-0 flex-col pb-6">
            <div className="font-display text-[9px] font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_LIGHT }}>
              AT Sports Product Lines
            </div>
            <div className="mt-2.5 flex flex-1 flex-col" style={{ borderTop: '1px solid rgba(185,196,203,0.12)' }}>
              {lines.map((l) => (
                <div key={l.name} className="flex flex-1 items-center justify-between gap-3" style={{ borderBottom: '1px solid rgba(185,196,203,0.12)' }}>
                  <span className="font-display text-[12px] font-bold" style={{ color: l.name === product.name ? BLUE_LIGHT : OFF }}>{l.name}</span>
                  <span className="font-sans text-[9px]" style={{ color: MUTED }}>{l.d}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex min-h-0 flex-col">
            <FillPhoto src="/images/at-sports-facility-exterior.jpg" alt="AT Sports headquarters and manufacturing facility in Canton, Georgia" position="center 60%" minHeight="1.6in" caption="AT Sports headquarters and manufacturing, Canton, Georgia" />
          </div>
        </div>
      </Body>
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
export function ClosingPage({ product, info, generic = false }: { product: ProductConfig; info: ProjectInfo; generic?: boolean }) {
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
          {generic
            ? 'Questions about this submittal, product samples, color drawdowns or project-specific documentation can be directed to AT Sports.'
            : 'Questions about this submittal, product samples, color drawdowns or project-specific documentation can be directed to your AT Sports representative.'}
        </p>
      </div>

      <div className="absolute left-[0.5in] right-[0.5in]" style={{ bottom: '1.45in' }}>
        {generic ? (
          <div className="glass-strong" style={{ borderRadius: '13px', padding: '0.26in 0.32in', borderTop: '2px solid #5da3ca' }}>
            <div className="font-display text-[8.5px] font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_LIGHT }}>
              Contact
            </div>
            <div className="mt-2 font-display text-[18px] font-bold" style={{ color: OFF }}>
              AT Sports, Inc.
              <span style={{ color: BLUE_LIGHT }}> · </span>
              {COMPANY.phone}
              <span style={{ color: BLUE_LIGHT }}> · </span>
              {COMPANY.web}
            </div>
            <div className="mt-1 font-sans text-[10.5px]" style={{ color: MUTED }}>
              Sales and technical support
            </div>
          </div>
        ) : (
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
        )}
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
