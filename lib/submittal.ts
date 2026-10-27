/**
 * Shared configuration for the general product submittal packages.
 *
 * Each product line (Acrytech, CushionX) is its own route that assembles
 * shared page components plus product-specific pages. Project details typed
 * into the cover form travel in the URL query string so a rep can bookmark,
 * re-open or share a personalized version.
 */

export type ProductKey = 'acrytech' | 'cushionx'

export type ProjectInfo = {
  project: string
  location: string
  preparedFor: string
  architect: string
  specSection: string
  date: string
  repName: string
  repTitle: string
  repEmail: string
  repPhone: string
}

export const PROJECT_FIELDS: {
  key: keyof ProjectInfo
  label: string
  placeholder: string
  group: 'project' | 'rep'
}[] = [
  { key: 'project', label: 'Project name', placeholder: 'e.g. Riverside Park Tennis Courts', group: 'project' },
  { key: 'location', label: 'Project location', placeholder: 'e.g. Atlanta, Georgia', group: 'project' },
  { key: 'preparedFor', label: 'Prepared for', placeholder: 'Owner, GC or contractor', group: 'project' },
  { key: 'architect', label: 'Architect / engineer', placeholder: 'Optional', group: 'project' },
  { key: 'specSection', label: 'Specification section', placeholder: 'e.g. 32 18 23 Athletic Surfacing', group: 'project' },
  { key: 'date', label: 'Submittal date', placeholder: 'e.g. October 2026', group: 'project' },
  { key: 'repName', label: 'Your name', placeholder: 'Sales representative', group: 'rep' },
  { key: 'repTitle', label: 'Your title', placeholder: 'e.g. Regional Sales Manager', group: 'rep' },
  { key: 'repEmail', label: 'Email', placeholder: 'name@atsports.com', group: 'rep' },
  { key: 'repPhone', label: 'Phone', placeholder: '770-734-3000', group: 'rep' },
]

export function parseProjectInfo(params: Record<string, string | string[] | undefined>): ProjectInfo {
  const get = (k: string) => {
    const v = params[k]
    return (Array.isArray(v) ? v[0] : v)?.trim() ?? ''
  }
  return {
    project: get('project'),
    location: get('location'),
    preparedFor: get('preparedFor'),
    architect: get('architect'),
    specSection: get('specSection'),
    date: get('date'),
    repName: get('repName'),
    repTitle: get('repTitle'),
    repEmail: get('repEmail'),
    repPhone: get('repPhone'),
  }
}

export type Appendix = { k: string; t: string; sub?: string; confirm?: boolean }

export type ProductConfig = {
  key: ProductKey
  name: string
  /** System name shown on the cover and in footers */
  system: string
  category: string
  coverTitle: [string, string]
  footerLabel: string
  appendices: Appendix[]
}

export const PRODUCTS: Record<ProductKey, ProductConfig> = {
  acrytech: {
    key: 'acrytech',
    name: 'Acrytech',
    system: 'Acrytech Coatings System',
    category: 'Sports Surface Coatings',
    coverTitle: ['Acrylic Sports', 'Surface System'],
    footerLabel: 'Acrytech Product Submittal',
    appendices: [
      { k: 'A', t: 'Acrytech System Specification', sub: '3-part guide specification' },
      { k: 'B', t: 'Color Technical Data Sheets' },
      { k: 'C', t: 'Resurfacer Technical Data Sheets' },
      { k: 'D', t: 'Primer / Sealer Technical Data' },
      { k: 'E', t: 'Line Paint / Line Primer Technical Data' },
      { k: 'F', t: 'Safety Data Sheets' },
      { k: 'G', t: 'Acrytech Color Chart' },
      { k: 'H', t: 'Mixing Chart / Pace Profiles' },
      { k: 'I', t: 'ITF Court Pace Classification Certificates' },
      { k: 'J', t: 'Firefly Sports Surface Performance Testing' },
      { k: 'K', t: 'Independent / Third-Party Laboratory Testing' },
      { k: 'L', t: 'Application Instructions' },
      { k: 'M', t: 'Concrete Design & Preparation Guidance' },
      { k: 'N', t: 'New Surface Maintenance Guide' },
      { k: 'O', t: 'Acrytech Limited Warranty' },
      { k: 'P', t: 'AT Sports Product Catalog', sub: 'Full Acrytech product line' },
      { k: 'Q', t: 'Certified Installer Letter', sub: 'Issued per project on request' },
    ],
  },
  cushionx: {
    key: 'cushionx',
    name: 'CushionX',
    system: 'CushionX Cushion Surface System',
    category: 'Cushion Sports Surfaces',
    coverTitle: ['Cushioned Sports', 'Surface System'],
    footerLabel: 'CushionX Product Submittal',
    appendices: [
      { k: 'A', t: 'CushionX System Specification', sub: '3-part guide specification', confirm: true },
      { k: 'B', t: 'CushionX Rubber Roll Technical Data Sheet', confirm: true },
      { k: 'C', t: 'Adhesive / Fill Coat Technical Data', confirm: true },
      { k: 'D', t: 'Acrytech Resurfacer Technical Data Sheet' },
      { k: 'E', t: 'Acrytech Color Technical Data Sheet' },
      { k: 'F', t: 'Line Paint / Line Primer Technical Data' },
      { k: 'G', t: 'Safety Data Sheets', sub: 'All products listed above' },
      { k: 'H', t: 'Acrytech Color Chart' },
      { k: 'I', t: 'Shock Absorption / Force Reduction Testing', confirm: true },
      { k: 'J', t: 'ITF Court Pace Classification Certificates', sub: 'Acrytech finish' },
      { k: 'K', t: 'CushionX Installation Guidelines', confirm: true },
      { k: 'L', t: 'New Surface Maintenance Guide' },
      { k: 'M', t: 'CushionX Limited Warranty', confirm: true },
      { k: 'N', t: 'Certified Installer Letter', sub: 'Issued per project on request' },
    ],
  },
}

export const COMPANY = {
  address: '189 Etowah Industrial Court, Canton, GA 30114',
  phone: '770-734-3000',
  web: 'atsports.com',
}

/** Edition shown on the cover of the generic (non-personalized) packages. */
export const GENERIC_EDITION = '2026'

/** Appendices that only make sense for a specific project are left out of the generic packages. */
export function genericProduct(product: ProductConfig): ProductConfig {
  return { ...product, appendices: product.appendices.filter((a) => a.t !== 'Certified Installer Letter') }
}
