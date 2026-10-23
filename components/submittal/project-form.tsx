'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { PRODUCTS, PROJECT_FIELDS, type ProductKey, type ProjectInfo } from '@/lib/submittal'

const inputCls =
  'w-full rounded-md border border-white/15 bg-white/[0.04] px-3 py-2 text-[14px] text-[#f5f6f6] placeholder:text-[#7d8a92] focus:border-[#5da3ca] focus:outline-none focus:ring-1 focus:ring-[#5da3ca]'

export function ProjectForm({ initial, initialProduct }: { initial: ProjectInfo; initialProduct: ProductKey }) {
  const router = useRouter()
  const [product, setProduct] = useState<ProductKey>(initialProduct)
  const [info, setInfo] = useState<ProjectInfo>(initial)

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const q = new URLSearchParams()
    for (const [k, v] of Object.entries(info)) if (v.trim()) q.set(k, v.trim())
    router.push(`/${product}${q.toString() ? `?${q}` : ''}`)
  }

  const group = (g: 'project' | 'rep') =>
    PROJECT_FIELDS.filter((f) => f.group === g).map((f) => (
      <label key={f.key} className="flex flex-col gap-1.5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#b9c4cb]">{f.label}</span>
        <input
          className={inputCls}
          value={info[f.key]}
          placeholder={f.placeholder}
          onChange={(e) => setInfo({ ...info, [f.key]: e.target.value })}
          autoComplete={f.key === 'repEmail' ? 'email' : f.key === 'repPhone' ? 'tel' : f.key === 'repName' ? 'name' : 'off'}
        />
      </label>
    ))

  return (
    <form onSubmit={submit} className="flex flex-col gap-8">
      <fieldset className="flex flex-col gap-3">
        <legend className="mb-3 font-display text-[12px] font-semibold uppercase tracking-[0.2em] text-[#5da3ca]">
          1 · Product
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {(Object.keys(PRODUCTS) as ProductKey[]).map((k) => {
            const p = PRODUCTS[k]
            const active = product === k
            return (
              <button
                key={k}
                type="button"
                onClick={() => setProduct(k)}
                aria-pressed={active}
                className={`rounded-lg border p-4 text-left transition ${
                  active ? 'border-[#5da3ca] bg-[#327ea8]/15' : 'border-white/15 bg-white/[0.03] hover:border-white/30'
                }`}
              >
                <div className="font-display text-[18px] font-bold text-[#f5f6f6]">{p.name}</div>
                <div className="text-[12px] text-[#b9c4cb]">{p.category}</div>
              </button>
            )
          })}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-3 font-display text-[12px] font-semibold uppercase tracking-[0.2em] text-[#5da3ca]">
          2 · Project
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">{group('project')}</div>
      </fieldset>

      <fieldset>
        <legend className="mb-3 font-display text-[12px] font-semibold uppercase tracking-[0.2em] text-[#5da3ca]">
          3 · Your contact info
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">{group('rep')}</div>
      </fieldset>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-md bg-[#327ea8] px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-[#3b8fbd]"
        >
          Build submittal
        </button>
        <span className="text-[12px] text-[#b9c4cb]">Every field is optional. Blank fields print empty.</span>
      </div>
    </form>
  )
}
