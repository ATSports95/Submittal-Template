import type { Metadata } from 'next'
import { SubmittalDoc } from '@/components/submittal/document'
import { parseProjectInfo } from '@/lib/submittal'

export const metadata: Metadata = {
  title: 'Acrytech Product Submittal — International Edition — AT Sports',
  description: 'Ready-to-send international edition of the Acrytech Coatings System product submittal package from AT Sports.',
}

export default function AcrytechInternationalSubmittal() {
  return <SubmittalDoc productKey="acrytech" info={parseProjectInfo({})} generic edition="international" />
}
