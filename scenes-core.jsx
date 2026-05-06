// scenes-core.jsx — shared primitives, palette, chrome
// Light / white-first theme inspired by Capri Global, with Dhanam navy + gold accents.

const NAVY      = '#0B2A4A';
const NAVY_DEEP = '#06192E';
const NAVY_SOFT = '#1F4470';
const GOLD      = '#C8922A';
const GOLD_LITE = '#E8B65A';
const GOLD_PALE = '#F6E8C4';
const PAPER     = '#FFFFFF';
const CREAM     = '#FAF7F1';
const GRAY50    = '#F6F7F9';
const GRAY100   = '#EDEEF1';
const GRAY200   = '#E1E3E8';
const GRAY300   = '#C9CCD3';
const GRAY400   = '#9EA2AC';
const GRAY600   = '#5C616D';
const GRAY800   = '#2A2D35';
const INK       = '#15171C';

const FONT  = 'Inter, system-ui, sans-serif';
const SERIF = '"Cormorant Garamond", "EB Garamond", Georgia, serif';
const MONO  = '"JetBrains Mono", ui-monospace, monospace';
// Brand wordmark — Palatino with sane fallbacks.
const BRAND = '"Palatino", "Palatino Linotype", "Book Antiqua", "URW Palladio L", "TeX Gyre Pagella", "Cormorant Garamond", Georgia, serif';

const STAGE_W = 1920;
const STAGE_H = 1080;

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

// ─── Reveal + Fade helpers ────────────────────────────────────────────
function Reveal({ start, end, delay = 0, dur = 0.6, y = 16, children, style }) {
  return (
    <Sprite start={start + delay} end={end - 0.1}>
      {({ localTime }) => {
        const p = Easing.easeOutCubic(clamp(localTime / dur, 0, 1));
        return (
          <div style={{ opacity: p, transform: `translateY(${(1 - p) * y}px)`, ...style }}>
            {children}
          </div>
        );
      }}
    </Sprite>
  );
}

// ─── Eyebrow / Section label ──────────────────────────────────────────
function Eyebrow({ children, color = GOLD, style = {} }) {
  return (
    <div style={{
      fontFamily: MONO, fontSize: 14, color,
      letterSpacing: '0.18em', textTransform: 'uppercase',
      fontWeight: 600,
      ...style
    }}>{children}</div>
  );
}

// ─── Brand lockup — uses assets/logo-dhanam.png if present, otherwise
//     falls back to inline lotus + Palatino "Dhanam" wordmark.
//     Only one renders at a time — never both — so they can't collide.
//
// Module-level cache so all instances (cover + every slide header) share
// one existence check and stay in sync.
let _logoState = 'checking';        // 'checking' | 'loaded' | 'missing'
const _logoSubs = new Set();
(function _checkLogoOnce() {
  if (typeof window === 'undefined' || _logoState !== 'checking') return;
  const img = new Image();
  img.onload  = () => { _logoState = 'loaded';  _logoSubs.forEach(fn => fn(_logoState)); };
  img.onerror = () => { _logoState = 'missing'; _logoSubs.forEach(fn => fn(_logoState)); };
  img.src = 'assets/logo-dhanam.png';
})();

function useLogoState() {
  const [s, setS] = React.useState(_logoState);
  React.useEffect(() => {
    if (_logoState !== 'checking') { setS(_logoState); return; }
    _logoSubs.add(setS);
    return () => { _logoSubs.delete(setS); };
  }, []);
  return s;
}

function BrandLockup({ height = 360, dark = false, eyebrow = true }) {
  const state = useLogoState();

  // Reserve space during the brief existence check so layout doesn't jump.
  if (state === 'checking') {
    return <div style={{ height, width: height * 1.2 }}/>;
  }

  if (state === 'loaded') {
    return (
      <img
        src="assets/logo-dhanam.png"
        alt="Dhanam Investment and Finance"
        style={{
          display: 'block', height,
          width: 'auto', maxWidth: height * 1.6,
          objectFit: 'contain'
        }}
      />
    );
  }

  // Fallback — inline lotus + Palatino "Dhanam" wordmark
  const wordmarkColor = dark ? '#fff' : NAVY;
  const eyebrowColor  = dark ? GOLD_LITE : GOLD;
  const lotusSize     = Math.round(height * 0.78);
  const wordSize      = Math.round(height * 0.62);
  const eyebrowSize   = Math.max(11, Math.round(height * 0.055));
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: Math.round(height * 0.12) }}>
      <LotusMark size={lotusSize} color={GOLD} dark={dark}/>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{
          fontFamily: BRAND, fontWeight: 600, fontSize: wordSize,
          color: wordmarkColor, letterSpacing: '0.005em', lineHeight: 0.95
        }}>Dhanam</div>
        {eyebrow && (
          <div style={{
            fontFamily: FONT, fontSize: eyebrowSize, fontWeight: 500,
            color: eyebrowColor, letterSpacing: '0.16em',
            textTransform: 'uppercase', marginTop: Math.round(height * 0.04)
          }}>Investment & Finance</div>
        )}
      </div>
    </div>
  );
}

// ─── Brand mark — gold lotus glyph, simplified for slide chrome ──────
function LotusMark({ size = 32, color = GOLD, dark = false }) {
  const stroke = dark ? '#fff' : NAVY_DEEP;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64"
         style={{ display: 'block' }}>
      <g fill={color} stroke={stroke} strokeWidth="1.2" strokeLinejoin="round">
        {/* center petal */}
        <path d="M32,8 C28,18 28,32 32,42 C36,32 36,18 32,8 Z"/>
        {/* side petals */}
        <path d="M14,20 C22,28 28,36 32,42 C24,42 18,38 12,30 Z"/>
        <path d="M50,20 C42,28 36,36 32,42 C40,42 46,38 52,30 Z"/>
        {/* outer petals */}
        <path d="M6,34 C16,36 26,40 32,46 C24,48 16,46 8,42 Z"/>
        <path d="M58,34 C48,36 38,40 32,46 C40,48 48,46 56,42 Z"/>
      </g>
    </svg>
  );
}

// ─── Chapter title (top-left during slide) ────────────────────────────
function SlideHeader({ idx, total, label, dark = false }) {
  const muted = dark ? 'rgba(255,255,255,0.55)' : GRAY600;
  return (
    <div style={{
      position: 'absolute', left: 100, top: 50,
      display: 'flex', alignItems: 'center', gap: 18,
      fontFamily: FONT
    }}>
      <BrandLockup height={40} dark={dark} eyebrow={false}/>
      <div style={{ width: 1, height: 18, background: dark ? 'rgba(255,255,255,0.2)' : GRAY200 }}/>
      <div style={{
        fontSize: 12, fontFamily: MONO, color: muted,
        letterSpacing: '0.06em', textTransform: 'uppercase'
      }}>{label}</div>
    </div>
  );
}

function SlideFooter({ idx, total, dark = false }) {
  const c = dark ? 'rgba(255,255,255,0.55)' : GRAY400;
  const accent = dark ? '#fff' : NAVY;
  return (
    <div style={{
      position: 'absolute', right: 100, bottom: 60,
      fontFamily: MONO, fontSize: 12,
      color: c, letterSpacing: '0.08em'
    }}>
      <span style={{ color: accent }}>{String(idx).padStart(2, '0')}</span>
      <span> / {String(total).padStart(2, '0')}</span>
    </div>
  );
}

// ─── Section title bar ────────────────────────────────────────────────
function SectionHeading({ start, end, eyebrow, title, accent = GOLD, dark = false, maxWidth = 1500, fontSize = 60 }) {
  const ink = dark ? '#fff' : NAVY;
  return (
    <>
      <Reveal start={start} end={end} delay={0.2}>
        <Eyebrow color={accent}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal start={start} end={end} delay={0.35} dur={0.7} y={20}>
        <div style={{
          fontFamily: FONT, fontWeight: 500, fontSize,
          color: ink, letterSpacing: '-0.025em', lineHeight: 1.1,
          marginTop: 16, maxWidth
        }}>{title}</div>
      </Reveal>
    </>
  );
}

// ─── Stat block ───────────────────────────────────────────────────────
function StatBlock({ label, value, unit, foot, color = NAVY, big = 56, dark = false }) {
  const labelColor = dark ? 'rgba(255,255,255,0.6)' : GRAY600;
  return (
    <div style={{ fontFamily: FONT }}>
      <div style={{
        fontSize: 14, color: labelColor, letterSpacing: '0.12em',
        textTransform: 'uppercase', fontWeight: 600, marginBottom: 12
      }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{
          fontFamily: FONT, fontSize: big, fontWeight: 500,
          color, letterSpacing: '-0.02em', lineHeight: 1,
          fontVariantNumeric: 'tabular-nums'
        }}>{value}</span>
        {unit && (
          <span style={{
            fontSize: big * 0.32, fontWeight: 500,
            color: dark ? 'rgba(255,255,255,0.7)' : GRAY600,
            letterSpacing: '-0.01em'
          }}>{unit}</span>
        )}
      </div>
      {foot && (
        <div style={{
          fontSize: 15, color: labelColor, marginTop: 10, lineHeight: 1.5
        }}>{foot}</div>
      )}
    </div>
  );
}

// ─── Bar chart (auto-scales to data) ──────────────────────────────────
function BarChart({ data, height = 280, color = NAVY, accentLast = true, formatter = v => v }) {
  const max = Math.max(...data.map(d => d.value)) || 1;
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${data.length}, 1fr)`,
      gap: 16, height: height + 60, alignItems: 'end',
      fontFamily: FONT
    }}>
      {data.map((d, i) => {
        const h = (d.value / max) * height;
        const isLast = i === data.length - 1;
        const fill = accentLast && isLast ? GOLD : color;
        return (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 8
          }}>
            <div style={{
              fontFamily: MONO, fontSize: 12, color: NAVY,
              fontVariantNumeric: 'tabular-nums', fontWeight: 500
            }}>{formatter(d.value)}</div>
            <div style={{
              width: '100%', height: h, background: fill,
              borderRadius: '4px 4px 0 0',
              transition: 'height 600ms ease-out'
            }}/>
            <div style={{
              fontSize: 12, color: GRAY600, letterSpacing: '0.04em',
              textTransform: 'uppercase', textAlign: 'center'
            }}>{d.label}</div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Animated bar chart that grows from 0 to value over time ─────────
function GrowingBarChart({ data, start, end, delay = 0.4, growDur = 1.4,
                           height = 280, color = NAVY, accentLast = true,
                           formatter = v => v }) {
  return (
    <Sprite start={start} end={end - 0.1}>
      {({ localTime }) => {
        const p = Easing.easeOutCubic(clamp((localTime - delay) / growDur, 0, 1));
        const max = Math.max(...data.map(d => d.value)) || 1;
        return (
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${data.length}, 1fr)`,
            gap: 16, height: height + 60, alignItems: 'end',
            fontFamily: FONT
          }}>
            {data.map((d, i) => {
              const stagger = i * 0.06;
              const localP = Easing.easeOutCubic(clamp((localTime - delay - stagger) / growDur, 0, 1));
              const h = (d.value / max) * height * localP;
              const isLast = i === data.length - 1;
              const fill = accentLast && isLast ? GOLD : color;
              return (
                <div key={i} style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', gap: 8
                }}>
                  <div style={{
                    fontFamily: MONO, fontSize: 12, color: NAVY,
                    fontVariantNumeric: 'tabular-nums', fontWeight: 500,
                    opacity: localP
                  }}>{formatter(d.value)}</div>
                  <div style={{
                    width: '100%', height: h, background: fill,
                    borderRadius: '4px 4px 0 0'
                  }}/>
                  <div style={{
                    fontSize: 12, color: GRAY600, letterSpacing: '0.04em',
                    textTransform: 'uppercase', textAlign: 'center',
                    opacity: localP
                  }}>{d.label}</div>
                </div>
              );
            })}
          </div>
        );
      }}
    </Sprite>
  );
}

// ─── Horizontal bar chart (animated) ─────────────────────────────────
function HorizontalBars({ data, start, end, delay = 0.4, growDur = 1.2,
                         color = NAVY, accentLast = true, formatter = v => v,
                         barHeight = 22, gap = 14 }) {
  return (
    <Sprite start={start} end={end - 0.1}>
      {({ localTime }) => {
        const max = Math.max(...data.map(d => d.value)) || 1;
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap, fontFamily: FONT }}>
            {data.map((d, i) => {
              const stagger = i * 0.08;
              const localP = Easing.easeOutCubic(clamp((localTime - delay - stagger) / growDur, 0, 1));
              const w = (d.value / max) * 100 * localP;
              const isLast = i === data.length - 1;
              const fill = accentLast && isLast ? GOLD : color;
              return (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '64px 1fr 96px', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    fontSize: 12, color: GRAY600, letterSpacing: '0.06em',
                    textTransform: 'uppercase', fontWeight: 500
                  }}>{d.label}</div>
                  <div style={{ position: 'relative', height: barHeight, background: GRAY100, borderRadius: 4 }}>
                    <div style={{
                      position: 'absolute', left: 0, top: 0, height: '100%',
                      width: `${w}%`, background: fill,
                      borderRadius: 4
                    }}/>
                  </div>
                  <div style={{
                    fontFamily: MONO, fontSize: 13, color: NAVY,
                    fontVariantNumeric: 'tabular-nums', fontWeight: 500,
                    opacity: localP, textAlign: 'right'
                  }}>{formatter(d.value)}</div>
                </div>
              );
            })}
          </div>
        );
      }}
    </Sprite>
  );
}

// ─── Line chart (animated draw) ──────────────────────────────────────
function LineChart({ data, start, end, delay = 0.4, drawDur = 1.4,
                    width = 800, height = 220, color = NAVY,
                    fill = 'rgba(11,42,74,0.06)', formatter = v => v,
                    showDots = true }) {
  const max = Math.max(...data.map(d => d.value)) || 1;
  const min = Math.min(...data.map(d => d.value));
  const padTop = 30, padBot = 36, padX = 40;
  const chartW = width - padX * 2;
  const chartH = height - padTop - padBot;
  const xs = data.map((_, i) => padX + (i / (data.length - 1)) * chartW);
  const ys = data.map(d => padTop + chartH - ((d.value - min) / (max - min || 1)) * chartH);
  const linePath = data.map((_, i) => `${i === 0 ? 'M' : 'L'}${xs[i]},${ys[i]}`).join(' ');
  const fillPath = `${linePath} L${xs[xs.length-1]},${padTop+chartH} L${xs[0]},${padTop+chartH} Z`;
  return (
    <Sprite start={start} end={end - 0.1}>
      {({ localTime }) => {
        const p = Easing.easeOutCubic(clamp((localTime - delay) / drawDur, 0, 1));
        return (
          <svg width={width} height={height} style={{ display: 'block', overflow: 'visible' }}>
            {/* gridlines */}
            <line x1={padX} y1={padTop+chartH} x2={padX+chartW} y2={padTop+chartH} stroke={GRAY200} strokeWidth="1"/>
            {/* fill area */}
            <path d={fillPath} fill={fill} opacity={p}/>
            {/* line */}
            <path d={linePath} fill="none" stroke={color} strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"
                  strokeDasharray="2000" strokeDashoffset={2000 * (1 - p)}/>
            {/* dots + labels */}
            {data.map((d, i) => {
              const dotP = Easing.easeOutCubic(clamp((localTime - delay - 0.2 - i * 0.1) / 0.4, 0, 1));
              const isLast = i === data.length - 1;
              return (
                <g key={i} opacity={dotP}>
                  {showDots && (
                    <circle cx={xs[i]} cy={ys[i]} r={isLast ? 6 : 4}
                            fill={isLast ? GOLD : color} stroke="#fff" strokeWidth="2"/>
                  )}
                  <text x={xs[i]} y={ys[i] - 14} textAnchor="middle"
                        fontFamily={MONO} fontSize="12" fill={NAVY}
                        style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 500 }}>
                    {formatter(d.value)}
                  </text>
                  <text x={xs[i]} y={padTop + chartH + 22} textAnchor="middle"
                        fontFamily={FONT} fontSize="12" fill={GRAY600}
                        style={{ letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    {d.label}
                  </text>
                </g>
              );
            })}
          </svg>
        );
      }}
    </Sprite>
  );
}

// ─── Sparkline (compact trend, no axes) ──────────────────────────────
function Sparkline({ data, width = 220, height = 60, color = GOLD, fill = 'rgba(200,146,42,0.15)' }) {
  const max = Math.max(...data) || 1;
  const min = Math.min(...data);
  const xs = data.map((_, i) => (i / (data.length - 1)) * (width - 4) + 2);
  const ys = data.map(v => (height - 8) - ((v - min) / (max - min || 1)) * (height - 16) + 4);
  const linePath = data.map((_, i) => `${i === 0 ? 'M' : 'L'}${xs[i]},${ys[i]}`).join(' ');
  const fillPath = `${linePath} L${xs[xs.length-1]},${height} L${xs[0]},${height} Z`;
  return (
    <svg width={width} height={height} style={{ display: 'block' }}>
      <path d={fillPath} fill={fill}/>
      <path d={linePath} fill="none" stroke={color} strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx={xs[xs.length-1]} cy={ys[ys.length-1]} r="3.5"
              fill={color} stroke="#fff" strokeWidth="1.5"/>
    </svg>
  );
}

// ─── Donut / progress ring ───────────────────────────────────────────
function Donut({ value, max = 100, size = 160, stroke = 14, color = GOLD, label, sub, animateStart, animateEnd, animateDelay = 0.4 }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pctTarget = Math.min(1, value / max);
  const inner = ({ localTime } = {}) => {
    const p = animateStart != null
      ? Easing.easeOutCubic(clamp(((localTime ?? 0) - animateDelay) / 1.2, 0, 1))
      : 1;
    return (
      <div style={{
        position: 'relative', width: size, height: size,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <circle cx={size/2} cy={size/2} r={r} fill="none"
                  stroke={GRAY100} strokeWidth={stroke}/>
          <circle cx={size/2} cy={size/2} r={r} fill="none"
                  stroke={color} strokeWidth={stroke} strokeLinecap="round"
                  strokeDasharray={c} strokeDashoffset={c * (1 - pctTarget * p)}/>
        </svg>
        <div style={{
          position: 'absolute', textAlign: 'center', fontFamily: FONT
        }}>
          <div style={{ fontSize: Math.round(size * 0.18), fontWeight: 500, color: NAVY,
                         letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>{label}</div>
          {sub && (
            <div style={{ fontSize: 11, color: GRAY600, letterSpacing: '0.06em',
                           textTransform: 'uppercase', marginTop: 4 }}>{sub}</div>
          )}
        </div>
      </div>
    );
  };
  if (animateStart != null) {
    return <Sprite start={animateStart} end={animateEnd - 0.1}>{inner}</Sprite>;
  }
  return inner();
}

// ─── Subtle hairline grid backdrop ───────────────────────────────────
function HairlineBackdrop({ color = 'rgba(15,30,55,0.04)' }) {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: `linear-gradient(${color} 1px, transparent 1px),
                        linear-gradient(90deg, ${color} 1px, transparent 1px)`,
      backgroundSize: '120px 120px',
      pointerEvents: 'none'
    }}/>
  );
}

// ─── Photo slot — invisible until image is dropped ───────────────────
// Empty state shows nothing visible. Auto-loads `uploads/<id>.png` if a
// file with the slot-id name exists; user-dropped images override it.
function PhotoSlot({ id, src, placeholder = '', style, shape = 'rounded', radius = 8, fit = 'cover', ghost = true }) {
  const defaultSrc = src !== undefined ? src : (id ? `uploads/${id}.png` : undefined);
  return (
    <div style={{
      borderRadius: radius, overflow: 'hidden',
      ...style
    }}>
      <image-slot
        id={id}
        shape={shape}
        radius={String(radius)}
        fit={fit}
        placeholder={placeholder}
        {...(defaultSrc ? { src: defaultSrc } : {})}
        {...(ghost ? { 'data-ghost': 'true' } : {})}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  );
}

// ─── Pill / chip ─────────────────────────────────────────────────────
function Chip({ children, color = NAVY, bg = GRAY50, border = GRAY200, mono = false }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '6px 12px', borderRadius: 999,
      background: bg, border: `1px solid ${border}`,
      fontFamily: mono ? MONO : FONT, fontSize: 12, color,
      fontWeight: 500, letterSpacing: mono ? '0.04em' : '-0.005em',
      whiteSpace: 'nowrap'
    }}>{children}</span>
  );
}

Object.assign(window, {
  NAVY, NAVY_DEEP, NAVY_SOFT, GOLD, GOLD_LITE, GOLD_PALE,
  PAPER, CREAM, GRAY50, GRAY100, GRAY200, GRAY300, GRAY400, GRAY600, GRAY800, INK,
  FONT, SERIF, MONO, BRAND, STAGE_W, STAGE_H, clamp,
  Reveal, Eyebrow, LotusMark, BrandLockup, SlideHeader, SlideFooter, SectionHeading,
  StatBlock, BarChart, GrowingBarChart, HorizontalBars, LineChart, Sparkline,
  Donut, HairlineBackdrop, PhotoSlot, Chip
});
