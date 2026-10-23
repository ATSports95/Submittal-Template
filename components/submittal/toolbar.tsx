'use client'

import { useState } from 'react'
import { PRODUCTS, type ProductKey, type ProjectInfo } from '@/lib/submittal'

function toQuery(info: ProjectInfo, extra: Record<string, string> = {}) {
  const q = new URLSearchParams()
  for (const [k, v] of Object.entries({ ...info, ...extra })) if (v) q.set(k, v)
  return q.toString()
}

/** On-screen controls above the document. Hidden when printing. */
export function SubmittalToolbar({ productKey, info }: { productKey: ProductKey; info: ProjectInfo }) {
  const [showTip, setShowTip] = useState(false)
  const product = PRODUCTS[productKey]
  const filled = Boolean(info.project)

  return (
    <div className="no-print sticky top-0 z-50 w-full border-b border-white/10 bg-[#202528]/95 backdrop-blur">
      <div className="mx-auto flex max-w-[8.5in] flex-wrap items-center justify-between gap-3 px-4 py-3 font-sans">
        <div className="flex min-w-0 items-center gap-3">
          <a href="/" className="shrink-0">
            <img src="/images/atsports-logo.png" alt="AT Sports" style={{ height: 22 }} />
          </a>
          <div className="min-w-0">
            <div className="truncate text-[13px] font-semibold text-[#f5f6f6]">{product.footerLabel}</div>
            <div className="truncate text-[11px] text-[#b9c4cb]">
              {filled ? `${info.project}${info.location ? ` · ${info.location}` : ''}` : 'Blank template — add project details before sending'}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={`/?${toQuery(info, { product: productKey })}`}
            className="rounded-md border border-white/20 px-3 py-1.5 text-[12px] font-medium text-[#f5f6f6] hover:bg-white/10"
          >
            {filled ? 'Edit details' : 'Add project details'}
          </a>
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setShowTip(true)
                setTimeout(() => window.print(), 50)
              }}
              className="rounded-md bg-[#327ea8] px-3 py-1.5 text-[12px] font-semibold text-white hover:bg-[#3b8fbd]"
            >
              Download PDF
            </button>
            {showTip && (
              <div className="absolute right-0 top-[calc(100%+8px)] w-[260px] rounded-md border border-white/15 bg-[#2a3034] p-3 text-[11px] leading-relaxed text-[#d6dde1] shadow-xl">
                In the print window choose <b>Save as PDF</b>, set margins to <b>None</b> and turn on{' '}
                <b>Background graphics</b>.
                <button type="button" onClick={() => setShowTip(false)} className="mt-2 block text-[#5da3ca] underline">
                  Got it
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
