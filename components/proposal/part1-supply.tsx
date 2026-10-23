import { ChevronRight } from 'lucide-react'
import { Page, PageFooter, PageHead, Kicker } from './page-shell'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'
const TOTAL = '26'

/* PAGE 25 — SUPPLY & MANUFACTURING PLAN */
export function SupplyPlanPage() {
  const commitments = [
    {
      h: 'Dedicated USTA Material Planning',
      b: 'Rolling material forecasts based on scheduled resurfacing activity, court groups and approved surface profiles.',
    },
    {
      h: 'Production Allocation',
      b: 'USTA material requirements incorporated into production planning ahead of scheduled installation windows.',
    },
    {
      h: 'Planned Inventory',
      b: 'Upcoming material needs identified and staged in advance of scheduled projects.',
    },
    {
      h: 'Campus Delivery',
      b: 'Shipment coordinated directly to the USTA National Campus with freight managed through delivery.',
    },
  ]
  const process = [
    { s: 'Forecast', d: 'Campus resurfacing schedule' },
    { s: 'Allocate', d: 'Material requirements' },
    { s: 'Manufacture', d: 'Planned production' },
    { s: 'Verify', d: 'Product / batch documentation' },
    { s: 'Stage', d: 'Upcoming Campus needs' },
    { s: 'Deliver', d: 'USTA National Campus' },
  ]
  return (
    <Page>
      <PageHead
        index="21"
        section="Supply & Manufacturing Plan"
        kicker="National Campus Supply Program"
        title={
          <>
            Planned around
            <br />
            the campus schedule.
          </>
        }
        titleSize={32}
      />
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '2.7in' }}>
        <p className="font-sans text-[11px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.82)', maxWidth: '6.6in' }}>
          AT Sports will coordinate material forecasting, production planning and delivery around the National Campus
          resurfacing schedule so upcoming court work can be anticipated and supported in advance.
        </p>

        {/* Four operating commitments */}
        <div className="mt-6 grid grid-cols-4 gap-3">
          {commitments.map((c) => (
            <div key={c.h} className="glass flex flex-col" style={{ borderRadius: '12px', padding: '0.3in 0.26in' }}>
              <span className="font-display text-[11px] font-bold uppercase tracking-[0.03em] leading-tight" style={{ color: OFF }}>{c.h}</span>
              <span className="mt-2.5 font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>{c.b}</span>
            </div>
          ))}
        </div>

        {/* Delivery commitment callout */}
        <div className="mt-6 flex items-center gap-6" style={{ borderRadius: '13px', padding: '0.34in 0.38in', background: 'rgba(50,126,168,0.12)', border: '1px solid rgba(50,126,168,0.36)' }}>
          <div className="shrink-0">
            <div className="font-display text-[9px] font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_LIGHT }}>Delivery Commitment</div>
            <div className="mt-1.5 font-display text-[23px] font-bold uppercase tracking-[0.02em]" style={{ color: OFF }}>One-Week<br />Delivery Target</div>
          </div>
          <div className="h-[0.8in] w-px" style={{ backgroundColor: 'rgba(93,163,202,0.35)' }} />
          <div>
            <p className="font-sans text-[11px] leading-relaxed" style={{ color: OFF }}>
              AT Sports&apos; supply plan is structured to support delivery of ordered products to the National Campus
              within one week of receipt of an order, consistent with the proposed agreement.
            </p>
            <p className="mt-2 font-sans text-[10px] leading-relaxed" style={{ color: MUTED }}>
              When faster turnaround is needed, AT Sports will make reasonable efforts to accommodate accelerated
              delivery requirements.
            </p>
          </div>
        </div>

        {/* Supply process */}
        <div className="mt-6" style={{ borderRadius: '13px', padding: '0.34in 0.32in', background: 'rgba(245,246,246,0.03)', border: '1px solid rgba(185,196,203,0.16)' }}>
          <div className="mb-4 font-display text-[9px] font-semibold uppercase tracking-[0.2em]" style={{ color: MUTED }}>Supply Process</div>
          <div className="flex items-start justify-between">
            {process.map((p, i) => (
              <div key={p.s} className="flex items-start" style={{ flex: i < process.length - 1 ? '1 1 0' : '0 0 auto' }}>
                <div className="flex flex-col" style={{ maxWidth: '1in' }}>
                  <span className="font-display text-[13px] font-bold uppercase tracking-[0.04em]" style={{ color: i === 0 || i === process.length - 1 ? BLUE_LIGHT : OFF }}>{p.s}</span>
                  <span className="mt-1.5 font-sans text-[9px] leading-snug" style={{ color: MUTED }}>{p.d}</span>
                </div>
                {i < process.length - 1 && <ChevronRight size={16} strokeWidth={2.25} color="rgba(93,163,202,0.7)" className="mx-1 mt-0.5 shrink-0" />}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-6 flex items-center" style={{ borderRadius: '13px', padding: '0.3in 0.36in', background: 'rgba(245,246,246,0.05)', borderLeft: '3px solid #5da3ca' }}>
          <span className="font-display text-[15px] font-bold uppercase tracking-[0.03em] text-balance" style={{ color: OFF }}>
            Supply is planned ahead of the court — not reacted to after the order.
          </span>
        </div>

        <p className="mt-3 font-sans text-[8px] leading-snug" style={{ color: 'rgba(185,196,203,0.7)' }}>
          Final production lead times, inventory levels and freight procedures subject to confirmation by AT Sports Operations prior to contract execution.
        </p>
      </div>
      <PageFooter index="21" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}

/* PAGE 26 — INITIAL MANUFACTURING SCHEDULE */
export function ManufacturingSchedulePage() {
  const stages = [
    {
      m: 'October 2026',
      note: 'Week of Oct 12',
      t: 'Contract Award + Program Kickoff',
      pts: ['Confirm primary contacts', 'Review initial resurfacing schedule', 'Establish communication workflow'],
    },
    {
      m: 'November 2026',
      t: 'System + Performance Confirmation',
      pts: ['Finalize Acrytech system specification', 'Confirm CPR ~38 / ~40 profiles', 'Confirm initial court groups and colors'],
    },
    {
      m: 'December 2026',
      t: 'Material Forecast + Allocation',
      pts: ['Establish initial quantities', 'Confirm aggregate / system requirements', 'Allocate production requirements'],
    },
    {
      m: 'January 2027',
      t: 'Production Planning',
      pts: ['Schedule USTA production', 'Coordinate raw-material needs', 'Confirm initial delivery forecast'],
    },
    {
      m: 'February 2027',
      t: 'Manufacture + Verify + Stage',
      pts: ['Produce initial requirements', 'Complete applicable verification', 'Record batch information', 'Stage for delivery'],
    },
  ]
  return (
    <Page>
      <PageHead
        index="22"
        section="Initial Manufacturing Schedule"
        kicker="Initial Program Readiness"
        title={
          <>
            Ready for
            <br />
            March 1, 2027.
          </>
        }
        titleSize={32}
      />
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '2.62in' }}>
        <div className="flex items-center justify-between">
          <p className="font-sans text-[10.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.82)', maxWidth: '5in' }}>
            The proposed schedule works backward from USTA&apos;s March 1, 2027 product-availability date, allowing time
            for system confirmation, material allocation, production and staging.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-4">
          <div className="absolute left-[1.5in] top-1 bottom-1 w-px" style={{ backgroundColor: 'rgba(185,196,203,0.22)' }} />
          <div className="flex flex-col gap-2.5">
            {stages.map((s) => (
              <div key={s.m} className="grid grid-cols-[1.4in_auto_1fr] items-start gap-4">
                <div className="pt-1 text-right">
                  <div className="font-display text-[12px] font-bold uppercase tracking-[0.03em]" style={{ color: OFF }}>{s.m}</div>
                  {s.note && <div className="mt-0.5 font-sans text-[8.5px]" style={{ color: BLUE_LIGHT }}>{s.note}</div>}
                </div>
                <span className="mt-1.5 inline-block rounded-full" style={{ width: '10px', height: '10px', backgroundColor: 'rgba(185,196,203,0.5)' }} />
                <div className="glass" style={{ borderRadius: '11px', padding: '0.18in 0.3in' }}>
                  <div className="font-display text-[12px] font-bold uppercase tracking-[0.03em]" style={{ color: OFF }}>{s.t}</div>
                  <div className="mt-1.5 flex flex-wrap gap-x-5 gap-y-1">
                    {s.pts.map((p) => (
                      <span key={p} className="font-sans text-[9.5px]" style={{ color: MUTED }}>• {p}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Milestone */}
            <div className="grid grid-cols-[1.4in_auto_1fr] items-center gap-4">
              <div className="text-right font-display text-[13px] font-bold uppercase tracking-[0.03em]" style={{ color: BLUE_LIGHT }}>March 1, 2027</div>
              <span className="inline-block rounded-full" style={{ width: '14px', height: '14px', backgroundColor: BLUE_LIGHT, boxShadow: '0 0 0 4px rgba(50,126,168,0.2)' }} />
              <div className="flex items-center justify-between" style={{ borderRadius: '12px', padding: '0.24in 0.34in', background: 'rgba(50,126,168,0.14)', border: '1px solid rgba(50,126,168,0.4)' }}>
                <span className="font-display text-[18px] font-bold uppercase tracking-[0.02em]" style={{ color: OFF }}>Product Available for Delivery</span>
                <span className="font-sans text-[9.5px] text-right" style={{ color: MUTED, maxWidth: '2in' }}>Initial program readiness aligned with USTA&apos;s required construction start.</span>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 font-sans text-[8.5px] leading-snug" style={{ color: 'rgba(185,196,203,0.7)' }}>
          Contract award anticipated the week of October 12, 2026; product available for delivery March 1, 2027. Final dates subject to confirmation by AT Sports Operations and USTA installation sequencing.
        </p>
      </div>
      <PageFooter index="22" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}
