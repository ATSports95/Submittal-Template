'use client'

import { createContext, useContext, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { PART_KICKER, type SpecPart } from '@/lib/spec-part'

const BLUE_LIGHT = '#5da3ca'

const PartContext = createContext<SpecPart | undefined>(undefined)

/** Tags every Kicker rendered inside with its 3-part spec section, e.g. "Part 2 · …". */
export function PartProvider({ part, children }: { part?: SpecPart; children: ReactNode }) {
  return <PartContext.Provider value={part}>{children}</PartContext.Provider>
}

/**
 * Kicker label — short Modern Blue rule + letterspaced caps.
 * The AT Sports section-label motif ("— WHY AT SPORTS").
 */
export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  const part = useContext(PartContext)
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span aria-hidden="true" className="inline-block h-px" style={{ width: '0.28in', backgroundColor: BLUE_LIGHT }} />
      <span className="font-display text-[9px] font-semibold uppercase" style={{ color: BLUE_LIGHT, letterSpacing: '0.24em' }}>
        {part && `${PART_KICKER[part]} · `}
        {children}
      </span>
    </div>
  )
}
