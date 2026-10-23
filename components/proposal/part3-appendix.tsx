import { Page, PageFooter, Kicker, PartDivider, ContentRequired } from './page-shell'
import type { ProductConfig } from '@/lib/submittal'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'

export function AppendixDividerPage({ product }: { product: ProductConfig }) {
  return (
    <PartDivider
      index="Appendices"
      numeral="A"
      part="Technical Appendices"
      title={<>Technical Appendices</>}
      description={`Technical data sheets, safety data sheets, specifications, test reports and warranty documentation for the ${product.system}. Attached documents follow this section in the order listed.`}
      section={product.footerLabel}
      backdrop={{ src: '/images/lab-qc.png', alt: 'AT Sports quality control lab' }}
    />
  )
}

export function AppendixIndexPage({ product }: { product: ProductConfig }) {
  const items = product.appendices
  const half = Math.ceil(items.length / 2)
  const col = (list: typeof items) => (
    <div className="flex flex-col">
      {list.map((a, i) => (
        <div
          key={a.k}
          className="grid grid-cols-[0.44in_1fr] items-start gap-3"
          style={{ padding: '0.13in 0', borderTop: i === 0 ? '1px solid rgba(185,196,203,0.16)' : '1px solid rgba(185,196,203,0.1)' }}
        >
          <span className="font-display text-[16px] font-bold" style={{ color: BLUE_LIGHT, lineHeight: 1 }}>{a.k}</span>
          <div>
            <div className="flex flex-wrap items-start gap-2">
              <span className="font-display text-[10.5px] font-semibold leading-snug" style={{ color: OFF }}>{a.t}</span>
              {a.confirm && <ContentRequired>To Confirm</ContentRequired>}
            </div>
            {a.sub && <div className="mt-0.5 font-sans text-[8.5px]" style={{ color: MUTED }}>{a.sub}</div>}
          </div>
        </div>
      ))}
    </div>
  )
  return (
    <Page>
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '1.15in' }}>
        <Kicker className="mb-3">Appendix Index</Kicker>
        <h2 className="font-display font-bold" style={{ color: OFF, fontSize: '26px', lineHeight: 1.02, letterSpacing: '-0.015em' }}>
          Technical documentation index.
        </h2>
        <p className="mt-3 max-w-[6in] font-sans text-[11px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.78)' }}>
          The following documents are attached to this submittal. Current versions are maintained by AT Sports and are
          available from your representative.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-x-8">
          {col(items.slice(0, half))}
          {col(items.slice(half))}
        </div>
        <div
          className="mt-8"
          style={{ borderRadius: '13px', padding: '0.24in 0.3in', background: 'rgba(245,246,246,0.03)', border: '1px solid rgba(185,196,203,0.16)' }}
        >
          <div className="font-display text-[9px] font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE_LIGHT }}>
            Available on Request
          </div>
          <p className="mt-2 font-sans text-[10px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.78)' }}>
            Physical color samples and drawdowns · certificates of insurance · project references · LEED / VOC compliance
            letters · project-specific product substitution documentation.
          </p>
        </div>
      </div>
      <PageFooter />
    </Page>
  )
}
