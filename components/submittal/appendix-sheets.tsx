import { Page } from '@/components/proposal/page-shell'
import { cn } from '@/lib/utils'
import type { AppendixSheet } from '@/lib/acrytech-appendix'

/** One page of an attached technical document, shown as issued with no submittal footer. */
export function AppendixSheetPage({ sheet }: { sheet: AppendixSheet }) {
  return (
    <Page className="sheet">
      <img
        src={sheet.src}
        alt={sheet.alt}
        loading="lazy"
        decoding="async"
        className={cn('absolute inset-0 h-full w-full', sheet.a4 ? 'object-contain' : 'object-cover')}
      />
    </Page>
  )
}
