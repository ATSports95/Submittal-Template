import type { ReactNode } from 'react'
import { Page, PageFooter, Kicker, ContentRequired } from '@/components/proposal/page-shell'

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
      <span className="font-display text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_LIGHT }}>
        {children}
      </span>
      <div className="h-px flex-1" style={{ backgroundColor: 'rgba(185,196,203,0.2)' }} />
      {right && <span className="font-sans text-[8.5px] uppercase tracking-[0.12em]" style={{ color: MUTED }}>{right}</span>}
    </div>
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

const COL = '2.6in 1.15in 0.68in 0.66in 0.42in 1fr'

function ProductTable({ rows }: { rows: Product[] }) {
  return (
    <div className="mt-2.5 glass overflow-hidden" style={{ borderRadius: '12px' }}>
      <div
        className="grid items-end font-display text-[7.5px] font-semibold uppercase tracking-[0.14em]"
        style={{ gridTemplateColumns: COL, columnGap: '0.1in', padding: '0.1in 0.18in', background: 'rgba(50,126,168,0.14)', color: MUTED }}
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
          style={{ gridTemplateColumns: COL, columnGap: '0.1in', padding: '0.075in 0.18in', borderTop: i === 0 ? 'none' : `1px solid ${RULE}` }}
        >
          <span>
            <span className="block font-display text-[10.5px] font-bold" style={{ color: OFF }}>{r.name}</span>
            <span className="mt-0.5 block font-sans text-[8px] leading-snug" style={{ color: MUTED }}>{r.d}</span>
          </span>
          <span className="font-sans text-[8.5px] leading-snug tabular-nums" style={{ color: OFF }}>
            {r.coverage}
            {r.flag && (
              <span className="mt-1 block">
                <ContentRequired>{r.flag}</ContentRequired>
              </span>
            )}
          </span>
          <span className="font-sans text-[8.5px] tabular-nums" style={{ color: OFF }}>{r.temp}</span>
          <span className="font-sans text-[8.5px] tabular-nums" style={{ color: OFF }}>{r.dry}</span>
          <span className="font-sans text-[8.5px] tabular-nums" style={{ color: OFF }}>{r.cure}</span>
          <span className="font-sans text-[8px] leading-snug" style={{ color: MUTED }}>
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
  { name: 'Shuffle Board', d: 'Formulated with select slip agents for an ideal puck slide. Player’s Choice colors only.', coverage: '.06–.07', temp: '50–130°F', dry: '1–3 hr', cure: '48 hr', pack: '55 / 30 gal' },
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

const PLAYERS_CHOICE = ['Competition Green', 'Performance Green', 'Field Green', 'Forest Green', 'Sandstone', 'Slate', 'Gray', 'Black', 'Classic Red', 'Beige', 'Light Blue', 'Standard Blue', 'Competition Blue', 'Orange', 'Terracotta', 'Frost Blue']
const SPECIALTY_COLORS = ['Pro Purple', 'Bright Red', 'Sky Blue', 'Caribbean Blue', 'Nautical Navy', 'Crimson', 'Irish Green', 'Passion Pink', 'Sea Green', 'Coral', 'Kiwi', 'Ultra Violet', 'Viva Violet', 'Bright Orange', 'Bright Yellow', 'Lime']

function TableNote({ children }: { children: ReactNode }) {
  return <p className="mt-2 font-sans text-[8px] leading-relaxed" style={{ color: MUTED }}>{children}</p>
}

export function ProductLineColorPage() {
  return (
    <Page>
      <Head
        kicker="Acrytech Product Line · 1 of 3"
        title="Color coatings."
        intro="Every Acrytech color coat is a 100% acrylic latex, self-crosslinking formulation. The line is engineered so each product can be matched to the substrate, the level of use and the sport."
      />
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '2.55in' }}>
        <GroupLabel right="Gal / SY / coat">Color &amp; Finish Coats</GroupLabel>
        <ProductTable rows={COLOR_COATS} />
        <div className="mt-6">
          <GroupLabel right="Gal / SY / coat">Specialty Sport Coatings</GroupLabel>
          <ProductTable rows={SPECIALTY} />
        </div>
        <TableNote>
          All products carry a 2-year limited warranty. *55-gal drums of textured product contain 39 gal. Source: AT Sports
          Product Catalog 2026. Full values are given in each product’s Technical Data Sheet (Technical Appendices).
        </TableNote>
      </div>
      <PageFooter />
    </Page>
  )
}

export function ProductLinePrepPage() {
  return (
    <Page>
      <Head
        kicker="Acrytech Product Line · 2 of 3"
        title="Primers, sealers & resurfacers."
        intro="Preparation products are selected for the substrate: primers and sealers bond to and protect asphalt and concrete, and resurfacers fill, level and build the base the color coats are applied to."
      />
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '2.55in' }}>
        <GroupLabel right="Gal / SY / coat unless noted">Primers, Sealers &amp; Clear Coats</GroupLabel>
        <ProductTable rows={PRIMERS} />
        <div className="mt-5">
          <GroupLabel right="Gal / SY / coat">Resurfacers &amp; Patch</GroupLabel>
          <ProductTable rows={RESURFACERS} />
        </div>
        <TableNote>
          2-year limited warranty on all products except Faultline Sport Patch (see TDS). *55-gal textured drums contain
          39 gal. Urethane Primer and Clear Coat coverage is as printed in the catalog (“Gal per sq yd”).
        </TableNote>
      </div>
      <PageFooter />
    </Page>
  )
}

export function ProductLineFinishPage() {
  return (
    <Page>
      <Head
        kicker="Acrytech Product Line · 3 of 3"
        title="Lines, additives & color."
        intro="Line products finish the court layout, and additives let the installer tune texture and drying on site. Every color coat is available in 32 standard colors, with custom colors made to order."
      />
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '2.55in' }}>
        <GroupLabel>Line Marking</GroupLabel>
        <ProductTable rows={LINES} />
        <div className="mt-5">
          <GroupLabel right="Gal / SY">Sand &amp; Additives</GroupLabel>
          <ProductTable rows={ADDITIVES} />
        </div>

        <div className="mt-6">
          <GroupLabel>Acrytech Colors</GroupLabel>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {[
              { t: 'Player’s Choice Colors', list: PLAYERS_CHOICE },
              { t: 'Specialty Colors', sub: 'Priced by pigment', list: SPECIALTY_COLORS },
            ].map((g) => (
              <div key={g.t} className="glass" style={{ borderRadius: '12px', padding: '0.16in 0.2in' }}>
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-[10px] font-bold uppercase tracking-[0.08em]" style={{ color: OFF }}>{g.t}</span>
                  {g.sub && <span className="font-sans text-[8px] uppercase tracking-[0.1em]" style={{ color: MUTED }}>{g.sub}</span>}
                </div>
                <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-[3px]">
                  {g.list.map((c) => (
                    <span key={c} className="font-sans text-[8.5px]" style={{ color: 'rgba(245,246,246,0.82)' }}>{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <TableNote>
            Custom colors are available. Screens alter how colors appear, so request a drawdown from your installer or AT
            Sports account manager for true color. Samples are free; only shipping applies.
          </TableNote>
        </div>
      </div>
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

const MIX = [
  { pure: '1 gal', sand: '7.27 lb', water: '0.58 gal', yld: '2 gal', cov: '20 SY' },
  { pure: '5 gal', sand: '36.36 lb', water: '2.91 gal', yld: '10 gal', cov: '100 SY' },
  { pure: '15 gal', sand: '109.09 lb', water: '8.73 gal', yld: '30 gal', cov: '300 SY' },
  { pure: '30 (27.5) gal', sand: '200 lb', water: '16 gal', yld: '55 gal', cov: '550 SY' },
]

export function MaterialSpecsPage() {
  const qa = [
    'All work conforms to American Sports Builders Association (ASBA) guidelines.',
    'All coatings, patching and resurfacing compounds are Acrytech by AT Sports, or an approved equal documented to the owner.',
    'Tennis surfaces must be International Tennis Federation (ITF) court pace classified.',
    'The contractor records the batch number of each product used and keeps it for the warranty period.',
    'On request, the contractor gives the inspector a volume estimate for each product (AT Sports Paint Estimator).',
  ]
  const mixCol = '1.4fr repeat(4, 1fr)'
  return (
    <Page>
      <Head
        kicker="Material Specifications"
        title="System components."
        intro="Components and quality requirements from the Acrytech System Specification for colored and textured acrylic surfacing over asphalt, concrete and existing sports surfaces (Appendix A)."
      />
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '2.4in' }}>
        <GroupLabel right="Section 2.2">Materials</GroupLabel>
        <div className="mt-2.5 glass overflow-hidden" style={{ borderRadius: '12px' }}>
          <div
            className="grid items-end font-display text-[7.5px] font-semibold uppercase tracking-[0.14em]"
            style={{ gridTemplateColumns: '1fr 0.75in 1.3in', columnGap: '0.16in', padding: '0.1in 0.22in', background: 'rgba(50,126,168,0.14)', color: MUTED }}
          >
            <span>Component</span>
            <span className="text-right">Solids by wt.</span>
            <span className="text-right">Weight</span>
          </div>
          {MATERIALS.map((m, i) => (
            <div
              key={m.t}
              className="grid items-start"
              style={{ gridTemplateColumns: '1fr 0.75in 1.3in', columnGap: '0.16in', padding: '0.08in 0.22in', borderTop: i === 0 ? 'none' : `1px solid ${RULE}` }}
            >
              <span>
                <span className="block font-display text-[10.5px] font-bold" style={{ color: OFF }}>{m.t}</span>
                <span className="mt-0.5 block font-sans text-[8px] leading-snug" style={{ color: MUTED }}>{m.d}</span>
              </span>
              <span className="text-right font-display text-[11px] font-bold tabular-nums" style={{ color: OFF }}>{m.solids}</span>
              <span className="text-right font-sans text-[9px] tabular-nums" style={{ color: OFF }}>{m.wt}</span>
            </div>
          ))}
        </div>
        <TableNote>*Solids and pigments by weight. Values are approximate; see each product’s TDS.</TableNote>

        <div className="mt-4 grid gap-4" style={{ gridTemplateColumns: '3.45in 1fr' }}>
          <div>
            <GroupLabel right="Section 1.2">Quality Assurance</GroupLabel>
            <ul className="mt-2.5 flex flex-col gap-1.5">
              {qa.map((q) => (
                <li key={q} className="flex gap-2 font-sans text-[8.5px] leading-snug" style={{ color: BODY }}>
                  <span className="mt-[4px] inline-block h-[4px] w-[4px] shrink-0 rounded-full" style={{ backgroundColor: BLUE_LIGHT }} />
                  {q}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <GroupLabel>Mixing Chart</GroupLabel>
            <div className="mt-2.5 glass overflow-hidden" style={{ borderRadius: '12px' }}>
              <div
                className="grid font-display text-[7px] font-semibold uppercase tracking-[0.12em]"
                style={{ gridTemplateColumns: mixCol, padding: '0.08in 0.16in', background: 'rgba(50,126,168,0.14)', color: MUTED }}
              >
                <span>Pure</span>
                <span className="text-right">Sand</span>
                <span className="text-right">Water</span>
                <span className="text-right">Yield</span>
                <span className="text-right">Coverage</span>
              </div>
              {MIX.map((m, i) => (
                <div
                  key={m.pure}
                  className="grid font-sans text-[8.5px] tabular-nums"
                  style={{ gridTemplateColumns: mixCol, padding: '0.06in 0.16in', borderTop: i === 0 ? 'none' : `1px solid ${RULE}`, color: OFF }}
                >
                  <span className="font-display font-bold">{m.pure}</span>
                  <span className="text-right">{m.sand}</span>
                  <span className="text-right">{m.water}</span>
                  <span className="text-right">{m.yld}</span>
                  <span className="text-right">{m.cov}</span>
                </div>
              ))}
            </div>
            <div className="mt-1.5">
              <ContentRequired>Confirm which concentrates this chart covers</ContentRequired>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </Page>
  )
}

/* ---------------------------------------------------------------------------
   ACRYTECH — INSTALLATION REQUIREMENTS
   Source: Acrytech System Specification v. TA1.2, Part 3 — Execution.
   --------------------------------------------------------------------------- */
export function InstallationPage() {
  const prep = [
    {
      t: 'New Asphalt',
      items: [
        'Cure a minimum of 14 days.',
        'Inspect for contamination and unevenness; report findings to the general contractor.',
        'Remove mold, mildew, algae, dirt, grease, oil and debris with issue-specific cleaners.',
        'Flood to check for depressions of 1/16" (1.6 mm) or more; fill with Faultline Sport Patch and allow to cure.',
      ],
    },
    {
      t: 'New Concrete',
      items: [
        'Broom finish and installed vapor barrier for proper bonding.',
        'Cure a minimum of 28 days.',
        'Acid-bath with muriatic acid, then pressure wash and rinse.',
        'Flood test and patch depressions of 1/16" or more.',
        'Prime with Acrytech Latex-Based Primer & Sealer.',
      ],
    },
    {
      t: 'Existing Surfaces',
      items: [
        'Pressure wash to remove mold, mildew, algae, dirt, grease, oil and debris.',
        'Inspect for contamination and unevenness; report findings.',
        'Fill cracks with Faultline Sport Patch, or the specified crack repair method.',
      ],
    },
  ]
  const coats = [
    { n: '1–2', t: 'Resurfacer', d: 'New or rough surfaces require two coats.' },
    { n: '2', t: 'Color', d: 'Standard durability, suitable for most courts.' },
    { n: '3', t: 'Color', d: 'Increased durability for high-use courts.' },
  ]
  return (
    <Page>
      <Head
        kicker="Installation Requirements"
        title="Prepared, applied and finished to specification."
        intro="Execution requirements from Part 3 of the Acrytech System Specification. Application limits are product specific; see each product’s TDS."
      />
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '2.45in' }}>
        <GroupLabel right="Sections 3.2 – 3.4">Surface Preparation</GroupLabel>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {prep.map((p) => (
            <div key={p.t} className="glass" style={{ borderRadius: '12px', padding: '0.18in 0.2in' }}>
              <div className="font-display text-[11px] font-bold uppercase tracking-[0.06em]" style={{ color: OFF }}>{p.t}</div>
              <ul className="mt-2 flex flex-col gap-1.5">
                {p.items.map((it) => (
                  <li key={it} className="flex gap-2 font-sans text-[8.5px] leading-snug" style={{ color: BODY }}>
                    <span className="mt-[4px] inline-block h-[4px] w-[4px] shrink-0 rounded-full" style={{ backgroundColor: BLUE_LIGHT }} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <GroupLabel right="Section 3.5">Application</GroupLabel>
          <p className="mt-2.5 font-sans text-[9.5px] leading-relaxed" style={{ color: BODY }}>
            No coatings are applied until the inspector approves the surface. All coatings are applied with a soft rubber
            squeegee, and each coat dries completely (usually 1–3 hours) before the next. Resurfacer and Color are mixed
            according to each product’s TDS.
          </p>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {coats.map((c, i) => (
              <div key={i} className="glass-strong flex items-center gap-3" style={{ borderRadius: '12px', padding: '0.16in 0.2in', borderTop: '2px solid #5da3ca' }}>
                <span className="whitespace-nowrap font-display font-bold tabular-nums" style={{ color: OFF, fontSize: '28px', lineHeight: 0.9 }}>{c.n}</span>
                <span>
                  <span className="block font-display text-[10px] font-bold uppercase tracking-[0.08em]" style={{ color: BLUE_LIGHT }}>
                    {c.t} coats
                  </span>
                  <span className="mt-0.5 block font-sans text-[8.5px] leading-snug" style={{ color: MUTED }}>{c.d}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <div>
            <GroupLabel right="Section 3.6">Line Markings</GroupLabel>
            <ul className="mt-2.5 flex flex-col gap-1.5">
              {[
                'Applied only after Color is thoroughly dry, up to 24 hours after the final coat.',
                'Laid out to USTA and USA Pickleball guidelines.',
                'Painted between machine-laid masking tape with a soft-bristle brush or high-quality roller.',
                'One coat of Line Primer for precise edges, then one coat of Textured White Line Paint (a second may be needed).',
                'Work up to 20 ft at a time above 86°F (30°C), or up to 40 ft at a time below.',
              ].map((it) => (
                <li key={it} className="flex gap-2 font-sans text-[8.5px] leading-snug" style={{ color: BODY }}>
                  <span className="mt-[4px] inline-block h-[4px] w-[4px] shrink-0 rounded-full" style={{ backgroundColor: BLUE_LIGHT }} />
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <GroupLabel right="Section 3.7">Completion</GroupLabel>
            <ul className="mt-2.5 flex flex-col gap-1.5">
              {[
                'All equipment, leftover materials and waste removed from site.',
                'No traffic of any kind for 24 hours, then confirm the surface has dried.',
                'Lack of sun, high humidity, cool substrates or temperatures below 70°F (21°C) can extend drying time.',
              ].map((it) => (
                <li key={it} className="flex gap-2 font-sans text-[8.5px] leading-snug" style={{ color: BODY }}>
                  <span className="mt-[4px] inline-block h-[4px] w-[4px] shrink-0 rounded-full" style={{ backgroundColor: BLUE_LIGHT }} />
                  {it}
                </li>
              ))}
            </ul>
            <div className="mt-3" style={{ borderRadius: '12px', padding: '0.14in 0.18in', background: 'rgba(50,126,168,0.1)', border: '1px solid rgba(50,126,168,0.34)' }}>
              <div className="font-display text-[8.5px] font-semibold uppercase tracking-[0.16em]" style={{ color: BLUE_LIGHT }}>Submittals · Section 1.3</div>
              <p className="mt-1 font-sans text-[8.5px] leading-snug" style={{ color: OFF }}>
                TDS for system components and a color chart, SDS for system components, and the manufacturer’s warranty
                (minimum one year).
              </p>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </Page>
  )
}

/* ---------------------------------------------------------------------------
   ACRYTECH — CONCRETE DESIGN & PREPARATION
   Source: Acrytech Concrete Design and Preparation v. TA25.1.
   --------------------------------------------------------------------------- */
export function ConcretePrepPage() {
  const design = [
    ['Vapor barrier', 'Install a plastic vapor barrier before the pour: two perpendicular layers with taped joints.'],
    ['No fly ash', 'Fly ash densifies concrete, causes excessive efflorescence (dusting) and can leave an oily residue.'],
    ['Specify OPC', 'Avoid Portland Limestone Cement where possible; above 10% it can hinder adhesion. Specify Ordinary Portland Cement (Type I/IA).'],
    ['Control joints', 'Minimize or omit. If required, place them outside the playing area.'],
    ['Finish', 'Light to medium broom finish for a mechanical bond.'],
    ['Cure', 'Moisture cure a minimum of 28 days. Curing agents are not recommended; some drying retarders are not compatible. Contact AT Sports.'],
    ['Prepare', 'After curing, acid-etch (diluted muriatic or phosphoric) and rinse, or grind or shot-blast, then pressure wash.'],
    ['Prime', 'Apply a latex-compatible specialty primer to bare concrete. ACRY-Lock primes and adds a top-side moisture barrier.'],
  ]
  const hints = [
    'If acid does not bubble, it is not etching: the slab may already be etched or have a curing agent.',
    'Tape test: if primer lifts with masking tape, more preparation is needed.',
    'Check moisture per primer guidelines, typically ASTM F1869 and/or ASTM F2170.',
    'Slick, machine-finished concrete may need shot-blasting, scarifying or extreme etching.',
    'Fewer acrylic coats are better: more coats seal off vapor transmission and promote blistering.',
    'Remove existing paint that is delaminating or peeling.',
  ]
  return (
    <Page>
      <Head
        kicker="Concrete Design & Preparation"
        title="Designed for coatings from the pour."
        intro="Concrete contains salts and moisture that migrate to the surface. Coatings on concrete that was not designed and prepared for them can bubble, blister and delaminate. AT Sports recommends the following, in addition to ASBA guidelines for grade and mix design."
      />
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '2.65in' }}>
        <GroupLabel>Design &amp; Construction</GroupLabel>
        <div className="mt-3 grid grid-cols-2 gap-2.5">
          {design.map(([t, d], i) => (
            <div key={t} className="glass flex gap-3" style={{ borderRadius: '11px', padding: '0.13in 0.18in' }}>
              <span className="font-display text-[9px] font-semibold tabular-nums" style={{ color: BLUE_LIGHT }}>{String(i + 1).padStart(2, '0')}</span>
              <span>
                <span className="block font-display text-[10px] font-bold uppercase tracking-[0.06em]" style={{ color: OFF }}>{t}</span>
                <span className="mt-0.5 block font-sans text-[8.5px] leading-snug" style={{ color: MUTED }}>{d}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <GroupLabel>Primer Selection</GroupLabel>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {[
              { t: 'Latex-Based Primer & Sealer', d: 'Uniquely applied to green concrete 3–7 days after the pour, or after 28-day cure and acid-etching, grinding or shot-blasting and cleaning.' },
              { t: 'Solvent Primer & Sealer', d: 'Applied after cure. Suited to mixes with fly ash or added limestone (Type IL), and after pressure washing without etching, grinding or blasting.' },
            ].map((p) => (
              <div key={p.t} style={{ borderRadius: '12px', padding: '0.16in 0.2in', background: 'rgba(50,126,168,0.1)', border: '1px solid rgba(50,126,168,0.34)' }}>
                <div className="font-display text-[10.5px] font-bold" style={{ color: OFF }}>{p.t}</div>
                <p className="mt-1 font-sans text-[8.5px] leading-snug" style={{ color: BODY }}>{p.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-2.5 font-sans text-[8.5px] leading-relaxed" style={{ color: BODY }}>
            On 28+ day concrete, prime within moisture and RH limits while the slab is cooling (late afternoon, early
            evening, or morning once dew has evaporated), never as it heats up, to limit outgassing. A hot slab may be
            misted, not soaked, to bring it below the maximum application temperature.
          </p>
        </div>

        <div className="mt-4">
          <GroupLabel>Field Notes</GroupLabel>
          <div className="mt-2.5 grid grid-cols-2 gap-x-5 gap-y-1.5">
            {hints.map((h) => (
              <div key={h} className="flex gap-2 font-sans text-[8.5px] leading-snug" style={{ color: BODY }}>
                <span className="mt-[4px] inline-block h-[4px] w-[4px] shrink-0 rounded-full" style={{ backgroundColor: BLUE_LIGHT }} />
                {h}
              </div>
            ))}
          </div>
        </div>
      </div>
      <PageFooter />
    </Page>
  )
}

/* ---------------------------------------------------------------------------
   ACRYTECH — NEW SURFACE MAINTENANCE
   Source: New Court Surface Maintenance v. 21.3 and Acrytech Limited Warranty.
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
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '2.45in' }}>
        <div className="grid grid-cols-2 gap-3">
          {care.map((c, i) => (
            <div key={c.t} className="glass" style={{ borderRadius: '12px', padding: '0.18in 0.22in', minHeight: '1.05in' }}>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-[9px] font-semibold tabular-nums" style={{ color: BLUE_LIGHT }}>0{i + 1}</span>
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.06em]" style={{ color: OFF }}>{c.t}</span>
              </div>
              <p className="mt-1.5 font-sans text-[9px] leading-relaxed" style={{ color: MUTED }}>{c.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <GroupLabel>Damage Prevention</GroupLabel>
          <div className="mt-3 grid grid-cols-3 gap-x-4 gap-y-2">
            {prevent.map((p) => (
              <div key={p} className="flex gap-2 font-sans text-[9px] leading-snug" style={{ color: BODY }}>
                <span className="mt-[4px] inline-block h-[4px] w-[4px] shrink-0 rounded-full" style={{ backgroundColor: BLUE_LIGHT }} />
                {p}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-stretch gap-6" style={{ borderRadius: '13px', padding: '0.26in 0.32in', background: 'rgba(50,126,168,0.12)', border: '1px solid rgba(50,126,168,0.36)' }}>
          <div className="flex flex-col justify-center pr-6" style={{ flex: '0 0 2.4in' }}>
            <div className="font-display text-[9px] font-semibold uppercase tracking-[0.16em]" style={{ color: BLUE_LIGHT }}>Warranty Registration</div>
            <div className="mt-1 font-display text-[22px] font-bold" style={{ color: OFF, lineHeight: 1 }}>Within 90 days</div>
            <div className="mt-1.5 font-sans text-[9px]" style={{ color: MUTED }}>warranty@atsports.com</div>
          </div>
          <div className="flex flex-col justify-center border-l pl-6" style={{ borderColor: 'rgba(93,163,202,0.4)' }}>
            <p className="font-sans text-[9.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.82)' }}>
              The installer completes the Acrytech Warranty Record Form, or the application date must be verifiable. The
              form may be emailed to AT Sports within 90 days of completion for record keeping. Abuse such as vehicle
              traffic, burns, corrosive chemicals, sharp objects, planters left on the surface, constant submersion or
              long-standing debris is excluded.
            </p>
          </div>
        </div>
      </div>
      <PageFooter />
    </Page>
  )
}
