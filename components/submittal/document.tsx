import { Fragment, type ReactNode } from 'react'
import { SubmittalDocument } from '@/components/proposal/page-shell'
import { CourtPacePage } from '@/components/proposal/part1-system'
import { SubstrateEvaluationPage } from '@/components/proposal/part1-verification'
import { LabTestedPage, ProductResponsibilityPage } from '@/components/proposal/part1-material'
import {
  StanfordPage,
  Court16Page,
  AdditionalExperiencePage,
  NationalPartnershipsPage,
} from '@/components/proposal/part1-experience'
import { WarrantyPage } from '@/components/proposal/part1-team'
import { TechnicalSupportPage } from '@/components/proposal/addendum'
import { AppendixDividerPage, AppendixIndexPage } from '@/components/proposal/part3-appendix'
import { CoverPage, TransmittalPage, ProductInfoPage, LetterPage, WhyPage, ManufacturerPage, ClosingPage } from './front'
import { CoveragePage, CushionXSystemPage, CushionXPerformancePage } from './product-pages'
import {
  SpecCompliancePage,
  ProductLineColorPage,
  ProductLinePrepPage,
  ProductLineFinishPage,
  ProductLineColorsPage,
  MaterialSpecsPage,
  InstallationPage,
  ConcretePrepPage,
  MaintenancePage,
} from './acrytech-pages'
import { SubmittalToolbar } from './toolbar'
import { PRODUCTS, genericProduct, type ProductKey, type ProjectInfo } from '@/lib/submittal'

type Entry = { key: string; node: ReactNode; toc?: string }

/**
 * Assembles a full submittal. Each product lists its pages in order; the
 * `toc` label (when present) adds the page to the Contents list on the
 * transmittal page with its computed page number.
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
          { key: 'compliance', node: <SpecCompliancePage generic={generic} />, toc: 'Specification Compliance' },
          { key: 'manufacturer', node: <ManufacturerPage product={product} generic={generic} />, toc: 'Manufacturer Qualifications' },
          { key: 'line-color', node: <ProductLineColorPage />, toc: 'Product Line — Color Coatings' },
          { key: 'line-prep', node: <ProductLinePrepPage />, toc: 'Product Line — Primers & Resurfacers' },
          { key: 'line-finish', node: <ProductLineFinishPage />, toc: 'Product Line — Lines & Additives' },
  { key: 'line-colors', node: <ProductLineColorsPage />, toc: 'Product Line — Acrytech Colors' },
          { key: 'materials', node: <MaterialSpecsPage />, toc: 'Material Specifications' },
          { key: 'pace', node: <CourtPacePage />, toc: 'Court Pace & ITF Classification' },
          { key: 'testing', node: <LabTestedPage />, toc: 'Performance Testing' },
          { key: 'chem', node: <ProductResponsibilityPage />, toc: 'Product Chemistry & VOC' },
          { key: 'install', node: <InstallationPage />, toc: 'Installation Requirements' },
          { key: 'concrete', node: <ConcretePrepPage />, toc: 'Concrete Design & Preparation' },
          { key: 'coverage', node: <CoveragePage />, toc: 'Coverage & Mixing' },
          { key: 'stanford', node: <StanfordPage />, toc: 'Project Reference — Stanford' },
          { key: 'facilities', node: <AdditionalExperiencePage />, toc: 'Selected Tennis Facilities' },
          { key: 'partners', node: <NationalPartnershipsPage />, toc: 'Official Surface Partnerships' },
          { key: 'warranty', node: <WarrantyPage product={product} />, toc: 'Warranty' },
          { key: 'maintenance', node: <MaintenancePage />, toc: 'New Surface Maintenance' },
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
          { key: 'court16', node: <Court16Page />, toc: 'Case Study — Court 16' },
          { key: 'support', node: <TechnicalSupportPage />, toc: 'Technical Support' },
          { key: 'warranty', node: <WarrantyPage product={product} />, toc: 'Warranty' },
          { key: 'closing', node: <ClosingPage product={product} info={info} generic={generic} />, toc: 'Contact' },
          { key: 'appx', node: <AppendixDividerPage product={product} />, toc: 'Technical Appendices' },
          { key: 'appx-index', node: <AppendixIndexPage product={product} generic={generic} /> },
        ]

  // Cover = page 1, transmittal = page 2, body starts at page 3.
  const contents = body
    .map((e, i) => (e.toc ? { label: e.toc, page: i + 3 } : null))
    .filter((c): c is { label: string; page: number } => c !== null)

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
          <Fragment key={p.key}>{p.node}</Fragment>
        ))}
      </SubmittalDocument>
    </>
  )
}
