import type { PackageEdition } from '@/lib/submittal'

/**
 * Technical documents bound into the generic Acrytech packages after the
 * Appendix Index. Every sheet is a page image in `public/appendix/acrytech`,
 * numbered in package order, and the letters match the Acrytech appendix list
 * in `lib/submittal.ts`. Appendices A to M are the same in both editions; only
 * the warranty (Appendix N) differs.
 */
type AppendixDocument = {
  k: string
  title: string
  first: number
  last: number
  /** A4 originals are fitted inside the Letter page instead of filling it. */
  a4?: boolean
  /** File name infix for sheets that exist only in one edition, e.g. `sheet-intl-157.png`. */
  variant?: string
}

const SHARED_DOCUMENTS: AppendixDocument[] = [
  { k: 'A', title: 'Acrytech System Specification', first: 1, last: 3 },
  { k: 'B', title: 'Technical Data Sheet, Acrytech Color', first: 4, last: 6 },
  { k: 'B', title: 'Technical Data Sheet, Acrytech ColorFlex', first: 7, last: 8 },
  { k: 'C', title: 'Technical Data Sheet, Acrytech Resurfacer', first: 9, last: 10 },
  { k: 'C', title: 'Technical Data Sheet, Acrytech Resurfacer Flex', first: 11, last: 12 },
  { k: 'D', title: 'Technical Data Sheet, Latex-Based Primer & Sealer', first: 13, last: 14 },
  { k: 'D', title: 'Technical Data Sheet, Solvent Primer', first: 15, last: 16 },
  { k: 'E', title: 'Technical Data Sheet, Acrytech Line Primer', first: 17, last: 17 },
  { k: 'E', title: 'Technical Data Sheet, Acrytech Line Paint', first: 18, last: 18 },
  { k: 'F', title: 'Safety Data Sheet, Acrytech Color', first: 19, last: 32, a4: true },
  { k: 'F', title: 'Safety Data Sheet, Acrytech ColorFlex', first: 33, last: 54, a4: true },
  { k: 'F', title: 'Safety Data Sheet, Acrytech Resurfacer', first: 55, last: 65, a4: true },
  { k: 'F', title: 'Safety Data Sheet, Acrytech Resurfacer Flex', first: 66, last: 76, a4: true },
  { k: 'F', title: 'Safety Data Sheet, Acrytech Latex-Based Primer & Sealer', first: 77, last: 90, a4: true },
  { k: 'F', title: 'Safety Data Sheet, Solvent Primer', first: 91, last: 106 },
  { k: 'F', title: 'Safety Data Sheet, Acrytech Line Primer', first: 107, last: 122, a4: true },
  { k: 'F', title: 'Safety Data Sheet, Acrytech Line Paint', first: 123, last: 138, a4: true },
  { k: 'G', title: 'Acrytech Color Chart', first: 139, last: 140 },
  { k: 'H', title: 'Acrytech Mixing Chart', first: 141, last: 141 },
  { k: 'I', title: 'ITF Court Pace Classification Certificate', first: 142, last: 142, a4: true },
  { k: 'J', title: 'Firefly Sports Surface Performance Testing', first: 143, last: 143 },
  { k: 'K', title: 'H.B. Fuller Weathering & Scrub Testing', first: 144, last: 151 },
  { k: 'K', title: 'VOC Calculation, EPA Method 24', first: 152, last: 152 },
  { k: 'K', title: 'Solar Reflectance Test Results', first: 153, last: 153 },
  { k: 'L', title: 'Concrete Design & Preparation', first: 154, last: 155 },
  { k: 'M', title: 'New Court Surface Maintenance', first: 156, last: 156 },
]

const WARRANTY_DOCUMENT: Record<PackageEdition, AppendixDocument> = {
  standard: { k: 'N', title: 'Acrytech Limited Warranty (two-year)', first: 157, last: 158 },
  international: { k: 'N', title: 'Acrytech Limited Warranty (five-year)', first: 157, last: 157, variant: 'intl' },
}

/** Sheets that are mostly photography are stored as JPEG; the rest are PNG. */
const PHOTO_SHEETS = new Set([139, 140, 149])

export type AppendixSheet = { n: number; src: string; alt: string; a4: boolean }

export function acrytechAppendixSheets(edition: PackageEdition): AppendixSheet[] {
  return [...SHARED_DOCUMENTS, WARRANTY_DOCUMENT[edition]].flatMap((doc) => {
    const count = doc.last - doc.first + 1
    return Array.from({ length: count }, (_, i): AppendixSheet => {
      const n = doc.first + i
      const name = [doc.variant, String(n).padStart(3, '0')].filter(Boolean).join('-')
      return {
        n,
        src: `/appendix/acrytech/sheet-${name}.${PHOTO_SHEETS.has(n) ? 'jpg' : 'png'}`,
        alt: `Appendix ${doc.k}: ${doc.title}, page ${i + 1} of ${count}`,
        a4: Boolean(doc.a4),
      }
    })
  })
}
