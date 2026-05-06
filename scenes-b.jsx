// scenes-b.jsx — Slides 8–16 (Personal loans, Competitors, Directors ×2, Team,
//                              Advisors, Growth, Why Dhanam, Contact)

const D_b = () => window.INVESTOR_DATA;

// ─── Slide 8 — Personal / unsecured loans ─────────────────────────────
function SceneUnsecured({ start, end }) {
  const D = D_b();
  const p = D.products.unsecured;
  const sharePct = Math.max(1, Math.round((p.bookCr / D.highlights.aumCr) * 100));
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 160, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow="07 · Personal loans"
            title={<>Disciplined entry into <span style={{ color: GOLD }}>personal credit</span> for existing customers.</>}
            fontSize={52}
          />
        </div>

        <div style={{
          position: 'absolute', left: 100, right: 100, top: 460,
          display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64,
          alignItems: 'start'
        }}>
          {/* Donut left */}
          <Reveal start={start} end={end} delay={1.0} y={14}>
            <div style={{ textAlign: 'center' }}>
              <Eyebrow>Share of book</Eyebrow>
              <div style={{ marginTop: 18 }}>
                <Donut value={sharePct} max={100} size={300} stroke={26}
                       color={GOLD} label={`${sharePct}%`} sub="of total AUM"
                       animateStart={start + 1.1} animateEnd={end} animateDelay={0}/>
              </div>
              <div style={{
                fontFamily: FONT, fontSize: 13, color: GRAY600,
                marginTop: 18, maxWidth: 320, marginLeft: 'auto', marginRight: 'auto',
                lineHeight: 1.5
              }}>Intentionally small. Built only on the back of existing, repeat customers.</div>
            </div>
          </Reveal>

          {/* Right — narrative + stats */}
          <div>
            <Reveal start={start} end={end} delay={1.2}>
              <div style={{
                fontFamily: SERIF, fontStyle: 'italic',
                fontSize: 36, color: NAVY, lineHeight: 1.3,
                letterSpacing: '-0.005em'
              }}>
                Underwritten only on a foundation of <span style={{ color: GOLD, fontStyle: 'normal',
                fontFamily: FONT, fontWeight: 600 }}>established repayment behaviour</span> — never as a standalone acquisition tool.
              </div>
            </Reveal>

            <Reveal start={start} end={end} delay={1.5}>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 16, marginTop: 36
              }}>
                <StatTile label="Book size"   value={`₹${p.bookCr} Cr`} accent={NAVY}/>
                <StatTile label="YoY growth"  value={`+${p.growthYoY}%`} accent={GOLD}/>
                <StatTile label="Yield"       value={`${p.yieldPct}%`}   accent={NAVY}/>
                <StatTile label="Avg ticket"  value={`₹${p.atsLakh} L`}  accent={NAVY}/>
              </div>
            </Reveal>

            <Reveal start={start} end={end} delay={1.8}>
              <div style={{
                marginTop: 28, padding: '20px 26px',
                background: GRAY50, borderLeft: `4px solid ${GOLD}`,
                borderRadius: 4, fontFamily: FONT,
                fontSize: 17, color: GRAY800, lineHeight: 1.6
              }}>
                <strong style={{ color: NAVY }}>Risk discipline:</strong> personal credit is offered
                only to customers with an existing secured product (gold or LAP) and at least
                12 months of clean repayment history.
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Sprite>
  );
}

// ─── Slide 9 — Competitive landscape ──────────────────────────────────
function SceneCompetitors({ start, end }) {
  const D = D_b();
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 150, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow="08 · Where we compete"
            title={<>Each peer is a <span style={{ color: GOLD }}>single-product specialist</span>. Dhanam does <span style={{ color: GOLD }}>all five</span> under one roof.</>}
            fontSize={42}
          />
        </div>

        {/* Comparison rows */}
        <div style={{
          position: 'absolute', left: 100, right: 100, top: 360,
          display: 'flex', flexDirection: 'column', gap: 14
        }}>
          {D.competitors.map((row, i) => (
            <Reveal key={row.product} start={start} end={end} delay={0.9 + i * 0.12} y={10}>
              <CompetitorRow row={row} stripe={i % 2 === 0}/>
            </Reveal>
          ))}
        </div>

        {/* Footer summary */}
        <Reveal start={start} end={end} delay={2.0}>
          <div style={{
            position: 'absolute', left: 100, right: 100, bottom: 100,
            paddingTop: 22, borderTop: `1px solid ${GRAY200}`,
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
            fontFamily: FONT
          }}>
            <span style={{
              fontSize: 13, color: GRAY400, letterSpacing: '0.04em',
              fontFamily: MONO
            }}>Peer AUM figures approximate · public disclosures</span>
            <span style={{
              fontSize: 24, fontWeight: 500, color: NAVY,
              letterSpacing: '-0.015em'
            }}>
              Five specialists. <span style={{ color: GOLD }}>One operator. One customer.</span>
            </span>
          </div>
        </Reveal>
      </div>
    </Sprite>
  );
}

function CompetitorRow({ row, stripe }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '260px 1fr 340px',
      alignItems: 'stretch', gap: 28,
      padding: '20px 28px',
      background: stripe ? GRAY50 : PAPER,
      border: `1px solid ${GRAY200}`, borderRadius: 12,
      fontFamily: FONT
    }}>
      {/* Product label */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{
          fontSize: 12, color: GRAY600, letterSpacing: '0.14em',
          textTransform: 'uppercase', fontWeight: 600, marginBottom: 8
        }}>Product</div>
        <div style={{
          fontSize: 24, fontWeight: 600, color: NAVY,
          letterSpacing: '-0.01em', lineHeight: 1.2
        }}>{row.product}</div>
      </div>

      {/* Peers list */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{
          fontSize: 12, color: GRAY600, letterSpacing: '0.14em',
          textTransform: 'uppercase', fontWeight: 600, marginBottom: 10
        }}>Specialists in this category</div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {row.peers.map(p => (
            <PeerCard key={p.name} peer={p}/>
          ))}
        </div>
      </div>

      {/* Dhanam highlight */}
      <div style={{
        background: GOLD_PALE,
        border: `1.5px solid ${GOLD}`,
        borderRadius: 10, padding: '14px 20px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        gap: 4
      }}>
        <div style={{
          fontFamily: MONO, fontSize: 13, color: NAVY_DEEP,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          fontWeight: 600
        }}>Dhanam ✓</div>
        <div style={{
          fontSize: 32, fontWeight: 600, color: NAVY,
          letterSpacing: '-0.02em', lineHeight: 1.0,
          fontVariantNumeric: 'tabular-nums', marginTop: 4
        }}>{row.us.metric}</div>
        <div style={{
          fontSize: 14, color: GRAY800, marginTop: 4, lineHeight: 1.4,
          fontWeight: 500
        }}>{row.us.sub}</div>
      </div>
    </div>
  );
}

function PeerCard({ peer }) {
  return (
    <div style={{
      padding: '12px 16px', background: PAPER,
      border: `1px solid ${GRAY200}`, borderRadius: 8,
      fontFamily: FONT, minWidth: 220, flex: '0 1 auto'
    }}>
      <div style={{
        fontSize: 17, fontWeight: 600, color: NAVY,
        letterSpacing: '-0.005em', lineHeight: 1.2
      }}>{peer.name}</div>
      <div style={{
        fontSize: 14, color: GOLD, marginTop: 5,
        fontFamily: MONO, letterSpacing: '0.04em',
        fontVariantNumeric: 'tabular-nums', fontWeight: 500
      }}>{peer.scale}</div>
      <div style={{
        fontSize: 13, color: GRAY600, marginTop: 4,
        lineHeight: 1.35
      }}>{peer.focus}</div>
    </div>
  );
}

// ─── Slide 10 — Directors A (3 founding directors, big photos) ────────
function SceneDirectorsA({ start, end }) {
  const D = D_b();
  const founders = D.directors.filter(d => d.show).slice(0, 3);
  return <DirectorsPage start={start} end={end} directors={founders}
                        eyebrow="09 · Promoters & directors"
                        title={<>The <span style={{ color: GOLD }}>founding</span> team behind every signature.</>} />;
}

// ─── Slide 11 — Directors B (the rest) ────────────────────────────────
function SceneDirectorsB({ start, end }) {
  const D = D_b();
  const rest = D.directors.filter(d => d.show).slice(3);
  return <DirectorsPage start={start} end={end} directors={rest} compact
                        eyebrow="10 · Directors (continued)"
                        title={<>Operating <span style={{ color: GOLD }}>leaders</span> — technology, finance, field.</>} />;
}

function DirectorsPage({ start, end, directors, eyebrow, title, compact = false }) {
  const cols = directors.length <= 3 ? directors.length : (directors.length === 4 ? 4 : 3);
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 160, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow={eyebrow} title={title}
            fontSize={48}
          />
        </div>

        <div style={{
          position: 'absolute', left: 100, right: 100, top: 400,
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: compact ? 22 : 28
        }}>
          {directors.map((d, i) => (
            <Reveal key={d.name} start={start} end={end} delay={1.1 + i * 0.16}>
              <DirectorCard d={d} compact={compact}/>
            </Reveal>
          ))}
        </div>
      </div>
    </Sprite>
  );
}

function DirectorCard({ d, compact = false }) {
  const photoH = compact ? 320 : 420;
  return (
    <div style={{ fontFamily: FONT }}>
      <PhotoSlot id={d.slot} placeholder=""
                 style={{ width: '100%', height: photoH, marginBottom: 18 }}/>
      <div style={{
        fontSize: compact ? 22 : 26, fontWeight: 600, color: NAVY,
        letterSpacing: '-0.01em', lineHeight: 1.2
      }}>{d.name}</div>
      <div style={{
        fontSize: 13, color: GOLD, marginTop: 6,
        letterSpacing: '0.16em', textTransform: 'uppercase',
        fontWeight: 600
      }}>{d.role}</div>
      {d.qualification && (
        <div style={{
          fontSize: 13, color: GRAY600, marginTop: 6,
          fontFamily: MONO, letterSpacing: '0.04em'
        }}>{d.qualification}</div>
      )}
      <ul style={{
        margin: 0, padding: 0, marginTop: 14, listStyle: 'none',
        display: 'flex', flexDirection: 'column', gap: 8
      }}>
        {d.highlights.map((h, j) => (
          <li key={j} style={{
            fontSize: 15, color: GRAY800, lineHeight: 1.5,
            paddingLeft: 16, position: 'relative'
          }}>
            <span style={{
              position: 'absolute', left: 0, top: 9,
              width: 5, height: 5, borderRadius: 999, background: GOLD
            }}/>
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Slide 12 — Core team ─────────────────────────────────────────────
function SceneTeam({ start, end }) {
  const D = D_b();
  const visible = D.team.filter(t => t.show);
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 160, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow="11 · Core team"
            title={<>The <span style={{ color: GOLD }}>operating bench</span> — across product, technology and field.</>}
            fontSize={48}
          />
        </div>

        <div style={{
          position: 'absolute', left: 100, right: 100, top: 460,
          display: 'grid', gridTemplateColumns: `repeat(${visible.length}, 1fr)`,
          gap: 24
        }}>
          {visible.map((t, i) => (
            <Reveal key={t.name} start={start} end={end} delay={1.1 + i * 0.14}>
              <div style={{ fontFamily: FONT }}>
                <PhotoSlot id={t.slot} placeholder=""
                           style={{ width: '100%', height: 340, marginBottom: 18 }}/>
                <div style={{
                  fontSize: 24, fontWeight: 600, color: NAVY,
                  letterSpacing: '-0.01em'
                }}>{t.name}</div>
                <div style={{
                  fontSize: 13, color: GOLD, marginTop: 8,
                  letterSpacing: '0.16em', textTransform: 'uppercase',
                  fontWeight: 600
                }}>{t.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Sprite>
  );
}

// ─── Slide 13 — Advisors & Ace investors ──────────────────────────────
function SceneAdvisors({ start, end }) {
  const D = D_b();
  const board = (D.advisors.board || []).filter(a => a.show);
  const ace = (D.advisors.ace || []).filter(a => a.show);
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: NAVY, color: '#fff' }}>
        <div style={{
          position: 'absolute', right: -100, bottom: -100,
          width: 700, height: 700,
          background: 'radial-gradient(closest-side, rgba(200,146,42,0.16), transparent 70%)',
          pointerEvents: 'none'
        }}/>

        <div style={{ position: 'absolute', left: 100, top: 160, width: 1720 }}>
          <SectionHeading
            start={start} end={end} dark
            eyebrow="12 · Advisors & ace investors"
            title={<>Backed by <span style={{ color: GOLD_LITE }}>ace investors</span> and domain advisors.</>}
            accent={GOLD_LITE} fontSize={52}
          />
        </div>

        {/* Board of advisors */}
        <div style={{ position: 'absolute', left: 100, right: 100, top: 440 }}>
          <Reveal start={start} end={end} delay={1.0}>
            <div style={{
              fontFamily: MONO, fontSize: 14, color: GOLD_LITE,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              fontWeight: 600, marginBottom: 18
            }}>Board of advisors</div>
          </Reveal>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22
          }}>
            {board.map((a, i) => (
              <Reveal key={i} start={start} end={end} delay={1.2 + i * 0.12}>
                <AdvisorCard name={a.name} role="Advisor"/>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Ace investors */}
        <div style={{ position: 'absolute', left: 100, right: 100, top: 740 }}>
          <Reveal start={start} end={end} delay={1.6}>
            <div style={{
              fontFamily: MONO, fontSize: 14, color: GOLD_LITE,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              fontWeight: 600, marginBottom: 18
            }}>Ace investors</div>
          </Reveal>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22
          }}>
            {ace.map((a, i) => (
              <Reveal key={i} start={start} end={end} delay={1.8 + i * 0.12}>
                <AdvisorCard name={a.name} role="Ace investor"/>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Sprite>
  );
}

function AdvisorCard({ name, role }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 12, padding: '26px 28px',
      fontFamily: FONT, color: '#fff'
    }}>
      <div style={{
        fontSize: 26, fontWeight: 500, letterSpacing: '-0.01em',
        lineHeight: 1.2
      }}>{name}</div>
      <div style={{
        fontSize: 14, color: 'rgba(255,255,255,0.6)',
        marginTop: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
        fontWeight: 600
      }}>{role}</div>
    </div>
  );
}

// ─── Slide 14 — Future growth (sector tailwinds) ─────────────────────
function SceneGrowth({ start, end }) {
  const D = D_b();
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        <div style={{ position: 'absolute', left: 100, top: 160, width: 1720 }}>
          <SectionHeading
            start={start} end={end}
            eyebrow="13 · Future growth"
            title={<>The <span style={{ color: GOLD }}>tailwinds</span> are working in our favour.</>}
            fontSize={56}
          />
        </div>

        <div style={{
          position: 'absolute', left: 100, right: 100, top: 460,
          display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56
        }}>
          <Reveal start={start} end={end} delay={1.2} y={16}>
            <PhotoSlot id="growth-photo" placeholder=""
                       style={{ width: '100%', height: 380 }}/>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Reveal start={start} end={end} delay={1.4}>
              <TailwindRow
                label="Gold loan market"
                stat={`${D.growth.goldMarketCagrPct}% CAGR`}
                copy="Organised gold-loan AUM compounding double-digits as households monetise idle holdings."
              />
            </Reveal>
            <Reveal start={start} end={end} delay={1.6}>
              <TailwindRow
                label="LAP / small-ticket mortgage"
                stat={`${D.growth.lapMarketCagrPct}% CAGR`}
                copy="Self-employed Bharat under-served by banks — a structural gap NBFCs are best positioned to fill."
              />
            </Reveal>
            <Reveal start={start} end={end} delay={1.8}>
              <TailwindRow
                label="NBFC AUM (overall)"
                stat={`${D.growth.nbfcAumCagrPct}% CAGR`}
                copy="Formal credit penetration still well below peers; NBFCs continue to outpace banks in retail."
              />
            </Reveal>
            <Reveal start={start} end={end} delay={2.0}>
              <TailwindRow
                label="Locker demand"
                stat="Persistent shortage"
                copy="Bank locker waiting lists in tier-1 / tier-2 cities create a defensible niche for our locker arm."
              />
            </Reveal>
          </div>
        </div>
      </div>
    </Sprite>
  );
}

function TailwindRow({ label, stat, copy }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '260px 220px 1fr',
      alignItems: 'baseline', gap: 24,
      padding: '18px 0', borderBottom: `1px solid ${GRAY200}`,
      fontFamily: FONT
    }}>
      <div style={{
        fontSize: 14, color: GRAY600, letterSpacing: '0.12em',
        textTransform: 'uppercase', fontWeight: 600
      }}>{label}</div>
      <div style={{
        fontSize: 28, fontWeight: 500, color: GOLD,
        letterSpacing: '-0.01em', fontVariantNumeric: 'tabular-nums'
      }}>{stat}</div>
      <div style={{
        fontSize: 17, color: GRAY800, lineHeight: 1.55
      }}>{copy}</div>
    </div>
  );
}

// ─── Slide 15 — Why Dhanam (growth promise, no values) ────────────────
function SceneWhyDhanam({ start, end }) {
  const D = D_b();
  return (
    <Sprite start={start} end={end}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(135deg, ${CREAM} 0%, ${GOLD_PALE} 100%)`
      }}>
        <HairlineBackdrop color="rgba(15,30,55,0.04)"/>

        <div style={{ position: 'absolute', left: 100, top: 160, width: 1720 }}>
          <Reveal start={start} end={end} delay={0.2}>
            <Eyebrow>14 · Why partner with us</Eyebrow>
          </Reveal>
        </div>

        {/* Hero promise */}
        <Reveal start={start} end={end} delay={0.4} dur={0.9} y={20}>
          <div style={{
            position: 'absolute', left: 100, top: 280, width: 1500,
            fontFamily: FONT, fontWeight: 500, fontSize: 110,
            color: NAVY, letterSpacing: '-0.035em', lineHeight: 1.0
          }}>
            Your money will <span style={{
              fontFamily: SERIF, fontStyle: 'italic',
              fontWeight: 500, color: GOLD, letterSpacing: '-0.02em'
            }}>grow</span> with us.
          </div>
        </Reveal>

        {/* Supporting promises */}
        <div style={{
          position: 'absolute', left: 100, right: 100, top: 600,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28
        }}>
          {(D.promise.lines || []).map((line, i) => (
            <Reveal key={i} start={start} end={end} delay={1.1 + i * 0.18}>
              <PromiseCard index={i + 1} text={line}/>
            </Reveal>
          ))}
        </div>

        {/* Bottom note */}
        <Reveal start={start} end={end} delay={1.9}>
          <div style={{
            position: 'absolute', left: 100, right: 100, bottom: 110,
            paddingTop: 24, borderTop: `1px solid ${GRAY200}`,
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
            fontFamily: MONO, fontSize: 14, color: GRAY600,
            letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600
          }}>
            <span>Freely tradable equity</span>
            <span>Compounding over the long term</span>
            <span>Coimbatore · India</span>
          </div>
        </Reveal>
      </div>
    </Sprite>
  );
}

function PromiseCard({ index, text }) {
  return (
    <div style={{
      background: PAPER, border: `1px solid ${GRAY200}`,
      borderRadius: 14, padding: '32px 30px',
      fontFamily: FONT, minHeight: 200,
      display: 'flex', flexDirection: 'column', gap: 16
    }}>
      <div style={{
        fontFamily: MONO, fontSize: 14, color: GOLD,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        fontWeight: 600
      }}>{String(index).padStart(2, '0')}</div>
      <div style={{
        fontSize: 26, color: NAVY, fontWeight: 500,
        lineHeight: 1.35, letterSpacing: '-0.01em'
      }}>{text}</div>
    </div>
  );
}

// ─── Slide 16 — Closing / contact ────────────────────────────────────
function SceneContact({ start, end }) {
  const D = D_b();
  return (
    <Sprite start={start} end={end}>
      <div style={{ position: 'absolute', inset: 0, background: PAPER }}>
        <HairlineBackdrop/>

        {/* Hero closing line */}
        <div style={{ position: 'absolute', left: 100, top: 220, width: 1100 }}>
          <Reveal start={start} end={end} delay={0.3}>
            <Eyebrow>15 · Thank you</Eyebrow>
          </Reveal>
          <Reveal start={start} end={end} delay={0.5} dur={0.9} y={20}>
            <div style={{
              fontFamily: FONT, fontWeight: 500, fontSize: 96,
              color: NAVY, letterSpacing: '-0.035em', lineHeight: 1.0,
              marginTop: 36
            }}>
              Let's build the next<br/>
              <span style={{
                fontFamily: SERIF, fontStyle: 'italic',
                color: GOLD, letterSpacing: '-0.02em', fontWeight: 500
              }}>chapter</span> together.
            </div>
          </Reveal>
          <Reveal start={start} end={end} delay={1.0}>
            <div style={{
              fontFamily: FONT, fontSize: 24, color: GRAY600,
              marginTop: 30, lineHeight: 1.5, maxWidth: 820
            }}>
              An invitation to partner with one of South India's most carefully run regional NBFCs.
            </div>
          </Reveal>
        </div>

        {/* Photo slot */}
        <Reveal start={start} end={end} delay={0.7} dur={1.0} y={20}>
          <PhotoSlot
            id="closing-photo"
            placeholder=""
            style={{ position: 'absolute', right: 100, top: 200,
                     width: 720, height: 480 }}
          />
        </Reveal>

        {/* Contact card */}
        <Reveal start={start} end={end} delay={1.4} y={14}>
          <div style={{
            position: 'absolute', right: 100, top: 720,
            width: 720, padding: 28,
            background: NAVY, color: '#fff', borderRadius: 12,
            fontFamily: FONT, pointerEvents: 'auto'
          }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              marginBottom: 16
            }}>
              <div style={{
                fontSize: 14, color: GOLD_LITE,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                fontWeight: 600
              }}>Talk to us</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)',
                             fontFamily: MONO, letterSpacing: '0.08em' }}>
                {D.brand.city}
              </div>
            </div>
            <ContactRow label="Website" value={D.brand.website} href={`https://${D.brand.website}`}/>
            <ContactRow label="Toll-free" value={D.brand.tollFree}/>
            <ContactRow label="Instagram" value={D.brand.instagram} href={D.brand.instagramUrl}/>
          </div>
        </Reveal>
      </div>
    </Sprite>
  );
}

function ContactRow({ label, value, href }) {
  const inner = (
    <>
      <span style={{
        fontSize: 14, color: 'rgba(255,255,255,0.6)',
        letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600
      }}>{label}</span>
      <span style={{
        fontSize: 22, color: '#fff', fontFamily: MONO, letterSpacing: '-0.005em',
        textDecoration: href ? 'underline' : 'none',
        textDecorationColor: 'rgba(232,182,90,0.55)', textUnderlineOffset: 4
      }}>{value}</span>
    </>
  );
  const style = {
    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
    padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.1)',
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

Object.assign(window, {
  SceneUnsecured, SceneCompetitors,
  SceneDirectorsA, SceneDirectorsB, SceneTeam,
  SceneAdvisors, SceneGrowth, SceneWhyDhanam, SceneContact,
  CompetitorRow, PeerCard,
  DirectorsPage, DirectorCard, AdvisorCard, TailwindRow, PromiseCard, ContactRow
});
