// scenes-a.jsx — Slides 1–5 (Cover, About, Highlights, Gold prospectus, LAP prospectus)
// IMG_VER comes from scenes-core.jsx — bump it there to bust photo caches deck-wide.

const D_ = () => window.INVESTOR_DATA;

// ─── Slide 1 — Cover (asymmetric photo mosaic + brand block) ──────────
function SceneCover({ start, end }) {
  const D = D_();

  const COVER_PHOTOS = [
    { id: 'cover-hero',          col: '1 / 3', row: '1 / 3' },
    { id: 'cover-shopkeeper',    col: '3 / 4', row: '1 / 2' },
    { id: 'cover-family',        col: '4 / 5', row: '1 / 2' },
    { id: 'cover-driver',        col: '3 / 5', row: '2 / 3' },
    { id: 'cover-professional',  col: '1 / 3', row: '3 / 4' },
    { id: 'cover-branch',        col: '3 / 5', row: '3 / 4' }
  ];

  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 230, width: 720 }}>
          <Reveal start={start} end={end} delay={0.2} dur={0.9} y={20}>
            <BrandLockup height={240}/>
          </Reveal>

          <Reveal start={start} end={end} delay={0.7}>
            <div style={{ width: 88, height: 2, background: GOLD, marginTop: 40 }}/>
          </Reveal>

          <Reveal start={start} end={end} delay={0.85} dur={0.7} y={14}>
            <div style={{
              fontFamily: FONT, fontWeight: 500, fontSize: 44,
              color: NAVY, letterSpacing: '-0.025em', lineHeight: 1.1,
              marginTop: 28
            }}>
              Investor Presentation
            </div>
          </Reveal>

          <Reveal start={start} end={end} delay={1.0}>
            <div style={{
              fontFamily: MONO, fontSize: 14, color: GOLD,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              fontWeight: 500, marginTop: 12
            }}>
              {new Date().getFullYear()} · Pan-India
            </div>
          </Reveal>

          <Reveal start={start} end={end} delay={1.2} y={14}>
            <div style={{
              fontFamily: FONT, fontSize: 18, color: GRAY600,
              marginTop: 32, lineHeight: 1.55, maxWidth: 660,
              letterSpacing: '-0.005em'
            }}>{D.brand.tagline}</div>
          </Reveal>
        </div>

        <Reveal start={start} end={end} delay={0.5} dur={1.1} y={20}>
          <div style={{
            position: 'absolute', right: 100, top: 200,
            width: 940, height: 640,
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            gap: 12
          }}>
            {COVER_PHOTOS.map(p => (
              <PhotoSlot
                key={p.id}
                id={p.id}
                placeholder=""
                radius={14}
                style={{
                  gridColumn: p.col,
                  gridRow: p.row,
                  width: 'auto', height: 'auto'
                }}
              />
            ))}
          </div>
        </Reveal>

        <Reveal start={start} end={end} delay={1.4} dur={1.0} y={0}>
          <div style={{
            position: 'absolute', left: 100, bottom: 120, right: 100,
            display: 'flex', justifyContent: 'space-between',
            paddingTop: 24, borderTop: `1px solid ${GRAY200}`,
            fontFamily: MONO, fontSize: 14, color: GRAY600,
            letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600
          }}>
            <span>RBI-licensed NBFC · BFSI · Pan-India</span>
            <span>Licensed in {D.brand.establishedYear}</span>
            <span>{D.brand.yearsOperating} years lending</span>
            <span>{D.brand.website}</span>
          </div>
        </Reveal>
      </div>
    </Sprite>
  );
}

// ─── Slide 2 — Products we offer (Loans + Wealth, categorised) ───────
function SceneAbout({ start, end }) {
  const D = D_();
  const loans  = D.productCategories.loans;
  const wealth = D.productCategories.wealth;

  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        {/* Title block: top 110 → ends ~270 */}
        <div style={{ position: 'absolute', left: 100, top: 110, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow="02 · Products we offer"
            title="Multi-product NBFC — the trusted financial partner for Tamil Nadu's families, entrepreneurs and wealth-builders."
            fontSize={72}
            subSize={22}
          />
        </div>

        {/* LOANS — top 310 → ends ~620 (4-col now) */}
        <div style={{ position: 'absolute', left: 100, right: 100, top: 310 }}>
          <Reveal start={start} end={end} delay={0.7}>
            <CategoryLabel>Loans · we lend</CategoryLabel>
          </Reveal>
          <div style={{
            marginTop: 18,
            display: 'grid', gridTemplateColumns: `repeat(${loans.length}, 1fr)`, gap: 18
          }}>
            {loans.map((it, i) => (
              <Reveal key={it.key} start={start} end={end} delay={0.9 + i * 0.1} y={14}>
                <ProductCardTop item={it} category="lending"/>
              </Reveal>
            ))}
          </div>
        </div>

        {/* WEALTH — top 660 → ends ~960 (photo-left layout, fits people-photos better) */}
        <div style={{ position: 'absolute', left: 100, right: 100, top: 660 }}>
          <Reveal start={start} end={end} delay={1.3}>
            <CategoryLabel>Wealth · we safeguard and grow</CategoryLabel>
          </Reveal>
          <div style={{
            marginTop: 18,
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 22
          }}>
            {wealth.map((it, i) => (
              <Reveal key={it.key} start={start} end={end} delay={1.5 + i * 0.1} y={14}>
                <ProductCardSide item={it}/>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Sprite>
  );
}

// Loans card — photo on top.
// Direct <img> instead of PhotoSlot so we can control object-position
// and bias the crop toward the top (where faces sit) — otherwise cover-crop
// at 3:1 aspect slices the head off the people in horizontal photos.
function ProductCardTop({ item, category = 'lending' }) {
  const isWealth = category === 'wealth';
  return (
    <div style={{
      background: PAPER,
      border: `1px solid ${GRAY200}`,
      borderRadius: 12, overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      height: 290
    }}>
      <div style={{ width: '100%', height: 160, flexShrink: 0, background: GRAY100, overflow: 'hidden' }}>
        <img src={`uploads/${item.slot}.png?v=${IMG_VER}`} alt={item.label}
             onError={(e) => { e.target.style.display = 'none'; }}
             style={{
               width: '100%', height: '100%',
               objectFit: 'cover',
               objectPosition: item.imgPos || 'center 28%',
               transform: item.imgZoom ? `scale(${item.imgZoom})` : 'none',
               transformOrigin: item.imgZoomOrigin || 'center 30%',
               display: 'block'
             }}/>
      </div>
      <div style={{ padding: '14px 18px 16px', fontFamily: FONT, flex: 1,
                     display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            width: 6, height: 6, borderRadius: 999,
            background: isWealth ? NAVY : GOLD
          }}/>
          <span style={{
            fontFamily: MONO, fontSize: 10, color: GRAY600,
            letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700
          }}>{isWealth ? 'Wealth' : 'Lending'}</span>
        </div>
        <div style={{
          fontSize: 18, fontWeight: 600, color: NAVY,
          letterSpacing: '-0.005em', lineHeight: 1.2
        }}>{item.label}</div>
        <div style={{
          fontSize: 13, color: GRAY600, lineHeight: 1.45
        }}>{item.caption}</div>
      </div>
    </div>
  );
}

// Wealth card — photo on left (300×250 ≈ 1.2:1, near-square — no decapitation risk)
function ProductCardSide({ item }) {
  return (
    <div style={{
      background: PAPER,
      border: `1px solid ${GRAY200}`,
      borderRadius: 12, overflow: 'hidden',
      display: 'grid', gridTemplateColumns: '300px 1fr',
      height: 250
    }}>
      <div style={{ width: '100%', height: '100%', background: GRAY100 }}>
        <img src={`uploads/${item.slot}.png?v=${IMG_VER}`} alt={item.label}
             onError={(e) => { e.target.style.display = 'none'; }}
             style={{
               width: '100%', height: '100%',
               objectFit: 'cover',
               objectPosition: 'center 35%',
               display: 'block'
             }}/>
      </div>
      <div style={{ padding: '24px 28px', fontFamily: FONT,
                     display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            width: 6, height: 6, borderRadius: 999, background: NAVY
          }}/>
          <span style={{
            fontFamily: MONO, fontSize: 10, color: GRAY600,
            letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700
          }}>Wealth</span>
        </div>
        <div style={{
          fontSize: 24, fontWeight: 600, color: NAVY,
          letterSpacing: '-0.005em', lineHeight: 1.25
        }}>{item.label}</div>
        <div style={{
          fontSize: 15, color: GRAY600, lineHeight: 1.55
        }}>{item.caption}</div>
      </div>
    </div>
  );
}

// ─── Slide 3 — In-house technology (Dhanamfin app + tech team + stack) ─
function SceneTech({ start, end }) {
  const D = D_();
  const T = D.tech;
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 108, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow={T.headline}
            title={T.subhead}
            fontSize={72}
            subSize={22}
          />
        </div>

        {/* LEFT — the app: identity + store badges */}
        <div style={{ position: 'absolute', left: 100, top: 336, width: 760 }}>
          <Reveal start={start} end={end} delay={0.6}>
            <div><CategoryLabel>Our app · live on both stores</CategoryLabel></div>
          </Reveal>

          <Reveal start={start} end={end} delay={0.75} y={16}>
            <div style={{
              marginTop: 18, background: PAPER, border: `1px solid ${GRAY200}`,
              borderRadius: 16, padding: 28, fontFamily: FONT
            }}>
              {/* App header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 72, height: 72, borderRadius: 16, overflow: 'hidden',
                  border: `1px solid ${GRAY200}`, flexShrink: 0
                }}>
                  <img src={T.appIcon} alt="Dhanamfin app icon"
                       style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
                </div>
                <div>
                  <div style={{ fontSize: 30, fontWeight: 700, color: NAVY, letterSpacing: '-0.02em', lineHeight: 1 }}>{T.appName}</div>
                  <div style={{ fontFamily: MONO, fontSize: 11, color: GRAY600, letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 6 }}>{T.appPlatforms}</div>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 7,
                    background: '#E8F5EE', color: '#1E7A45', borderRadius: 999,
                    padding: '5px 12px', fontSize: 11, fontWeight: 700,
                    letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: MONO
                  }}>
                    <span style={{ width: 7, height: 7, borderRadius: 999, background: '#1E7A45' }}/>Live
                  </span>
                </div>
              </div>

              <div style={{ fontSize: 15, color: GRAY800, lineHeight: 1.55, marginTop: 16 }}>{T.appSubtitle}</div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
                {T.appChips.map(c => <Chip key={c} mono>{c}</Chip>)}
              </div>

              <div style={{ height: 1, background: GRAY100, margin: '20px 0' }}/>

              {/* Store badges */}
              <div style={{ display: 'flex', gap: 14 }}>
                <StoreBadge kind="apple" href={T.appStoreUrl}/>
                <StoreBadge kind="play"  href={T.playStoreUrl}/>
              </div>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — everything is built in-house */}
        <div style={{ position: 'absolute', right: 100, top: 336, width: 880 }}>
          <Reveal start={start} end={end} delay={0.85}>
            <div><CategoryLabel>Built entirely in-house</CategoryLabel></div>
          </Reveal>

          <Reveal start={start} end={end} delay={0.95} y={12}>
            <div style={{
              marginTop: 16, fontFamily: FONT, fontSize: 30, fontWeight: 600,
              color: NAVY, letterSpacing: '-0.02em', lineHeight: 1.1
            }}>{T.buildHeadline}</div>
          </Reveal>

          <Reveal start={start} end={end} delay={1.05} y={10}>
            <div style={{
              marginTop: 12, fontFamily: FONT, fontSize: 15, color: GRAY600, lineHeight: 1.5
            }}>{T.buildLead}</div>
          </Reveal>

          <div style={{
            marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16
          }}>
            {T.buildBlocks.map((b, i) => (
              <Reveal key={b.label} start={start} end={end} delay={1.1 + i * 0.08} y={12}>
                <div style={{
                  background: GRAY50, border: `1px solid ${GRAY200}`, borderRadius: 12,
                  padding: '18px 18px', minHeight: 112, fontFamily: FONT
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <span style={{ color: GOLD, fontSize: 13, fontWeight: 700 }}>✓</span>
                    <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, letterSpacing: '-0.005em', lineHeight: 1.2 }}>{b.label}</div>
                  </div>
                  <div style={{ fontSize: 12, color: GRAY600, lineHeight: 1.4, marginTop: 8 }}>{b.note}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* MIDDLE — fintech positioning */}
        <Reveal start={start} end={end} delay={1.35} y={12}>
          <div style={{
            position: 'absolute', left: 100, right: 100, top: 742,
            textAlign: 'center', fontFamily: FONT
          }}>
            <div style={{
              fontSize: 32, fontWeight: 600, color: NAVY,
              letterSpacing: '-0.025em', lineHeight: 1.1
            }}>
              From neighbourhood NBFC to <span style={{ color: GOLD }}>full-stack fintech</span>.
            </div>
            <div style={{
              fontSize: 16, color: GRAY600, marginTop: 12, letterSpacing: '0.01em'
            }}>
              Digital-first · automated end to end · built on rails we own.
            </div>
          </div>
        </Reveal>

        {/* BOTTOM — full-width anchor band */}
        <Reveal start={start} end={end} delay={1.5} y={14}>
          <div style={{
            position: 'absolute', left: 100, right: 100, bottom: 104,
            background: NAVY, color: '#fff', borderRadius: 16,
            padding: '26px 44px', display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', gap: 28, fontFamily: FONT
          }}>
            <div style={{
              fontFamily: MONO, fontSize: 12, color: GOLD_LITE,
              letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, flexShrink: 0
            }}>Built in-house</div>
            <div style={{
              fontSize: 24, fontWeight: 500, color: '#fff',
              letterSpacing: '-0.015em', textAlign: 'right', lineHeight: 1.3
            }}>{T.buildFoot}</div>
          </div>
        </Reveal>

      </div>
    </Sprite>
  );
}

// App-store / Google-Play download badge — links out to the live listing
function StoreBadge({ kind, href }) {
  const isApple = kind === 'apple';
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12,
      background: NAVY_DEEP, border: `1px solid ${NAVY_SOFT}`, borderRadius: 12,
      padding: '11px 20px', textDecoration: 'none', pointerEvents: 'auto', cursor: 'pointer', flex: 1
    }}>
      {isApple ? (
        <svg width="26" height="26" viewBox="0 0 384 512" style={{ flexShrink: 0 }}>
          <path fill="#fff" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
          <path fill="#fff" d="M4 2.5v19l15-9.5L4 2.5z"/>
        </svg>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span style={{ fontFamily: FONT, fontSize: 11, color: 'rgba(255,255,255,0.72)', letterSpacing: '0.02em' }}>{isApple ? 'Download on the' : 'Get it on'}</span>
        <span style={{ fontFamily: FONT, fontSize: 19, fontWeight: 600, color: '#fff', letterSpacing: '-0.01em' }}>{isApple ? 'App Store' : 'Google Play'}</span>
      </div>
    </a>
  );
}

// ─── Slide 3 — Annual highlights (KPI dashboard + product mix) ──────
function SceneHighlights({ start, end }) {
  const D = D_();
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 110, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow="03 · Our highlights"
            title="A book that has tripled in three years — anchored by gold, growing through LAP, secured by private vaults."
            fontSize={72}
            subSize={24}
          />
        </div>

        {/* Product mix — full width */}
        <Reveal start={start} end={end} delay={0.9} y={16}>
          <div style={{ position: 'absolute', left: 100, right: 100, top: 360 }}>
            <Eyebrow>Product mix · % of book</Eyebrow>
            <div style={{ marginTop: 18 }}>
              <ProductMixBar data={D.highlights.productMix}
                             start={start} end={end} delay={1.1} height={72}/>
            </div>
            <div style={{
              fontFamily: FONT, fontSize: 17, color: GRAY600,
              marginTop: 24, lineHeight: 1.6
            }}>
              Gold loans anchor the book — secured, granular, recurring. LAP is the fastest-compounding line, backed by real property.
              Private lockers bring fee-based income with zero credit risk. Personal loans remain disciplined, rewarding only proven borrowers.
            </div>
          </div>
        </Reveal>

        {/* Product highlight cards */}
        <div style={{
          position: 'absolute', left: 100, right: 100, top: 610,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18
        }}>
          {[
            { label: 'Gold loans',     color: GOLD,      stat: '22%',     statLabel: 'Gross yield', detail: '30-min disbursal · highest LTV · fully secured collateral' },
            { label: 'Loan against property', color: NAVY, stat: '17%',  statLabel: 'Gross yield', detail: '3–4 day disbursal · property-backed · self-employed friendly' },
            { label: 'Private lockers', color: NAVY_SOFT, stat: '100%',   statLabel: 'Asset secured', detail: 'Recurring fee income · security deposits · zero credit risk · large-format premium vaults' },
            { label: 'Personal loans',  color: GRAY400,   stat: '↑38%',  statLabel: 'YoY growth',  detail: 'Fast & flexible · rewarding proven repayment track records' }
          ].map((card, i) => (
            <Reveal key={card.label} start={start} end={end} delay={1.3 + i * 0.1} y={12}>
              <div style={{
                background: GRAY50, border: `1px solid ${GRAY200}`,
                borderRadius: 12, padding: '20px 22px',
                fontFamily: FONT, borderTop: `3px solid ${card.color}`
              }}>
                <div style={{ fontSize: 11, color: GRAY600, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700 }}>{card.label}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 10 }}>
                  <span style={{ fontSize: 36, fontWeight: 500, color: card.color, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>{card.stat}</span>
                  <span style={{ fontSize: 12, color: GRAY600, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{card.statLabel}</span>
                </div>
                <div style={{ fontSize: 13, color: GRAY800, lineHeight: 1.5, marginTop: 10 }}>{card.detail}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* KPI tile row */}
        <Reveal start={start} end={end} delay={1.6}>
          <div style={{
            position: 'absolute', left: 100, right: 100, bottom: 80,
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            paddingTop: 28, borderTop: `2px solid ${GOLD_PALE}`
          }}>
            <FactCell label="Branches"         value={D.highlights.branches}  align="left"/>
            <FactCell label="Customers"        value={D.highlights.customers}  align="center"/>
            <FactCell label="Capital adequacy" value={`${D.highlights.carPct}%`} align="center"/>
            <FactCell label="YoY growth"       value={`${D.highlights.growthPct}%`} align="right"/>
          </div>
        </Reveal>
      </div>
    </Sprite>
  );
}

function FactCell({ label, value, align = 'left' }) {
  return (
    <div style={{ textAlign: align }}>
      <div style={{
        fontSize: 13, color: GRAY600, letterSpacing: '0.14em',
        textTransform: 'uppercase', fontWeight: 600
      }}>{label}</div>
      <div style={{
        fontSize: 38, fontWeight: 500, color: NAVY,
        marginTop: 10, letterSpacing: '-0.02em', fontFamily: FONT,
        fontVariantNumeric: 'tabular-nums'
      }}>{value}</div>
    </div>
  );
}

// ─── Product mix segmented horizontal bar ────────────────────────────
function ProductMixBar({ data, start, end, delay = 0.4, growDur = 1.2, height = 56 }) {
  const PALETTE = [GOLD, NAVY, NAVY_SOFT, GRAY400];
  return (
    <Sprite start={start} end={end - 0.1}>
      {({ localTime }) => {
        const p = Easing.easeOutCubic(clamp((localTime - delay) / growDur, 0, 1));
        const total = data.reduce((s, d) => s + d.value, 0) || 1;
        return (
          <div style={{ fontFamily: FONT }}>
            <div style={{
              width: '100%', height, borderRadius: 8, overflow: 'hidden',
              display: 'flex', background: GRAY100
            }}>
              {data.map((d, i) => {
                const widthPct = (d.value / total) * 100 * p;
                return (
                  <div key={d.label} style={{
                    width: `${widthPct}%`, height: '100%',
                    background: PALETTE[i % PALETTE.length],
                    transition: 'width 200ms ease-out',
                    display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
                    paddingLeft: 14, color: i === 0 ? NAVY_DEEP : i === 3 ? NAVY : '#fff',
                    fontWeight: 600, fontSize: 18, letterSpacing: '-0.01em',
                    fontVariantNumeric: 'tabular-nums', overflow: 'hidden', whiteSpace: 'nowrap'
                  }}>{p > 0.6 ? `${d.value}%` : ''}</div>
                );
              })}
            </div>
            <div style={{
              marginTop: 16,
              display: 'grid', gridTemplateColumns: `repeat(${data.length}, 1fr)`, gap: 16
            }}>
              {data.map((d, i) => (
                <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: 10, opacity: p }}>
                  <span style={{
                    width: 12, height: 12, borderRadius: 3,
                    background: PALETTE[i % PALETTE.length], flexShrink: 0
                  }}/>
                  <span style={{
                    fontSize: 14, color: GRAY600, letterSpacing: '-0.005em', lineHeight: 1.3
                  }}>{d.label}</span>
                </div>
              ))}
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

// ─── Slide 4 — Gold loans · prospectus ───────────────────────────────
function SceneGold({ start, end }) {
  const D = D_();
  const G = D.goldProspectus;
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 140, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow="04 · Gold loans"
            title="Anchor of the book — secured, granular, recurring. And the macro is on our side."
            fontSize={80}
            subSize={26}
          />
        </div>

        {/* Macro callout — top left */}
        <Reveal start={start} end={end} delay={0.8} y={14}>
          <div style={{ position: 'absolute', left: 100, top: 410, width: 580 }}>
            <Eyebrow>Macro tailwind</Eyebrow>
            <div style={{
              fontFamily: FONT, fontWeight: 500, fontSize: 56,
              color: NAVY, letterSpacing: '-0.025em', lineHeight: 1.05, marginTop: 14
            }}>
              Gold could reach <span style={{ color: GOLD }}>$10,000/oz</span> by 2030.
            </div>
            <div style={{
              fontFamily: MONO, fontSize: 13, color: GRAY600,
              marginTop: 14, letterSpacing: '0.04em'
            }}>{G.macroCite}</div>

            <div style={{
              fontFamily: FONT, fontSize: 17, color: GRAY800,
              marginTop: 28, lineHeight: 1.6
            }}>{G.marketStat}</div>
          </div>
        </Reveal>

        {/* 10-year gold-price chart — right column. As gold rises, our book rises. */}
        <Reveal start={start} end={end} delay={1.0} y={16}>
          <div style={{ position: 'absolute', right: 100, top: 410, width: 1080 }}>
            <Eyebrow>{G.axisLabel || 'Gold price · USD per troy ounce — 5 historical + 5 projected'}</Eyebrow>
            <div style={{ marginTop: 22 }}>
              <ProjectionChart
                historical={G.historical}
                projected={G.future}
                start={start} end={end} delay={1.2}
                height={360}
                valuePrefix={G.valuePrefix || '$'}
              />
            </div>
            <div style={{
              fontFamily: FONT, fontSize: 14, color: GRAY600, fontStyle: 'italic',
              marginTop: 16, lineHeight: 1.5
            }}>
              As gold rises, our gold-loan book rises with it — same gram of gold, bigger loan ticket, recurring yield.
            </div>
          </div>
        </Reveal>
      </div>
    </Sprite>
  );
}

// ─── Slide 5 — LAP · prospectus ──────────────────────────────────────
function SceneLAP({ start, end }) {
  const D = D_();
  const L = D.lapProspectus;
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 140, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow="05 · Loan against property"
            title="Largest growth lever — turning small properties into working capital for India's self-employed."
            fontSize={72}
            subSize={26}
          />
        </div>

        <Reveal start={start} end={end} delay={0.8} y={14}>
          <div style={{ position: 'absolute', left: 100, top: 430, width: 580 }}>
            <Eyebrow>Macro tailwind</Eyebrow>
            <div style={{
              fontFamily: FONT, fontWeight: 500, fontSize: 48,
              color: NAVY, letterSpacing: '-0.025em', lineHeight: 1.05, marginTop: 14
            }}>
              ₹76 lakh crore (FY24) → <span style={{ color: GOLD }}>₹160 lakh crore by 2030</span>.
            </div>
            <div style={{
              fontFamily: MONO, fontSize: 13, color: GRAY600,
              marginTop: 14, letterSpacing: '0.04em'
            }}>{L.macroCite}</div>

            <div style={{
              fontFamily: FONT, fontSize: 17, color: GRAY800,
              marginTop: 28, lineHeight: 1.6
            }}>{L.marketStat}</div>
          </div>
        </Reveal>

        <Reveal start={start} end={end} delay={1.0} y={16}>
          <div style={{ position: 'absolute', right: 100, top: 430, width: 1080 }}>
            <Eyebrow>{L.axisLabel || 'India LAP market · ₹ lakh crore — 5 historical + 5 projected'}</Eyebrow>
            <div style={{ marginTop: 22 }}>
              <ProjectionChart
                historical={L.historical}
                projected={L.future}
                start={start} end={end} delay={1.2}
                height={400}
                valuePrefix={L.valuePrefix || '₹'}
              />
            </div>
            <div style={{
              fontFamily: FONT, fontSize: 14, color: GRAY600, fontStyle: 'italic',
              marginTop: 16, lineHeight: 1.5
            }}>
              Your money grows where ours does — inside a market doubling to ₹160 lakh crore by 2030.
            </div>
          </div>
        </Reveal>
      </div>
    </Sprite>
  );
}

// ─── Combined historical + projected bar chart with 'now' divider ────
function ProjectionChart({ historical, projected, start, end, delay = 0.4, growDur = 1.4, height = 360, valuePrefix = '₹' }) {
  const all = [...historical, ...projected];
  const max = Math.max(...all.map(d => d.value)) || 1;
  const fmt = v => `${valuePrefix}${v.toLocaleString()}`;
  return (
    <Sprite start={start} end={end - 0.1}>
      {({ localTime }) => {
        const labelArea = 36;
        return (
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${all.length}, 1fr)`,
            gap: 12, height: height + labelArea + 24, alignItems: 'end',
            fontFamily: FONT, position: 'relative'
          }}>
            {all.map((d, i) => {
              const stagger = i * 0.06;
              const localP = Easing.easeOutCubic(clamp((localTime - delay - stagger) / growDur, 0, 1));
              const isProjected = i >= historical.length;
              const h = (d.value / max) * height * localP;
              const fill = isProjected ? GOLD : NAVY;
              return (
                <div key={i} style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', gap: 8,
                  position: 'relative'
                }}>
                  <div style={{
                    fontFamily: MONO, fontSize: 12, color: isProjected ? GOLD : NAVY,
                    fontVariantNumeric: 'tabular-nums', fontWeight: 600,
                    opacity: localP
                  }}>{fmt(d.value)}</div>
                  <div style={{
                    width: '100%', height: h, background: fill,
                    borderRadius: '4px 4px 0 0',
                    opacity: isProjected ? 0.85 : 1,
                    backgroundImage: isProjected
                      ? `repeating-linear-gradient(45deg, transparent 0 6px, rgba(255,255,255,0.18) 6px 12px)`
                      : 'none'
                  }}/>
                  <div style={{
                    fontSize: 12, color: GRAY600, letterSpacing: '0.04em',
                    textTransform: 'uppercase', textAlign: 'center',
                    opacity: localP, fontWeight: isProjected ? 600 : 400
                  }}>{d.year}</div>
                </div>
              );
            })}

            {/* Vertical 'NOW' divider */}
            <div style={{
              position: 'absolute',
              left: `calc(${(historical.length / all.length) * 100}% - 1px)`,
              top: 24, bottom: labelArea,
              width: 1,
              borderLeft: `1.5px dashed ${GRAY400}`,
              pointerEvents: 'none'
            }}>
              <div style={{
                position: 'absolute', top: -22, left: -28,
                fontFamily: MONO, fontSize: 10, color: GRAY600,
                letterSpacing: '0.18em', fontWeight: 700,
                background: PAPER, padding: '2px 6px'
              }}>· NOW ·</div>
            </div>
          </div>
        );
      }}
    </Sprite>
  );
}

Object.assign(window, {
  SceneCover, SceneAbout, SceneTech, SceneHighlights, SceneGold, SceneLAP,
  ProductCardTop, ProductCardSide, StoreBadge,
  FactCell, ProductMixBar, ProjectionChart
});
