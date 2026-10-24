import type { Metadata } from 'next'
import { SubmittalDoc } from '@/components/submittal/document'
import { parseProjectInfo } from '@/lib/submittal'

export const metadata: Metadata = {
  title: 'Acrytech Product Submittal — AT Sports',
  description: 'Acrytech Coatings System product submittal from AT Sports.',
}

export default async function AcrytechSubmittal({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  return <SubmittalDoc productKey="acrytech" info={parseProjectInfo(await searchParams)} />
}
