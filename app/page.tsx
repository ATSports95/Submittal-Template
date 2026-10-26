import { ProjectForm } from '@/components/submittal/project-form'
import { parseProjectInfo, type ProductKey } from '@/lib/submittal'

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const params = await searchParams
  const info = parseProjectInfo(params)
  const product: ProductKey = params.product === 'cushionx' ? 'cushionx' : 'acrytech'

  return (
    <main className="min-h-screen bg-[#202528] px-4 py-10 font-sans text-[#f5f6f6] sm:py-16">
      <div className="mx-auto max-w-[760px]">
        <img src="/images/atsports-logo.png" alt="AT Sports" style={{ height: 34 }} />
        <div className="mt-10 flex items-center gap-2">
          <span className="inline-block h-px w-7 bg-[#5da3ca]" />
          <span className="font-display text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5da3ca]">
            Sales Rep Tool
          </span>
        </div>
        <h1 className="mt-3 font-display text-[40px] font-bold leading-[1.02] tracking-[-0.02em] sm:text-[48px]">
          Product submittal builder.
        </h1>
        <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-[#b9c4cb]">
          Pick a product, add the project and your contact details, then download a personalized PDF to send with the
          technical attachments.
        </p>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-8">
          <ProjectForm initial={info} initialProduct={product} />
        </div>

        <section aria-labelledby="generic-packages" className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-8">
          <h2 id="generic-packages" className="font-display text-[20px] font-bold tracking-[-0.01em]">
            Generic packages
          </h2>
          <p className="mt-1 text-[14px] leading-relaxed text-[#b9c4cb]">Ready-to-send packages with no project details.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/acrytech/general"
              className="rounded-md bg-[#327ea8] px-4 py-2 text-[13px] font-semibold text-[#f5f6f6] hover:bg-[#3b8fbd]"
            >
              Acrytech generic package
            </a>
            <a
              href="/cushionx/general"
              className="rounded-md bg-[#327ea8] px-4 py-2 text-[13px] font-semibold text-[#f5f6f6] hover:bg-[#3b8fbd]"
            >
              CushionX generic package
            </a>
          </div>
        </section>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[#b9c4cb]">
          <span>Preview a blank template:</span>
          <a href="/acrytech" className="text-[#5da3ca] underline underline-offset-4">Acrytech</a>
          <a href="/cushionx" className="text-[#5da3ca] underline underline-offset-4">CushionX</a>
        </div>
      </div>
    </main>
  )
}
