// scenes-a.jsx — Slides 1–7 (Cover, About, Highlights, Gold, LAP, Lockers, Vehicle)

const D_ = () => window.INVESTOR_DATA;

// ─── Slide 1 — Cover (asymmetric photo mosaic + brand block) ──────────
function SceneCover({ start, end }) {
  const D = D_();

  // 6-cell asymmetric mosaic (4 cols × 3 rows). Slot ids → file paths under uploads/.
  const COVER_PHOTOS = [
    { id: 'cover-hero',          col: '1 / 3', row: '1 / 3' },  // big 2×2 portrait
    { id: 'cover-shopkeeper',    col: '3 / 4', row: '1 / 2' },  // small top
    { id: 'cover-family',        col: '4 / 5', row: '1 / 2' },  // small top
    { id: 'cover-driver',        col: '3 / 5', row: '2 / 3' },  // wide mid-right
    { id: 'cover-professional',  col: '1 / 3', row: '3 / 4' },  // wide bottom-left
    { id: 'cover-branch',        col: '3 / 5', row: '3 / 4' }   // wide bottom-right
  ];

  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        {/* ─── LEFT COLUMN — brand + title block ─── */}
        <div style={{ position: 'absolute', left: 100, top: 230, width: 720 }}>
          {/* Brand lockup */}
          <Reveal start={start} end={end} delay={0.2} dur={0.9} y={20}>
            <BrandLockup height={240}/>
          </Reveal>

          {/* Gold accent rule */}
          <Reveal start={start} end={end} delay={0.7}>
            <div style={{ width: 88, height: 2, background: GOLD, marginTop: 40 }}/>
          </Reveal>

          {/* Title */}
          <Reveal start={start} end={end} delay={0.85} dur={0.7} y={14}>
            <div style={{
              fontFamily: FONT, fontWeight: 500, fontSize: 44,
              color: NAVY, letterSpacing: '-0.025em', lineHeight: 1.1,
              marginTop: 28
            }}>
              Investor Presentation
            </div>
          </Reveal>

          {/* Date subtitle */}
          <Reveal start={start} end={end} delay={1.0}>
            <div style={{
              fontFamily: MONO, fontSize: 14, color: GOLD,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              fontWeight: 500, marginTop: 12
            }}>
              {new Date().getFullYear()} · {D.brand.city}
            </div>
          </Reveal>

          {/* Tagline */}
          <Reveal start={start} end={end} delay={1.2} y={14}>
            <div style={{
              fontFamily: FONT, fontSize: 18, color: GRAY600,
              marginTop: 32, lineHeight: 1.55, maxWidth: 660,
              letterSpacing: '-0.005em'
            }}>{D.brand.tagline}</div>
          </Reveal>
        </div>

        {/* ─── RIGHT COLUMN — photo mosaic ─── */}
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

        {/* Bottom strip — minimal trust line */}
        <Reveal start={start} end={end} delay={1.4} dur={1.0} y={0}>
          <div style={{
            position: 'absolute', left: 100, bottom: 120, right: 100,
            display: 'flex', justifyContent: 'space-between',
            paddingTop: 24, borderTop: `1px solid ${GRAY200}`,
            fontFamily: MONO, fontSize: 14, color: GRAY600,
            letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600
          }}>
            <span>RBI-licensed NBFC · BFSI · India</span>
            <span>Licensed in {D.brand.establishedYear}</span>
            <span>{D.brand.yearsOperating} years lending</span>
            <span>{D.brand.website}</span>
          </div>
        </Reveal>
      </div>
    </Sprite>
  );
}

// ─── Slide 2 — About us (image grid) ──────────────────────────────────
function SceneAbout({ start, end }) {
  const D = D_();
  const items = [
    { key: 'gold',    label: 'Gold loans',     slot: 'about-gold',    blurb: 'Anchor product — secured, granular' },
    { key: 'lap',     label: 'Loan against property',     slot: 'about-lap',     blurb: 'Small-ticket, self-employed' },
    { key: 'lockers', label: 'Private lockers',slot: 'about-lockers', blurb: 'First NBFC to operate lockers' },
    { key: 'pl',      label: 'Personal loans', slot: 'about-pl',      blurb: 'Disciplined entry, existing customers' },
    { key: 'vehicle', label: 'Vehicle loans',  slot: 'about-vehicle', blurb: 'Last-mile commercial fleet finance' }
  ];
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 160, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow="01 · About us"
            title={<><span style={{ color: GOLD }}>Five products.</span> One trusted roof.</>}
            fontSize={64}
          />
          <Reveal start={start} end={end} delay={0.7}>
            <div style={{
              fontFamily: FONT, fontSize: 22, color: GRAY600,
              marginTop: 20, maxWidth: 1200, lineHeight: 1.5
            }}>
              Headquartered in {D.brand.city}. Licensed in {D.brand.establishedYear}.
              {' '}{D.brand.yearsOperating} years of lending behind every signature.
            </div>
          </Reveal>
        </div>

        {/* Image grid — 5 product thumbnails */}
        <div style={{
          position: 'absolute', left: 100, right: 100, top: 460,
          display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 20
        }}>
          {items.map((it, i) => (
            <Reveal key={it.key} start={start} end={end} delay={1.0 + i * 0.12} y={18}>
              <div>
                <PhotoSlot id={it.slot} placeholder=""
                           style={{ width: '100%', height: 280 }}/>
                <div style={{
                  fontFamily: FONT, fontSize: 20, fontWeight: 600,
                  color: NAVY, marginTop: 16, letterSpacing: '-0.005em'
                }}>{it.label}</div>
                <div style={{
                  fontFamily: FONT, fontSize: 16, color: GRAY600,
                  marginTop: 8, lineHeight: 1.5
                }}>{it.blurb}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Fact strip */}
        <Reveal start={start} end={end} delay={1.8}>
          <div style={{
            position: 'absolute', left: 100, right: 100, bottom: 120,
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            paddingTop: 22, borderTop: `1px solid ${GRAY200}`,
            fontFamily: FONT
          }}>
            <FactCell label="Licensed" value={D.brand.establishedYear}/>
            <FactCell label="Lending experience" value={`${D.brand.yearsOperating} years`}/>
            <FactCell label="Branches" value={D.highlights.branches}/>
            <FactCell label="Customers" value={D.highlights.customers}/>
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

// ─── Slide 3 — Annual highlights (KPI dashboard) ──────────────────────
function SceneHighlights({ start, end }) {
  const D = D_();
  const aumByYear = [
    { label: 'FY22', value: Math.round(D.highlights.aumCr * 0.32) },
    { label: 'FY23', value: Math.round(D.highlights.aumCr * 0.48) },
    { label: 'FY24', value: Math.round(D.highlights.aumCr * 0.68) },
    { label: 'FY25', value: Math.round(D.highlights.aumCr * 0.84) },
    { label: 'FY26', value: D.highlights.aumCr }
  ];
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 160, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow="02 · Annual highlights"
            title={<>A book that has <span style={{ color: GOLD }}>tripled</span> in three years.</>}
            fontSize={60}
          />
        </div>

        {/* Hero AUM number — left half */}
        <Reveal start={start} end={end} delay={1.0} y={14}>
          <div style={{ position: 'absolute', left: 100, top: 440, width: 720 }}>
            <Eyebrow>Total AUM · FY26</Eyebrow>
            <div style={{
              fontFamily: FONT, fontSize: 180, fontWeight: 500,
              color: NAVY, letterSpacing: '-0.04em', lineHeight: 0.95,
              marginTop: 12, fontVariantNumeric: 'tabular-nums'
            }}>
              ₹{D.highlights.aumCr}
              <span style={{ fontSize: 60, color: GRAY600, marginLeft: 14, letterSpacing: '-0.01em' }}>Cr</span>
            </div>
            <div style={{
              fontFamily: FONT, fontSize: 22, color: GOLD,
              marginTop: 22, fontWeight: 500
            }}>↑ {D.highlights.growthPct}% YoY · 5-year compounded book</div>
          </div>
        </Reveal>

        {/* Donut — right side */}
        <Reveal start={start} end={end} delay={1.3} y={16}>
          <div style={{ position: 'absolute', right: 200, top: 420, textAlign: 'center' }}>
            <Eyebrow>Capital adequacy</Eyebrow>
            <div style={{ marginTop: 16 }}>
              <Donut value={D.highlights.carPct} max={100} size={260} stroke={22}
                     color={GOLD} label={`${D.highlights.carPct}%`} sub="CAR"
                     animateStart={start + 1.4} animateEnd={end} animateDelay={0}/>
            </div>
            <div style={{
              fontFamily: FONT, fontSize: 16, color: GRAY600,
              marginTop: 16, maxWidth: 320, lineHeight: 1.5
            }}>Well above industry minimums — built on conservative leverage.</div>
          </div>
        </Reveal>

        {/* KPI tile row */}
        <Reveal start={start} end={end} delay={1.6}>
          <div style={{
            position: 'absolute', left: 100, right: 100, bottom: 110,
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            paddingTop: 26, borderTop: `1px solid ${GRAY200}`
          }}>
            <FactCell label="Branches" value={D.highlights.branches}/>
            <FactCell label="Customers" value={D.highlights.customers}/>
            <FactCell label="Products" value={D.highlights.products}/>
            <FactCell label="YoY growth" value={`${D.highlights.growthPct}%`}/>
          </div>
        </Reveal>
      </div>
    </Sprite>
  );
}

// ─── Slide 4 — Gold loans (photo + vertical bars) ─────────────────────
function SceneGold({ start, end }) {
  const D = D_();
  const g = D.products.gold;
  const trend = [
    { label: 'FY22', value: Math.round(g.bookCr * 0.35) },
    { label: 'FY23', value: Math.round(g.bookCr * 0.5) },
    { label: 'FY24', value: Math.round(g.bookCr * 0.68) },
    { label: 'FY25', value: Math.round(g.bookCr * 0.85) },
    { label: 'FY26', value: g.bookCr }
  ];
  const sharePct = Math.round((g.bookCr / D.highlights.aumCr) * 100);
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 160, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow="03 · Gold loans"
            title={<>Anchor of the book — <span style={{ color: GOLD }}>secured</span>, granular, recurring.</>}
            fontSize={56}
          />
        </div>

        {/* Two-column: photo left, stats + chart right */}
        <div style={{
          position: 'absolute', left: 100, right: 100, top: 420,
          display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56
        }}>
          <Reveal start={start} end={end} delay={1.0} y={16}>
            <PhotoSlot id="gold-photo" placeholder=""
                       style={{ width: '100%', height: 480 }}/>
          </Reveal>

          <div>
            <Reveal start={start} end={end} delay={1.2}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 28, marginBottom: 14 }}>
                <div>
                  <Eyebrow>Book size</Eyebrow>
                  <div style={{
                    fontSize: 96, fontWeight: 500, color: NAVY,
                    letterSpacing: '-0.03em', lineHeight: 1, marginTop: 8,
                    fontFamily: FONT, fontVariantNumeric: 'tabular-nums'
                  }}>₹{g.bookCr}<span style={{ fontSize: 30, color: GRAY600, marginLeft: 8 }}>Cr</span></div>
                </div>
                <div style={{
                  fontFamily: FONT, fontSize: 19, color: GOLD, fontWeight: 500,
                  borderLeft: `1px solid ${GRAY200}`, paddingLeft: 24, paddingTop: 18,
                  lineHeight: 1.5
                }}>
                  {sharePct}% of total AUM<br/>+{g.growthYoY}% YoY · {g.yieldPct}% yield
                </div>
              </div>
            </Reveal>

            {/* Sub stats */}
            <Reveal start={start} end={end} delay={1.4}>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 16, marginTop: 16, padding: '20px 0',
                borderTop: `1px solid ${GRAY200}`, borderBottom: `1px solid ${GRAY200}`
              }}>
                <StatBlock label="YoY growth" value={`+${g.growthYoY}`} unit="%" color={GOLD} big={36}/>
                <StatBlock label="Yield" value={g.yieldPct} unit="%" color={NAVY} big={36}/>
                <StatBlock label="Avg ticket" value={`₹${g.atsLakh}`} unit="L" color={NAVY} big={36}/>
              </div>
            </Reveal>

            <Reveal start={start} end={end} delay={1.7}>
              <div style={{ marginTop: 26 }}>
                <Eyebrow>Book growth · ₹ crore</Eyebrow>
                <div style={{ marginTop: 14 }}>
                  <GrowingBarChart
                    data={trend} start={start} end={end}
                    delay={1.9} growDur={1.4} height={120}
                    formatter={v => `₹${v}`}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Sprite>
  );
}

// ─── Slide 5 — LAP (donut + narrative) ────────────────────────────────
function SceneLAP({ start, end }) {
  const D = D_();
  const p = D.products.lap;
  const sharePct = Math.round((p.bookCr / D.highlights.aumCr) * 100);
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 160, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow="04 · Loan against property"
            title={<>Largest <span style={{ color: GOLD }}>growth lever</span> — small-ticket LAP for self-employed India.</>}
            fontSize={52}
          />
        </div>

        <div style={{
          position: 'absolute', left: 100, right: 100, top: 460,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64,
          alignItems: 'start'
        }}>
          {/* Left — narrative + hero stat */}
          <div>
            <Reveal start={start} end={end} delay={1.0}>
              <div>
                <Eyebrow>Book size</Eyebrow>
                <div style={{
                  fontFamily: FONT, fontSize: 140, fontWeight: 500,
                  color: NAVY, letterSpacing: '-0.035em', lineHeight: 0.95,
                  marginTop: 12, fontVariantNumeric: 'tabular-nums'
                }}>₹{p.bookCr}<span style={{ fontSize: 44, color: GRAY600, marginLeft: 12 }}>Cr</span></div>
                <div style={{
                  fontFamily: FONT, fontSize: 18, color: GOLD,
                  fontWeight: 500, marginTop: 14
                }}>↑ {p.growthYoY}% YoY · fastest-compounding product</div>
              </div>
            </Reveal>

            <Reveal start={start} end={end} delay={1.4}>
              <div style={{
                fontFamily: FONT, fontSize: 20, color: GRAY800,
                marginTop: 36, lineHeight: 1.65, maxWidth: 600
              }}>
                Self-employed India is structurally under-served by banks.
                We underwrite cash-flow at the branch — small-ticket, secured by
                property — at an average ticket of <strong style={{ color: NAVY, fontWeight: 600 }}>₹{p.atsLakh}L</strong>.
              </div>
            </Reveal>
          </div>

          {/* Right — donut + sub-stats */}
          <div>
            <Reveal start={start} end={end} delay={1.2} y={16}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
                <Donut value={sharePct} max={100} size={220} stroke={20}
                       color={GOLD} label={`${sharePct}%`} sub="of book"
                       animateStart={start + 1.3} animateEnd={end} animateDelay={0}/>
                <div>
                  <div style={{
                    fontSize: 14, color: GRAY600, letterSpacing: '0.14em',
                    textTransform: 'uppercase', fontWeight: 600, marginBottom: 10
                  }}>Share of total AUM</div>
                  <div style={{
                    fontFamily: FONT, fontSize: 16, color: GRAY600,
                    lineHeight: 1.5, maxWidth: 280
                  }}>~{sharePct}% of Dhanam's book is LAP — and growing the fastest of any product.</div>
                </div>
              </div>
            </Reveal>

            <Reveal start={start} end={end} delay={1.6}>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 16, marginTop: 36, padding: '20px 0',
                borderTop: `1px solid ${GRAY200}`, borderBottom: `1px solid ${GRAY200}`
              }}>
                <StatBlock label="Yield" value={p.yieldPct} unit="%" color={NAVY} big={40}/>
                <StatBlock label="Avg ticket" value={`₹${p.atsLakh}`} unit="L" color={NAVY} big={40}/>
                <StatBlock label="YoY growth" value={`+${p.growthYoY}`} unit="%" color={GOLD} big={40}/>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Sprite>
  );
}

// ─── Slide 6 — Private Lockers ────────────────────────────────────────
function SceneLockers({ start, end }) {
  const D = D_();
  const l = D.products.lockers;
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: CREAM }}>
        <HairlineBackdrop color="rgba(15,30,55,0.05)"/>

        <div style={{ position: 'absolute', left: 100, top: 160, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow="05 · Private lockers"
            title={
              <span style={{ fontFamily: SERIF, fontStyle: 'italic' }}>
                <span style={{ color: GOLD, fontSize: 88, lineHeight: 0.6,
                                position: 'relative', top: 14, marginRight: 6 }}>“</span>
                The first NBFC in history to operate <span style={{ color: GOLD }}>private lockers</span> alongside financial services under one roof.
                <span style={{ color: GOLD, fontSize: 88, lineHeight: 0.6,
                                position: 'relative', top: 14, marginLeft: 4 }}>”</span>
              </span>
            }
            fontSize={52}
          />
        </div>

        <div style={{
          position: 'absolute', left: 100, right: 100, top: 580,
          display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56
        }}>
          <Reveal start={start} end={end} delay={1.4} y={18}>
            <PhotoSlot id="lockers-photo" placeholder=""
                       style={{ width: '100%', height: 360 }}/>
          </Reveal>
          <Reveal start={start} end={end} delay={1.7} y={14}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 28
            }}>
              <StatBlock label="Locker units" value={l.units}
                         foot="Co-located with branches" color={NAVY} big={56}/>
              <StatBlock label="Occupancy" value={l.occupancyPct} unit="%"
                         foot="Across all branches" color={GOLD} big={56}/>
              <StatBlock label="Annual fee revenue" value={`₹${l.feeCr}`} unit="Cr"
                         foot="Recurring, asset-light" color={NAVY} big={56}/>
              <StatBlock label="Differentiation" value="1st"
                         foot="NBFC operating private lockers" color={GOLD} big={56}/>
            </div>
          </Reveal>
        </div>
      </div>
    </Sprite>
  );
}

// ─── Slide 7 — Vehicle loans (sparkline + horizontal bars) ────────────
function SceneVehicle({ start, end }) {
  const D = D_();
  const p = D.products.vehicle;
  const trend = [
    { label: 'FY24', value: Math.round(p.bookCr * 0.4) },
    { label: 'FY25', value: Math.round(p.bookCr * 0.7) },
    { label: 'FY26', value: p.bookCr }
  ];
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 160, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow="06 · Vehicle loans"
            title={<>New growth engine — <span style={{ color: GOLD }}>commercial vehicle</span> finance for last-mile fleets.</>}
            fontSize={52}
          />
        </div>

        <div style={{
          position: 'absolute', left: 100, right: 100, top: 440,
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64
        }}>
          {/* Left — hero growth + sparkline */}
          <div>
            <Reveal start={start} end={end} delay={1.0}>
              <Eyebrow>YoY growth</Eyebrow>
              <div style={{
                fontFamily: FONT, fontSize: 200, fontWeight: 500,
                color: GOLD, letterSpacing: '-0.045em', lineHeight: 0.9,
                marginTop: 8, fontVariantNumeric: 'tabular-nums'
              }}>+{p.growthYoY}<span style={{ fontSize: 80, color: GRAY600, marginLeft: 8 }}>%</span></div>
            </Reveal>
            <Reveal start={start} end={end} delay={1.4}>
              <div style={{
                marginTop: 36, padding: '20px 24px',
                background: GRAY50, borderRadius: 8,
                display: 'flex', alignItems: 'center', gap: 24
              }}>
                <Sparkline data={trend.map(d => d.value)} width={200} height={60}/>
                <div>
                  <div style={{ fontSize: 11, color: GRAY600, letterSpacing: '0.1em',
                                 textTransform: 'uppercase', fontWeight: 500 }}>3-year trajectory</div>
                  <div style={{ fontSize: 22, color: NAVY, fontWeight: 500,
                                 marginTop: 4, fontVariantNumeric: 'tabular-nums' }}>₹{trend[0].value} → ₹{trend[trend.length-1].value} Cr</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — stat tiles */}
          <div>
            <Reveal start={start} end={end} delay={1.2}>
              <div style={{
                display: 'flex', flexDirection: 'column', gap: 18
              }}>
                <StatTile label="Book size" value={`₹${p.bookCr} Cr`} accent={NAVY}/>
                <StatTile label="Yield" value={`${p.yieldPct}%`} accent={NAVY}/>
                <StatTile label="Avg ticket size" value={`₹${p.atsLakh} L`} accent={GOLD}/>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom — horizontal bars */}
        <Reveal start={start} end={end} delay={1.7}>
          <div style={{ position: 'absolute', left: 100, right: 100, bottom: 110 }}>
            <Eyebrow>Book progression · ₹ crore</Eyebrow>
            <div style={{ marginTop: 14 }}>
              <HorizontalBars
                data={trend} start={start} end={end}
                delay={1.9} growDur={1.2}
                formatter={v => `₹${v} Cr`}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </Sprite>
  );
}

function StatTile({ label, value, accent = NAVY }) {
  return (
    <div style={{
      padding: '22px 28px',
      background: PAPER, border: `1px solid ${GRAY200}`, borderRadius: 12,
      display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
      fontFamily: FONT
    }}>
      <span style={{
        fontSize: 14, color: GRAY600, letterSpacing: '0.14em',
        textTransform: 'uppercase', fontWeight: 600
      }}>{label}</span>
      <span style={{
        fontSize: 36, fontWeight: 500, color: accent,
        letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums'
      }}>{value}</span>
    </div>
  );
}

Object.assign(window, {
  SceneCover, SceneAbout, SceneHighlights,
  SceneGold, SceneLAP, SceneLockers, SceneVehicle,
  FactCell, StatTile
});
