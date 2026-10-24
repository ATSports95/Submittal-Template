import { Fragment, type ReactNode } from 'react'
import { SubmittalDocument } from '@/components/proposal/page-shell'
import { AtSportsPlatformPage, ManufacturerDirectPage } from '@/components/proposal/part1-why'
import { SurfaceSystemPage, CourtPacePage, PaceEngineeredPage } from '@/components/proposal/part1-system'
import { SubstrateEvaluationPage } from '@/components/proposal/part1-verification'
import { LabTestedPage, ProductResponsibilityPage, InnovationPage } from '@/components/proposal/part1-material'
import {
  StanfordPage,
  Court16Page,
  KingstonOpenPage,
  AdditionalExperiencePage,
  NationalPartnershipsPage,
} from '@/components/proposal/part1-experience'
import { WarrantyPage } from '@/components/proposal/part1-team'
import { TechnicalSupportPage } from '@/components/proposal/addendum'
import { AppendixDividerPage, AppendixIndexPage } from '@/components/proposal/part3-appendix'
import { CoverPage, TransmittalPage, LetterPage, WhyPage, ClosingPage } from './front'
import { CoveragePage, CushionXSystemPage, CushionXPerformancePage } from './product-pages'
import {
  ProductLineColorPage,
  ProductLinePrepPage,
  ProductLineFinishPage,
  MaterialSpecsPage,
  InstallationPage,
  ConcretePrepPage,
  MaintenancePage,
} from './acrytech-pages'
import { SubmittalToolbar } from './toolbar'
import { PRODUCTS, type ProductKey, type ProjectInfo } from '@/lib/submittal'

type Entry = { key: string; node: ReactNode; toc?: string }

/**
 * Assembles a full submittal. Each product lists its pages in order; the
 * `toc` label (when present) adds the page to the Contents list on the
 * transmittal page with its computed page number.
 */
export function SubmittalDoc({ productKey, info }: { productKey: ProductKey; info: ProjectInfo }) {
  const product = PRODUCTS[productKey]

  const body: Entry[] =
    productKey === 'acrytech'
      ? [
          { key: 'letter', node: <LetterPage product={product} />, toc: 'Introduction' },
          { key: 'why', node: <WhyPage product={product} />, toc: 'Why Acrytech' },
          { key: 'platform', node: <AtSportsPlatformPage product={product} />, toc: 'About AT Sports' },
          { key: 'direct', node: <ManufacturerDirectPage product={product} />, toc: 'Manufacturer Direct' },
          { key: 'system', node: <SurfaceSystemPage />, toc: 'System Build' },
          { key: 'line-color', node: <ProductLineColorPage />, toc: 'Product Line — Color Coatings' },
          { key: 'line-prep', node: <ProductLinePrepPage />, toc: 'Product Line — Primers & Resurfacers' },
          { key: 'line-finish', node: <ProductLineFinishPage />, toc: 'Product Line — Lines, Additives & Color' },
          { key: 'materials', node: <MaterialSpecsPage />, toc: 'Material Specifications' },
          { key: 'pace', node: <CourtPacePage />, toc: 'Court Pace & ITF Classification' },
          { key: 'pace2', node: <PaceEngineeredPage />, toc: 'Pace Profiles' },
          { key: 'coverage', node: <CoveragePage />, toc: 'Application & Coverage' },
          { key: 'install', node: <InstallationPage />, toc: 'Installation Requirements' },
          { key: 'substrate', node: <SubstrateEvaluationPage />, toc: 'Substrate Evaluation' },
          { key: 'concrete', node: <ConcretePrepPage />, toc: 'Concrete Design & Preparation' },
          { key: 'testing', node: <LabTestedPage />, toc: 'Performance Testing' },
          { key: 'chem', node: <ProductResponsibilityPage />, toc: 'Product Chemistry & VOC' },
          { key: 'innovation', node: <InnovationPage />, toc: 'Product Development' },
          { key: 'stanford', node: <StanfordPage />, toc: 'Case Study — Stanford' },
          { key: 'kingston', node: <KingstonOpenPage />, toc: 'Case Study — Kingston Open' },
          { key: 'court16', node: <Court16Page />, toc: 'Case Study — Court 16' },
          { key: 'facilities', node: <AdditionalExperiencePage />, toc: 'Selected Tennis Facilities' },
          { key: 'partners', node: <NationalPartnershipsPage />, toc: 'Official Surface Partnerships' },
          { key: 'support', node: <TechnicalSupportPage />, toc: 'Technical Support' },
          { key: 'maintenance', node: <MaintenancePage />, toc: 'New Surface Maintenance' },
          { key: 'warranty', node: <WarrantyPage product={product} />, toc: 'Warranty' },
          { key: 'closing', node: <ClosingPage product={product} info={info} />, toc: 'Contact' },
          { key: 'appx', node: <AppendixDividerPage product={product} />, toc: 'Technical Appendices' },
          { key: 'appx-index', node: <AppendixIndexPage product={product} /> },
        ]
      : [
          { key: 'letter', node: <LetterPage product={product} />, toc: 'Introduction' },
          { key: 'why', node: <WhyPage product={product} />, toc: 'Why CushionX' },
          { key: 'platform', node: <AtSportsPlatformPage product={product} />, toc: 'About AT Sports' },
          { key: 'direct', node: <ManufacturerDirectPage product={product} />, toc: 'Manufacturer Direct' },
          { key: 'system', node: <CushionXSystemPage />, toc: 'System Build' },
          { key: 'perf', node: <CushionXPerformancePage />, toc: 'Performance' },
          { key: 'pace', node: <CourtPacePage />, toc: 'Acrytech Finish — Court Pace' },
          { key: 'substrate', node: <SubstrateEvaluationPage />, toc: 'Substrate Evaluation' },
          { key: 'chem', node: <ProductResponsibilityPage />, toc: 'Acrytech Chemistry & VOC' },
          { key: 'court16', node: <Court16Page />, toc: 'Case Study — Court 16' },
          { key: 'support', node: <TechnicalSupportPage />, toc: 'Technical Support' },
          { key: 'warranty', node: <WarrantyPage product={product} />, toc: 'Warranty' },
          { key: 'closing', node: <ClosingPage product={product} info={info} />, toc: 'Contact' },
          { key: 'appx', node: <AppendixDividerPage product={product} />, toc: 'Technical Appendices' },
          { key: 'appx-index', node: <AppendixIndexPage product={product} /> },
        ]

  // Cover = page 1, transmittal = page 2, body starts at page 3.
  const contents = body
    .map((e, i) => (e.toc ? { label: e.toc, page: i + 3 } : null))
    .filter((c): c is { label: string; page: number } => c !== null)

  const pages: Entry[] = [
    { key: 'cover', node: <CoverPage product={product} info={info} /> },
    { key: 'transmittal', node: <TransmittalPage product={product} info={info} contents={contents} /> },
    ...body,
  ]

  return (
    <>
      <SubmittalToolbar productKey={productKey} info={info} />
      <SubmittalDocument label={product.footerLabel} pageCount={pages.length}>
        {pages.map((p) => (
          <Fragment key={p.key}>{p.node}</Fragment>
        ))}
      </SubmittalDocument>
    </>
  )
}
