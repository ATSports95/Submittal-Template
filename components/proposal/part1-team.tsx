import { Page, PageCounter, PageFooter, Kicker, ContentRequired } from './page-shell'
import type { ProductConfig } from '@/lib/submittal'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'

/* PAGE 29 — WARRANTY */
export function WarrantyPage({ product }: { product: ProductConfig }) {
  const cx = product.key === 'cushionx'
  return (
    <Page>
            <div className="absolute left-[0.5in]" style={{ top: '1.3in', width: '4.1in' }}>
        <Kicker className="mb-4">Warranty</Kicker>
        <h2 className="font-display font-bold text-balance" style={{ color: OFF, fontSize: '34px', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
          Documented
          <br />
          product warranty.
        </h2>
        <div className="mt-6 flex flex-col gap-4">
          {cx ? (
            <>
              <p className="font-sans text-[11.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.8)' }}>
                CushionX warranty terms, coverage period and conditions are provided in the published CushionX Limited
                Warranty included in the Technical Appendices.
              </p>
              <ContentRequired>CushionX warranty summary to confirm</ContentRequired>
              <p className="font-sans text-[11.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.8)' }}>
                Coverage for the Acrytech finish coatings applied as part of the CushionX system is described in the
                published warranty documentation.
              </p>
            </>
          ) : (
            <>
              <p className="font-sans text-[11.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.8)' }}>
                AT Sports warrants that Acrytech products conform to product specifications and are free from defects in
                material and workmanship for two years, subject to the terms and conditions of the published warranty.
              </p>
              <p className="font-sans text-[11.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.8)' }}>
                Coverage is valid when Acrytech products are properly applied by AT Sports-certified installers according to
                installation guidelines and standard industry practices.
              </p>
              <p className="font-sans text-[11px] leading-relaxed" style={{ color: MUTED }}>
                The warranty is limited to replacement value of affected product and excludes labor, removal / application
                costs, shipping and incidental or consequential damages.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Big warranty block */}
      <div className="absolute right-[0.5in]" style={{ top: '1.6in', width: '3in' }}>
        <div className="glass-strong flex flex-col" style={{ borderRadius: '16px', padding: '0.4in 0.34in', borderTop: '3px solid #5da3ca' }}>
          <span className="font-display font-bold tabular-nums" style={{ color: OFF, fontSize: '76px', lineHeight: 0.82, letterSpacing: '-0.03em' }}>
            {cx ? <ContentRequired>Term</ContentRequired> : '2-Year'}
          </span>
          <span className="mt-2 font-display text-[13px] font-bold uppercase tracking-[0.08em]" style={{ color: BLUE_LIGHT }}>
            Limited Product Warranty
          </span>
          <div className="mt-5 border-t pt-4 font-sans text-[9.5px] leading-relaxed" style={{ borderColor: 'rgba(185,196,203,0.16)', color: MUTED }}>
            Full terms and conditions are provided in the {product.name} Limited Warranty included in the Technical Appendices.
          </div>
        </div>
      </div>

      {!cx && (
        <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '5.2in' }}>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                t: 'Registration',
                d: 'Valid when the installer completes the Acrytech Warranty Record Form, or the application date can be verified by the installer. The form may be emailed to warranty@atsports.com within 90 days of completion for record keeping.',
              },
              {
                t: 'Voided if',
                d: 'Acrytech products are covered with, or installed with, non-Acrytech products without prior written approval from AT Sports.',
              },
              {
                t: 'Not covered',
                d: 'Improper preparation or application, structural (substrate) changes or defects, previously applied products, weather conditions, or failure to follow installation instructions and industry practice.',
              },
              {
                t: 'Excluded abuse',
                d: 'Non-pedestrian traffic, burns, corrosive chemicals, sharp or abrasive objects, excessive weights, roots and planters left on the surface, constant submersion, or long-standing dirt and debris.',
              },
            ].map((b) => (
              <div key={b.t} className="glass" style={{ borderRadius: '12px', padding: '0.22in 0.26in', minHeight: '1.45in' }}>
                <div className="font-display text-[11px] font-bold uppercase tracking-[0.06em]" style={{ color: BLUE_LIGHT }}>{b.t}</div>
                <p className="mt-2 font-sans text-[10px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.8)' }}>{b.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>
            Summary only. The Acrytech Limited Warranty (effective on purchases on or after November 1, 2024) governs and is
            included in the Technical Appendices.
          </p>
        </div>
      )}

      {/* Full-width completed-court image band */}
      {cx && (
      <div className="absolute left-[0.5in] right-[0.5in] flex flex-col" style={{ top: '4.6in', bottom: '0.82in' }}>
        <div className="min-h-0 flex-1 overflow-hidden" style={{ borderRadius: '14px', border: '1px solid rgba(185,196,203,0.16)' }}>
          <img
            src="/images/court-resurfacing-application.jpg"
            alt="AT Sports certified crew applying an Acrytech surface system on a tennis court"
            crossOrigin="anonymous"
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center 55%' }}
          />
        </div>
        <p className="mt-2 font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>
          Warranty coverage applies when {product.name} products are installed by AT Sports-certified crews to published guidelines.
        </p>
      </div>
      )}
      <PageFooter />
    </Page>
  )
}
