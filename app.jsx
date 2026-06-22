// app.jsx — wires the deck timeline together
// 15 scenes, durations tuned to content density. Total 188s (~3:08).

const SCENES = [
  { id: 1,  label: 'Cover',                    start: 0,   end: 5,   Comp: 'SceneCover',         dark: false },
  { id: 2,  label: 'Our story',                start: 5,   end: 17,  Comp: 'SceneStory',         dark: false },
  { id: 3,  label: 'Products we offer',        start: 17,  end: 27,  Comp: 'SceneAbout',         dark: false },
  { id: 4,  label: 'In-house technology',      start: 27,  end: 41,  Comp: 'SceneTech',          dark: false },
  { id: 5,  label: 'Annual highlights',        start: 41,  end: 47,  Comp: 'SceneHighlights',    dark: false },
  { id: 6,  label: 'Gold loans · prospectus',  start: 47,  end: 63,  Comp: 'SceneGold',          dark: false },
  { id: 7,  label: 'LAP · prospectus',         start: 63,  end: 79,  Comp: 'SceneLAP',           dark: false },
  { id: 8,  label: 'Private lockers',          start: 79,  end: 92,  Comp: 'SceneLockers',       dark: false },
  { id: 9,  label: 'Where we compete',         start: 92,  end: 108, Comp: 'SceneCompetitors',   dark: false },
  { id: 10, label: 'Promoters and Directors',  start: 108, end: 124, Comp: 'SceneFoundingTeam',  dark: false },
  { id: 11, label: 'KMP and Directors',        start: 124, end: 140, Comp: 'SceneDirectors',     dark: false },
  { id: 12, label: 'Advisory board',           start: 140, end: 154, Comp: 'SceneAceInvestors',  dark: true  },
  { id: 13, label: 'Future growth',            start: 154, end: 168, Comp: 'SceneGrowth',        dark: false },
  { id: 14, label: 'Why partner with us',      start: 168, end: 182, Comp: 'SceneWhyDhanam',     dark: false },
  { id: 15, label: 'Thank you',                start: 182, end: 188, Comp: 'SceneContact',       dark: false }
];
const DURATION = 188;

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
