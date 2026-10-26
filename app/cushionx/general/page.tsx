import type { Metadata } from 'next'
import { SubmittalDoc } from '@/components/submittal/document'
import { parseProjectInfo } from '@/lib/submittal'

export const metadata: Metadata = {
  title: 'CushionX Product Submittal — Generic Package — AT Sports',
  description: 'Ready-to-send CushionX Cushion Surface System product submittal package from AT Sports.',
}

export default function CushionXGenericSubmittal() {
  return <SubmittalDoc productKey="cushionx" info={parseProjectInfo({})} generic />
}
