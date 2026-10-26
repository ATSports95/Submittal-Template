import type { Metadata } from 'next'
import { SubmittalDoc } from '@/components/submittal/document'
import { parseProjectInfo } from '@/lib/submittal'

export const metadata: Metadata = {
  title: 'Acrytech Product Submittal — Generic Package — AT Sports',
  description: 'Ready-to-send Acrytech Coatings System product submittal package from AT Sports.',
}

export default function AcrytechGenericSubmittal() {
  return <SubmittalDoc productKey="acrytech" info={parseProjectInfo({})} generic />
}
