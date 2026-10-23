import { Page, PageCounter, PageFooter, Kicker, PartDivider, ContentRequired } from './page-shell'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'

const APPENDICES: { k: string; t: string; sub?: string; finalize?: boolean; confirm?: boolean }[] = [
  { k: 'A', t: 'Acrytech System Specification' },
  { k: 'B', t: 'Acrytech Color Technical Data Sheet' },
  { k: 'C', t: 'Acrytech Resurfacer Technical Data Sheet' },
  { k: 'D', t: 'Primer / Sealer Technical Data' },
  { k: 'E', t: 'Line Paint / Line Primer Technical Data' },
  { k: 'F', t: 'Safety Data Sheets' },
  { k: 'G', t: 'Acrytech Color Chart' },
  { k: 'H', t: 'Acrytech Mixing Chart / Pace Profiles' },
  { k: 'I', t: 'ITF Court Pace Classification Certificates' },
  { k: 'J', t: 'Firefly Sports Surface Performance Testing' },
  { k: 'K', t: 'Acrytech Limited Warranty' },
  { k: 'L', t: 'Concrete Design & Preparation Guidance' },
  { k: 'M', t: 'New Surface Maintenance Guide' },
  { k: 'N', t: 'Independent / Third-Party Laboratory Testing' },
  { k: 'O', t: 'Relevant Experience / Reference Documentation' },
  { k: 'P', t: 'Corporate / Financial Information' },
  { k: 'Q', t: 'Insurance Documentation' },
  { k: 'R', t: 'Contract Exceptions / Legal Disclosures' },
  ]

export function AppendixDividerPage() {
  return (
    <PartDivider
      index="III"
      numeral="III"
      part="Part III"
      title={<>Technical Appendices</>}
      description="Technical documentation, certificates, testing, warranties and supporting corporate information. This section prioritizes usability and reference over presentation."
      section="AT Sports Proposal"
    />
  )
}

export function AppendixIndexPage() {
  const left = APPENDICES.slice(0, 10)
  const right = APPENDICES.slice(10)
  const col = (items: typeof APPENDICES) => (
    <div className="flex flex-col">
      {items.map((a, i) => (
        <div
          key={a.k}
          className="grid grid-cols-[0.44in_1fr] items-start gap-3"
          style={{ padding: '0.115in 0', borderTop: i === 0 ? '1px solid rgba(185,196,203,0.16)' : '1px solid rgba(185,196,203,0.1)' }}
        >
          <span className="font-display text-[16px] font-bold" style={{ color: BLUE_LIGHT, lineHeight: 1 }}>{a.k}</span>
          <div>
            <div className="flex items-start gap-2">
              <span className="font-display text-[10.5px] font-semibold leading-snug" style={{ color: OFF }}>{a.t}</span>
              {a.finalize && <ContentRequired>To Finalize</ContentRequired>}
              {a.confirm && <ContentRequired>Source / Method to Confirm</ContentRequired>}
            </div>
            {a.sub && <div className="mt-0.5 font-sans text-[8.5px]" style={{ color: MUTED }}>{a.sub}</div>}
          </div>
        </div>
      ))}
    </div>
  )
  return (
    <Page>
      <PageCounter index="Index" section="Technical Appendices" total="20" />
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '1.15in' }}>
        <Kicker className="mb-3">Appendix Index</Kicker>
        <h2 className="font-display font-bold" style={{ color: OFF, fontSize: '26px', lineHeight: 1.02, letterSpacing: '-0.015em' }}>
          Technical documentation index.
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-x-8">
          {col(left)}
          {col(right)}
        </div>
      </div>
      <PageFooter index="III" section="AT Sports Proposal" />
    </Page>
  )
}
