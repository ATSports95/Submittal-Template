import { existsSync } from 'node:fs'
import path from 'node:path'
import type { ReactNode } from 'react'
import { Page, PageFooter, Kicker } from '@/components/proposal/page-shell'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'
const BODY = 'rgba(245,246,246,0.8)'

/** Images are supplied by the user; fall back to a named plate until they're added to /public. */
function hasImage(src: string) {
  return Boolean(src) && existsSync(path.join(process.cwd(), 'public', src))
}

type CaseStudy = {
  name: string
  logo: string
  photo: string
  photoAlt: string
  badge: string
  stats: string[]
  copy: ReactNode
  photoPosition?: string
}

function LogoPlate({ src, name }: { src: string; name: string }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center"
      style={{ width: '1.7in', height: '0.72in', borderRadius: '10px', padding: '0.08in 0.14in', background: '#ffffff' }}
    >
      {hasImage(src) ? (
        <img src={src} alt={`${name} logo`} className="max-h-full max-w-full object-contain" />
      ) : (
        <span className="text-center font-display text-[10px] font-bold uppercase tracking-[0.06em]" style={{ color: '#181c1f' }}>
          {name}
        </span>
      )}
    </div>
  )
}

function CasePanel({ study, flip }: { study: CaseStudy; flip?: boolean }) {
  return (
    <article
      className={`glass flex min-h-0 flex-1 overflow-hidden ${flip ? 'flex-row-reverse' : 'flex-row'}`}
      style={{ borderRadius: '14px' }}
    >
      <div className="relative shrink-0 overflow-hidden" style={{ width: '3.35in' }}>
        {hasImage(study.photo) ? (
          <img
            src={study.photo}
            alt={study.photoAlt}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: study.photoPosition ?? 'center' }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(50,126,168,0.12)' }}>
            <span className="font-sans text-[9px] uppercase tracking-[0.14em]" style={{ color: MUTED }}>
              Photo: {study.name}
            </span>
          </div>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-3.5" style={{ padding: '0.28in 0.32in' }}>
        <div className="flex items-center justify-between gap-3">
          <LogoPlate src={study.logo} name={study.name} />
          <span
            className="font-display text-[8.5px] font-semibold uppercase tracking-[0.14em] text-right"
            style={{ color: BLUE_LIGHT, border: '1px solid rgba(93,163,202,0.45)', borderRadius: '999px', padding: '0.05in 0.12in' }}
          >
            {study.badge}
          </span>
        </div>
        <h3 className="font-display text-[19px] font-bold leading-tight" style={{ color: OFF }}>
          {study.name}
        </h3>
        <div className="flex flex-wrap gap-2">
          {study.stats.map((s) => (
            <span
              key={s}
              className="font-display text-[10px] font-semibold"
              style={{ color: OFF, background: 'rgba(185,196,203,0.1)', borderRadius: '6px', padding: '0.04in 0.1in' }}
            >
              {s}
            </span>
          ))}
        </div>
        <p className="font-sans text-[10.5px] leading-relaxed" style={{ color: BODY }}>
          {study.copy}
        </p>
      </div>
    </article>
  )
}

function CaseStudiesPage({ kicker, title, studies }: { kicker: string; title: string; studies: [CaseStudy, CaseStudy] }) {
  return (
    <Page>
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '1.0in' }}>
        <Kicker className="mb-3">{kicker}</Kicker>
        <h2 className="font-display font-bold" style={{ color: OFF, fontSize: '30px', lineHeight: 1.02, letterSpacing: '-0.015em' }}>
          {title}
        </h2>
      </div>
      <div className="absolute left-[0.5in] right-[0.5in] flex flex-col" style={{ top: '1.95in', bottom: '0.82in', gap: '0.22in' }}>
        <CasePanel study={studies[0]} />
        <CasePanel study={studies[1]} flip />
      </div>
      <PageFooter />
    </Page>
  )
}

function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <article className="glass flex min-h-0 flex-col overflow-hidden" style={{ borderRadius: '14px' }}>
      <div className="relative shrink-0 overflow-hidden" style={{ height: '1.5in' }}>
        {hasImage(study.photo) ? (
          <img
            src={study.photo}
            alt={study.photoAlt}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: study.photoPosition ?? 'center' }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(50,126,168,0.12)' }}>
            <span className="font-sans text-[9px] uppercase tracking-[0.14em]" style={{ color: MUTED }}>
              Photo: {study.name}
            </span>
          </div>
        )}
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-2" style={{ padding: '0.16in 0.2in 0.18in' }}>
        <div className="flex items-center justify-between gap-2">
          <div
            className="flex shrink-0 items-center justify-center"
            style={{ width: '1.25in', height: '0.48in', borderRadius: '8px', padding: '0.05in 0.1in', background: '#ffffff' }}
          >
            {hasImage(study.logo) ? (
              <img src={study.logo} alt={`${study.name} logo`} className="max-h-full max-w-full object-contain" />
            ) : (
              <span className="text-center font-display text-[9px] font-bold uppercase" style={{ color: '#181c1f' }}>
                {study.name}
              </span>
            )}
          </div>
          <span
  className="whitespace-pre-line text-right font-display text-[7.5px] font-semibold uppercase leading-snug tracking-[0.12em]"
  style={{ color: BLUE_LIGHT, border: '1px solid rgba(93,163,202,0.45)', borderRadius: '999px', padding: '0.04in 0.1in' }}
          >
            {study.badge}
          </span>
        </div>
        <h3 className="font-display text-[15px] font-bold leading-tight" style={{ color: OFF }}>
          {study.name}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {study.stats.map((s) => (
            <span
              key={s}
              className="font-display text-[8.5px] font-semibold"
              style={{ color: OFF, background: 'rgba(185,196,203,0.1)', borderRadius: '5px', padding: '0.03in 0.08in' }}
            >
              {s}
            </span>
          ))}
        </div>
        <p className="font-sans text-[9.5px] leading-relaxed" style={{ color: BODY }}>
          {study.copy}
        </p>
      </div>
    </article>
  )
}

export function TennisAndPickleballPage() {
  const studies = [...TENNIS_STUDIES, ...PICKLEBALL_STUDIES]
  return (
    <Page>
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '1.0in' }}>
        <Kicker className="mb-3">Case Studies</Kicker>
        <h2 className="font-display font-bold" style={{ color: OFF, fontSize: '30px', lineHeight: 1.02, letterSpacing: '-0.015em' }}>
          Proven where it&apos;s played.
        </h2>
      </div>
      <div
        className="absolute left-[0.5in] right-[0.5in] grid grid-cols-2 grid-rows-2"
        style={{ top: '1.95in', bottom: '0.82in', gap: '0.2in' }}
      >
        {studies.map((s) => (
          <CaseCard key={s.name} study={s} />
        ))}
      </div>
      <PageFooter />
    </Page>
  )
}

export function ProfessionalTennisPage() {
  return <CaseStudiesPage kicker="Case Studies" title="Professional and indoor tennis." studies={TENNIS_STUDIES} />
}

const TENNIS_STUDIES: [CaseStudy, CaseStudy] = [
        {
          name: 'Kingston Open',
          logo: '/images/kingston-open-logo.png',
          photo: '/images/kingston-atp-net.jpg',
          photoAlt: 'Kingston Open ATP Challenger match court surfaced with Acrytech',
          badge: 'Official Surface\nATP Challenger 75',
          stats: ['6 professional courts', '2 venues'],
          copy:
            'AT Sports was the Official Surface of the Kingston Open, preparing and resurfacing six courts across the Liguanea Club and Pegasus Hotel. AT Sports crack-repair materials addressed existing surface conditions, and Acrytech coatings created the finished hard-court playing surface for back-to-back ATP Challenger 75 competition.',
        },
        {
          name: 'Stanford University',
  logo: '/images/stanford-logo.png',
  photo: '/images/stanford-cardinal.jpg',
          photoAlt: "Cardinal and gray championship courts at Stanford's Arrillaga Tennis Center",
          badge: 'Acrytech Coatings',
          stats: ['12 championship courts', 'Palo Alto, CA'],
          copy:
            "Opened in April 2026, Stanford's Arrillaga Tennis Center supports championship competition, daily athlete development and major collegiate events. Its 12 championship outdoor courts and covered practice courts are surfaced with the AT Sports Acrytech Coatings system.",
        },
]

export function PickleballPage() {
  return <CaseStudiesPage kicker="Pickleball" title="Built for pickleball." studies={PICKLEBALL_STUDIES} />
}

const PICKLEBALL_STUDIES: [CaseStudy, CaseStudy] = [
        {
          name: "Let's Go Pickleball & Padel",
  logo: '/images/lets-go-pickleball-logo.png',
  photo: '/images/lets-go-pickleball-courts.png',
          photoAlt: "Purple and gray indoor pickleball courts at Let's Go Pickleball & Padel",
          badge: 'CushionX + Acrytech',
          stats: ['21 indoor courts', '2 padel courts', 'Peachtree City, GA'],
          copy:
            'A year-round, temperature-controlled indoor club for open play, leagues, tournaments, clinics and events. Courts are surfaced with a CushionX cushion system finished with Acrytech color coatings for comfort underfoot and a consistent playing surface.',
        },
        {
          name: 'Match Point Pickleball Club',
    logo: '/images/match-point-logo.png',
    photo: '/images/match-point-courts.png',
          photoAlt: 'Red and gray indoor pickleball courts at Match Point Pickleball Club',
          badge: 'CushionX + Acrytech',
          stats: ['38 indoor courts', 'Columbus, OH'],
          copy:
            'An indoor club supporting memberships, leagues, lessons and open play, with courts built on a CushionX cushion system and finished with Acrytech color coatings.',
        },
]
