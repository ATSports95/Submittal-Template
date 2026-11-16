import type { Metadata } from 'next'
import { SubmittalDoc } from '@/components/submittal/document'
import { parseEdition, parseProjectInfo } from '@/lib/submittal'

export const metadata: Metadata = {
  title: 'CushionX Product Submittal — AT Sports',
  description: 'CushionX cushion surface system product submittal from AT Sports.',
}

export default async function CushionXSubmittal({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const params = await searchParams
  return <SubmittalDoc productKey="cushionx" info={parseProjectInfo(params)} edition={parseEdition(params)} />
}
