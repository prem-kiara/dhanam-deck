// scenes-b.jsx — Slides 6–14 (Lockers, Competitors, FoundingTeam, Directors,
//                              Team, AceInvestors, Growth, WhyPartner, Contact)

const D_b = () => window.INVESTOR_DATA;

// ─── Slide 6 — Private lockers (high-tech features) ──────────────────
function SceneLockers({ start, end }) {
  const D = D_b();
  const L = D.lockersDetail;
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: CREAM }}>
        <HairlineBackdrop color="rgba(15,30,55,0.05)"/>

        <div style={{ position: 'absolute', left: 100, top: 140, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow="06 · Private lockers"
            title={L.headline}
            fontSize={80}
            subSize={26}
          />
        </div>

        <Reveal start={start} end={end} delay={0.7}>
          <div style={{
            position: 'absolute', left: 100, top: 380, width: 1100,
            fontFamily: SERIF, fontStyle: 'italic',
            fontSize: 30, color: NAVY, lineHeight: 1.4, letterSpacing: '-0.005em'
          }}>
            <span style={{
              color: GOLD, fontSize: 60, lineHeight: 0.4,
              position: 'relative', top: 10, marginRight: 4
            }}>“</span>
            {L.intro}
            <span style={{
              color: GOLD, fontSize: 60, lineHeight: 0.4,
              position: 'relative', top: 10, marginLeft: 4
            }}>”</span>
          </div>
        </Reveal>

        {/* 6 feature cards — 3×2 grid */}
        <div style={{
          position: 'absolute', left: 100, right: 100, top: 540,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 22
        }}>
          {L.features.map((f, i) => (
            <Reveal key={i} start={start} end={end} delay={1.0 + i * 0.1} y={14}>
              <LockerFeatureCard num={i + 1} feature={f}/>
            </Reveal>
          ))}
        </div>
      </div>
    </Sprite>
  );
}

function LockerFeatureCard({ num, feature }) {
  return (
    <div style={{
      background: PAPER, border: `1px solid ${GRAY200}`,
      borderRadius: 12, padding: '24px 26px',
      fontFamily: FONT, minHeight: 175,
      display: 'flex', flexDirection: 'column', gap: 10
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <span style={{
          fontFamily: MONO, fontSize: 12, color: GOLD,
          letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700
        }}>{String(num).padStart(2, '0')}</span>
        <span style={{
          width: 24, height: 24, borderRadius: 999,
          background: GOLD_PALE, display: 'inline-flex',
          alignItems: 'center', justifyContent: 'center',
          fontSize: 12, color: NAVY_DEEP
        }}>✓</span>
      </div>
      <div style={{
        fontSize: 22, fontWeight: 600, color: NAVY,
        letterSpacing: '-0.01em', lineHeight: 1.25
      }}>{feature.title}</div>
      <div style={{
        fontSize: 15, color: GRAY600, lineHeight: 1.5
      }}>{feature.body}</div>
    </div>
  );
}

// ─── Slide 7 — Where we compete (4 vertical product cards) ──────────
function SceneCompetitors({ start, end }) {
  const D = D_b();
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 110, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow="07 · Where we compete"
            title="We go up against single-product NBFCs, app-only fintechs and full-service banks alike — and beat each at its own game, under one roof."
            fontSize={64}
            subSize={22}
          />
        </div>

        <div style={{
          position: 'absolute', left: 100, right: 100, top: 320,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18,
          height: 620
        }}>
          {D.competitors.map((row, i) => (
            <Reveal key={row.product} start={start} end={end} delay={0.8 + i * 0.12} y={14}>
              <CompetitorColumn row={row}/>
            </Reveal>
          ))}
        </div>

      </div>
    </Sprite>
  );
}

function CompetitorColumn({ row }) {
  return (
    <div style={{
      background: PAPER, border: `1px solid ${GRAY200}`,
      borderRadius: 14, overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      fontFamily: FONT, height: '100%'
    }}>
      {/* Header — product name */}
      <div style={{ padding: '24px 24px 18px' }}>
        <div style={{
          fontFamily: MONO, fontSize: 10, color: GRAY600,
          letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700
        }}>Product</div>
        <div style={{
          fontSize: 24, fontWeight: 700, color: NAVY,
          letterSpacing: '-0.01em', lineHeight: 1.2, marginTop: 8
        }}>{row.product}</div>
        <div style={{
          width: 36, height: 2, background: GOLD, marginTop: 12
        }}/>
      </div>

      {/* Peers — fills middle */}
      <div style={{ padding: '4px 24px 22px', flex: 1,
                     display: 'flex', flexDirection: 'column' }}>
        <div style={{
          fontFamily: MONO, fontSize: 10, color: GRAY600,
          letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700,
          marginBottom: 12
        }}>Competitors</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {row.peers.map(p => (
            <div key={p.name} style={{
              padding: '12px 14px',
              background: GRAY50, border: `1px solid ${GRAY200}`, borderRadius: 8,
              lineHeight: 1.3
            }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: NAVY,
                             letterSpacing: '-0.005em' }}>{p.name}</div>
              <div style={{ fontSize: 12, color: GRAY600, marginTop: 3 }}>{p.focus}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dhanam — gold-tinted footer of card. Fixed height so the top edge
          of the gold band lines up across all four columns regardless of
          copy length. */}
      <div style={{
        background: GOLD_PALE,
        borderTop: `2px solid ${GOLD}`,
        padding: '20px 24px 24px',
        display: 'flex', flexDirection: 'column', gap: 8,
        height: 180, flexShrink: 0
      }}>
        <div style={{
          fontFamily: MONO, fontSize: 11, color: NAVY_DEEP,
          letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 800
        }}>Dhanam ✓</div>
        <div style={{
          fontSize: 17, fontWeight: 700, color: NAVY,
          letterSpacing: '-0.005em', lineHeight: 1.3
        }}>{row.us.headline}</div>
        <div style={{
          fontSize: 13, color: GRAY800, lineHeight: 1.5
        }}>{row.us.sub}</div>
      </div>
    </div>
  );
}

// ─── Slide 8 — Promoters & Directors I (first 4, zigzag round photos) ─
function SceneFoundingTeam({ start, end }) {
  const D = D_b();
  const directors = D.directors.filter(d => d.show).slice(0, 4);
  return <DirectorsZigzagSlide start={start} end={end} directors={directors}
                                eyebrow="Promoters and Directors"
                                title="Our promoter-directors — chartered accountancy, finance, strategy, operations and governance, all under one roof."/>;
}

// ─── Slide 9 — Promoters & Directors II (next 4, same zigzag format) ─
function SceneDirectors({ start, end }) {
  const D = D_b();
  const directors = D.directors.filter(d => d.show).slice(4, 8);
  return <DirectorsZigzagSlide start={start} end={end} directors={directors}
                                eyebrow="KMP and Directors"
                                title="Key managerial personnel & directors — technology, administration, growth and compliance."/>;
}

// ─── Slide 12 — KMP and Directors (II) ───────────────────────────────
function SceneDirectors2({ start, end }) {
  const D = D_b();
  const directors = D.directors.filter(d => d.show).slice(8);
  return <DirectorsZigzagSlide start={start} end={end} directors={directors}
                                eyebrow="KMP and Directors"
                                title="Key managerial personnel & directors — business, capital markets, operations and property."/>;
}

function DirectorsZigzagSlide({ start, end, directors, eyebrow, title }) {
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 110, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow={eyebrow}
            title={title}
            fontSize={64}
            subSize={22}
          />
        </div>

        <div style={{
          position: 'absolute', left: 100, right: 100, top: 320,
          display: 'grid', gridTemplateColumns: `repeat(${directors.length}, 1fr)`,
          gap: directors.length >= 7 ? 22 : 30, alignItems: 'start'
        }}>
          {directors.map((d, i) => (
            <Reveal key={d.name} start={start} end={end} delay={0.9 + i * 0.15} y={20}>
              <FounderColumn d={d} offset={i % 2 === 0 ? 'up' : 'down'} photoSize={directors.length >= 7 ? 140 : directors.length >= 5 ? 160 : 200}/>
            </Reveal>
          ))}
        </div>
      </div>
    </Sprite>
  );
}

function FounderColumn({ d, offset = 'up', photoSize = 200 }) {
  const isUp = offset === 'up';
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      paddingTop: isUp ? 0 : 70,
      fontFamily: FONT
    }}>
      <RoundPhoto id={d.slot} size={photoSize}/>
      <div style={{
        fontSize: photoSize >= 200 ? 22 : 19, fontWeight: 600, color: NAVY,
        letterSpacing: '-0.01em', marginTop: 22, textAlign: 'center', lineHeight: 1.2,
        whiteSpace: 'nowrap'
      }}>{d.name}</div>
      {d.qualification && (
        <div style={{
          fontSize: 12, color: GRAY600, marginTop: 6,
          fontFamily: MONO, letterSpacing: '0.04em', textAlign: 'center'
        }}>{d.qualification}</div>
      )}
      <div style={{
        fontSize: 14, color: GRAY800, lineHeight: 1.6,
        marginTop: 20, textAlign: 'left'
      }}>{d.bio}</div>
    </div>
  );
}

// ─── Slide 10 — Management team ──────────────────────────────────────
function SceneTeam({ start, end }) {
  const D = D_b();
  const visible = D.team.filter(t => t.show);
  // ≤4 people → single row; 5-9 → 3-col grid (fills rows of 3 cleanly)
  const cols = visible.length <= 4 ? visible.length : 3;
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 110, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow="10 · Management team"
            title="The core team driving Dhanam's day-to-day across technology, finance, branch network, credit, compliance and growth."
            fontSize={72}
            subSize={22}
          />
        </div>

        <div style={{
          position: 'absolute', left: 100, right: 100, top: 360,
          display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: '28px 32px'
        }}>
          {visible.map((t, i) => (
            <Reveal key={t.name} start={start} end={end} delay={0.7 + i * 0.08} y={10}>
              <TeamCard t={t}/>
            </Reveal>
          ))}
        </div>
      </div>
    </Sprite>
  );
}

function TeamCard({ t }) {
  return (
    <div style={{
      fontFamily: FONT, textAlign: 'center',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10
    }}>
      <RoundPhoto id={t.slot} size={140} objPos={t.imgPos || 'center 18%'} zoom={t.imgZoom || 1}/>
      <div>
        <div style={{
          fontSize: 16, fontWeight: 700, color: NAVY,
          letterSpacing: '-0.005em', lineHeight: 1.25
        }}>{t.name}</div>
        {t.role && (
          <div style={{
            fontSize: 10, color: GOLD,
            letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700,
            lineHeight: 1.3, marginTop: 5
          }}>{t.role}</div>
        )}
        <div style={{
          fontSize: 11, color: GRAY600,
          fontFamily: MONO, letterSpacing: '0.04em', marginTop: 3
        }}>{t.qualification}</div>
      </div>
    </div>
  );
}

// ─── Slide 11 — Ace investors (full grid, spacers pad final row) ─────
function SceneAceInvestors({ start, end }) {
  const D = D_b();
  const ace = D.aceInvestors;
  const COLS = 4;
  const COL_GAP = 12;
  // Pad with nulls so the last row fills out the grid completely → all cards
  // share the same 1fr column width with zero risk of misalignment.
  const remainder = ace.length % COLS;
  const padCount  = remainder > 0 ? COLS - remainder : 0;
  const padded    = [...ace, ...Array(padCount).fill(null)];

  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 90, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow="Ace investors"
            title="Senior advisors spanning banking, capital markets, healthcare, real estate, technology, manufacturing, hospitality, jewellery, agriculture and law — combining decades of operating, regulatory and capital-allocation experience."
            accent={GOLD}
            fontSize={64}
            subSize={20}
          />
        </div>

        {/* Single uniform grid — spacer divs keep last row left-aligned */}
        <div style={{
          position: 'absolute', left: 100, right: 100, top: 320, bottom: 100,
          display: 'grid',
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gap: COL_GAP,
          alignContent: 'start'
        }}>
          {padded.map((a, i) =>
            a ? (
              <Reveal key={i} start={start} end={end}
                      delay={0.8 + Math.min(i, 30) * 0.025} y={6}>
                <AceCard name={a.name} tag={a.tag}/>
              </Reveal>
            ) : (
              <div key={i} style={{ visibility: 'hidden' }}/>
            )
          )}
        </div>
      </div>
    </Sprite>
  );
}

function AceCard({ name, tag }) {
  return (
    <div style={{
      background: GRAY50,
      border: `1px solid ${GRAY200}`,
      borderRadius: 8, padding: '12px 16px',
      fontFamily: FONT, color: NAVY
    }}>
      <div style={{
        fontSize: 15, fontWeight: 600, letterSpacing: '-0.005em',
        lineHeight: 1.25
      }}>{name}</div>
      <div style={{
        fontSize: 12, color: GRAY600, fontStyle: 'italic',
        marginTop: 4, lineHeight: 1.35
      }}>{tag}</div>
    </div>
  );
}

// ─── Slide 12 — Future growth (5-year projection) ────────────────────
function SceneGrowth({ start, end }) {
  const D = D_b();
  const G = D.growth;
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 140, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow="12 · Future growth"
            title="A fintech-led, multi-product NBFC — conservative, secured, and built for India's next decade of credit, with the macro tailwinds in our favour."
            fontSize={80}
            subSize={26}
          />
        </div>

        {/* LEFT — Where we stand today */}
        <div style={{ position: 'absolute', left: 100, top: 410, width: 800 }}>
          <Reveal start={start} end={end} delay={0.7}>
            <CategoryLabel>Where we stand today</CategoryLabel>
          </Reveal>
          <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {G.current.map((row, i) => (
              <Reveal key={row.label} start={start} end={end} delay={0.95 + i * 0.12}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'baseline', gap: 18,
                  padding: '18px 0', borderBottom: `1px solid ${GRAY200}`, fontFamily: FONT
                }}>
                  <div style={{ fontSize: 14, color: GRAY600, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700 }}>{row.label}</div>
                  <div style={{ fontSize: 34, color: NAVY, fontWeight: 500, letterSpacing: '-0.015em', fontVariantNumeric: 'tabular-nums' }}>{row.value}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* RIGHT — Macro tailwinds */}
        <div style={{ position: 'absolute', right: 100, top: 410, width: 880 }}>
          <Reveal start={start} end={end} delay={1.2}>
            <CategoryLabel color={NAVY} accent={GOLD}>Macro tailwinds</CategoryLabel>
          </Reveal>
          <div style={{
            marginTop: 22,
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14
          }}>
            {G.macroPoints.map((m, i) => (
              <Reveal key={i} start={start} end={end} delay={1.4 + i * 0.12} y={10}>
                <MacroCard m={m}/>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal start={start} end={end} delay={2.0}>
          <div style={{
            position: 'absolute', left: 100, right: 100, bottom: 100,
            paddingTop: 22, borderTop: `1px solid ${GRAY200}`,
            fontFamily: FONT, fontSize: 22, fontWeight: 500,
            color: NAVY, letterSpacing: '-0.01em', textAlign: 'center'
          }}>
            Our money grows because <span style={{ color: GOLD }}>India's credit cycle</span> grows — and because we run it like a fintech.
          </div>
        </Reveal>
      </div>
    </Sprite>
  );
}

function TrajectoryRow({ row }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '160px 1fr 1fr 80px',
      alignItems: 'baseline', gap: 18,
      padding: '18px 0', borderBottom: `1px solid ${GRAY200}`,
      fontFamily: FONT
    }}>
      <div style={{
        fontSize: 13, color: GRAY600, letterSpacing: '0.16em',
        textTransform: 'uppercase', fontWeight: 700
      }}>{row.label}</div>
      <div>
        <div style={{ fontSize: 11, color: GRAY400, letterSpacing: '0.12em',
                       textTransform: 'uppercase', fontWeight: 600 }}>Today</div>
        <div style={{ fontSize: 28, color: NAVY, fontWeight: 500,
                       letterSpacing: '-0.015em', marginTop: 4,
                       fontVariantNumeric: 'tabular-nums' }}>{row.today}</div>
      </div>
      <div>
        <div style={{ fontSize: 11, color: GRAY400, letterSpacing: '0.12em',
                       textTransform: 'uppercase', fontWeight: 600 }}>Year 5</div>
        <div style={{ fontSize: 28, color: GOLD, fontWeight: 500,
                       letterSpacing: '-0.015em', marginTop: 4,
                       fontVariantNumeric: 'tabular-nums' }}>{row.year5}</div>
      </div>
      <div style={{
        fontSize: 22, fontWeight: 700, color: GOLD,
        textAlign: 'right', letterSpacing: '-0.01em',
        fontVariantNumeric: 'tabular-nums'
      }}>{row.multiple}</div>
    </div>
  );
}

function MacroCard({ m }) {
  return (
    <div style={{
      background: GRAY50, border: `1px solid ${GRAY200}`,
      borderRadius: 10, padding: '16px 18px',
      fontFamily: FONT, minHeight: 130
    }}>
      <div style={{
        fontFamily: MONO, fontSize: 11, color: GOLD,
        letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700
      }}>{m.label}</div>
      <div style={{
        fontSize: 18, fontWeight: 600, color: NAVY,
        marginTop: 10, lineHeight: 1.3, letterSpacing: '-0.005em'
      }}>{m.stat}</div>
      <div style={{
        fontSize: 12, color: GRAY600, marginTop: 8, fontStyle: 'italic',
        lineHeight: 1.4
      }}>{m.cite}</div>
    </div>
  );
}

// ─── Slide 13 — Why partner with us (MRF + Fintech) ─────────────────
function SceneWhyDhanam({ start, end }) {
  const D = D_b();
  const P = D.promise;
  return (
    <Sprite start={start} end={end}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(135deg, ${CREAM} 0%, ${GOLD_PALE} 100%)`
      }}>
        <HairlineBackdrop color="rgba(15,30,55,0.04)"/>

        <div style={{ position: 'absolute', left: 100, top: 130, width: 1720 }}>
          <Reveal start={start} end={end} delay={0.2}>
            <div style={{
              fontFamily: FONT, fontWeight: 600, fontSize: 80,
              color: NAVY, letterSpacing: '-0.03em', lineHeight: 1.0
            }}>Why partner with us</div>
          </Reveal>
        </div>

        {/* Hero promise */}
        <Reveal start={start} end={end} delay={0.5} dur={0.9} y={20}>
          <div style={{
            position: 'absolute', left: 100, top: 270, width: 1500,
            fontFamily: FONT, fontWeight: 500, fontSize: 64,
            color: NAVY, letterSpacing: '-0.03em', lineHeight: 1.05
          }}>
            Your money will <span style={{
              fontWeight: 600, color: GOLD, letterSpacing: '-0.02em'
            }}>grow</span> with us.
          </div>
        </Reveal>

        <Reveal start={start} end={end} delay={0.8}>
          <div style={{
            position: 'absolute', left: 100, top: 380, width: 1500,
            fontFamily: FONT, fontSize: 20, color: GRAY800,
            lineHeight: 1.55, letterSpacing: '-0.005em'
          }}>{P.subhead}</div>
        </Reveal>

        {/* Two-panel strip: Wipro precedent (left) + Dhanam opportunity (right) */}
        <Reveal start={start} end={end} delay={1.0} y={14}>
          <div style={{
            position: 'absolute', left: 100, right: 100, top: 470,
            background: NAVY, color: '#fff',
            borderRadius: 16,
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            fontFamily: FONT, overflow: 'hidden'
          }}>
            {/* Left panel — Wipro precedent */}
            <div style={{
              padding: '36px 44px',
              display: 'flex', flexDirection: 'column', gap: 14,
              borderRight: '1px solid rgba(255,255,255,0.14)'
            }}>
              <div style={{
                fontFamily: MONO, fontSize: 11, color: GOLD_LITE,
                letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700
              }}>The Wipro Precedent</div>
              <div style={{
                fontFamily: SERIF, fontStyle: 'italic',
                fontSize: 28, fontWeight: 500, color: GOLD_LITE,
                letterSpacing: '-0.015em', lineHeight: 1.2
              }}>{P.wipro.kicker}</div>
              <div style={{
                fontSize: 16, color: 'rgba(255,255,255,0.82)', lineHeight: 1.65,
                letterSpacing: '-0.005em'
              }}>{P.wipro.detail}</div>
              <div style={{
                fontSize: 11, color: 'rgba(255,255,255,0.4)',
                fontStyle: 'italic', marginTop: 4
              }}>{P.wipro.cite}</div>
            </div>

            {/* Right panel — Dhanam opportunity */}
            <div style={{
              padding: '36px 44px',
              display: 'flex', flexDirection: 'column', gap: 14
            }}>
              <div style={{
                fontFamily: MONO, fontSize: 11, color: GOLD_LITE,
                letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700
              }}>Your Dhanam Moment</div>
              <div style={{
                fontFamily: SERIF, fontStyle: 'italic',
                fontSize: 28, fontWeight: 500, color: GOLD_LITE,
                letterSpacing: '-0.015em', lineHeight: 1.2
              }}>{P.dhanam.kicker}</div>
              <div style={{
                fontSize: 16, color: 'rgba(255,255,255,0.82)', lineHeight: 1.65,
                letterSpacing: '-0.005em'
              }}>{P.dhanam.detail}</div>
              <div style={{
                fontSize: 13, color: GOLD_LITE, fontWeight: 600, marginTop: 4
              }}>{P.dhanam.note}</div>
            </div>
          </div>
        </Reveal>

        {/* 3 pillars */}
        <div style={{
          position: 'absolute', left: 100, right: 100, top: 780,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20
        }}>
          {P.pillars.map((line, i) => (
            <Reveal key={i} start={start} end={end} delay={1.4 + i * 0.16}>
              <PromiseCard index={i + 1} title={line.title} body={line.body}/>
            </Reveal>
          ))}
        </div>
      </div>
    </Sprite>
  );
}

function PromiseCard({ index, title, body }) {
  return (
    <div style={{
      background: PAPER, border: `1px solid ${GRAY200}`,
      borderRadius: 14, padding: '24px 26px',
      fontFamily: FONT, minHeight: 170,
      display: 'flex', flexDirection: 'column', gap: 12
    }}>
      <div style={{
        fontFamily: MONO, fontSize: 12, color: GOLD,
        letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700
      }}>{String(index).padStart(2, '0')}</div>
      <div style={{
        fontSize: 22, color: NAVY, fontWeight: 600,
        lineHeight: 1.3, letterSpacing: '-0.01em'
      }}>{title}</div>
      <div style={{
        fontSize: 15, color: GRAY800, lineHeight: 1.55
      }}>{body}</div>
    </div>
  );
}

// ─── Slide 14 — Thank you / Contact ─────────────────────────────────
function SceneContact({ start, end }) {
  const D = D_b();
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 280, width: 1100 }}>
          <Reveal start={start} end={end} delay={0.5} dur={0.9} y={20}>
            <div style={{
              fontFamily: FONT, fontWeight: 500, fontSize: 96,
              color: NAVY, letterSpacing: '-0.035em', lineHeight: 1.05
            }}>
              Let's build the next<br/>
              <span style={{
                color: GOLD, letterSpacing: '-0.02em', fontWeight: 500
              }}>Unicorn</span> together.
            </div>
          </Reveal>
          <Reveal start={start} end={end} delay={1.0}>
            <div style={{
              fontFamily: FONT, fontSize: 22, color: GRAY600,
              marginTop: 30, lineHeight: 1.5, maxWidth: 820
            }}>
              An opportunity to partner with one of India's most carefully run regional NBFCs —
              now scaling into a national, multi-product fintech.
            </div>
          </Reveal>
        </div>

        <Reveal start={start} end={end} delay={0.7} dur={1.0} y={20}>
          <PhotoSlot
            id="closing-photo"
            placeholder=""
            style={{ position: 'absolute', right: 100, top: 200,
                     width: 720, height: 460 }}
          />
        </Reveal>

        <Reveal start={start} end={end} delay={1.4} y={14}>
          <div style={{
            position: 'absolute', left: 100, right: 100, bottom: 44,
            background: NAVY, color: '#fff', borderRadius: 16,
            padding: '28px 44px 32px',
            fontFamily: FONT, pointerEvents: 'auto'
          }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              marginBottom: 18
            }}>
              <div style={{
                fontSize: 13, color: GOLD_LITE,
                letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600
              }}>Talk to us</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)',
                             fontFamily: MONO, letterSpacing: '0.08em' }}>
                {D.brand.hq}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 60 }}>
              <ContactRow label="Website"   value={D.brand.website}   href={`https://${D.brand.website}`}/>
              <ContactRow label="Toll-free" value={D.brand.tollFree}/>
              <ContactRow label="Instagram" value={D.brand.instagram} href={D.brand.instagramUrl} last/>
              <ContactRow label="WhatsApp"  value={D.brand.whatsapp} last/>
            </div>
          </div>
        </Reveal>
      </div>
    </Sprite>
  );
}

function ContactRow({ label, value, href, last = false }) {
  const inner = (
    <>
      <span style={{
        fontSize: 13, color: 'rgba(255,255,255,0.6)',
        letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600
      }}>{label}</span>
      <span style={{
        fontSize: 20, color: '#fff', fontFamily: MONO, letterSpacing: '-0.005em',
        textDecoration: href ? 'underline' : 'none',
        textDecorationColor: 'rgba(232,182,90,0.55)', textUnderlineOffset: 4
      }}>{value}</span>
    </>
  );
  const style = {
    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
    padding: '14px 0',
    borderBottom: last ? 'none' : '1px solid rgba(255,255,255,0.1)',
    fontFamily: FONT, color: 'inherit'
  };
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer"
         style={{ ...style, textDecoration: 'none', cursor: 'pointer' }}>
        {inner}
      </a>
    );
  }
  return <div style={style}>{inner}</div>;
}

// ─── Slide — Business model (conventional + AI-driven fintech) ───────
function SceneBusinessModel({ start, end }) {
  const D = D_b();
  const B = D.businessModel;
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 110, width: 1720 }}>
          <SectionHeading start={start} end={end} eyebrow="Business model" title={B.subhead} fontSize={72} subSize={24}/>
        </div>

        {/* LEFT — conventional */}
        <Reveal start={start} end={end} delay={0.6} y={16}>
          <div style={{
            position: 'absolute', left: 100, top: 340, width: 820,
            background: PAPER, border: `1px solid ${GRAY200}`, borderTop: `3px solid ${NAVY}`,
            borderRadius: 14, padding: '28px 30px', fontFamily: FONT
          }}>
            <ModelHeader label={B.conventional.label} tag={B.conventional.tag} accent={NAVY}/>
            <div style={{ marginTop: 16 }}>
              {B.conventional.items.map((it, i) => (
                <ModelRow key={it.name} item={it} accent={NAVY} last={i === B.conventional.items.length - 1}/>
              ))}
            </div>
          </div>
        </Reveal>

        {/* RIGHT — fintech / AI */}
        <Reveal start={start} end={end} delay={0.8} y={16}>
          <div style={{
            position: 'absolute', right: 100, top: 340, width: 820,
            background: PAPER, border: `1px solid ${GOLD_PALE}`, borderTop: `3px solid ${GOLD}`,
            borderRadius: 14, padding: '28px 30px', fontFamily: FONT
          }}>
            <ModelHeader label={B.fintech.label} tag={B.fintech.tag} accent={GOLD}/>
            <div style={{ marginTop: 16 }}>
              {B.fintech.items.map((it, i) => (
                <ModelRow key={it.name} item={it} accent={GOLD} last={i === B.fintech.items.length - 1}/>
              ))}
            </div>
          </div>
        </Reveal>

        {/* center + */}
        <Reveal start={start} end={end} delay={1.0}>
          <div style={{
            position: 'absolute', left: '50%', top: 545, transform: 'translate(-50%, -50%)',
            width: 48, height: 48, borderRadius: 999, background: NAVY, color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 26, fontFamily: FONT, zIndex: 5, boxShadow: `0 0 0 6px ${PAPER}`
          }}>+</div>
        </Reveal>

        {/* footer band */}
        <Reveal start={start} end={end} delay={1.2} y={14}>
          <div style={{
            position: 'absolute', left: 100, right: 100, bottom: 104,
            background: NAVY, color: '#fff', borderRadius: 16, padding: '24px 44px',
            textAlign: 'center', fontFamily: FONT, fontSize: 22, fontWeight: 500, letterSpacing: '-0.01em'
          }}>{B.footer}</div>
        </Reveal>
      </div>
    </Sprite>
  );
}

function ModelHeader({ label, tag, accent }) {
  return (
    <div>
      <div style={{ fontSize: 26, fontWeight: 700, color: NAVY, letterSpacing: '-0.01em' }}>{label}</div>
      <div style={{ fontFamily: MONO, fontSize: 11, color: accent, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, marginTop: 8 }}>{tag}</div>
    </div>
  );
}

function ModelRow({ item, accent, last }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '13px 0', borderBottom: last ? 'none' : `1px solid ${GRAY100}` }}>
      <span style={{ width: 8, height: 8, borderRadius: 999, background: accent, marginTop: 7, flexShrink: 0 }}/>
      <div>
        <div style={{ fontSize: 18, fontWeight: 600, color: NAVY, letterSpacing: '-0.005em' }}>{item.name}</div>
        <div style={{ fontSize: 13, color: GRAY600, lineHeight: 1.4, marginTop: 3 }}>{item.note}</div>
      </div>
    </div>
  );
}

// ─── Slide — Risks & mitigations ─────────────────────────────────────
function SceneRisks({ start, end }) {
  const D = D_b();
  const R = D.risks;
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 110, width: 1720 }}>
          <SectionHeading start={start} end={end} eyebrow="Risks & mitigations" title={R.subhead} fontSize={72} subSize={24}/>
        </div>

        <div style={{
          position: 'absolute', left: 100, right: 100, top: 350,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20
        }}>
          {R.items.map((it, i) => (
            <Reveal key={it.risk} start={start} end={end} delay={0.7 + i * 0.1} y={14}>
              <div style={{
                background: GRAY50, border: `1px solid ${GRAY200}`, borderTop: `3px solid ${GOLD}`,
                borderRadius: 12, padding: '22px 24px', fontFamily: FONT, minHeight: 208
              }}>
                <div style={{ fontFamily: MONO, fontSize: 11, color: GRAY600, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>Risk {String(i + 1).padStart(2, '0')}</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: NAVY, letterSpacing: '-0.01em', marginTop: 10 }}>{it.risk}</div>
                <div style={{ height: 1, background: GRAY200, margin: '16px 0' }}/>
                <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                  <span style={{ color: '#1E7A45', fontSize: 14, fontWeight: 700, marginTop: 1 }}>✓</span>
                  <div style={{ fontSize: 14, color: GRAY800, lineHeight: 1.5 }}>{it.mitigation}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal start={start} end={end} delay={1.5} y={12}>
          <div style={{
            position: 'absolute', left: 100, right: 100, bottom: 110,
            paddingTop: 22, borderTop: `1px solid ${GRAY200}`,
            fontFamily: FONT, fontSize: 22, fontWeight: 500, color: NAVY,
            textAlign: 'center', letterSpacing: '-0.01em'
          }}>
            Predominantly <span style={{ color: GOLD }}>secured</span>, RBI-regulated, and conservatively capitalised at <span style={{ color: GOLD }}>40%</span> — risk-first by construction.
          </div>
        </Reveal>
      </div>
    </Sprite>
  );
}

Object.assign(window, {
  SceneBusinessModel, SceneRisks, ModelHeader, ModelRow,
  SceneLockers, SceneCompetitors, SceneFoundingTeam, SceneDirectors, SceneDirectors2,
  SceneTeam, SceneAceInvestors, SceneGrowth, SceneWhyDhanam, SceneContact,
  LockerFeatureCard, CompetitorColumn, FounderColumn,
  DirectorCardCompact, TeamCard, AceCard,
  TrajectoryRow, MacroCard, PromiseCard, ContactRow
});
