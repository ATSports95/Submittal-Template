import { CoverPage, LetterPage, ExecutivePage } from '@/components/proposal/part1-front'
import { UnderstandingCampusPage } from '@/components/proposal/part1-campus'
import { AtSportsPlatformPage, ManufacturerDirectPage } from '@/components/proposal/part1-why'
import { SurfaceSystemPage, CourtPacePage, PaceEngineeredPage } from '@/components/proposal/part1-system'
import { PerformanceVerificationPage, SubstrateEvaluationPage } from '@/components/proposal/part1-verification'
import { LabTestedPage, ProductResponsibilityPage, InnovationPage } from '@/components/proposal/part1-material'
import {
  StanfordPage,
  IntennsePage,
  Court16Page,
  KingstonOpenPage,
  AdditionalExperiencePage,
  NationalPartnershipsPage,
} from '@/components/proposal/part1-experience'
import { SupplyPlanPage, ManufacturingSchedulePage } from '@/components/proposal/part1-supply'
import { AccountStructurePage, WarrantyPage } from '@/components/proposal/part1-team'
import { PartnershipInvestmentPage, ClosingPage } from '@/components/proposal/part1-partnership'
import {
  RfpDividerPage,
  RfpGeneralCompanyPage,
  RfpExperiencePage,
  RfpStaffingPage,
  RfpWarrantyProjectPage,
  RfpFeesPage,
  RfpCompliancePage,
} from '@/components/proposal/part2-rfp'
import { AppendixDividerPage, AppendixIndexPage } from '@/components/proposal/part3-appendix'
import { AddendumMaterialPage, AddendumEngineeringPage } from '@/components/proposal/addendum'

export default function Home() {
  return (
    <main className="proposal-doc">
      {/* PART I — AT SPORTS PROPOSAL */}
      <CoverPage />
      <LetterPage />
      <ExecutivePage />
      <UnderstandingCampusPage />
      <AtSportsPlatformPage />
      <ManufacturerDirectPage />
      <SurfaceSystemPage />
      <CourtPacePage />
      <PaceEngineeredPage />
      <PerformanceVerificationPage />
      <SubstrateEvaluationPage />
      <LabTestedPage />
      <ProductResponsibilityPage />
      <InnovationPage />
      <StanfordPage />
      <Court16Page />
      <KingstonOpenPage />
      <IntennsePage />
      <AdditionalExperiencePage />
      <NationalPartnershipsPage />
      <SupplyPlanPage />
      <ManufacturingSchedulePage />
      <AccountStructurePage />
      <WarrantyPage />
      <PartnershipInvestmentPage />
      <ClosingPage />

      {/* PART II — FORMAL RFP RESPONSE */}
      <RfpDividerPage />
      <RfpGeneralCompanyPage />
      <RfpExperiencePage />
      <RfpStaffingPage />
      <RfpWarrantyProjectPage />
      <RfpFeesPage />
      <RfpCompliancePage />

      {/* PART III — TECHNICAL APPENDICES */}
      <AppendixDividerPage />
      <AppendixIndexPage />

      {/* ADDENDUM A — MATERIAL COMMITMENT */}
      <AddendumMaterialPage />

      {/* ADDENDUM B — PROFESSIONAL ENGINEERING & TECHNICAL SUPPORT */}
      <AddendumEngineeringPage />
    </main>
  )
}
