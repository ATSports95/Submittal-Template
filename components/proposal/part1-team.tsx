import type { LucideIcon } from 'lucide-react'
import { UserRound, Wrench, Truck, FlaskConical, Headset } from 'lucide-react'
import { Page, PageCounter, PageFooter, PageHead, Kicker, IconBadge } from './page-shell'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'
const TOTAL = '26'

type Member = {
  name: string
  title: string
  role: string
  desc: string
  icon: LucideIcon
  photo: string | null
  /* focal crop so every face reads at a consistent size in the circle */
  focus?: { size: string; pos: string }
}

/* Shared account-team roster — reused on Part I Page 28 and Part II Page 04 */
export const ACCOUNT_LEADERSHIP: Member[] = [
  { name: 'Brad Carroll', title: 'President', role: 'Executive Sponsor', desc: 'Executive oversight, strategic alignment and senior-level support throughout the partnership.', icon: UserRound, photo: '/images/team/brad-carroll.jpg', focus: { size: '165%', pos: '50% 13%' } },
  { name: 'Tracy Lynch', title: 'Vice President', role: 'Lead Account Contact', desc: 'Primary USTA contact responsible for account coordination, commercial needs and ongoing communication.', icon: UserRound, photo: '/images/team/tracy-lynch.png', focus: { size: '145%', pos: '50% 28%' } },
]
export const ACCOUNT_SUPPORT: Member[] = [
  { name: 'Justin Saxon', title: 'Technical Lead', role: 'Technical', desc: 'Leads surface specifications, application guidance, field support and performance testing.', icon: Wrench, photo: '/images/team/justin-saxon.jpg', focus: { size: '165%', pos: '50% 10%' } },
  { name: 'Caldwell Robinson', title: 'Product Development, Chemist', role: 'R&D', desc: 'Supports formulation, product performance, technical evaluation and ongoing surface development.', icon: FlaskConical, photo: '/images/team/caldwell-robinson.jpg', focus: { size: '165%', pos: '50% 5%' } },
  { name: 'Melissa Kromer', title: 'Logistics Manager', role: 'Logistics', desc: 'Coordinates order fulfillment, shipment scheduling and material delivery to the National Campus.', icon: Truck, photo: '/images/team/melissa-kromer.jpg', focus: { size: '165%', pos: '50% 12%' } },
  { name: 'Malory Bateman', title: 'Business Development Manager', role: 'Account Support', desc: 'Supports account coordination, partnership initiatives, documentation and ongoing program needs.', icon: Headset, photo: '/images/team/malory-bateman.png', focus: { size: '115%', pos: '50% 17%' } },
]

/* Circular headshot cropped to the face with an icon fallback */
export function TeamAvatar({
  photo,
  icon,
  size,
  focus,
  alt = '',
}: {
  photo: string | null
  icon: LucideIcon
  size: number
  focus?: { size: string; pos: string }
  alt?: string
}) {
  if (photo) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="shrink-0"
        style={{
          width: `${size}in`,
          height: `${size}in`,
          borderRadius: '50%',
          border: '1.5px solid rgba(93,163,202,0.55)',
          backgroundImage: `url(${photo})`,
          backgroundSize: focus?.size ?? 'cover',
          backgroundPosition: focus?.pos ?? 'center 15%',
          backgroundRepeat: 'no-repeat',
        }}
      />
    )
  }
  return <IconBadge icon={icon} size={size} />
}

/* PAGE 28 — USTA ACCOUNT STRUCTURE */
export function AccountStructurePage() {
  const leadership = ACCOUNT_LEADERSHIP
  const team = ACCOUNT_SUPPORT
  return (
    <Page>
      <PageHead
        index="23"
        section="USTA Account Structure"
        kicker="USTA Account Structure"
        title={
          <>
            Direct access to the
            <br />
            people behind the program.
          </>
        }
        titleSize={28}
        width="6.6in"
      />
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '2.65in' }}>
        {/* Leadership tier */}
        <div className="grid grid-cols-2 gap-3.5">
          {leadership.map((n) => (
            <div key={n.name} className="glass-strong flex items-start gap-4" style={{ borderRadius: '13px', padding: '0.34in 0.34in', borderTop: '2px solid #5da3ca' }}>
              <TeamAvatar photo={n.photo} icon={n.icon} focus={n.focus} size={0.94} alt={n.name} />
              <div className="flex flex-col">
                <span className="font-display text-[17px] font-bold" style={{ color: OFF, lineHeight: 1.15 }}>{n.name}</span>
                <span className="font-sans text-[11px]" style={{ color: MUTED }}>{n.title}</span>
                <span className="mt-1.5 font-display text-[10px] font-bold uppercase tracking-[0.08em]" style={{ color: BLUE_LIGHT }}>{n.role}</span>
                <span className="mt-2 font-sans text-[9.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.74)' }}>{n.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto my-4 h-5 w-px" style={{ backgroundColor: 'rgba(185,196,203,0.3)' }} />

        {/* Support functions */}
        <div className="grid grid-cols-2 gap-3.5">
          {team.map((f) => (
            <div key={f.name} className="glass flex items-start gap-4" style={{ borderRadius: '13px', padding: '0.3in 0.32in' }}>
              <TeamAvatar photo={f.photo} icon={f.icon} focus={f.focus} size={0.78} alt={f.name} />
              <div className="flex flex-col">
                <span className="font-display text-[15px] font-bold" style={{ color: OFF, lineHeight: 1.15 }}>{f.name}</span>
                <span className="font-sans text-[10.5px]" style={{ color: MUTED }}>{f.title}</span>
                <span className="mt-1.5 font-display text-[9.5px] font-bold uppercase tracking-[0.08em]" style={{ color: BLUE_LIGHT }}>{f.role}</span>
                <span className="mt-2 font-sans text-[9px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.74)' }}>{f.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6" style={{ borderRadius: '13px', padding: '0.34in 0.4in', background: 'rgba(50,126,168,0.1)', border: '1px solid rgba(50,126,168,0.32)' }}>
          <p className="font-sans text-[12px] leading-relaxed" style={{ color: OFF }}>
            USTA has direct access to AT Sports technical resources for system specification, application guidance, field
            troubleshooting and ongoing surface support &mdash; across executive leadership, account, technical, R&amp;D,
            logistics and business development functions.
          </p>
        </div>
      </div>
      <PageFooter index="23" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}

/* PAGE 29 — WARRANTY */
export function WarrantyPage() {
  return (
    <Page>
      <PageCounter index="24" section="Warranty" total={TOTAL} />
      <div className="absolute left-[0.5in]" style={{ top: '1.3in', width: '4.1in' }}>
        <Kicker className="mb-4">Warranty</Kicker>
        <h2 className="font-display font-bold text-balance" style={{ color: OFF, fontSize: '34px', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
          Documented
          <br />
          product warranty.
        </h2>
        <div className="mt-6 flex flex-col gap-4">
          <p className="font-sans text-[11.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.8)' }}>
            AT Sports warrants that Acrytech products conform to product specifications and are free from defects in
            material and workmanship for two years, subject to the terms and conditions of the published warranty.
          </p>
          <p className="font-sans text-[11.5px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.8)' }}>
            Coverage is valid when Acrytech products are properly applied by AT Sports-certified installers according to
            installation guidelines and standard industry practices.
          </p>
          <p className="font-sans text-[11px] leading-relaxed" style={{ color: MUTED }}>
            The warranty is limited to replacement value of affected product and excludes labor, removal / application
            costs, shipping and incidental or consequential damages.
          </p>
        </div>
      </div>

      {/* Big warranty block */}
      <div className="absolute right-[0.5in]" style={{ top: '1.6in', width: '3in' }}>
        <div className="glass-strong flex flex-col" style={{ borderRadius: '16px', padding: '0.4in 0.34in', borderTop: '3px solid #5da3ca' }}>
          <span className="font-display font-bold tabular-nums" style={{ color: OFF, fontSize: '76px', lineHeight: 0.82, letterSpacing: '-0.03em' }}>
            2-Year
          </span>
          <span className="mt-2 font-display text-[13px] font-bold uppercase tracking-[0.08em]" style={{ color: BLUE_LIGHT }}>
            Limited Product Warranty
          </span>
          <div className="mt-5 border-t pt-4 font-sans text-[9.5px] leading-relaxed" style={{ borderColor: 'rgba(185,196,203,0.16)', color: MUTED }}>
            The full warranty is included in the technical appendix. Full terms and conditions are provided in Appendix K — Acrytech Limited Warranty.
          </div>
        </div>
      </div>

      {/* Full-width completed-court image band */}
      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '5.2in' }}>
        <div className="overflow-hidden" style={{ borderRadius: '14px', height: '3.6in', border: '1px solid rgba(185,196,203,0.16)' }}>
          <img
            src="/images/court-resurfacing-application.jpg"
            alt="AT Sports certified crew applying an Acrytech surface system on a tennis court"
            crossOrigin="anonymous"
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center 55%' }}
          />
        </div>
        <p className="mt-2 font-sans text-[9.5px] leading-relaxed" style={{ color: MUTED }}>
          Warranty coverage applies when Acrytech products are installed by AT Sports-certified crews to published guidelines.
        </p>
      </div>
      <PageFooter index="24" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}
