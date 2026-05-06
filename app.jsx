// app.jsx — wires the deck timeline together
// 16 scenes, ~13s each, ~208s total (~3:28)

const SCENES = [
  { id: 1,  label: 'Cover',                    start: 0,   end: 14,  Comp: 'SceneCover',       dark: false },
  { id: 2,  label: 'About us',                 start: 14,  end: 28,  Comp: 'SceneAbout',       dark: false },
  { id: 3,  label: 'Annual highlights',        start: 28,  end: 42,  Comp: 'SceneHighlights',  dark: false },
  { id: 4,  label: 'Gold loans',               start: 42,  end: 56,  Comp: 'SceneGold',        dark: false },
  { id: 5,  label: 'Loan against property',    start: 56,  end: 70,  Comp: 'SceneLAP',         dark: false },
  { id: 6,  label: 'Private lockers',          start: 70,  end: 84,  Comp: 'SceneLockers',     dark: false },
  { id: 7,  label: 'Vehicle loans',            start: 84,  end: 98,  Comp: 'SceneVehicle',     dark: false },
  { id: 8,  label: 'Personal loans',           start: 98,  end: 112, Comp: 'SceneUnsecured',   dark: false },
  { id: 9,  label: 'Where we compete',         start: 112, end: 126, Comp: 'SceneCompetitors', dark: false },
  { id: 10, label: 'Promoters & directors',    start: 126, end: 142, Comp: 'SceneDirectorsA',  dark: false },
  { id: 11, label: 'Directors (continued)',    start: 142, end: 158, Comp: 'SceneDirectorsB',  dark: false },
  { id: 12, label: 'Core team',                start: 158, end: 172, Comp: 'SceneTeam',        dark: false },
  { id: 13, label: 'Advisors & ace investors', start: 172, end: 186, Comp: 'SceneAdvisors',    dark: true  },
  { id: 14, label: 'Future growth',            start: 186, end: 200, Comp: 'SceneGrowth',      dark: false },
  { id: 15, label: 'Why partner with us',      start: 200, end: 214, Comp: 'SceneWhyDhanam',   dark: false },
  { id: 16, label: 'Thank you',                start: 214, end: 230, Comp: 'SceneContact',     dark: false }
];
const DURATION = 230;

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
           persistKey="dhanam-investor-video-v4">
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
