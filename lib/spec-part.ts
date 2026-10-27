export type SpecPart = 'Products' | 'Execution' | 'References'

/** Contents group heading for each part. */
export const PART_HEADING: Record<SpecPart, string> = {
  Products: 'Part 2 — Products',
  Execution: 'Part 3 — Execution',
  References: 'Warranty & References',
}

/** Kicker prefix for each part, e.g. "Products · Color Coatings". */
export const PART_KICKER: Record<SpecPart, string> = {
  Products: 'Products',
  Execution: 'Execution',
  References: 'References',
}
