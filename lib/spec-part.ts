export type SpecPart = 'General' | 'Products' | 'Execution' | 'References'

/** Contents group heading for each part. */
export const PART_HEADING: Record<SpecPart, string> = {
  General: 'Part 1 — General',
  Products: 'Part 2 — Products',
  Execution: 'Part 3 — Execution',
  References: 'Warranty & References',
}

/** Kicker prefix for each part, e.g. "Part 2 · Color Coatings". */
export const PART_KICKER: Record<SpecPart, string> = {
  General: 'Part 1',
  Products: 'Part 2',
  Execution: 'Part 3',
  References: 'References',
}
