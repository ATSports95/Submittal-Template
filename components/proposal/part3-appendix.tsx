import type { ReactNode } from 'react'
import { ArrowUpRight, BookOpen, FileStack } from 'lucide-react'
import { Page, PageFooter, Kicker, PartDivider, ContentRequired } from './page-shell'
import type { ProductConfig } from '@/lib/submittal'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'
const ACRYTECH_TDS_URL =
  'https://www.dropbox.com/scl/fo/yd9rxm6s9sas5j6wqimna/AKA7wA1HlWc5k4Ny_qpC46I?rlkey=s1jg6w1ju1d92dr16t3bqn9gr&dl=0'
const PRODUCT_CATALOG_URL =
  'https://www.dropbox.com/scl/fi/wr1pj598yvy3l246345ad/AT-Sports-Product-Catalog.pdf?rlkey=bhlojfbym9vpz3wig0pvz3rkt&dl=0'

function LinkCard({
  icon,
  title,
  text,
  href,
  cta,
}: {
  icon: ReactNode
  title: string
  text: ReactNode
  href: string
  cta: string
}) {
  return (
    <div
      className="mt-3 flex items-center justify-between gap-6"
      style={{
        borderRadius: '13px',
        padding: '0.2in 0.3in',
        background: 'rgba(93,163,202,0.1)',
        border: '1px solid rgba(93,163,202,0.45)',
      }}
    >
      <div className="flex min-w-0 items-center gap-3">
        {icon}
        <div className="min-w-0">
          <div className="font-display text-[12px] font-bold leading-snug" style={{ color: OFF }}>
            {title}
          </div>
          <p className="mt-0.5 font-sans text-[10px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.78)' }}>
            {text}
          </p>
        </div>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap font-display text-[10.5px] font-bold"
        style={{ borderRadius: '999px', padding: '0.1in 0.22in', background: BLUE_LIGHT, color: '#0b1c28' }}
      >
        {cta}
        <ArrowUpRight aria-hidden="true" className="size-3.5" />
      </a>
    </div>
  )
}

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

export function AppendixIndexPage({ product, generic = false }: { product: ProductConfig; generic?: boolean }) {
  const items = product.appendices
  const half = Math.ceil(items.length / 2)
  const col = (list: typeof items) => (
    <div className="flex flex-col">
      {list.map((a, i) => (
        <div
          key={a.k}
          className="grid grid-cols-[0.44in_1fr] items-start gap-3"
          style={{ padding: items.length <= 14 ? '0.17in 0' : '0.13in 0', borderTop: i === 0 ? '1px solid rgba(185,196,203,0.16)' : '1px solid rgba(185,196,203,0.1)' }}
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
          available from {generic ? 'AT Sports' : 'your representative'}.
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
        {product.key === 'acrytech' && (
          <>
            <LinkCard
              icon={<FileStack aria-hidden="true" className="size-5 shrink-0" style={{ color: BLUE_LIGHT }} />}
              title="Complete Acrytech Technical Data Sheet library"
              text="A full list of Technical Data Sheets for the Acrytech product line."
              href={ACRYTECH_TDS_URL}
              cta="View All TDS"
            />
            <LinkCard
              icon={<BookOpen aria-hidden="true" className="size-5 shrink-0" style={{ color: BLUE_LIGHT }} />}
              title="AT Sports Product Catalog"
              text="A full list of AT Sports Products."
              href={PRODUCT_CATALOG_URL}
              cta="View Catalog"
            />
          </>
        )}
      </div>
      <PageFooter />
    </Page>
  )
}
