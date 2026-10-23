import { Page, PageFooter } from './page-shell'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'
const RULE = 'rgba(185,196,203,0.16)'

const systemBuild = [
  { n: '01', t: 'Textured Resurfacer', coats: '1 Coat', rate: '.070', unit: 'gal/SY' },
  { n: '02', t: 'Textured Color', coats: '2 Coats', rate: '.0675', unit: 'gal/SY Per Coat' },
  { n: '03', t: 'Concentrate Color', coats: '1 Coat', rate: '.045', unit: 'gal/SY' },
]

const allocation = [
  { p: 'Textured Resurfacer', base: '2,612', add: '392', total: '3,004' },
  { p: 'Textured Color', base: '5,038', add: '756', total: '5,793' },
  { p: 'Concentrate Color', base: '1,679', add: '252', total: '1,931' },
]

const TABLE_COLS = '2fr 1fr 1fr 1.2fr'

function SectionLabel({ children, sub }: { children: string; sub?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className="font-display text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: BLUE_LIGHT }}>
        {children}
      </span>
      {sub && (
        <span className="font-sans text-[9.5px]" style={{ color: MUTED }}>
          {sub}
        </span>
      )}
    </div>
  )
}

function Metric({ value, unit, label }: { value: string; unit?: string; label: string }) {
  return (
    <div
      className="glass flex flex-col justify-end px-[0.34in] pb-[0.28in] pt-[0.3in]"
      style={{ borderRadius: '14px', borderTop: `2px solid ${BLUE_LIGHT}` }}
    >
      <div className="flex items-baseline gap-3">
        <span
          className="font-display font-bold tabular-nums"
          style={{ color: OFF, fontSize: '54px', lineHeight: 0.85, letterSpacing: '-0.03em' }}
        >
          {value}
        </span>
        {unit && (
          <span className="font-display text-[15px] font-light uppercase tracking-[0.04em]" style={{ color: BLUE_LIGHT }}>
            {unit}
          </span>
        )}
      </div>
      <div className="mt-3 border-t pt-2" style={{ borderColor: RULE }}>
        <span className="font-display text-[9.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: MUTED }}>
          {label}
        </span>
      </div>
    </div>
  )
}

function AllocationRow({
  cells,
  total = false,
}: {
  cells: { p: string; base: string; add: string; total: string }
  total?: boolean
}) {
  const num = 'font-display tabular-nums text-right'
  return (
    <div
      role="row"
      className="grid items-center"
      style={{
        gridTemplateColumns: TABLE_COLS,
        padding: total ? '0.15in 0.2in' : '0.13in 0.2in',
        borderTop: total ? `1px solid ${BLUE_LIGHT}` : undefined,
        borderBottom: total ? undefined : `1px solid ${RULE}`,
        background: total ? 'rgba(50,126,168,0.1)' : 'transparent',
      }}
    >
      <span
        role="cell"
        className={total ? 'font-display text-[11.5px] font-bold uppercase tracking-[0.06em]' : 'font-sans text-[11px]'}
        style={{ color: OFF }}
      >
        {cells.p}
      </span>
      <span role="cell" className={`${num} text-[11px] ${total ? 'font-bold' : 'font-medium'}`} style={{ color: total ? OFF : 'rgba(245,246,246,0.82)' }}>
        {cells.base} gal
      </span>
      <span role="cell" className={`${num} text-[11px] ${total ? 'font-bold' : 'font-medium'}`} style={{ color: total ? OFF : 'rgba(245,246,246,0.82)' }}>
        {cells.add} gal
      </span>
      <span
        role="cell"
        className={`${num} font-bold`}
        style={{ color: total ? OFF : OFF, fontSize: total ? '17px' : '11.5px', lineHeight: 1 }}
      >
        {cells.total} gal
      </span>
    </div>
  )
}

export function AddendumMaterialPage() {
  return (
    <Page>
      <div className="absolute left-[0.5in] top-[0.5in] flex items-center gap-2 font-display text-[9.5px] font-medium uppercase tracking-[0.16em]">
        <span style={{ color: BLUE_LIGHT }}>Addendum A</span>
        <span aria-hidden="true" className="inline-block h-[9px] w-px" style={{ backgroundColor: 'rgba(185,196,203,0.3)' }} />
        <span style={{ color: OFF }}>Material Commitment</span>
      </div>

      <div className="absolute left-[0.5in] right-[0.5in] flex flex-col" style={{ top: '0.9in' }}>
        <header>
          <h2
            className="font-display font-bold text-pretty"
            style={{ color: OFF, fontSize: '30px', lineHeight: 1.02, letterSpacing: '-0.02em' }}
          >
            Three-year material
            <br />
            commitment.
          </h2>
          <p className="mt-3 font-sans text-[11px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.82)', maxWidth: '6.4in' }}>
            Proposed Acrytech material commitment for the USTA National Campus.
          </p>
        </header>

        <section aria-label="Primary commitment" className="mt-8">
          <div className="grid grid-cols-2 gap-5">
            <Metric value="10,728" unit="Gallons" label="Estimated material allocation" />
            <Metric value="$121,700" label="Estimate Product Value" />
          </div>
        </section>

        <section aria-label="Calculation basis" className="mt-9">
          <SectionLabel>Calculation Basis</SectionLabel>
          <div className="mt-3 flex items-stretch gap-6 border-t pb-2 pt-5" style={{ borderColor: RULE }}>
            <div className="flex shrink-0 flex-col justify-center pr-6" style={{ width: '2in', borderRight: `1px solid ${RULE}` }}>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold tabular-nums" style={{ color: OFF, fontSize: '34px', lineHeight: 0.9, letterSpacing: '-0.02em' }}>
                  397,902
                </span>
                <span className="font-display text-[13px] font-light" style={{ color: BLUE_LIGHT }}>
                  SF
                </span>
              </div>
              <span className="mt-2 font-display text-[8.5px] font-semibold uppercase leading-snug tracking-[0.16em]" style={{ color: MUTED }}>
                Total Hard-Court Surface Area
              </span>
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
              <div className="grid grid-cols-3 gap-5">
                {systemBuild.map((s) => (
                  <div key={s.n} className="flex flex-col">
                    <span className="font-display text-[11px] font-bold tabular-nums" style={{ color: BLUE_LIGHT }}>
                      {s.n}
                    </span>
                    <span className="mt-1.5 font-display text-[10.5px] font-bold uppercase leading-tight tracking-[0.04em]" style={{ color: OFF }}>
                      {s.t}
                    </span>
                    <span className="mt-2.5 font-sans text-[10px]" style={{ color: MUTED }}>
                      {s.coats}
                    </span>
                    <span className="mt-1.5 font-display text-[12px] font-semibold tabular-nums" style={{ color: OFF }}>
                      {s.rate} <span className="font-sans text-[9.5px] font-normal" style={{ color: MUTED }}>{s.unit}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7 flex justify-end border-t pt-2.5" style={{ borderColor: BLUE_LIGHT }}>
            <span className="font-display text-[8.5px] font-semibold uppercase tracking-[0.16em] tabular-nums" style={{ color: MUTED }}>
              RFP Allotment: +15%
            </span>
          </div>
          <div role="table" className="mt-2">
            <div
              role="row"
              className="grid border-y"
              style={{ gridTemplateColumns: TABLE_COLS, padding: '0.07in 0.2in', borderColor: RULE }}
            >
              {['Product', '3-Yr. Usage', '+15%', 'Commitment'].map((h, i) => (
                <span
                  role="columnheader"
                  key={h}
                  className={`font-display text-[8.5px] font-semibold uppercase tracking-[0.16em] ${i === 0 ? '' : 'text-right'}`}
                  style={{ color: BLUE_LIGHT }}
                >
                  {h}
                </span>
              ))}
            </div>
            {allocation.map((r) => (
              <AllocationRow key={r.p} cells={r} />
            ))}
            <AllocationRow total cells={{ p: 'Total', base: '9,329', add: '1,399', total: '10,728' }} />
          </div>
        </section>

        <aside
          aria-label="Scope note"
          className="mt-7 flex flex-col"
          style={{
            borderRadius: '14px',
            padding: '0.2in 0.28in',
            background: 'rgba(50,126,168,0.14)',
            border: '1px solid rgba(93,163,202,0.35)',
          }}
        >
          <span className="font-display text-[9px] font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_LIGHT }}>
            Scope Note
          </span>
          <p className="mt-2 font-sans text-[12px] font-medium leading-relaxed text-pretty" style={{ color: OFF }}>
            The quantities outlined above are estimated based on the resurfacing scope provided in the RFP. AT Sports will provide the materials required to support the agreed scope, with final quantities and annual requirements coordinated with USTA during project planning.
          </p>
        </aside>
      </div>

      <PageFooter index="A" section="Addendum" />
    </Page>
  )
}

const resources = [
  {
    n: '01',
    category: 'In-House Product Engineering',
    name: 'Caldwell Robinson',
    org: 'AT Sports',
    source: 'In-House',
    body: "With an engineering background, Caldwell is the product developer behind AT Sports' surfacing systems, providing direct guidance on system design, material selection, application requirements, compatibility and surface performance.",
  },
  {
    n: '02',
    category: 'Coatings & Material Science',
    name: 'AT Sports Chemistry Team',
    org: 'AT Sports',
    source: 'In-House',
    body: "Supports formulation, testing, quality control, troubleshooting and continued product development, providing direct access to the team behind AT Sports' manufactured surfacing materials.",
  },
  {
    n: '03',
    category: 'Asphalt',
    name: 'Tim Murphy',
    org: 'Murphy Pavement Technology',
    source: 'External Resource',
    url: 'murphypavetech.com',
    body: 'Specialized expertise in pavement design, materials, construction practices, troubleshooting and evaluation of existing asphalt conditions.',
  },
  {
    n: '04',
    category: 'Concrete',
    name: 'Fred Kauffman',
    org: 'Kauffman Precast',
    source: 'External Resource',
    url: 'kauffmanprecastllcs.com',
    body: 'Specialized expertise in concrete construction, substrate conditions, preparation and other concrete-specific considerations.',
  },
]

const assembly = ['Substrate', 'Material Science', 'Surfacing System', 'Performance']

function ResourceCell({
  r,
  className,
  style,
}: {
  r: (typeof resources)[number]
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <article
      className={`glass flex flex-col px-[0.3in] pb-[0.24in] pt-[0.26in] ${className ?? ''}`}
      style={{ borderRadius: '14px', borderTop: `2px solid ${BLUE_LIGHT}`, ...style }}
    >
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex min-w-0 items-baseline gap-2.5">
          <span className="font-display text-[13px] font-bold tabular-nums" style={{ color: BLUE_LIGHT }}>
            {r.n}
          </span>
          <span className="font-display text-[9px] font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_LIGHT }}>
            {r.category}
          </span>
        </div>
        {r.source === 'In-House' ? (
          <span className="shrink-0 font-display text-[8px] font-bold uppercase tracking-[0.2em]" style={{ color: OFF }}>
            In-House
          </span>
        ) : (
          <span className="font-display text-[7.5px] font-medium uppercase tracking-[0.18em]" style={{ color: 'rgba(185,196,203,0.55)' }}>
            External Resource
          </span>
        )}
      </div>
      <h3
        className="mt-4 font-display font-bold"
        style={{ color: OFF, fontSize: '19px', lineHeight: 1.05, letterSpacing: '-0.01em' }}
      >
        {r.name}
      </h3>
      <span className="mt-1.5 font-sans text-[10.5px] font-medium" style={{ color: MUTED }}>
        {r.org}
      </span>
      <div aria-hidden="true" className="mt-3 border-t" style={{ borderColor: RULE }} />
      <p className="mt-3 font-sans text-[10px] leading-relaxed text-pretty" style={{ color: 'rgba(185,196,203,0.88)' }}>
        {r.body}
      </p>
      {r.url && (
        <span className="mt-auto pt-3 font-sans text-[9.5px] tracking-[0.02em]" style={{ color: 'rgba(185,196,203,0.55)' }}>
          {r.url}
        </span>
      )}
    </article>
  )
}

export function AddendumEngineeringPage() {
  return (
    <Page>
      <div className="absolute left-[0.5in] top-[0.5in] flex items-center gap-2 font-display text-[9.5px] font-medium uppercase tracking-[0.16em]">
        <span style={{ color: BLUE_LIGHT }}>Addendum B</span>
        <span aria-hidden="true" className="inline-block h-[9px] w-px" style={{ backgroundColor: 'rgba(185,196,203,0.3)' }} />
        <span style={{ color: OFF }}>Professional Engineering &amp; Technical Support</span>
      </div>

      <div className="absolute left-[0.5in] right-[0.5in] flex flex-col" style={{ top: '1.05in' }}>
        <header>
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="inline-block h-px" style={{ width: '0.28in', backgroundColor: BLUE_LIGHT }} />
            <span className="font-display text-[9px] font-semibold uppercase tracking-[0.24em]" style={{ color: BLUE_LIGHT }}>
              Technical Resources
            </span>
          </div>
          <h2
            className="mt-3 font-display font-bold text-pretty"
            style={{ color: OFF, fontSize: '34px', lineHeight: 1.02, letterSpacing: '-0.02em' }}
          >
            Professional engineering
            <br />
            &amp; technical support.
          </h2>

          <div className="mt-5 border-t pt-4" style={{ borderColor: RULE }}>
            <p className="font-sans text-[12px] leading-relaxed text-pretty" style={{ color: 'rgba(245,246,246,0.86)', maxWidth: '6in' }}>
              AT Sports combines in-house product development and chemistry expertise with specialized asphalt and concrete resources to address technical requirements across the complete sports surface system, from substrate conditions through finished surface performance.
            </p>
          </div>
        </header>

        <section aria-label="Resources across the court surface assembly" className="mt-8">
          <div className="grid grid-cols-2" style={{ gap: '0.2in' }}>
            {resources.map((r) => (
              <ResourceCell key={r.n} r={r} style={{ minHeight: '2.45in' }} />
            ))}
          </div>
        </section>

        <aside
          aria-label="Complete surface support"
          className="mt-9 grid border-t pb-4 pt-7"
          style={{ borderColor: BLUE_LIGHT, gridTemplateColumns: '1.5in 1fr', columnGap: '0.3in' }}
        >
          <span className="font-display text-[10px] font-semibold uppercase leading-snug tracking-[0.22em]" style={{ color: BLUE_LIGHT }}>
            Technical Depth
          </span>
          <p className="font-sans text-[12.5px] font-medium leading-relaxed text-pretty" style={{ color: OFF }}>
            Specialized resources can be engaged as project conditions require, giving USTA an additional level of technical insight and problem-solving capability throughout the partnership.
          </p>
        </aside>
      </div>

      <PageFooter index="B" section="Addendum" />
    </Page>
  )
}
