import type { ReactNode } from 'react'
import { Page, PageFooter, PartDivider } from './page-shell'
import { ACCOUNT_LEADERSHIP, ACCOUNT_SUPPORT } from './part1-team'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'
const PT = '06'

/* Local helpers ---------------------------------------------------------- */

/** Shared Part II sheet — restrained compliance layout with a running label + footer. */
function RfpSheet({
  page,
  footer,
  children,
}: {
  page: string
  footer: string
  children: ReactNode
}) {
  return (
    <Page>
      <div className="absolute left-[0.5in] right-[0.5in] flex items-center gap-3" style={{ top: '0.5in' }}>
        <span className="font-display text-[8.5px] font-semibold uppercase tracking-[0.24em]" style={{ color: BLUE_LIGHT }}>
          Part II
        </span>
        <span aria-hidden="true" className="inline-block h-[9px] w-px" style={{ backgroundColor: 'rgba(185,196,203,0.3)' }} />
        <span className="font-display text-[8.5px] font-semibold uppercase tracking-[0.24em]" style={{ color: MUTED }}>
          Formal RFP Response
        </span>
        <span aria-hidden="true" className="ml-1 h-px flex-1" style={{ backgroundColor: 'rgba(185,196,203,0.16)' }} />
      </div>
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '0.95in', bottom: '0.8in' }}>
        {children}
      </div>
      <PageFooter index={page} section={footer} />
    </Page>
  )
}

/** Prominent numbered category heading — keeps every RFP item number obvious. */
function Category({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-display font-bold tabular-nums" style={{ color: BLUE_LIGHT, fontSize: '30px', lineHeight: 1 }}>
        {n}
      </span>
      <h2 className="font-display font-bold uppercase" style={{ color: OFF, fontSize: '15px', letterSpacing: '0.02em' }}>
        {title}
      </h2>
      <span aria-hidden="true" className="ml-1 h-px flex-1" style={{ backgroundColor: 'rgba(185,196,203,0.18)' }} />
    </div>
  )
}

/** Compact numbered category heading — used on the dense combined compliance sheet. */
function CategorySm({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="font-display font-bold tabular-nums" style={{ color: BLUE_LIGHT, fontSize: '20px', lineHeight: 1 }}>
        {n}
      </span>
      <h2 className="font-display font-bold uppercase" style={{ color: OFF, fontSize: '11.5px', letterSpacing: '0.02em' }}>
        {title}
      </h2>
      <span aria-hidden="true" className="ml-1 h-px flex-1" style={{ backgroundColor: 'rgba(185,196,203,0.18)' }} />
    </div>
  )
}

/** Short compliance statement (a numbered category answered in one sentence). */
function Statement({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <div style={{ borderTop: '1px solid rgba(185,196,203,0.16)', paddingTop: '0.16in' }}>
      <CategorySm n={n} title={title} />
      <p className="mt-2.5 font-sans text-[10.5px] leading-relaxed" style={{ color: OFF }}>
        {children}
      </p>
    </div>
  )
}

/** Compact label / value row. */
function InfoRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div
      className="grid grid-cols-[2in_1fr] items-start gap-4"
      style={{ padding: '0.16in 0', borderTop: '1px solid rgba(185,196,203,0.12)' }}
    >
      <span className="font-display text-[9.5px] font-semibold uppercase tracking-[0.1em]" style={{ color: MUTED }}>{label}</span>
      <span className="font-sans text-[11.5px]" style={{ color: OFF }}>{children}</span>
    </div>
  )
}

/** Stacked label-above-value cell (used inside multi-column field grids). */
function FieldCell({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5" style={{ padding: '0.16in 0', borderTop: '1px solid rgba(185,196,203,0.12)' }}>
      <span className="font-display text-[8.5px] font-semibold uppercase tracking-[0.12em]" style={{ color: MUTED }}>{label}</span>
      <span className="font-sans text-[11.5px]" style={{ color: OFF }}>{children}</span>
    </div>
  )
}

/** Neutral, professional fill-in marker for information supplied at submission. */
function Pending({ children = 'To be provided' }: { children?: ReactNode }) {
  return <span className="font-sans text-[10px]" style={{ color: 'rgba(185,196,203,0.6)' }}>{children}</span>
}

function Confirmed({ children }: { children: ReactNode }) {
  return <span className="font-sans text-[10px]" style={{ color: 'var(--accent)' }}>{children}</span>
}

/** Subtle cross-reference to Part I or an Appendix. */
function CrossRef({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span aria-hidden="true" className="inline-block h-px" style={{ width: '0.2in', backgroundColor: BLUE_LIGHT }} />
      <span className="font-sans text-[9.5px] italic" style={{ color: BLUE_LIGHT }}>{children}</span>
    </div>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <div className="flex flex-col gap-1.5">
      {items.map((x) => (
        <span key={x} className="font-sans text-[11px] leading-snug" style={{ color: OFF }}>
          <span style={{ color: BLUE_LIGHT }}>•</span> {x}
        </span>
      ))}
    </div>
  )
}

function GroupLabel({ children }: { children: ReactNode }) {
  return (
    <div className="font-display text-[9px] font-semibold uppercase tracking-[0.16em]" style={{ color: BLUE_LIGHT }}>
      {children}
    </div>
  )
}

/* Part II divider -------------------------------------------------------- */

export function RfpDividerPage() {
  const contents = [
    { n: '01', label: 'General Information' },
    { n: '02', label: 'Company Profile' },
    { n: '03', label: 'Previous Experience' },
    { n: '04', label: 'Management & Staffing' },
    { n: '05', label: 'Warranties' },
    { n: '06', label: 'Project Information & Schedule' },
    { n: '07', label: 'Fees & Product in Kind' },
    { n: '08', label: 'Disclosures' },
    { n: '09', label: 'Claims / Litigation' },
    { n: '10', label: 'Finances' },
    { n: '11', label: 'Ownership Classification' },
    { n: '12', label: 'Conflicts of Interest' },
    { n: '13', label: 'Contract Exceptions' },
  ]
  return (
    <PartDivider
      index="II"
      numeral="II"
      part="Part II"
      title={<>Formal RFP Response</>}
      description="Required information responding to the USTA's fourteen requested response categories in the order presented in the RFP."
      contents={contents}
      section="Formal RFP Response"
    />
  )
}

/* Page 1 — 01 General Information + 02 Company Profile -------------------- */

export function RfpGeneralCompanyPage() {
  return (
    <RfpSheet page="II / 01" footer="AT Sports Proposal">
      <Category n="01" title="General Information" />
      <div className="mt-3 grid grid-cols-3 gap-x-8">
        <FieldCell label="Respondent">AT Sports, Inc.</FieldCell>
        <FieldCell label="Telephone">770-734-3000</FieldCell>
        <FieldCell label="Legal Status"><Pending /></FieldCell>
        <FieldCell label="Address">189 Etowah Industrial Court, Canton, GA 30114</FieldCell>
        <FieldCell label="Proposal Contact"><Confirmed>Tracy Lynch</Confirmed></FieldCell>
        <FieldCell label="Date Formed"><Confirmed>September 2026</Confirmed></FieldCell>
        <FieldCell label="Jurisdiction"><Confirmed>N/A</Confirmed></FieldCell>
        <FieldCell label="Email"><Confirmed>tracy@atsports.com</Confirmed></FieldCell>
        <FieldCell label="Subsidiaries / Affiliates"><Confirmed>N/A</Confirmed></FieldCell>
      </div>

      <div className="mt-8">
        <Category n="02" title="Company Profile" />
      </div>
      <p className="mt-4 font-sans text-[11.5px] leading-relaxed" style={{ color: OFF, maxWidth: '6.4in' }}>
        AT Sports has specialized in sports-surface manufacturing since 1995 and manufactures its coatings and surface
        materials in Canton, Georgia.
      </p>
      <div className="mt-5 grid grid-cols-2 gap-x-10 gap-y-5">
        <div className="flex flex-col gap-2">
          <GroupLabel>Core Product Areas</GroupLabel>
          <Bullets
            items={[
              'Sports surface coatings',
              'Cushion sports surfaces',
              'Crack repair systems',
              'Portable sports surfaces',
              'Related court materials and accessories',
            ]}
          />
        </div>
        <div className="flex flex-col gap-2">
          <GroupLabel>Industry Recognition</GroupLabel>
          <Bullets
            items={[
              'ITF Category Pace Ratings — Category 3 & 4',
              'ASBA member since 2015',
              'Member of the ITF',
              'Official Surface — PPA Tour & MLP',
              'Official Surface — Professional Pickleball Registry',
            ]}
          />
        </div>
        <div className="flex flex-col gap-1">
          <InfoRow label="Number of Employees"><Confirmed>60</Confirmed></InfoRow>
          <InfoRow label="Key Personnel">See Part I — USTA Account Structure</InfoRow>
        </div>
        <div className="flex flex-col gap-1">
          <InfoRow label="Client References">Provided upon request</InfoRow>
          <InfoRow label="Annual Report">Not applicable</InfoRow>
        </div>
      </div>
    </RfpSheet>
  )
}

/* Page 2 — 03 Previous Experience ---------------------------------------- */

export function RfpExperiencePage() {
  const rows = [
    { p: 'Stanford University', env: 'Elite university tennis facility', role: 'Acrytech coating system', loc: 'Palo Alto, CA' },
    { p: 'Kingston Open', env: 'ATP Challenger Tournament', role: 'Official Surface Provider', loc: 'Kingston, Jamaica' },
    { p: 'Court 16', env: 'Multi-site indoor tennis', role: 'Acrytech + CushionX systems', loc: 'New York, NY' },
    { p: 'PPA Tour / MLP', env: 'Global Professional Pickleball Tour', role: 'Official Surface Provider', loc: 'Global' },
  ]
  return (
    <RfpSheet page="II / 02" footer="AT Sports Proposal">
      <Category n="03" title="Previous Experience" />
      <p className="mt-4 font-sans text-[11px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.82)', maxWidth: '6.4in' }}>
        Representative tennis and racquet-sport projects delivered on the Acrytech and related AT Sports surface
        platforms.
      </p>
      <div className="mt-6">
        <div
          className="grid grid-cols-[1.9in_1.9in_1.9in_1.1in] gap-3 pb-3"
          style={{ borderBottom: '1px solid rgba(185,196,203,0.22)' }}
        >
          {['Project / Organization', 'Environment', 'AT Sports Role / System', 'Location'].map((h) => (
            <span key={h} className="font-display text-[9px] font-semibold uppercase tracking-[0.12em]" style={{ color: MUTED }}>
              {h}
            </span>
          ))}
        </div>
        {rows.map((r) => (
          <div
            key={r.p}
            className="grid grid-cols-[1.9in_1.9in_1.9in_1.1in] items-center gap-3"
            style={{ padding: '0.34in 0', borderTop: '1px solid rgba(185,196,203,0.1)' }}
          >
            <span className="font-display text-[14px] font-bold" style={{ color: OFF }}>{r.p}</span>
            <span className="font-sans text-[10.5px] leading-snug" style={{ color: 'rgba(245,246,246,0.78)' }}>{r.env}</span>
            <span className="font-sans text-[10.5px] leading-snug" style={{ color: 'rgba(245,246,246,0.78)' }}>{r.role}</span>
            <span className="font-sans text-[10.5px]" style={{ color: MUTED }}>{r.loc}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-2">
        <InfoRow label="Reference Contacts">Provided upon request</InfoRow>
      </div>
      <div className="mt-8">
        <CrossRef>See Part I — Relevant Tennis Experience for selected case studies.</CrossRef>
      </div>
    </RfpSheet>
  )
}

/* Page 3 — 04 Management & Staffing -------------------------------------- */

export function RfpStaffingPage() {
  const roster = [...ACCOUNT_LEADERSHIP, ...ACCOUNT_SUPPORT]
  return (
    <RfpSheet page="II / 03" footer="AT Sports Proposal">
      <Category n="04" title="Management & Staffing" />
      <p className="mt-4 font-sans text-[11px] leading-relaxed" style={{ color: OFF, maxWidth: '6.2in' }}>
        The following team is assigned to the USTA account, spanning executive sponsorship, account management,
        technical, product development, logistics and support.
      </p>
      <div className="mt-5 flex flex-col">
        {roster.map((p, i) => (
          <div
            key={p.name}
            className="grid grid-cols-[2.1in_1.2in_1fr] items-baseline gap-4"
            style={{ padding: '0.26in 0', borderTop: i === 0 ? '1px solid rgba(185,196,203,0.22)' : '1px solid rgba(185,196,203,0.1)' }}
          >
            <div className="flex flex-col">
              <span className="font-display text-[14px] font-bold" style={{ color: OFF, lineHeight: 1.15 }}>{p.name}</span>
              <span className="font-sans text-[10px]" style={{ color: MUTED }}>{p.title}</span>
            </div>
            <span className="font-display text-[9.5px] font-bold uppercase tracking-[0.08em]" style={{ color: BLUE_LIGHT }}>{p.role}</span>
            <span className="font-sans text-[10.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.78)' }}>{p.desc}</span>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <CrossRef>Detailed team structure and responsibilities are shown in Part I — USTA Account Structure.</CrossRef>
      </div>
    </RfpSheet>
  )
}

/* Page 4 — 05 Warranties + 06 Project Information & Schedule -------------- */

export function RfpWarrantyProjectPage() {
  const sub = [
    { l: 'A', t: 'Material Deck', d: 'Proposed system products, quantities and color / profile information where finalized.', ref: 'Appendix A — Acrytech System Specification' },
    { l: 'B', t: 'multi-year resurfacing program', d: 'Proposed schedule for the proposed program.', ref: 'Part I - Long-term Campus Management' },
    { l: 'C', t: 'Working Manufacturing Schedule', d: 'March 1, 2027 product-availability target with time for confirmation, production and staging.', ref: 'Part I — Initial Program Readiness' },
  ]
  return (
    <RfpSheet page="II / 04" footer="AT Sports Proposal">
      <Category n="05" title="Warranties" />
      <div
        className="mt-4"
        style={{ borderRadius: '12px', padding: '0.26in 0.3in', background: 'rgba(50,126,168,0.1)', border: '1px solid rgba(50,126,168,0.32)' }}
      >
        <div className="font-display text-[13px] font-bold uppercase tracking-[0.06em]" style={{ color: BLUE_LIGHT }}>
          2-Year Limited Product Warranty
        </div>
        <p className="mt-2 font-sans text-[11px] leading-relaxed" style={{ color: OFF }}>
          AT Sports provides a two-year limited product warranty for Acrytech products, subject to the terms and
          conditions of the published warranty.
        </p>
      </div>
      <div className="mt-3">
        <CrossRef>See Appendix K — Acrytech Limited Warranty.</CrossRef>
      </div>

      <div className="mt-8">
        <Category n="06" title="Project Information & Schedule" />
      </div>
      <div className="mt-4 flex flex-col gap-2.5">
        {sub.map((s) => (
          <div
            key={s.l}
            className="grid grid-cols-[0.5in_1fr] items-start gap-4"
            style={{ borderRadius: '11px', padding: '0.2in 0.26in', background: 'rgba(245,246,246,0.03)', border: '1px solid rgba(185,196,203,0.14)' }}
          >
            <span className="font-display text-[22px] font-bold" style={{ color: BLUE_LIGHT, lineHeight: 1 }}>{s.l}</span>
            <div className="flex flex-col gap-1.5">
              <span className="font-display text-[12px] font-bold uppercase tracking-[0.03em]" style={{ color: OFF }}>{s.t}</span>
              <span className="font-sans text-[10px] leading-snug" style={{ color: MUTED }}>{s.d}</span>
              <CrossRef>{s.ref}</CrossRef>
            </div>
          </div>
        ))}
      </div>
    </RfpSheet>
  )
}

/* Page 5 — 07 Fees & Product in Kind ------------------------------------- */

export function RfpFeesPage() {
  const included = [
    { t: 'Tennis Court Acrylic Materials', v: 'Included' },
    { t: 'Pickleball Court Acrylic Materials', v: 'Included' },
    { t: 'Court Coatings Application', v: 'Included' },
    { t: 'Technical Support', v: 'Included' },
    { t: 'Surface Testing', v: 'Included' },
    { t: 'Product Development / R&D Access', v: 'Included' },
  ]
  return (
    <RfpSheet page="II / 05" footer="AT Sports Proposal">
      <Category n="07" title="partnership commitment" />
      <div className="mt-5 flex flex-col">
        {included.map((r, i) => (
          <div
            key={r.t}
            className="flex items-center justify-between gap-4"
            style={{ padding: '0.22in 0', borderTop: i === 0 ? '1px solid rgba(185,196,203,0.22)' : '1px solid rgba(185,196,203,0.1)' }}
          >
            <span className="font-display text-[13px] font-semibold uppercase tracking-[0.03em]" style={{ color: OFF }}>{r.t}</span>
            <span className="font-sans text-[11.5px] text-right" style={{ color: MUTED }}>{r.v}</span>
          </div>
        ))}
      </div>

      <div
        className="mt-6 flex items-center justify-between gap-6"
        style={{ borderRadius: '13px', padding: '0.34in 0.36in', background: 'rgba(50,126,168,0.12)', border: '1px solid rgba(50,126,168,0.4)' }}
      >
        <div className="flex flex-col" style={{ maxWidth: '3.4in' }}>
          <span className="font-display text-[9px] font-semibold uppercase tracking-[0.18em]" style={{ color: BLUE_LIGHT }}>
            Three-Year In-Kind Commitment
          </span>
          <span className="mt-2 font-sans text-[10.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.82)' }}>
            Acrytech surfacing materials, coatings application and manufacturer resources supporting scheduled National Campus
            court resurfacing.
          </span>
        </div>
        <div className="font-display text-[16px] font-bold uppercase tracking-[0.02em] text-right leading-tight" style={{ color: OFF }}>
          Materials
          <br />
          <span style={{ color: BLUE_LIGHT }}>+</span> Application
          <div className="mt-1.5 font-display text-[10px] font-bold uppercase tracking-[0.24em]" style={{ color: BLUE_LIGHT }}>Included</div>
        </div>
      </div>

      <p className="mt-5 font-sans text-[11px] leading-relaxed" style={{ color: OFF }}>
        Three-year in-kind partnership with first right of refusal for renewal.
      </p>
      <div className="mt-3">
        <CrossRef>See Part I — Partnership Investment &amp; Value.</CrossRef>
      </div>
    </RfpSheet>
  )
}

/* Page 6 — 08–14 Compliance & Disclosures (in RFP order) ----------------- */

export function RfpCompliancePage() {
  const ownership: { t: string; v: 'Yes' | 'No' | null }[] = [
    { t: 'Corporation', v: 'Yes' },
    { t: 'Partnership', v: 'No' },
    { t: 'Proprietorship', v: 'No' },
    { t: 'Individual', v: 'No' },
    { t: 'Woman Owned', v: 'No' },
    { t: 'Small Business Owned', v: 'Yes' },
    { t: 'Minority Owned', v: 'No' },
    { t: 'W/MBE Certification', v: 'No' },
    { t: 'Other', v: 'No' },
  ]
  return (
    <RfpSheet page="II / 06" footer="AT Sports Proposal">
      <div className="flex h-full flex-col gap-7">
        {/* 08 + 09 — brief statements */}
        <div className="grid grid-cols-2 gap-x-8">
          <Statement n="08" title="Disclosures">
            AT Sports has no disclosures that would impair its ability to perform the requirements of this RFP.
          </Statement>
          <Statement n="09" title="Claims / Litigation">
            AT Sports has no material claims or litigation that would affect its ability to perform under the proposed
            agreement.
          </Statement>
        </div>

        {/* 10 — Finances */}
        <div style={{ borderTop: '1px solid rgba(185,196,203,0.16)', paddingTop: '0.16in' }}>
          <CategorySm n="10" title="Finances" />
          <div className="mt-1 grid grid-cols-3 gap-x-8">
            <FieldCell label="Financial Condition"><Pending>Provided upon request</Pending></FieldCell>
            <FieldCell label="Evidence of Creditworthiness"><Pending>Provided upon request</Pending></FieldCell>
            <FieldCell label="Guarantor Information">Not applicable</FieldCell>
          </div>
        </div>

        {/* 11 — Ownership Classification */}
        <div style={{ borderTop: '1px solid rgba(185,196,203,0.16)', paddingTop: '0.16in' }}>
          <CategorySm n="11" title="Company Overview / Ownership Classification" />
          <div className="mt-2 grid grid-cols-3 gap-x-6">
            {ownership.map((o) => (
              <div
                key={o.t}
                className="flex items-center justify-between gap-3"
                style={{ padding: '0.14in 0', borderTop: '1px solid rgba(185,196,203,0.12)' }}
              >
                <span className="font-sans text-[10.5px]" style={{ color: OFF }}>{o.t}</span>
                {o.v ? (
                  <span
                    className="font-display text-[9px] font-bold uppercase tracking-[0.08em]"
                    style={{
                      color: o.v === 'Yes' ? BLUE_LIGHT : MUTED,
                      padding: '2px 9px',
                      borderRadius: '5px',
                      background: o.v === 'Yes' ? 'rgba(50,126,168,0.14)' : 'rgba(245,246,246,0.04)',
                      border: o.v === 'Yes' ? '1px solid rgba(50,126,168,0.4)' : '1px solid rgba(185,196,203,0.16)',
                    }}
                  >
                    {o.v}
                  </span>
                ) : (
                  <Pending />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 12 + 13 — brief statements */}
        <div className="grid grid-cols-2 gap-x-8">
          <Statement n="12" title="Conflicts of Interest">
            AT Sports is not aware of any conflict of interest relating to this RFP, the USTA or the proposed agreement.
          </Statement>
          <Statement n="13" title="Contract Exceptions">
            AT Sports has reviewed the proposed agreement. Any exceptions or qualifications are submitted with this
            proposal and provided in the referenced appendix.
          </Statement>
        </div>
      </div>
    </RfpSheet>
  )
}
