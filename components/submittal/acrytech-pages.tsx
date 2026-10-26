import type { ReactNode } from 'react'
import { ArrowRight, Brush, CircleCheck, ShieldCheck, Timer } from 'lucide-react'
import { Page, PageFooter, Kicker, ContentRequired, IconBadge } from '@/components/proposal/page-shell'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'
const RULE = 'rgba(185,196,203,0.12)'
const BODY = 'rgba(245,246,246,0.78)'

/* ---------------------------------------------------------------------------
   Shared building blocks
   --------------------------------------------------------------------------- */
function Head({ kicker, title, intro }: { kicker: string; title: ReactNode; intro?: ReactNode }) {
  return (
    <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '1.0in' }}>
      <Kicker className="mb-3">{kicker}</Kicker>
      <h2 className="font-display font-bold" style={{ color: OFF, fontSize: '30px', lineHeight: 1.02, letterSpacing: '-0.015em' }}>
        {title}
      </h2>
      {intro && (
        <p className="mt-2.5 max-w-[6.4in] font-sans text-[11px] leading-relaxed" style={{ color: BODY }}>
          {intro}
        </p>
      )}
    </div>
  )
}

function GroupLabel({ children, right }: { children: ReactNode; right?: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-display text-[10.5px] font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_LIGHT }}>
        {children}
      </span>
      <div className="h-px flex-1" style={{ backgroundColor: 'rgba(185,196,203,0.2)' }} />
      {right && <span className="font-sans text-[9px] uppercase tracking-[0.12em]" style={{ color: MUTED }}>{right}</span>}
    </div>
  )
}

/**
 * Page body that runs from below the header to just above the footer rule.
 * Children stack in a column; a FillPhoto (or any `flex-1` child) absorbs the
 * remaining height so pages end at the footer instead of leaving dead space.
 */
export function Body({ top = '2.5in', gap = '0.22in', children }: { top?: string; gap?: string; children: ReactNode }) {
  return (
    <div className="absolute left-[0.5in] right-[0.5in] flex flex-col" style={{ top, bottom: '0.82in', gap }}>
      {children}
    </div>
  )
}

/** Photo that fills whatever vertical space is left in a Body. */
export function FillPhoto({
  src,
  alt,
  caption,
  position = 'center',
  minHeight = '1.3in',
}: {
  src: string
  alt: string
  caption?: string
  position?: string
  minHeight?: string
}) {
  return (
    <figure className="flex min-h-0 flex-1 flex-col gap-1.5" style={{ minHeight }}>
      <div className="relative min-h-0 flex-1 overflow-hidden" style={{ borderRadius: '13px', border: '1px solid rgba(185,196,203,0.16)' }}>
        <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: position }} />
      </div>
      {caption && (
        <figcaption className="font-sans text-[9px]" style={{ color: MUTED }}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

/* ---------------------------------------------------------------------------
   ACRYTECH — SPECIFICATION COMPLIANCE SUMMARY
   One-page summary for the reviewing architect / engineer. Each row points to
   the supporting document in the Technical Appendices.
   --------------------------------------------------------------------------- */
const COMPLIANCE = [
  { req: 'System type', val: 'Colored, textured 100% acrylic latex surfacing system, self-crosslinking, for asphalt, concrete and existing sports surfaces', doc: 'System Specification 1.1 · TDS' },
  { req: 'Industry standard', val: 'All work conforms to American Sports Builders Association (ASBA) guidelines', doc: 'System Specification 1.2' },
  { req: 'Court pace', val: 'ITF classified: Category 3 (Medium) and Category 4 (Medium-Fast)', doc: 'ITF Classification Certificates' },
  { req: 'Accelerated weathering', val: '5,555 hours, ASTM G154 Cycle 1, with no cracking, chalking, checking, peeling or flaking observed', doc: 'H.B. Fuller test report' },
  { req: 'Scrub resistance', val: 'ASTM D2486: 536 cycles to failure vs. 266 in the reported comparison (≈2×)', doc: 'H.B. Fuller test report' },
  { req: 'Finished-surface testing', val: 'Surface friction (dry and wet), ball rebound and trajectory, force reduction, vertical deformation, energy restitution', doc: 'Firefly Sports testing' },
  { req: 'VOC', val: 'Acrytech Color 42 g/L · Acrytech Resurfacer 43 g/L', doc: 'Color and Resurfacer TDS' },
  { req: 'Restricted substances', val: 'Acrytech Color contains no asbestos, lead, mercury, heavy metals, PCB or formaldehyde', doc: 'Color TDS' },
  { req: 'Warranty', val: '2-year limited product warranty (specification minimum: one year)', doc: 'Acrytech Limited Warranty' },
  { req: 'Installer', val: 'AT Sports-certified installer, applying to published installation guidelines', doc: 'Certified Installer Letter' },
  { req: 'Traceability', val: 'Batch number of each product recorded on site and kept for the warranty period', doc: 'System Specification 1.2' },
]

const COMPLIANCE_GENERIC = COMPLIANCE.map((c) => (c.req === 'Installer' ? { ...c, doc: 'Acrytech Limited Warranty' } : c))

export function SpecCompliancePage({ generic = false }: { generic?: boolean }) {
  return (
    <Page>
      <Head
        kicker="Specification Compliance"
        title="Acrytech at a glance."
        intro="A summary of how the Acrytech Coatings System meets typical acrylic sports-surfacing requirements, with the document in the Technical Appendices that supports each item."
      />
      <Body top="2.45in">
        <div className="glass flex min-h-0 flex-1 flex-col overflow-hidden" style={{ borderRadius: '12px' }}>
          <div
            className="grid items-end font-display text-[8.5px] font-semibold uppercase tracking-[0.14em]"
            style={{ gridTemplateColumns: '1.5in 1fr 1.6in', columnGap: '0.18in', padding: '0.13in 0.24in', background: 'rgba(50,126,168,0.14)', color: MUTED }}
          >
            <span>Requirement</span>
            <span>Acrytech</span>
            <span>Supporting document</span>
          </div>
          {(generic ? COMPLIANCE_GENERIC : COMPLIANCE).map((c, i) => (
            <div
              key={c.req}
              className="grid flex-1 items-center"
              style={{ gridTemplateColumns: '1.5in 1fr 1.6in', columnGap: '0.18in', padding: '0.06in 0.24in', borderTop: i === 0 ? 'none' : `1px solid ${RULE}` }}
            >
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.04em]" style={{ color: OFF }}>{c.req}</span>
              <span className="font-sans text-[10.5px] leading-snug" style={{ color: 'rgba(245,246,246,0.88)' }}>{c.val}</span>
              <span className="font-sans text-[9.5px] leading-snug" style={{ color: BLUE_LIGHT }}>{c.doc}</span>
            </div>
          ))}
        </div>

        <div style={{ borderRadius: '13px', padding: '0.24in 0.3in', background: 'rgba(50,126,168,0.12)', border: '1px solid rgba(50,126,168,0.36)' }}>
          <div className="font-display text-[9.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BLUE_LIGHT }}>
            Suggested Specification Language · Part 2 – Products
          </div>
          <div className="mt-2.5 font-mono text-[10px] leading-relaxed" style={{ color: OFF }}>
            2.1 MANUFACTURERS
            <br />
            A. Acceptable manufacturer: AT Sports, Inc., 189 Etowah Industrial Court, Canton, GA 30114.
            <br />
            &nbsp;&nbsp;&nbsp;770-734-3000 · www.atsports.com
            <br />
            &nbsp;&nbsp;&nbsp;1. Product: Acrytech Coatings System (Acrytech Resurfacer, Acrytech Color, Acrytech Line Paint).
          </div>
          <p className="mt-2.5 font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>
            The full three-part Acrytech System Specification is included as Appendix A and may be used as a basis of design.
          </p>
        </div>
      </Body>
      <PageFooter />
    </Page>
  )
}

/* ---------------------------------------------------------------------------
   ACRYTECH PRODUCT LINE
   Source: AT Sports Product Catalog 2026, Acrytech section. Coverage is
   gallons per square yard per coat unless noted. "Conc." is the concentrate,
   mixed on site with water and sand; "Tex." is factory-textured.
   --------------------------------------------------------------------------- */
type Product = {
  name: string
  d: string
  coverage: ReactNode
  temp: string
  dry: string
  cure: string
  pack: string
  flag?: string
}

const COL = '2.55in 1.12in 0.72in 0.62in 0.46in 1fr'

function ProductTable({ rows, dense = false }: { rows: Product[]; dense?: boolean }) {
  return (
    <div className="mt-2.5 glass overflow-hidden" style={{ borderRadius: '12px' }}>
      <div
        className="grid items-end font-display text-[8.5px] font-semibold uppercase tracking-[0.12em]"
        style={{ gridTemplateColumns: COL, columnGap: '0.1in', padding: '0.12in 0.2in', background: 'rgba(50,126,168,0.14)', color: MUTED }}
      >
        <span>Product</span>
        <span>Coverage</span>
        <span>Appl. temp</span>
        <span>Dry</span>
        <span>Cure</span>
        <span>Packaging</span>
      </div>
      {rows.map((r, i) => (
        <div
          key={r.name}
          className="grid items-start"
          style={{ gridTemplateColumns: COL, columnGap: '0.1in', padding: `${dense ? '0.06in' : '0.12in'} 0.2in`, borderTop: i === 0 ? 'none' : `1px solid ${RULE}` }}
        >
          <span>
            <span className="block font-display text-[11.5px] font-bold" style={{ color: OFF }}>{r.name}</span>
            <span className={`mt-0.5 block font-sans leading-snug ${dense ? 'text-[8.5px]' : 'text-[9px]'}`} style={{ color: MUTED }}>{r.d}</span>
          </span>
          <span className="font-sans text-[9.5px] leading-snug tabular-nums" style={{ color: OFF }}>
            {r.coverage}
            {r.flag && (
              <span className="mt-1 block">
                <ContentRequired>{r.flag}</ContentRequired>
              </span>
            )}
          </span>
          <span className="font-sans text-[9.5px] tabular-nums" style={{ color: OFF }}>{r.temp}</span>
          <span className="font-sans text-[9.5px] tabular-nums" style={{ color: OFF }}>{r.dry}</span>
          <span className="font-sans text-[9.5px] tabular-nums" style={{ color: OFF }}>{r.cure}</span>
          <span className="font-sans text-[9px] leading-snug" style={{ color: MUTED }}>
            {r.pack.split(' · ').map((p) => (
              <span key={p} className="block">{p}</span>
            ))}
          </span>
        </div>
      ))}
    </div>
  )
}

const COLOR_COATS: Product[] = [
  { name: 'Color', d: 'The standard Acrytech color and finish coat. 100% acrylic latex with self-crosslinking technology and high-quality pigments.', coverage: <>Conc. .04–.05<br />Tex. .06–.07</>, temp: '34–130°F', dry: '1–3 hr', cure: '24 hr', pack: 'Conc. 55 / 30 / 5 gal · Tex. 55* / 30 gal' },
  { name: 'ColorFlex', d: 'Flexible color coat for cushioned systems and overlays, substantial substrate movement and fabric crack repair systems.', coverage: <>Conc. .045–.06<br />Tex. .06–.07</>, temp: '34–130°F', dry: '1–3 hr', cure: '24 hr', pack: 'Conc. 55 / 30 / 5 gal · Tex. 55* / 30 gal' },
  { name: 'Urethane Color', d: 'Polyurethane-modified acrylic color for courts with heavy traffic and usage.', coverage: <>Conc. .04–.05<br />Tex. .06–.07</>, temp: '34–130°F', dry: '1–3 hr', cure: '24 hr', pack: 'Conc. 55 / 30 gal · Tex. 55* / 30 gal' },
  { name: 'Color UV+', d: 'Color system with additional UV resistance and microorganism protection.', coverage: <>Conc. .04–.05<br />Tex. .06–.07</>, temp: '36–130°F', dry: '1–3 hr', cure: '24 hr', pack: 'Conc. 55 / 30 gal · Tex. 55* / 30 gal' },
  { name: 'Quick-Dry', d: 'VOC-free coating formulated to dry and cure faster than standard color. Available in ColorFlex coatings only.', coverage: '.04–.05', temp: '34–130°F', dry: '1–3 hr', cure: '24 hr', pack: '55 / 30 / 5 gal' },
  { name: 'CoolGuard', d: 'Textured, flexible acrylic surface technology that reduces surface temperatures by up to 30%.', coverage: '.075–.09', temp: '36–130°F', dry: '1–3 hr', cure: '24 hr', pack: '55 / 30 gal' },
]

const SPECIALTY: Product[] = [
  { name: 'Roller Sports', d: 'Fiber-reinforced, highly abrasion-resistant surface for roller sports. Player’s Choice colors only.', coverage: '.04–.045', temp: '36–130°F', dry: '1–3 hr', cure: '72 hr', pack: '55 / 30 gal' },
  { name: 'Shuffleboard', d: 'Formulated with select slip agents for an ideal puck slide. Player’s Choice colors only.', coverage: '.06–.07', temp: '50–130°F', dry: '1–3 hr', cure: '48 hr', pack: '55 / 30 gal' },
]

const PRIMERS: Product[] = [
  { name: 'Latex-Based Primer & Sealer', d: 'SBR latex that waterproofs the substrate and blocks efflorescence and asphalt impurities. Can go on green concrete 3–7 days after the pour.', coverage: '.05–.07', temp: '34–130°F', dry: '3 hr', cure: '—', pack: '55 / 30 / 5 gal' },
  { name: 'Solvent Primer & Sealer', d: 'Penetrating acrylic primer for concrete with fly ash or high limestone, and clean concrete without etching, grinding or blasting.', coverage: <>1st coat 28–39 SY/gal<br />2nd coat 39–50 SY/gal</>, temp: '50–100°F', dry: '1–4 hr', cure: '24 hr', pack: '55 / 5 gal' },
  { name: 'Slurry Coat', d: 'Self-leveling acrylic cement admix for smoothing, control joints, depressions and cracks up to 1/4", and over existing coatings.', coverage: '.05–.07', temp: '40–120°F', dry: '—', cure: '48 hr', pack: '55 / 30 / 5 gal' },
  { name: 'Urethane Primer', d: 'Abrasion-resistant, flexible, non-tacky aliphatic water-based polyurethane primer. Dries clear.', coverage: '17–22', temp: '—', dry: '30 min–1 hr', cure: '4 hr', pack: '55 / 30 / 5 gal', flag: 'Confirm units' },
  { name: 'Urethane Clear Coat', d: 'Hard, non-tacky polyurethane clear coat that seals and extends the life of all Acrytech coatings.', coverage: '22–33', temp: '—', dry: '30 min–1 hr', cure: '4 hr', pack: '55 / 30 / 5 gal', flag: 'Confirm units' },
]

const RESURFACERS: Product[] = [
  { name: 'Resurfacer', d: 'Filling and repair layer that hides patchwork, smooths the surface and prepares it for color.', coverage: <>Conc. .04–.07<br />Tex. .065–.075</>, temp: '34–130°F', dry: '1–3 hr', cure: '24 hr', pack: 'Conc. 55 / 30 / 5 gal · Tex. 55* / 30 gal' },
  { name: 'Resurfacer Flex', d: 'For new and existing membrane overlays, asphalt and concrete substrates.', coverage: <>Conc. .045–.06<br />Tex. .065–.075</>, temp: '36–130°F', dry: '1–3 hr', cure: '24 hr', pack: 'Conc. 55 / 30 / 5 gal · Tex. 55* / 30 gal' },
  { name: 'Resurfacer Plus', d: 'For use over court overlays, crack bridging and filling, and heavy resurfacing.', coverage: '.07–.10', temp: '40–90°F', dry: '1–3 hr', cure: '24 hr', pack: '55 / 30 gal' },
  { name: 'Urethane Resurfacer', d: 'Polyurethane-modified resurfacer for crack bridging and filling and heavy resurfacing.', coverage: '.04–.05', temp: '34–130°F', dry: '1–3 hr', cure: '24 hr', pack: '55 / 30 gal' },
  { name: 'Faultline Sport Patch', d: 'Latex binder mixed with Portland cement and sand for depressions over 1/4" and cracks wider than 3/8".', coverage: 'Varies by repair', temp: '50–130°F', dry: '1–3 hr', cure: '24 hr', pack: '55 / 30 / 5 gal' },
]

const LINES: Product[] = [
  { name: 'Line Primer', d: 'Clear-drying primer applied before White Line Paint to prevent bleed and create precise line edges.', coverage: '480 lin. ft at 2" / gal', temp: '36–130°F', dry: '1–3 hr', cure: '48 hr', pack: '1 gal' },
  { name: 'Line Paint', d: 'Textured acrylic line paint, highly resistant to UV degradation. Tennis and Pickleball (higher sand volume) formulas.', coverage: '480 lin. ft', temp: '36–130°F', dry: '2–4 hr', cure: '24 hr', pack: 'White 5 / 1 gal' },
  { name: 'Black Light Line Sealer', d: 'Clear sealer applied over court lines that illuminates under black light.', coverage: '480 lin. ft at 2"', temp: '34–120°F', dry: '1–4 hr', cure: '24 hr', pack: '5 / 1 gal' },
]

const ADDITIVES: Product[] = [
  { name: 'Liquid Sand', d: 'Dense, 80-mesh sand-filled neutral carrier that replaces dry bagged sand when mixed with Color concentrate and water. 14–15 lb/gal, ≥74% solids, ≤63% sand by weight.', coverage: '.034–.05', temp: '—', dry: '—', cure: '—', pack: '30 gal' },
  { name: 'Silica Sand', d: 'Premium silica for consistent texture, traction and ball response. F-55 mesh (fine) and 44 mesh (coarse).', coverage: 'Per mix design', temp: '—', dry: '—', cure: '—', pack: '50 lb bags' },
  { name: 'Drying Accelerant', d: '99% isopropyl alcohol. Replace up to half of the mixing water to speed drying as needed.', coverage: 'N/A', temp: '—', dry: '—', cure: '—', pack: '55 gal' },
]

type CourtColor = { name: string; hex: string }
type ColorFamily = { family: string; colors: CourtColor[] }

const PLAYERS_CHOICE: ColorFamily[] = [
  {
    family: 'Greens',
    colors: [
      { name: 'Performance Green', hex: '#1E6F30' },
      { name: 'Competition Green', hex: '#36573B' },
      { name: 'Forest Green', hex: '#38584B' },
      { name: 'Field Green', hex: '#44693D' },
    ],
  },
  {
    family: 'Blues',
    colors: [
      { name: 'Frost Blue', hex: '#517DB9' },
      { name: 'Light Blue', hex: '#135193' },
      { name: 'Competition Blue', hex: '#0E4174' },
      { name: 'Standard Blue', hex: '#002F6C' },
    ],
  },
  {
    family: 'Warm',
    colors: [
      { name: 'Terracotta', hex: '#9A6A4F' },
      { name: 'Standard Orange', hex: '#C04C36' },
      { name: 'Classic Red', hex: '#81312F' },
    ],
  },
  {
    family: 'Neutrals',
    colors: [
      { name: 'Slate', hex: '#53565A' },
      { name: 'Sandstone', hex: '#776E64' },
      { name: 'Gray', hex: '#75787B' },
      { name: 'Beige', hex: '#A18269' },
      { name: 'Black', hex: '#332F21' },
    ],
  },
]
const SPECIALTY_COLORS: ColorFamily[] = [
  {
    family: 'Blues',
    colors: [
      { name: 'Nautical Navy', hex: '#003349' },
      { name: 'Sky Blue', hex: '#69B3E7' },
      { name: 'Caribbean Blue', hex: '#077CAB' },
    ],
  },
  {
    family: 'Greens',
    colors: [
      { name: 'Irish Green', hex: '#00892F' },
      { name: 'Sea Green', hex: '#007C80' },
      { name: 'Kiwi', hex: '#8FAD15' },
      { name: 'Lime', hex: '#00AD50' },
    ],
  },
  {
    family: 'Warm',
    colors: [
      { name: 'Crimson', hex: '#76232F' },
      { name: 'Bright Red', hex: '#9E2B2F' },
      { name: 'Coral', hex: '#E03E52' },
      { name: 'Passion Pink', hex: '#C64771' },
      { name: 'Bright Orange', hex: '#F4633A' },
      { name: 'Bright Yellow', hex: '#F0B323' },
    ],
  },
  {
    family: 'Purples',
    colors: [
      { name: 'Pro Purple', hex: '#3B3A4A' },
      { name: 'Ultra Violet', hex: '#68478D' },
      { name: 'Viva Violet', hex: '#7A4282' },
    ],
  },
]

function TableNote({ children }: { children: ReactNode }) {
  return <p className="font-sans text-[9px] leading-relaxed" style={{ color: MUTED }}>{children}</p>
}

export function ProductLineColorPage() {
  return (
    <Page>
      <Head
        kicker="Acrytech Product Line · 1 of 4"
        title="Color coatings."
        intro="Every Acrytech color coat is a 100% acrylic latex, self-crosslinking formulation. The line is engineered so each product can be matched to the substrate, the level of use and the sport."
      />
      <Body top="2.5in" gap="0.2in">
        <div>
          <GroupLabel right="Gal / SY / coat">Color &amp; Finish Coats</GroupLabel>
          <ProductTable rows={COLOR_COATS} dense />
        </div>
        <div>
          <GroupLabel right="Gal / SY / coat">Specialty Sport Coatings</GroupLabel>
          <ProductTable rows={SPECIALTY} dense />
        </div>
        <TableNote>
          All products carry a 2-year limited warranty. *55-gal drums of textured product contain 39 gal. Source: AT Sports
          Product Catalog 2026. Full values are given in each product’s Technical Data Sheet (Technical Appendices).
        </TableNote>
      </Body>
      <PageFooter />
    </Page>
  )
}

export function ProductLinePrepPage() {
  return (
    <Page>
      <Head
        kicker="Acrytech Product Line · 2 of 4"
        title="Primers, sealers & resurfacers."
        intro="Preparation products are selected for the substrate: primers and sealers bond to and protect asphalt and concrete, and resurfacers fill, level and build the base the color coats are applied to."
      />
      <Body top="2.38in" gap="0.16in">
        <div>
          <GroupLabel right="Gal / SY / coat unless noted">Primers, Sealers &amp; Clear Coats</GroupLabel>
          <ProductTable rows={PRIMERS} dense />
        </div>
        <div>
          <GroupLabel right="Gal / SY / coat">Resurfacers &amp; Patch</GroupLabel>
          <ProductTable rows={RESURFACERS} dense />
        </div>
        <TableNote>
          2-year limited warranty on all products except Faultline Sport Patch (see TDS). *55-gal textured drums contain
          39 gal. Urethane Primer and Clear Coat coverage is as printed in the catalog (“Gal per sq yd”).
        </TableNote>
      </Body>
      <PageFooter />
    </Page>
  )
}

export function ProductLineFinishPage() {
  return (
    <Page>
      <Head
        kicker="Acrytech Product Line · 3 of 4"
        title="Lines & additives."
        intro="Line products finish the court layout, and additives let the installer tune texture and drying on site."
      />
      <Body top="2.3in" gap="0.24in">
        <div>
          <GroupLabel>Line Marking</GroupLabel>
          <ProductTable rows={LINES} />
        </div>
        <div>
          <GroupLabel right="Gal / SY">Sand &amp; Additives</GroupLabel>
          <ProductTable rows={ADDITIVES} />
        </div>
        <FillPhoto src="/images/line-roller.jpg" alt="White line paint rolled between taped edges on a blue Acrytech court" position="center 60%" />
      </Body>
      <PageFooter />
    </Page>
  )
}

export function ProductLineColorsPage() {
  return (
    <Page>
      <Head
        kicker="Acrytech Product Line · 4 of 4"
        title="Acrytech colors."
        intro="Every Acrytech color coat is available in 32 standard colors, with custom colors made to order."
      />
      <Body top="2.3in" gap="0.2in">
        {[
          { t: 'Player’s Choice Colors', list: PLAYERS_CHOICE },
          { t: 'Specialty Colors', sub: 'Priced by pigment', list: SPECIALTY_COLORS },
        ].map((g) => (
          <section key={g.t} className="glass" style={{ borderRadius: '12px', padding: '0.18in 0.22in' }}>
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-[12px] font-bold uppercase tracking-[0.08em]" style={{ color: OFF }}>{g.t}</h3>
              {g.sub && <span className="font-sans text-[8px] uppercase tracking-[0.1em]" style={{ color: MUTED }}>{g.sub}</span>}
            </div>
            <ul className="mt-3.5 grid grid-cols-8 gap-x-3 gap-y-3.5" aria-label={g.t}>
              {g.list.flatMap((f) => f.colors).map((c) => (
                <li key={c.name} className="flex flex-col gap-[5px]">
                  <span
                    aria-hidden="true"
                    className="block aspect-square w-full"
                    style={{ borderRadius: '6px', background: c.hex, boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.18)' }}
                  />
                  <span className="font-sans text-[9px] font-semibold leading-tight" style={{ color: 'rgba(245,246,246,0.9)' }}>{c.name}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <TableNote>
          Custom colors are available. Screens alter how colors appear, so request a drawdown from your installer or AT
          Sports account manager for true color. Samples are free; only shipping applies.
  </TableNote>

      </Body>
      <PageFooter />
    </Page>
  )
}

/* ---------------------------------------------------------------------------
   ACRYTECH — MATERIAL SPECIFICATIONS
   Source: Acrytech System Specification v. TA1.2 (Part 1 and section 2.2) and
   the AT Sports Mixing Chart.
   --------------------------------------------------------------------------- */
const MATERIALS = [
  { t: 'Faultline Sport Patch', d: 'Acrylic latex emulsion mixed with Portland cement and sand. Semi-flexible latex concrete for depressions over 1/4" (6.4 mm) and cracks over 3/8" (9.5 mm).', solids: '≈47%', wt: '8.8 lb/gal (1.05 kg/L)' },
  { t: 'Latex-Based Primer & Sealer', d: 'Engineered styrene-butadiene latex for painted and unpainted asphalt and concrete. Seals, waterproofs and prevents efflorescence and asphalt impurities bleeding into following coats.', solids: 'See TDS', wt: 'See TDS' },
  { t: 'Acrytech Resurfacer', d: 'Acrylic latex concentrate mixed with water and silica sand on site to hide patchwork, smooth and prepare for color. One to two coats.', solids: '≈45%*', wt: '9.5 lb/gal (1.14 kg/L)' },
  { t: 'Acrytech Color', d: 'Acrylic latex concentrate mixed with water and silica sand (texture) on site, used as the secondary and final coatings.', solids: '≈47%*', wt: '9.8 lb/gal (1.17 kg/L)' },
  { t: 'Acrytech Textured Color', d: 'Color factory-mixed with silica sand at the ITF Medium court pace classification rate.', solids: '≈65%', wt: '12.5 lb/gal (1.5 kg/L)' },
  { t: 'Acrytech Line Primer', d: 'Optional clear-drying primer that prevents line bleed for the most precise lines. Recommended for professional courts.', solids: '≈29%*', wt: '10 lb/gal (1.2 kg/L)' },
  { t: 'Acrytech White Line Paint', d: 'Textured bright white acrylic line paint. 20–25% may be added to Color to make the lighter colors used for QuickStart lines.', solids: '≈71%*', wt: '12.4 lb/gal (1.49 kg/L)' },
]

/* Source: AT Sports Mixing Chart. Shown on the Application & Coverage page. */
const MIX = [
  { pure: '1 gal', sand: '7.27 lb', water: '0.58 gal', yld: '2 gal', cov: '20 SY' },
  { pure: '5 gal', sand: '36.36 lb', water: '2.91 gal', yld: '10 gal', cov: '100 SY' },
  { pure: '15 gal', sand: '109.09 lb', water: '8.73 gal', yld: '30 gal', cov: '300 SY' },
  { pure: '30 (27.5) gal', sand: '200 lb', water: '16 gal', yld: '55 gal', cov: '550 SY' },
]

export function MixingChart() {
  const mixCol = '1.4fr repeat(4, 1fr)'
  return (
    <div>
      <GroupLabel right="Concentrate + sand + water">Mixing Chart</GroupLabel>
      <div className="mt-3 glass overflow-hidden" style={{ borderRadius: '13px' }}>
        <div
          className="grid font-display text-[8.5px] font-semibold uppercase tracking-[0.14em]"
          style={{ gridTemplateColumns: mixCol, padding: '0.14in 0.28in', background: 'rgba(50,126,168,0.14)', color: MUTED }}
        >
          <span>Pure (concentrate)</span>
          <span className="text-right">Sand</span>
          <span className="text-right">Water</span>
          <span className="text-right">Yield</span>
          <span className="text-right">Coverage</span>
        </div>
        {MIX.map((m, i) => (
          <div
            key={m.pure}
            className="grid font-display text-[12px] tabular-nums"
            style={{ gridTemplateColumns: mixCol, padding: '0.11in 0.28in', borderTop: i === 0 ? 'none' : `1px solid ${RULE}`, color: OFF }}
          >
            <span className="font-bold">{m.pure}</span>
            <span className="text-right">{m.sand}</span>
            <span className="text-right">{m.water}</span>
            <span className="text-right">{m.yld}</span>
            <span className="text-right font-bold">{m.cov}</span>
          </div>
        ))}
      </div>
      <div className="mt-2">
        <ContentRequired>Confirm which concentrates this chart covers</ContentRequired>
      </div>
    </div>
  )
}

export function MaterialSpecsPage() {
  const qa = [
    'Coatings, patching and resurfacing compounds are Acrytech by AT Sports, or an approved equal documented to the owner.',
    'On request, the contractor gives the inspector a volume estimate for each product (AT Sports Paint Estimator).',
    'Submit Technical Data Sheets for system components and a color chart.',
    'Submit Safety Data Sheets for system components, and the manufacturer’s warranty (minimum one year).',
  ]
  return (
    <Page>
      <Head
        kicker="Material Specifications"
        title="System components."
        intro="Components and quality requirements from the Acrytech System Specification for colored and textured acrylic surfacing over asphalt, concrete and existing sports surfaces (Appendix A)."
      />
      <Body top="2.45in" gap="0.2in">
        <div>
        <GroupLabel right="Section 2.2">Materials</GroupLabel>
        <div className="mt-2.5 glass overflow-hidden" style={{ borderRadius: '12px' }}>
          <div
            className="grid items-end font-display text-[8.5px] font-semibold uppercase tracking-[0.12em]"
            style={{ gridTemplateColumns: '1fr 0.8in 1.35in', columnGap: '0.16in', padding: '0.12in 0.24in', background: 'rgba(50,126,168,0.14)', color: MUTED }}
          >
            <span>Component</span>
            <span className="text-right">Solids by wt.</span>
            <span className="text-right">Weight</span>
          </div>
          {MATERIALS.map((m, i) => (
            <div
              key={m.t}
              className="grid items-start"
              style={{ gridTemplateColumns: '1fr 0.8in 1.35in', columnGap: '0.16in', padding: '0.15in 0.24in', borderTop: i === 0 ? 'none' : `1px solid ${RULE}` }}
            >
              <span>
                <span className="block font-display text-[11.5px] font-bold" style={{ color: OFF }}>{m.t}</span>
                <span className="mt-0.5 block font-sans text-[9px] leading-snug" style={{ color: MUTED }}>{m.d}</span>
              </span>
              <span className="text-right font-display text-[12px] font-bold tabular-nums" style={{ color: OFF }}>{m.solids}</span>
              <span className="text-right font-sans text-[10px] tabular-nums" style={{ color: OFF }}>{m.wt}</span>
            </div>
          ))}
        </div>
        <div className="mt-2"><TableNote>*Solids and pigments by weight. Values are approximate; see each product’s TDS.</TableNote></div>
        </div>

        <div>
          <GroupLabel right="Sections 1.2 – 1.3">Quality Assurance &amp; Submittals</GroupLabel>
          <ul className="mt-2.5 grid grid-cols-2 gap-x-6 gap-y-2">
            {qa.map((q) => (
              <li key={q} className="flex gap-2 font-sans text-[9.5px] leading-snug" style={{ color: BODY }}>
                <span className="mt-[4px] inline-block h-[4px] w-[4px] shrink-0 rounded-full" style={{ backgroundColor: BLUE_LIGHT }} />
                {q}
              </li>
            ))}
          </ul>
        </div>
      </Body>
      <PageFooter />
    </Page>
  )
}

/* ---------------------------------------------------------------------------
   ACRYTECH — INSTALLATION REQUIREMENTS (2 pages)
   Source: Acrytech System Specification v. TA1.2, Part 3 — Execution.
   --------------------------------------------------------------------------- */
function StepNum({ n }: { n: number }) {
  return (
    <span className="shrink-0 font-display text-[11px] font-bold tabular-nums" style={{ color: BLUE_LIGHT, width: '0.24in' }}>
      {String(n).padStart(2, '0')}
    </span>
  )
}

function CardTitle({ children }: { children: ReactNode }) {
  return (
    <div className="font-display text-[12.5px] font-bold uppercase tracking-[0.06em]" style={{ color: OFF }}>
      {children}
    </div>
  )
}

const PREP = [
  {
    t: 'New Asphalt',
    stat: '14 days',
    statLabel: 'Minimum cure',
    steps: [
      'Inspect for contamination and unevenness; report to the general contractor.',
      'Remove mold, mildew, algae, dirt, grease, oil and debris with issue-specific cleaners.',
      'Flood test; fill depressions of 1/16" (1.6 mm) or more with Faultline Sport Patch and let cure.',
    ],
  },
  {
    t: 'New Concrete',
    stat: '28 days',
    statLabel: 'Minimum cure',
    steps: [
      'Broom finish, with vapor barrier installed, for proper bonding.',
      'Acid-etch, grind or shot-blast.',
      'Pressure wash and rinse.',
      'Flood test; patch depressions of 1/16" or more.',
      'Prime with Acrytech Latex-Based Primer & Sealer.',
    ],
    note: 'Exception: Latex-Based Primer & Sealer may go on green concrete 3–7 days after the pour (see Concrete pages).',
  },
  {
    t: 'Existing Surfaces',
    stat: 'Clean & repair',
    statLabel: 'Before any coating',
    steps: [
      'Pressure wash to remove mold, mildew, algae, dirt, grease, oil and debris.',
      'Inspect for contamination and unevenness; report findings.',
      'Fill cracks with Faultline Sport Patch, or the specified crack repair method.',
    ],
  },
]

export function InstallationPrepPage() {
  return (
    <Page>
      <Head
        kicker="Installation Requirements"
        title="Surface preparation."
        intro="Execution requirements from Part 3 of the Acrytech System Specification. See each product’s TDS for application limits."
      />
      <Body top="2.2in" gap="0.3in">
        <div>
          <GroupLabel right="Sections 3.2 – 3.4">Surface Preparation</GroupLabel>
          <div className="mt-3 grid grid-cols-3 gap-3.5" style={{ minHeight: '3.9in' }}>
            {PREP.map((p) => (
              <div key={p.t} className="glass flex flex-col" style={{ borderRadius: '13px', padding: '0.26in 0.24in' }}>
                <CardTitle>{p.t}</CardTitle>
                <div className="mt-3 pb-3" style={{ borderBottom: `1px solid ${RULE}` }}>
                  <div className="font-display font-bold tabular-nums" style={{ color: OFF, fontSize: '30px', lineHeight: 1 }}>
                    {p.stat}
                  </div>
                  <div className="mt-1.5 font-display text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ color: BLUE_LIGHT }}>
                    {p.statLabel}
                  </div>
                </div>
                <ol className="mt-3.5 flex flex-col gap-2.5">
                  {p.steps.map((s, i) => (
                    <li key={s} className="flex gap-1.5 font-sans text-[10px] leading-snug" style={{ color: BODY }}>
                      <StepNum n={i + 1} />
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
                {p.note && (
                  <p
                    className="font-sans text-[10px] leading-snug"
                    style={{ marginTop: 'auto', borderRadius: '9px', padding: '0.1in 0.12in', background: 'rgba(50,126,168,0.12)', border: '1px solid rgba(50,126,168,0.34)', color: OFF }}
                  >
                    {p.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <FillPhoto src="/images/court-substrate-eval.jpg" alt="Inspector evaluating a court substrate before coating" caption="Surface inspection before coating." />
      </Body>
      <PageFooter />
    </Page>
  )
}

const APPLICATION_RULES = [
  { icon: ShieldCheck, t: 'Inspector approves the surface before any coating.' },
  { icon: Brush, t: 'Apply every coat with a soft rubber squeegee.' },
  { icon: Timer, t: 'Let each coat dry completely, usually 1–3 hours.' },
]

const COATS = [
  { n: '1–2', t: 'Resurfacer coats', d: 'New or rough surfaces require two coats.' },
  { n: '2', t: 'Color coats', d: 'Standard durability, suitable for most courts.' },
  { n: '3', t: 'Color coats', d: 'Increased durability for high-use courts.' },
]

const LINE_STEPS = [
  { t: 'Wait', d: 'Color fully dry, up to 24 hr after the final coat.' },
  { t: 'Tape & lay out', d: 'USTA / USA Pickleball guidelines, machine-laid tape.' },
  { t: 'Prime', d: 'One coat of Line Primer for precise edges.' },
  { t: 'Paint', d: 'Textured White Line Paint, soft-bristle brush or quality roller; a second coat may be needed.' },
]

const COMPLETION = [
  { t: 'Clear the site', d: 'Remove all equipment, leftover materials and waste.' },
  { t: 'No traffic for 24 hours', d: 'No traffic of any kind, then confirm the surface has dried.' },
  { t: 'Drying can run longer', d: 'Lack of sun, high humidity, cool substrates or below 70°F (21°C).' },
]

export function InstallationApplyPage() {
  return (
    <Page>
      <Head kicker="Installation Requirements" title="Application & finishing." />
      <Body top="1.85in" gap="0.28in">
        <div>
          <GroupLabel right="Section 3.5">Application</GroupLabel>
          <div className="mt-3 grid grid-cols-3 gap-3.5">
            {APPLICATION_RULES.map((r) => (
              <div key={r.t} className="flex items-center gap-3">
                <IconBadge icon={r.icon} size={0.46} />
                <span className="font-sans text-[10.5px] leading-snug" style={{ color: OFF }}>{r.t}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3.5">
            {COATS.map((c, i) => (
              <div key={i} className="glass-strong" style={{ borderRadius: '13px', padding: '0.24in 0.24in', borderTop: `2px solid ${BLUE_LIGHT}` }}>
                <div className="whitespace-nowrap font-display font-bold tabular-nums" style={{ color: OFF, fontSize: '46px', lineHeight: 0.9 }}>
                  {c.n}
                </div>
                <div className="mt-2.5 font-display text-[12.5px] font-bold uppercase tracking-[0.08em]" style={{ color: BLUE_LIGHT }}>
                  {c.t}
                </div>
                <div className="mt-1 font-sans text-[10px] leading-snug" style={{ color: MUTED }}>{c.d}</div>
              </div>
            ))}
          </div>
          <p className="mt-2.5 font-sans text-[10px]" style={{ color: MUTED }}>
            Resurfacer and Color are mixed according to each product’s TDS.
          </p>
        </div>

        <div>
          <GroupLabel right="Section 3.6">Line Markings</GroupLabel>
          <ol className="mt-3 grid grid-cols-4 gap-2.5">
            {LINE_STEPS.map((s, i) => (
              <li key={s.t} className="glass flex flex-col" style={{ borderRadius: '12px', padding: '0.18in 0.18in' }}>
                <div className="flex items-center gap-2">
                  <span
                    className="inline-flex shrink-0 items-center justify-center font-display text-[11px] font-bold tabular-nums"
                    style={{ width: '0.26in', height: '0.26in', borderRadius: '999px', background: 'rgba(50,126,168,0.2)', border: '1px solid rgba(50,126,168,0.5)', color: OFF }}
                  >
                    {i + 1}
                  </span>
                  <span className="font-display text-[12px] font-bold uppercase tracking-[0.06em]" style={{ color: OFF }}>{s.t}</span>
                  {i < LINE_STEPS.length - 1 && (
                    <ArrowRight size={14} strokeWidth={1.75} color={BLUE_LIGHT} className="ml-auto shrink-0" aria-hidden="true" />
                  )}
                </div>
                <p className="mt-2 font-sans text-[10px] leading-snug" style={{ color: BODY }}>{s.d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-2.5 font-sans text-[10px]" style={{ color: OFF }}>
            <span className="font-semibold" style={{ color: BLUE_LIGHT }}>Work length · </span>
            Above 86°F (30°C) work 20 ft at a time; below, up to 40 ft.
          </p>
        </div>

        <div>
          <GroupLabel right="Section 3.7">Completion</GroupLabel>
          <div className="mt-3 grid grid-cols-3 gap-3.5">
            {COMPLETION.map((c) => (
              <div key={c.t} className="glass" style={{ borderRadius: '12px', padding: '0.18in 0.2in' }}>
                <CardTitle>{c.t}</CardTitle>
                <p className="mt-1.5 font-sans text-[10px] leading-snug" style={{ color: MUTED }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>

        <FillPhoto src="/images/line-roller.jpg" alt="Installer rolling a white court line between masking tape" minHeight="1in" />
      </Body>
      <PageFooter />
    </Page>
  )
}

/* ---------------------------------------------------------------------------
   ACRYTECH — CONCRETE DESIGN & PREPARATION (2 pages)
   Source: Acrytech Concrete Design and Preparation v. TA25.1.
   --------------------------------------------------------------------------- */
const CONCRETE_DESIGN = [
  ['Vapor barrier', 'Plastic vapor barrier before the pour: two perpendicular layers, taped joints.'],
  ['No fly ash', 'Densifies concrete, causes excessive efflorescence (dusting) and can leave an oily residue.'],
  ['Specify OPC', 'Ordinary Portland Cement (Type I/IA). Avoid Portland Limestone Cement; above 10% it can hinder adhesion.'],
  ['Control joints', 'Minimize or omit. If required, place them outside the playing area.'],
  ['Finish', 'Light to medium broom finish for a mechanical bond.'],
  ['Cure', 'Moisture cure 28 days minimum. Curing agents not recommended; some drying retarders are incompatible. Contact AT Sports.'],
  ['Prepare', 'Acid-etch (diluted muriatic or phosphoric) and rinse, or grind or shot-blast, then pressure wash.'],
  ['Prime', 'Latex-compatible specialty primer on bare concrete. ACRY-Lock primes and adds a top-side moisture barrier.'],
]

export function ConcreteDesignPage() {
  return (
    <Page>
      <Head kicker="Concrete Design & Preparation" title="Designed for coatings from the pour." />
      <Body top="1.85in" gap="0.24in">
        <div style={{ borderRadius: '13px', padding: '0.22in 0.28in', background: 'rgba(50,126,168,0.12)', border: '1px solid rgba(50,126,168,0.36)' }}>
          <div className="font-display text-[10.5px] font-semibold uppercase tracking-[0.18em]" style={{ color: BLUE_LIGHT }}>
            Why it matters
          </div>
          <p className="mt-1.5 font-sans text-[11.5px] leading-relaxed" style={{ color: OFF }}>
            Concrete holds salts and moisture that migrate to the surface. Slabs not designed for coatings can bubble,
            blister and delaminate.
          </p>
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <GroupLabel>Design &amp; Construction</GroupLabel>
          <div className="mt-3 grid min-h-0 flex-1 grid-cols-2 gap-3" style={{ gridTemplateRows: 'repeat(4, 1fr)' }}>
            {CONCRETE_DESIGN.map(([t, d], i) => (
              <div key={t} className="glass flex items-center gap-4" style={{ borderRadius: '13px', padding: '0.2in 0.26in' }}>
                <span className="shrink-0 font-display font-bold tabular-nums" style={{ color: BLUE_LIGHT, fontSize: '34px', lineHeight: 1, width: '0.55in' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>
                  <CardTitle>{t}</CardTitle>
                  <span className="mt-1.5 block font-sans text-[10.5px] leading-snug" style={{ color: MUTED }}>{d}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="font-sans text-[10px]" style={{ color: MUTED }}>In addition to ASBA guidelines for grade and mix design.</p>
      </Body>
      <PageFooter />
    </Page>
  )
}

const PRIMER_COMPARE = [
  {
    row: 'When to apply',
    latex: 'Green concrete 3–7 days after the pour, or after the 28-day cure.',
    solvent: 'After cure.',
  },
  {
    row: 'Surface prep',
    latex: 'After 28-day cure: acid-etch, grind or shot-blast, then clean.',
    solvent: 'Pressure washing, without etching, grinding or blasting.',
  },
  {
    row: 'Best suited to',
    latex: 'Green concrete (uniquely applied before full cure).',
    solvent: 'Mixes with fly ash or added limestone (Type IL).',
  },
]

const FIELD_NOTES = [
  { t: 'Acid test', d: 'No bubbling means no etching: the slab may be pre-etched or have a curing agent.' },
  { t: 'Tape test', d: 'If primer lifts with masking tape, more preparation is needed.' },
  { t: 'Moisture', d: 'Check per primer guidelines, typically ASTM F1869 and/or ASTM F2170.' },
  { t: 'Slick finish', d: 'Machine-finished concrete may need shot-blasting, scarifying or extreme etching.' },
  { t: 'Fewer coats', d: 'More acrylic coats seal off vapor transmission and promote blistering.' },
  { t: 'Peeling paint', d: 'Remove existing paint that is delaminating or peeling.' },
]

const PRIMER_COLS = '1.35in 1fr 1fr'

export function ConcretePrimersPage() {
  return (
    <Page>
      <Head kicker="Concrete Design & Preparation" title="Primer selection & field checks." />
      <Body top="1.85in" gap="0.26in">
        <div>
          <GroupLabel>Primer Selection</GroupLabel>
          <div className="mt-3 glass overflow-hidden" style={{ borderRadius: '13px' }}>
            <div
              className="grid items-end"
              style={{ gridTemplateColumns: PRIMER_COLS, columnGap: '0.2in', padding: '0.14in 0.24in', background: 'rgba(50,126,168,0.14)' }}
            >
              <span />
              <span className="font-display text-[12.5px] font-bold" style={{ color: OFF }}>Latex-Based Primer &amp; Sealer</span>
              <span className="font-display text-[12.5px] font-bold" style={{ color: OFF }}>Solvent Primer &amp; Sealer</span>
            </div>
            {PRIMER_COMPARE.map((r) => (
              <div
                key={r.row}
                className="grid items-start"
                style={{ gridTemplateColumns: PRIMER_COLS, columnGap: '0.2in', padding: '0.14in 0.24in', borderTop: `1px solid ${RULE}` }}
              >
                <span className="font-display text-[10.5px] font-semibold uppercase tracking-[0.1em]" style={{ color: BLUE_LIGHT }}>{r.row}</span>
                <span className="font-sans text-[10.5px] leading-snug" style={{ color: BODY }}>{r.latex}</span>
                <span className="font-sans text-[10.5px] leading-snug" style={{ color: BODY }}>{r.solvent}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderRadius: '13px', padding: '0.24in 0.28in', background: 'rgba(50,126,168,0.12)', border: '1px solid rgba(50,126,168,0.36)' }}>
          <div className="flex items-center justify-between gap-4">
            <span className="font-display text-[10.5px] font-semibold uppercase tracking-[0.18em]" style={{ color: BLUE_LIGHT }}>Timing</span>
            <span className="font-sans text-[10px]" style={{ color: MUTED }}>28+ day concrete · within moisture &amp; RH limits · limits outgassing</span>
          </div>
          <div className="mt-2 font-display font-bold" style={{ color: OFF, fontSize: '24px', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
            Prime while the slab is cooling
          </div>
          <p className="mt-2 font-sans text-[10.5px] leading-relaxed" style={{ color: BODY }}>
            Late afternoon, early evening, or morning once dew has evaporated, never as it heats up. A hot slab may be
            misted, not soaked.
          </p>
        </div>

        <div>
          <GroupLabel>Field Notes</GroupLabel>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {FIELD_NOTES.map((n) => (
              <div key={n.t} className="glass flex gap-2.5" style={{ borderRadius: '12px', padding: '0.16in 0.18in' }}>
                <CircleCheck size={16} strokeWidth={1.75} color={BLUE_LIGHT} className="mt-px shrink-0" aria-hidden="true" />
                <span>
                  <span className="block font-display text-[12px] font-bold" style={{ color: OFF }}>{n.t}</span>
                  <span className="mt-1 block font-sans text-[10px] leading-snug" style={{ color: MUTED }}>{n.d}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <FillPhoto src="/images/concrete-primer-prep.png" alt="Installer performing a masking-tape adhesion test on freshly primed concrete" position="center 55%" minHeight="1in" />
      </Body>
      <PageFooter />
    </Page>
  )
}

/* ---------------------------------------------------------------------------
   ACRYTECH — NEW SURFACE MAINTENANCE
   Source: New Court Surface Maintenance v. 21.3.
   --------------------------------------------------------------------------- */
export function MaintenancePage() {
  const care = [
    { t: 'First 24 hours', d: 'Keep the court closed for at least 24 hours after the final coat so coatings can cure. For two weeks after, do not play when the court is wet.' },
    { t: 'Clean monthly', d: 'Watch shaded areas and corners for mold or mildew. Indoor courts need frequent vacuuming and at least one wet cleaning a year with mild detergent and soft bristles.' },
    { t: 'Gentle cleaners', d: 'Use mild dish soap or a neutral-pH cleaner such as Simple Green with a soft brush. Never use abrasive cleaners. A water rinse is usually enough.' },
    { t: 'Limit pressure', d: 'High pressure can damage coatings. Keep the tip away from the surface; surface cleaners avoid the striping left by hand wands.' },
    { t: 'Standing water', d: 'Remove standing water often. Dirt settles in puddles and stains. Do not let irrigation spray onto the court.' },
    { t: 'Debris', d: 'Clear leaves and pine needles promptly. Debris stains and feeds mold and mildew; acrylic itself does not support growth.' },
  ]
  const prevent = [
    'Non-marking court shoes only',
    'No bikes, roller blades or skateboards',
    'No gum, food or drinks other than water',
    'Do not drag chairs, benches or equipment',
    'Pad chair and equipment legs; anchor benches and fixtures',
    'Protect the surface before driving maintenance vehicles on it',
  ]
  return (
    <Page>
      <Head
        kicker="New Surface Maintenance"
        title="Years of play, with simple care."
        intro="With proper maintenance, Acrytech surfaces provide many years of service. The full New Court Surface Maintenance guide is included in the Technical Appendices for the owner."
      />
      <Body top="2.45in" gap="0.26in">
        <div className="grid grid-cols-2 gap-3">
          {care.map((c, i) => (
            <div key={c.t} className="glass" style={{ borderRadius: '12px', padding: '0.2in 0.24in', minHeight: '1.1in' }}>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-[10px] font-semibold tabular-nums" style={{ color: BLUE_LIGHT }}>0{i + 1}</span>
                <span className="font-display text-[12px] font-bold uppercase tracking-[0.06em]" style={{ color: OFF }}>{c.t}</span>
              </div>
              <p className="mt-1.5 font-sans text-[10px] leading-relaxed" style={{ color: MUTED }}>{c.d}</p>
            </div>
          ))}
        </div>

        <div>
          <GroupLabel>Damage Prevention</GroupLabel>
          <div className="mt-3 grid grid-cols-3 gap-x-5 gap-y-2.5">
            {prevent.map((p) => (
              <div key={p} className="flex gap-2 font-sans text-[10px] leading-snug" style={{ color: BODY }}>
                <span className="mt-[4px] inline-block h-[4px] w-[4px] shrink-0 rounded-full" style={{ backgroundColor: BLUE_LIGHT }} />
                {p}
              </div>
            ))}
          </div>
        </div>
        <FillPhoto src="/images/line-closeup.jpg" alt="Finished Acrytech textured surface and white line at sunset" position="center 55%" />
      </Body>
      <PageFooter />
    </Page>
  )
}
