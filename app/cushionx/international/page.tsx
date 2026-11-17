import type { Metadata } from 'next'
import { SubmittalDoc } from '@/components/submittal/document'
import { parseProjectInfo } from '@/lib/submittal'

export const metadata: Metadata = {
  title: 'CushionX Product Submittal — International Edition — AT Sports',
  description: 'Ready-to-send international edition of the CushionX Cushion Surface System product submittal package from AT Sports.',
}

export default function CushionXInternationalSubmittal() {
  return <SubmittalDoc productKey="cushionx" info={parseProjectInfo({})} generic edition="international" />
}
