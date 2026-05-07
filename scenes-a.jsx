// scenes-a.jsx — Slides 1–5 (Cover, About, Highlights, Gold prospectus, LAP prospectus)

const D_ = () => window.INVESTOR_DATA;

// Bump when product photos are swapped — forces browsers to re-fetch
// instead of serving the previous file from cache (URL-keyed).
const IMG_VER = '20260507';

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
            width: 940, height: 720,
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
            title="Multi-product NBFC — built for both sides of the household balance sheet."
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
      <div style={{ width: '100%', height: 160, flexShrink: 0, background: GRAY100 }}>
        <img src={`uploads/${item.slot}.png?v=${IMG_VER}`} alt={item.label}
             onError={(e) => { e.target.style.display = 'none'; }}
             style={{
               width: '100%', height: '100%',
               objectFit: 'cover',
               objectPosition: item.imgPos || 'center 28%',
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

// ─── Slide 3 — Annual highlights (KPI dashboard + product mix) ──────
function SceneHighlights({ start, end }) {
  const D = D_();
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 140, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow="03 · Annual highlights"
            title="A book that has tripled in three years — anchored by gold, levered by LAP."
            fontSize={80}
            subSize={26}
          />
        </div>

        {/* Hero AUM number — left half */}
        <Reveal start={start} end={end} delay={0.9} y={14}>
          <div style={{ position: 'absolute', left: 100, top: 410, width: 720 }}>
            <Eyebrow>Total AUM · FY26</Eyebrow>
            <div style={{
              fontFamily: FONT, fontSize: 196, fontWeight: 500,
              color: NAVY, letterSpacing: '-0.04em', lineHeight: 0.95,
              marginTop: 12, fontVariantNumeric: 'tabular-nums'
            }}>
              ₹{D.highlights.aumCr}
              <span style={{ fontSize: 64, color: GRAY600, marginLeft: 14, letterSpacing: '-0.01em' }}>Cr</span>
            </div>
            <div style={{
              fontFamily: FONT, fontSize: 22, color: GOLD,
              marginTop: 22, fontWeight: 500
            }}>↑ {D.highlights.growthPct}% YoY · 5-year compounded book</div>
          </div>
        </Reveal>

        {/* Product mix — right half */}
        <Reveal start={start} end={end} delay={1.2} y={16}>
          <div style={{ position: 'absolute', right: 100, top: 410, width: 720 }}>
            <Eyebrow>Product mix · % of book</Eyebrow>
            <div style={{ marginTop: 22 }}>
              <ProductMixBar data={D.highlights.productMix}
                             start={start} end={end} delay={1.4}/>
            </div>
            <div style={{
              fontFamily: FONT, fontSize: 16, color: GRAY600,
              marginTop: 26, lineHeight: 1.55, maxWidth: 620
            }}>
              Gold loans anchor the book. LAP is the fastest-compounding line.
              Unsecured kept disciplined — only existing customers, only after a clean track record.
            </div>
          </div>
        </Reveal>

        {/* KPI tile row */}
        <Reveal start={start} end={end} delay={1.6}>
          <div style={{
            position: 'absolute', left: 100, right: 100, bottom: 110,
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            paddingTop: 26, borderTop: `1px solid ${GRAY200}`
          }}>
            <FactCell label="Branches"         value={D.highlights.branches}/>
            <FactCell label="Customers"        value={D.highlights.customers}/>
            <FactCell label="Capital adequacy" value={`${D.highlights.carPct}%`}/>
            <FactCell label="YoY growth"       value={`${D.highlights.growthPct}%`}/>
          </div>
        </Reveal>
      </div>
    </Sprite>
  );
}

function FactCell({ label, value }) {
  return (
    <div>
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
  const PALETTE = [GOLD, NAVY, GRAY400];
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
                    paddingLeft: 14, color: i === 0 ? NAVY_DEEP : '#fff',
                    fontWeight: 600, fontSize: 18, letterSpacing: '-0.01em',
                    fontVariantNumeric: 'tabular-nums', overflow: 'hidden', whiteSpace: 'nowrap'
                  }}>{p > 0.6 ? `${d.value}%` : ''}</div>
                );
              })}
            </div>
            <div style={{
              marginTop: 16,
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16
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

        {/* Yield callout — bottom left */}
        <Reveal start={start} end={end} delay={1.2}>
          <div style={{
            position: 'absolute', left: 100, bottom: 120, width: 580,
            padding: '22px 26px',
            background: GOLD_PALE, borderLeft: `4px solid ${GOLD}`,
            borderRadius: 4
          }}>
            <div style={{
              fontFamily: MONO, fontSize: 12, color: NAVY_DEEP,
              letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700
            }}>And we get paid for it</div>
            <div style={{
              fontFamily: FONT, fontSize: 26, fontWeight: 500, color: NAVY,
              marginTop: 10, lineHeight: 1.3, letterSpacing: '-0.01em'
            }}>{G.yieldHeadline}</div>
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
            title="Largest growth lever — small-ticket LAP for the self-employed Bharat banks won't underwrite."
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
              ₹76 lakh crore today → <span style={{ color: GOLD }}>₹160 lakh crore by 2030</span>.
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

        <Reveal start={start} end={end} delay={1.2}>
          <div style={{
            position: 'absolute', left: 100, bottom: 120, width: 580,
            padding: '22px 26px',
            background: GOLD_PALE, borderLeft: `4px solid ${GOLD}`,
            borderRadius: 4
          }}>
            <div style={{
              fontFamily: MONO, fontSize: 12, color: NAVY_DEEP,
              letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700
            }}>And we get paid for it</div>
            <div style={{
              fontFamily: FONT, fontSize: 26, fontWeight: 500, color: NAVY,
              marginTop: 10, lineHeight: 1.3, letterSpacing: '-0.01em'
            }}>{L.yieldHeadline}</div>
          </div>
        </Reveal>

        <Reveal start={start} end={end} delay={1.0} y={16}>
          <div style={{ position: 'absolute', right: 100, top: 430, width: 1080 }}>
            <Eyebrow>Book growth · ₹ crore — 5 historical + 5 projected</Eyebrow>
            <div style={{ marginTop: 22 }}>
              <ProjectionChart
                historical={L.historical}
                projected={L.future}
                start={start} end={end} delay={1.2}
                height={400}
              />
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
  SceneCover, SceneAbout, SceneHighlights, SceneGold, SceneLAP,
  ProductCardTop, ProductCardSide, FactCell, ProductMixBar, ProjectionChart
});
