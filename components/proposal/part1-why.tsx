import { ChevronRight } from 'lucide-react'
import { Page, PageCounter, PageFooter, Kicker } from './page-shell'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'
const TOTAL = '26'

/* PAGE 06 — AT SPORTS PLATFORM */
export function AtSportsPlatformPage() {
  const platform = [
    { name: 'Acrytech', d: 'Sports Surface Coatings', lead: true },
    { name: 'CushionX', d: 'Cushion Sports Surfaces' },
    { name: 'Faultline', d: 'Court Crack-Repair Systems' },
    { name: 'RollX', d: 'Portable Sports Surfaces' },
  ]
  return (
    <Page>
      <PageCounter index="05" section="AT Sports" total={TOTAL} />
      <div className="absolute left-[0.5in]" style={{ top: '1.3in', width: '4in' }}>
        <Kicker className="mb-4">AT Sports</Kicker>
        <h2 className="font-display font-bold text-balance" style={{ color: OFF, fontSize: '36px', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
          Built around
          <br />
          the surface.
        </h2>

        <div className="mt-8 flex items-baseline gap-3">
          <span className="font-display font-bold" style={{ color: BLUE_LIGHT, fontSize: '52px', letterSpacing: '-0.02em' }}>
            30+ Years
          </span>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <p className="font-sans text-[11.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.78)' }}>
            Since 1995, AT Sports has specialized in the manufacture of sports-surface coatings, cushion systems, court
            repair solutions, portable surfaces and related sports-surface products.
          </p>
          <p className="font-sans text-[11.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.78)' }}>
            AT Sports manufactures its coatings and surface materials from its facility in Canton, Georgia and supports
            projects throughout the United States and international markets.
          </p>
        </div>

        {/* Fact strip — existing facts, elevated to a data row */}
        <div className="mt-7 grid grid-cols-3 gap-3">
          {[
            { n: '1995', l: 'Founded' },
            { n: 'Canton, GA', l: 'Manufacturing HQ' },
            { n: 'U.S. + Intl', l: 'Markets Served' },
          ].map((f) => (
            <div key={f.l} style={{ borderTop: '2px solid rgba(50,126,168,0.5)', paddingTop: '0.14in' }}>
              <div className="font-display text-[19px] font-bold" style={{ color: OFF, letterSpacing: '-0.01em' }}>
                {f.n}
              </div>
              <div className="mt-1 font-display text-[8.5px] font-semibold uppercase tracking-[0.14em]" style={{ color: MUTED }}>
                {f.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform stack on right */}
      <div className="absolute right-[0.5in]" style={{ top: '1.5in', width: '3.1in' }}>
        <div className="mb-3 font-display text-[9px] font-semibold uppercase tracking-[0.2em]" style={{ color: MUTED }}>
          Manufacturing Platform
        </div>
        <div className="flex flex-col gap-3">
          {platform.map((p) => (
            <div
              key={p.name}
              className={`${p.lead ? 'glass-strong' : 'glass'} flex flex-col justify-center`}
              style={{
                borderRadius: '12px',
                height: p.lead ? '110px' : '80px',
                padding: '0 0.3in',
                borderLeft: p.lead ? '3px solid #5da3ca' : undefined,
              }}
            >
              <div className="flex items-baseline justify-between">
                <span
                  className="font-display font-bold"
                  style={{ color: p.lead ? OFF : 'rgba(245,246,246,0.86)', fontSize: p.lead ? '20px' : '15px' }}
                >
                  {p.name}
                </span>
                {p.lead && (
                  <span className="font-display text-[8px] font-semibold uppercase tracking-[0.16em]" style={{ color: BLUE_LIGHT }}>
                    Proposed USTA System
                  </span>
                )}
              </div>
              <div className="mt-0.5 font-sans text-[10px]" style={{ color: MUTED }}>
                {p.d}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-width manufacturing photo band */}
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '6.55in' }}>
        <div className="overflow-hidden" style={{ borderRadius: '14px', height: '3.05in', border: '1px solid rgba(185,196,203,0.16)' }}>
          <img
            src="/images/manufacturing-warehouse.jpg"
            alt="AT Sports warehouse in Canton, Georgia with palletized Acrytech coating drums and raw material stock"
            crossOrigin="anonymous"
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center 55%' }}
          />
        </div>
        <div className="mt-2 font-sans text-[9.5px]" style={{ color: MUTED }}>
          AT Sports coatings and surface materials are manufactured in-house in Canton, Georgia.
        </div>
      </div>
      <PageFooter index="05" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}

/* PAGE 07 — MANUFACTURER DIRECT (combined proof page) */
export function ManufacturerDirectPage() {
  const steps = [
    { t: 'Formulate', d: 'Product and performance requirements' },
    { t: 'Manufacture', d: 'AT Sports production' },
    { t: 'Quality control', d: 'Production verification' },
    { t: 'Allocate', d: 'USTA material requirements' },
    { t: 'Deliver', d: 'National Campus' },
    { t: 'Support', d: 'Technical guidance before, during and after installation' },
  ]
  const proof = [
    {
      t: 'Manufacturer Direct',
      d: 'Direct access to the company responsible for the Acrytech system.',
    },
    {
      t: 'Performance Data',
      d: 'Independent testing and current ITF Category 3 & 4 classification.',
    },
    {
      t: 'Technical Documentation',
      d: 'Published guidance covering substrate preparation, mixing, application, coverage, warranty and maintenance.',
    },
    {
      t: 'Product Development',
      d: 'Direct access to AT Sports product-development and technical resources.',
    },
  ]
  const access = [
    'Product formulation',
    'Batch identification',
    'Production scheduling',
    'Material allocation',
    'Technical support',
    'Product development',
  ]
  return (
    <Page>
      <PageCounter index="06" section="Manufacturer Direct" total={TOTAL} />

      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '1.2in' }}>
        {/* Header */}
        <Kicker className="mb-3">Manufacturer Direct</Kicker>
        <h2
          className="font-display font-bold text-balance"
          style={{ color: OFF, fontSize: '33px', lineHeight: 1.0, letterSpacing: '-0.02em' }}
        >
          Direct from formulation
          <br />
          to field support.
        </h2>
        <p className="mt-4 font-sans text-[11.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.78)', maxWidth: '5.6in' }}>
          AT Sports develops, manufactures and supports the Acrytech coatings systems directly, giving USTA access to the people
          responsible for product formulation, production, technical documentation and surface performance.
        </p>

        {/* Primary process graphic */}
        <div
          className="mt-6 flex items-start"
          style={{ borderRadius: '13px', padding: '0.26in 0.3in', background: 'rgba(50,126,168,0.1)', border: '1px solid rgba(50,126,168,0.3)' }}
        >
          {steps.map((s, i) => (
            <div key={s.t} className="flex flex-1 items-start">
              <div className="flex flex-col">
                <span
                  className="whitespace-nowrap font-display text-[13px] font-bold uppercase tracking-[0.06em]"
                  style={{ color: i === 0 || i === steps.length - 1 ? BLUE_LIGHT : OFF }}
                >
                  {s.t}
                </span>
                <span className="mt-1 font-sans text-[8px] leading-tight" style={{ color: MUTED }}>
                  {s.d}
                </span>
              </div>
              {i < steps.length - 1 && (
                <ChevronRight size={16} strokeWidth={2.5} color={MUTED} className="ml-auto mr-2 mt-[1px] shrink-0" />
              )}
            </div>
          ))}
        </div>

        <p className="mt-3 font-sans text-[10px] leading-relaxed" style={{ color: MUTED }}>
          Manufacturer technical support includes system specification, application guidance, field troubleshooting and
          post-installation technical assistance.
        </p>

        {/* Secondary proof points */}
        <div className="mt-7 grid grid-cols-4 gap-5">
          {proof.map((p) => (
            <div key={p.t} style={{ borderTop: '2px solid rgba(50,126,168,0.5)', paddingTop: '0.14in' }}>
              <div className="whitespace-nowrap font-display text-[11px] font-bold uppercase tracking-[0.04em]" style={{ color: BLUE_LIGHT }}>
                {p.t}
              </div>
              <p className="mt-2 font-sans text-[9.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.72)' }}>
                {p.d}
              </p>
            </div>
          ))}
        </div>

        {/* Lower — production images + direct access */}
        <div className="mt-7 grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2.5">
            <div className="overflow-hidden" style={{ borderRadius: '12px', height: '2.1in', border: '1px solid rgba(185,196,203,0.16)' }}>
              <img
                src="/images/plant-batch-samples.jpg"
                alt="Batch-labeled coating samples on the QC rack at the AT Sports plant"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>
              Acrytech Color is formulated and batched than tied to a documented production run before shipment.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="overflow-hidden" style={{ borderRadius: '12px', height: '2.1in', border: '1px solid rgba(185,196,203,0.16)' }}>
              <img
                src="/images/color-match-board.jpg"
                alt="AT Sports technician reviewing a wall board of court-color coating samples against reference standards in the lab"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center 35%' }}
              />
            </div>
            <p className="font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>
              Every batch is color-matched against a controlled reference standard before it is approved for release.
            </p>
          </div>

        </div>

        {/* Bottom statement */}
        <div className="mt-7 text-center font-display text-[10px] font-semibold uppercase tracking-[0.24em]" style={{ color: MUTED }}>
          Formulation&nbsp;&middot;&nbsp;Production&nbsp;&middot;&nbsp;Documentation&nbsp;&middot;&nbsp;Technical Support
        </div>
      </div>
      <PageFooter index="06" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}
