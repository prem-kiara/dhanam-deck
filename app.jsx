// app.jsx — wires the deck timeline together
// 13 scenes, durations tuned to content density. Total 162s (~2:42).

const SCENES = [
  { id: 1,  label: 'Cover',                    start: 0,   end: 5,   Comp: 'SceneCover',         dark: false },
  { id: 2,  label: 'Products we offer',        start: 5,   end: 15,  Comp: 'SceneAbout',         dark: false },
  { id: 3,  label: 'In-house technology',      start: 15,  end: 29,  Comp: 'SceneTech',          dark: false },
  { id: 4,  label: 'Annual highlights',        start: 29,  end: 35,  Comp: 'SceneHighlights',    dark: false },
  { id: 5,  label: 'Gold loans · prospectus',  start: 35,  end: 51,  Comp: 'SceneGold',          dark: false },
  { id: 6,  label: 'LAP · prospectus',         start: 51,  end: 67,  Comp: 'SceneLAP',           dark: false },
  { id: 7,  label: 'Private lockers',          start: 67,  end: 80,  Comp: 'SceneLockers',       dark: false },
  { id: 8,  label: 'Where we compete',         start: 80,  end: 96,  Comp: 'SceneCompetitors',   dark: false },
  { id: 9,  label: 'Promoters & Directors',    start: 96,  end: 112, Comp: 'SceneFoundingTeam',  dark: false },
  { id: 10, label: 'Promoters & Directors',    start: 112, end: 128, Comp: 'SceneDirectors',     dark: false },
  { id: 11, label: 'Advisory board',           start: 128, end: 142, Comp: 'SceneAceInvestors',  dark: true  },
  { id: 12, label: 'Why partner with us',      start: 142, end: 156, Comp: 'SceneWhyDhanam',     dark: false },
  { id: 13, label: 'Thank you',                start: 156, end: 162, Comp: 'SceneContact',       dark: false }
];
const DURATION = 162;

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
