import type { ComponentType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

const BLUE = '#327ea8'
const BLUE_LIGHT = '#5da3ca'
const OFF = '#f5f6f6'
const MUTED = '#b9c4cb'

export { Kicker } from './kicker'
import { Kicker } from './kicker'

/** Fully-rounded pill chip, e.g. component/spec tags. */
export function Pill({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'font-sans inline-flex items-center rounded-full text-[10px] font-medium',
        className,
      )}
      style={{
        color: OFF,
        padding: '4px 12px',
        background: 'rgba(245,246,246,0.05)',
        border: '1px solid rgba(185,196,203,0.2)',
      }}
    >
      {children}
    </span>
  )
}

/** Rounded-square glassy icon badge with a thin Modern Blue line icon. */
export function IconBadge({
  icon: Icon,
  size = 0.42,
}: {
  icon: ComponentType<{ size?: number; strokeWidth?: number; color?: string }>
  size?: number
}) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center"
      style={{
        width: `${size}in`,
        height: `${size}in`,
        borderRadius: '11px',
        background: 'rgba(50,126,168,0.14)',
        border: '1px solid rgba(50,126,168,0.4)',
      }}
    >
      <Icon size={size * 46} strokeWidth={1.5} color={BLUE_LIGHT} />
    </span>
  )
}

/** Glassy rounded card — the core AT Sports surface. */
export function GlassCard({
  children,
  className,
  strong = false,
  style,
}: {
  children: ReactNode
  className?: string
  strong?: boolean
  style?: React.CSSProperties
}) {
  return (
    <div className={cn(strong ? 'glass-strong' : 'glass', className)} style={style}>
      {children}
    </div>
  )
}

/**
 * Running header slot. Page numbers and the section label now live only in
 * the bottom-right footer, so this renders nothing and is kept as a no-op to
 * preserve the shared page API.
 */
export function PageCounter(_props: {
  index: string
  total?: string
  section: string
}) {
  return null
}

/** A single fixed 8.5 x 11in print canvas. Every proposal page is wrapped in this. */
export function Page({
  children,
  className,
  style,
}: {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <section className={cn('page', className)} style={style}>
      {children}
    </section>
  )
}

/**
 * Full-bleed darkened brand photography. Grayscale base with a charcoal
 * gradient wash so text stays legible — the AT Sports web treatment.
 */
export function PhotoBackdrop({
  src,
  alt,
  className,
  style,
  position = 'center',
  overlay = 0.82,
  showPlaceholder = true,
}: {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  position?: string
  overlay?: number
  showPlaceholder?: boolean
}) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)} style={style}>
      <img
        src={src || '/placeholder.svg'}
        alt={alt}
        crossOrigin="anonymous"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: position, filter: 'grayscale(0.85) contrast(1.05) brightness(0.9)' }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(150deg, rgba(32,37,40,${overlay}) 0%, rgba(24,28,31,${Math.min(
            overlay + 0.12,
            0.98,
          )}) 100%)`,
        }}
      />
      {showPlaceholder && <span className="placeholder-tag">Placeholder Image</span>}
    </div>
  )
}

/**
 * Framed photo inside a rounded glass card (used within content columns).
 */
export function PhotoCard({
  src,
  alt,
  className,
  style,
  position = 'center',
  showPlaceholder = true,
}: {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  position?: string
  showPlaceholder?: boolean
}) {
  return (
    <div
      className={cn('relative overflow-hidden', className)}
      style={{ borderRadius: '14px', border: '1px solid rgba(185,196,203,0.16)', ...style }}
    >
      <img
        src={src || '/placeholder.svg'}
        alt={alt}
        crossOrigin="anonymous"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: position, filter: 'grayscale(0.8) contrast(1.05) brightness(0.94)' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(160deg, rgba(32,37,40,0.15) 0%, rgba(24,28,31,0.55) 100%)' }}
      />
      {showPlaceholder && <span className="placeholder-tag">Placeholder Image</span>}
    </div>
  )
}

/** Value that is not yet confirmed — flagged per the brief. */
export function Verify({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'font-display inline-flex items-center gap-1 align-middle text-[7.5px] font-semibold uppercase tracking-[0.16em]',
        className,
      )}
      style={{ color: BLUE_LIGHT }}
    >
      <span className="inline-block h-[5px] w-[5px] rounded-full" style={{ backgroundColor: BLUE_LIGHT }} />
      Data to Verify
    </span>
  )
}

const AMBER = '#d9a441'

/**
 * Copy that is not yet finalized (names, titles, values, legal text).
 * Distinct amber treatment so it reads differently from the blue
 * "Data to Verify" flag and the "Placeholder Image" tag.
 */
export function ContentRequired({
  children = 'Content Required',
  className,
}: {
  children?: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'font-display inline-flex items-center gap-1 align-middle text-[7.5px] font-semibold uppercase tracking-[0.16em]',
        className,
      )}
      style={{
        color: AMBER,
        padding: '2px 7px',
        borderRadius: '5px',
        background: 'rgba(217,164,65,0.1)',
        border: '1px dashed rgba(217,164,65,0.5)',
      }}
    >
      <span className="inline-block h-[5px] w-[5px] rounded-full" style={{ backgroundColor: AMBER }} />
      {children}
    </span>
  )
}

/**
 * Full-canvas part divider (PART I / II / III). Big numeral, title and an
 * optional contents list. Uses the shared dark canvas + optional photo.
 */
export function PartDivider({
  index,
  numeral,
  part,
  title,
  description,
  contents,
  section,
  backdrop,
}: {
  index: string
  numeral: string
  part: string
  title: ReactNode
  description?: ReactNode
  contents?: { n: string; label: string }[]
  section: string
  backdrop?: { src: string; alt: string; showPlaceholder?: boolean }
}) {
  return (
    <Page>
      {backdrop && (
        <PhotoBackdrop
          src={backdrop.src}
          alt={backdrop.alt}
          overlay={0.88}
          showPlaceholder={backdrop.showPlaceholder ?? false}
        />
      )}
      <div className="absolute left-[0.5in] top-[0.5in] flex items-center gap-2 font-display text-[9.5px] font-medium uppercase tracking-[0.16em]">
        <span style={{ color: BLUE_LIGHT }}>{index}</span>
        <span aria-hidden="true" className="inline-block h-[9px] w-px" style={{ backgroundColor: 'rgba(185,196,203,0.3)' }} />
        <span style={{ color: OFF }}>{section}</span>
      </div>

      {/* Oversized part numeral */}
      <span
        className="font-display absolute font-bold tabular-nums"
        style={{
          right: '0.4in',
          top: '0.7in',
          fontSize: '260px',
          lineHeight: 0.8,
          color: 'rgba(93,163,202,0.1)',
          letterSpacing: '-0.04em',
        }}
        aria-hidden="true"
      >
        {numeral}
      </span>

      <div className="absolute left-[0.5in]" style={{ top: '3.2in', width: '6.2in' }}>
        <Kicker className="mb-4">{part}</Kicker>
        <h1
          className="font-display font-bold text-balance"
          style={{ color: OFF, fontSize: '52px', lineHeight: 0.98, letterSpacing: '-0.02em' }}
        >
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-[5.2in] text-[12.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.8)' }}>
            {description}
          </p>
        )}
      </div>

      {contents && (
        <div className="absolute left-[0.5in] right-[0.5in]" style={{ bottom: '1in' }}>
          <DividerRule />
          <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-[7px]">
            {contents.map((c) => (
              <div key={c.n} className="flex items-baseline gap-3">
                <span className="font-display text-[9px] font-semibold tabular-nums" style={{ color: BLUE_LIGHT }}>
                  {c.n}
                </span>
                <span className="font-sans text-[10.5px]" style={{ color: 'rgba(245,246,246,0.82)' }}>
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <PageFooter index={index} section={section} />
    </Page>
  )
}

/** Compact section header band for RFP response pages (Part II). */
export function SectionBand({
  n,
  label,
}: {
  n: string
  label: string
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="font-display inline-flex items-center justify-center text-[11px] font-bold tabular-nums"
        style={{
          width: '0.34in',
          height: '0.34in',
          borderRadius: '9px',
          color: BLUE_LIGHT,
          background: 'rgba(50,126,168,0.14)',
          border: '1px solid rgba(50,126,168,0.4)',
        }}
      >
        {n}
      </span>
      <span className="font-display text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: MUTED }}>
        {label}
      </span>
    </div>
  )
}

/**
 * Thin footer rule shared across pages.
 *
 * Page numbers and the document label are generated automatically: every
 * `.page` increments a CSS counter, and the document label / page total are
 * CSS variables set on `.proposal-doc` by each product route. Pages can be
 * added, removed or re-ordered without renumbering anything. The legacy
 * `index`, `section` and `total` props are accepted but ignored.
 */
export function PageFooter({
  bottom = '0.42in',
}: {
  index?: string
  section?: string
  total?: string
  bottom?: string
}) {
  return (
    <div className="absolute left-[0.5in] right-[0.5in]" style={{ bottom, color: 'rgba(185,196,203,0.7)' }}>
      <div className="mb-[6px] h-px w-full" style={{ backgroundColor: 'rgba(185,196,203,0.16)' }} />
      <div className="font-display flex items-center justify-between text-[8.5px] font-medium uppercase tracking-[0.2em]">
        <span style={{ color: OFF }}>AT Sports</span>
        <span className="doc-label" />
        <span className="page-num" />
      </div>
    </div>
  )
}

/**
 * Wraps a full submittal document: sets the footer label and page total
 * used by every PageFooter, and the print canvas styling.
 */
export function SubmittalDocument({
  label,
  pageCount,
  children,
}: {
  label: string
  pageCount: number
  children: ReactNode
}) {
  return (
    <main
      className="proposal-doc"
      style={
        {
          '--doc-label': JSON.stringify(label),
          '--doc-total': JSON.stringify(String(pageCount).padStart(2, '0')),
        } as React.CSSProperties
      }
    >
      {children}
    </main>
  )
}

/**
 * Standard interior page header: counter, kicker, and a big display title.
 * Keeps all 24 pages typographically consistent.
 */
export function PageHead({
  index,
  section,
  kicker,
  title,
  intro,
  titleSize = 34,
  width = '6.5in',
  total = '34',
}: {
  index: string
  section: string
  kicker: string
  title: ReactNode
  intro?: ReactNode
  titleSize?: number
  width?: string
  total?: string
}) {
  return (
    <>
      <PageCounter index={index} section={section} total={total} />
      <div className="absolute left-[0.5in]" style={{ top: '1.15in', width }}>
        <Kicker className="mb-3">{kicker}</Kicker>
        <h2
          className="font-display font-bold text-pretty"
          style={{ color: OFF, fontSize: `${titleSize}px`, lineHeight: 1.02, letterSpacing: '-0.015em' }}
        >
          {title}
        </h2>
        {intro && (
          <p className="mt-3 text-[12px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.78)' }}>
            {intro}
          </p>
        )}
      </div>
    </>
  )
}

/** Numbered section divider row — used on the table of contents. */
export function DividerRule({ opacity = 0.16 }: { opacity?: number }) {
  return <div className="h-px w-full" style={{ backgroundColor: `rgba(185,196,203,${opacity})` }} />
}
