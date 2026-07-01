// app.jsx — wires the deck timeline together
// 18 scenes, durations tuned to content density. Total 226s (~3:46).

const SCENES = [
  { id: 1,  label: 'Cover',                    start: 0,   end: 5,   Comp: 'SceneCover',         dark: false },
  { id: 2,  label: 'About us',                 start: 5,   end: 17,  Comp: 'SceneStory',         dark: false },
  { id: 3,  label: 'Promoters and Directors',  start: 17,  end: 33,  Comp: 'SceneFoundingTeam',  dark: false },
  { id: 4,  label: 'KMP and Directors',        start: 33,  end: 47,  Comp: 'SceneDirectors',     dark: false },
  { id: 5,  label: 'KMP and Directors',        start: 47,  end: 61,  Comp: 'SceneDirectors2',    dark: false },
  { id: 6,  label: 'Ace investors',            start: 61,  end: 75,  Comp: 'SceneAceInvestors',  dark: true  },
  { id: 7,  label: 'Products we offer',        start: 75,  end: 85,  Comp: 'SceneAbout',         dark: false },
  { id: 8,  label: 'Business model',           start: 85,  end: 99,  Comp: 'SceneBusinessModel', dark: false },
  { id: 9,  label: 'In-house technology',      start: 99,  end: 113, Comp: 'SceneTech',          dark: false },
  { id: 10, label: 'Annual highlights',        start: 113, end: 119, Comp: 'SceneHighlights',    dark: false },
  { id: 11, label: 'Where we compete',         start: 119, end: 135, Comp: 'SceneCompetitors',   dark: false },
  { id: 12, label: 'Risks & mitigations',      start: 135, end: 149, Comp: 'SceneRisks',         dark: false },
  { id: 13, label: 'Why partner with us',      start: 149, end: 163, Comp: 'SceneWhyDhanam',     dark: false },
  { id: 14, label: 'Thank you',                start: 163, end: 169, Comp: 'SceneContact',       dark: false }
];
const DURATION = 169;

function ChromeMux() {
  const t = useTime();
  const current = SCENES.find(s => t >= s.start && t < s.end) || SCENES[SCENES.length - 1];
  return (
    <>
      <SlideHeader idx={current.id} total={SCENES.length} label={current.label} dark={current.dark}/>
      <SlideFooter idx={current.id} total={SCENES.length} dark={current.dark}/>
    </>
  );
}

function App() {
  return (
    <Stage width={STAGE_W} height={STAGE_H} duration={DURATION}
           background={PAPER} loop={true} autoplay={true}
           persistKey="dhanam-investor-video-v6">
      {SCENES.map(s => {
        const Comp = window[s.Comp];
        return <Comp key={s.id} start={s.start} end={s.end}/>;
      })}
      <ChromeMux/>
    </Stage>
  );
}

// ── PDF export ──────────────────────────────────────────────────────
// Renders every scene at its settled (post-animation) frame as a stack of
// 1920×1080 pages; the browser's "Save as PDF" turns it into the deck PDF.
function PrintRoot({ autoPrint }) {
  React.useEffect(() => {
    document.body.classList.add('print-mode');
    let cancelled = false;
    if (autoPrint) {
      const imgs = Array.from(document.images);
      const ready = Promise.all(imgs.map(img =>
        img.complete ? Promise.resolve() : new Promise(r => { img.onload = img.onerror = r; })
      ));
      const fire = () => { if (!cancelled) window.print(); };
      ready.then(() => setTimeout(fire, 300));
      var fallback = setTimeout(fire, 3500);
    }
    return () => { cancelled = true; if (autoPrint) clearTimeout(fallback); document.body.classList.remove('print-mode'); };
  }, [autoPrint]);

  return (
    <div className="print-root">
      {SCENES.map(s => {
        const Comp = window[s.Comp];
        const ctx = { time: s.end - 0.2, duration: DURATION, playing: false };
        return (
          <div className="print-page" key={s.id}>
            <div className="print-canvas">
              <TimelineContext.Provider value={ctx}>
                <Comp start={s.start} end={s.end}/>
                <SlideHeader idx={s.id} total={SCENES.length} label={s.label} dark={s.dark}/>
              </TimelineContext.Provider>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PdfButton({ onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button onClick={onClick} title="Download the deck as a PDF"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: 'fixed', top: 14, right: 14, zIndex: 1000,
        display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px',
        borderRadius: 8, background: hover ? '#06192E' : '#0B2A4A', color: '#fff',
        border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer',
        fontFamily: 'Inter, system-ui, sans-serif', fontSize: 13, fontWeight: 600,
        letterSpacing: '0.02em', boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
      }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      PDF
    </button>
  );
}

function Root() {
  const staticPrint = new URLSearchParams(location.search).has('print');
  const [printing, setPrinting] = React.useState(false);
  React.useEffect(() => {
    const after = () => setPrinting(false);
    window.addEventListener('afterprint', after);
    return () => window.removeEventListener('afterprint', after);
  }, []);
  if (staticPrint) return <PrintRoot autoPrint={false}/>;
  if (printing) return <PrintRoot autoPrint={true}/>;
  return (
    <>
      <App/>
      <PdfButton onClick={() => setPrinting(true)}/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root/>);
