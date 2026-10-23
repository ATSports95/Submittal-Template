import { Page, PageCounter, PageFooter, Kicker } from './page-shell'

const OFF = '#f5f6f6'
const BLUE_LIGHT = '#5da3ca'
const MUTED = '#b9c4cb'
const TOTAL = '26'

/* PAGE 04 — UNDERSTANDING THE CAMPUS */
export function UnderstandingCampusPage() {
  const metrics = [
    { n: '52', l: 'Tennis Courts' },
    { n: '14', l: 'Pickleball Courts' },
    { n: '2', l: 'Targeted CPR Profiles' },
  ]
  const envs = [
    { name: 'Team USA', sf: 145242 },
    { name: 'Indoor', sf: 85504 },
    { name: 'Collegiate', sf: 79200 },
    { name: 'Player Development', sf: 62400 },
    { name: 'Pickleball', sf: 25556 },
  ]
  const max = Math.max(...envs.map((e) => e.sf))
  return (
    <Page>
      <PageCounter index="04" section="Understanding the Campus" total={TOTAL} />

      <div className="absolute left-[0.5in] right-[0.5in]" style={{ top: '1.15in' }}>
        <Kicker className="mb-3.5">Understanding the Campus</Kicker>
        <h2
          className="font-display font-bold text-balance"
          style={{ color: OFF, fontSize: '32px', lineHeight: 1.0, letterSpacing: '-0.02em' }}
        >
          A campus-scale surface program.
        </h2>

        <div className="mt-7 flex items-end justify-between gap-6">
          {/* Hero metric */}
          <div>
            <div className="flex items-start">
              <span
                className="font-display font-bold tabular-nums"
                style={{ color: OFF, fontSize: '68px', lineHeight: 0.82, letterSpacing: '-0.03em' }}
              >
                397,902
              </span>
              <span className="mt-2 ml-2 font-display text-[18px] font-light" style={{ color: BLUE_LIGHT }}>
                SF
              </span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="font-display text-[9.5px] font-semibold uppercase tracking-[0.2em]" style={{ color: MUTED }}>
                Total Hard Court Surface Area
              </span>
            </div>
          </div>

          <p className="max-w-[3.2in] font-sans text-[11px] leading-relaxed" style={{ color: 'rgba(245,246,246,0.78)' }}>
            The National Campus is not a single resurfacing project. It is an interconnected hard court program spanning
            championship competition, player development, collegiate tennis, indoor play and pickleball. AT Sports&apos;
            proposal is structured around that scale from the outset.
          </p>
        </div>

        {/* Supporting metrics */}
        <div className="mt-7 flex gap-3">
          {metrics.map((m) => (
            <div key={m.l} className="glass flex-1" style={{ borderRadius: '11px', padding: '0.22in 0.2in' }}>
              <div className="font-display text-[26px] font-bold tabular-nums" style={{ color: BLUE_LIGHT }}>
                {m.n}
              </div>
              <div className="mt-1 font-display text-[8.5px] font-semibold uppercase tracking-[0.14em]" style={{ color: MUTED }}>
                {m.l}
              </div>
            </div>
          ))}
        </div>

        {/* Five court environments */}
        <div className="mt-8">
          <div className="mb-4 font-display text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: MUTED }}>
            One campus — five court environments
          </div>
          <div className="flex flex-col gap-[13px]">
            {envs.map((e) => {
              const pct = (e.sf / max) * 100
              return (
                <div key={e.name} className="flex items-center gap-5">
                  <div className="w-[1.9in] shrink-0 text-right">
                    <div className="font-display text-[12px] font-bold uppercase tracking-[0.04em]" style={{ color: OFF }}>
                      {e.name}
                    </div>
                  </div>
                  <div className="relative flex-1">
                    <div
                      className="flex items-center"
                      style={{
                        width: `${pct}%`,
                        minWidth: '1.7in',
                        height: '0.5in',
                        borderRadius: '10px',
                        background: 'linear-gradient(90deg, rgba(50,126,168,0.42) 0%, rgba(50,126,168,0.14) 100%)',
                        borderLeft: '2px solid #5da3ca',
                      }}
                    >
                      <span className="ml-4 font-display text-[17px] font-bold tabular-nums" style={{ color: OFF }}>
                        {e.sf.toLocaleString()}
                      </span>
                      <span className="ml-1 font-display text-[10px] font-light" style={{ color: BLUE_LIGHT }}>
                        SF
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Supporting statement */}
        <div
          className="mt-8 flex flex-col items-center justify-center gap-[5px] text-center"
          style={{ borderRadius: '14px', padding: '0.28in', background: 'rgba(245,246,246,0.03)', border: '1px solid rgba(185,196,203,0.16)' }}
        >
          <div className="flex items-center justify-center gap-[7px]">
            <span className="font-display text-[14px] font-semibold" style={{ color: MUTED }}>
              Different court environments.
            </span>
            <span className="font-display text-[14px] font-semibold" style={{ color: MUTED }}>
              Different resurfacing cycles.
            </span>
          </div>
          <span className="font-display text-[14px] font-bold" style={{ color: BLUE_LIGHT }}>
            One coordinated surface program.
          </span>
        </div>
      </div>
      <PageFooter index="04" section="AT Sports Proposal" total={TOTAL} />
    </Page>
  )
}
