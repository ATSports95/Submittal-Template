import type { ReactNode } from 'react'
import { SubmittalDocument } from '@/components/proposal/page-shell'
import { PartProvider } from '@/components/proposal/kicker'
import type { SpecPart } from '@/lib/spec-part'
import { CourtPacePage } from '@/components/proposal/part1-system'
import { SubstrateEvaluationPage } from '@/components/proposal/part1-verification'
import { LabTestedPage, ProductResponsibilityPage } from '@/components/proposal/part1-material'
import {
  StanfordPage,
  AdditionalExperiencePage,
  NationalPartnershipsPage,
} from '@/components/proposal/part1-experience'
import { WarrantyPage } from '@/components/proposal/part1-team'
import { TechnicalSupportPage } from '@/components/proposal/addendum'
import { AppendixDividerPage, AppendixIndexPage } from '@/components/proposal/part3-appendix'
import { CoverPage, TransmittalPage, ProductInfoPage, LetterPage, WhyPage, ManufacturerPage, ClosingPage, type ContentsEntry } from './front'
import { CoveragePage, CushionXSystemPage, CushionXPerformancePage } from './product-pages'
import {
  SpecCompliancePage,
  ProductLineColorPage,
  ProductLinePrepPage,
  ProductLineFinishPage,
  ProductLineColorsPage,
  MaterialSpecsPage,
  InstallationPrepPage,
  InstallationApplyPage,
  ConcreteDesignPage,
  ConcretePrimersPage,
  MaintenancePage,
} from './acrytech-pages'
import { TennisAndPickleballPage, PickleballPage } from './reference-pages'
import { SubmittalToolbar } from './toolbar'
import { PRODUCTS, genericProduct, type ProductKey, type ProjectInfo } from '@/lib/submittal'

type Entry = { key: string; node: ReactNode; toc?: string; part?: SpecPart }

/**
 * Assembles a full submittal. Each product lists its pages in order; the
 * `toc` label (when present) adds the page to the Contents list on the
 * transmittal page with its computed page number. `part` places the page in
 * the 3-part specification structure (Contents grouping + kicker prefix).
 */
export function SubmittalDoc({
  productKey,
  info,
  generic = false,
}: {
  productKey: ProductKey
  info: ProjectInfo
  /** Generic package: no project, customer, installer or rep details. */
  generic?: boolean
}) {
  const product = generic ? genericProduct(PRODUCTS[productKey]) : PRODUCTS[productKey]

  const body: Entry[] =
    productKey === 'acrytech'
      ? [
          { key: 'letter', node: <LetterPage product={product} info={info} generic={generic} />, toc: 'Introduction' },
          { key: 'manufacturer', node: <ManufacturerPage product={product} generic={generic} />, toc: 'About AT Sports' },
          { key: 'compliance', node: <SpecCompliancePage generic={generic} />, toc: 'Specification Compliance' },

          { key: 'materials', part: 'Products', node: <MaterialSpecsPage />, toc: 'System Overview' },
          { key: 'line-color', part: 'Products', node: <ProductLineColorPage />, toc: 'Product Line — Color Coatings' },
          { key: 'line-prep', part: 'Products', node: <ProductLinePrepPage />, toc: 'Product Line — Primers & Resurfacers' },
          { key: 'line-finish', part: 'Products', node: <ProductLineFinishPage />, toc: 'Product Line — Lines & Additives' },
          { key: 'line-colors', part: 'Products', node: <ProductLineColorsPage />, toc: 'Product Line — Acrytech Colors' },
          { key: 'pace', part: 'Products', node: <CourtPacePage />, toc: 'Court Pace & ITF Classification' },
          { key: 'testing', part: 'Products', node: <LabTestedPage />, toc: 'Performance Testing' },
          { key: 'chem', part: 'Products', node: <ProductResponsibilityPage />, toc: 'Product Chemistry & VOC' },

          { key: 'concrete-design', part: 'Execution', node: <ConcreteDesignPage />, toc: 'Concrete — Design & Construction' },
          { key: 'concrete-primers', part: 'Execution', node: <ConcretePrimersPage />, toc: 'Concrete — Primers & Field Notes' },
          { key: 'install-prep', part: 'Execution', node: <InstallationPrepPage />, toc: 'Installation — Surface Preparation' },
          { key: 'install-apply', part: 'Execution', node: <InstallationApplyPage />, toc: 'Installation — Application & Finishing' },
          { key: 'coverage', part: 'Execution', node: <CoveragePage />, toc: 'Coverage & Mixing' },
          { key: 'maintenance', part: 'Execution', node: <MaintenancePage />, toc: 'New Surface Maintenance' },

          { key: 'warranty', part: 'References', node: <WarrantyPage product={product} />, toc: 'Warranty' },
          { key: 'partners', part: 'References', node: <NationalPartnershipsPage />, toc: 'Official Surface Partnerships' },
      { key: 'case-studies', part: 'References', node: <TennisAndPickleballPage />, toc: 'Case Studies — Tennis & Pickleball' },
          { key: 'facilities', part: 'References', node: <AdditionalExperiencePage />, toc: 'Collegiate & Club Facilities' },

          { key: 'closing', node: <ClosingPage product={product} info={info} generic={generic} />, toc: 'Contact' },
          { key: 'appx', node: <AppendixDividerPage product={product} />, toc: 'Technical Appendices' },
          { key: 'appx-index', node: <AppendixIndexPage product={product} generic={generic} /> },
        ]
      : [
          { key: 'letter', node: <LetterPage product={product} info={info} generic={generic} />, toc: 'Introduction' },
          { key: 'why', node: <WhyPage product={product} />, toc: 'Why CushionX' },
          { key: 'manufacturer', node: <ManufacturerPage product={product} generic={generic} />, toc: 'Manufacturer Qualifications' },
          { key: 'system', node: <CushionXSystemPage />, toc: 'System Build' },
          { key: 'perf', node: <CushionXPerformancePage />, toc: 'Performance' },
          { key: 'pace', node: <CourtPacePage />, toc: 'Acrytech Finish — Court Pace' },
          { key: 'substrate', node: <SubstrateEvaluationPage />, toc: 'Substrate Evaluation' },
          { key: 'chem', node: <ProductResponsibilityPage />, toc: 'Acrytech Chemistry & VOC' },
          { key: 'stanford', node: <StanfordPage />, toc: 'Project Reference — Stanford' },
          { key: 'pickleball', node: <PickleballPage />, toc: 'Case Study — Pickleball Facilities' },
          { key: 'facilities', node: <AdditionalExperiencePage />, toc: 'Collegiate & Club Facilities' },
          { key: 'support', node: <TechnicalSupportPage />, toc: 'Technical Support' },
          { key: 'warranty', node: <WarrantyPage product={product} />, toc: 'Warranty' },
          { key: 'closing', node: <ClosingPage product={product} info={info} generic={generic} />, toc: 'Contact' },
          { key: 'appx', node: <AppendixDividerPage product={product} />, toc: 'Technical Appendices' },
          { key: 'appx-index', node: <AppendixIndexPage product={product} generic={generic} /> },
        ]

  // Cover = page 1, transmittal = page 2, body starts at page 3.
  const contents = body
    .map((e, i): ContentsEntry | null => (e.toc ? { label: e.toc, page: i + 3, part: e.part } : null))
    .filter((c): c is ContentsEntry => c !== null)

  const pages: Entry[] = [
    { key: 'cover', node: <CoverPage product={product} info={info} generic={generic} /> },
    {
      key: 'transmittal',
      node: generic ? (
        <ProductInfoPage product={product} contents={contents} />
      ) : (
        <TransmittalPage product={product} info={info} contents={contents} />
      ),
    },
    ...body,
  ]

  return (
    <>
      <SubmittalToolbar productKey={productKey} info={info} generic={generic} />
      <SubmittalDocument label={product.footerLabel} pageCount={pages.length}>
        {pages.map((p) => (
          <PartProvider key={p.key} part={p.part}>
            {p.node}
          </PartProvider>
        ))}
      </SubmittalDocument>
    </>
  )
}
