import { Page, PageFooter } from './page-shell'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'
const RULE = 'rgba(185,196,203,0.16)'

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

export function TechnicalSupportPage() {
  return (
    <Page>
      <div className="absolute left-[0.5in] top-[0.5in] flex items-center gap-2 font-display text-[9.5px] font-medium uppercase tracking-[0.16em]">
        <span style={{ color: BLUE_LIGHT }}>Technical Support</span>
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
            Specialized resources can be engaged as project conditions require, giving owners, designers and installers an additional level of technical insight and problem-solving capability on every project.
          </p>
        </aside>
      </div>

      <PageFooter />
    </Page>
  )
}
