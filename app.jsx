// app.jsx — wires the deck timeline together
// 13 scenes × ~14-16s = ~196s (~3:16)

const SCENES = [
  { id: 1,  label: 'Cover',                    start: 0,   end: 14,  Comp: 'SceneCover',         dark: false },
  { id: 2,  label: 'Products we offer',        start: 14,  end: 28,  Comp: 'SceneAbout',         dark: false },
  { id: 3,  label: 'Annual highlights',        start: 28,  end: 42,  Comp: 'SceneHighlights',    dark: false },
  { id: 4,  label: 'Gold loans · prospectus',  start: 42,  end: 58,  Comp: 'SceneGold',          dark: false },
  { id: 5,  label: 'LAP · prospectus',         start: 58,  end: 74,  Comp: 'SceneLAP',           dark: false },
  { id: 6,  label: 'Private lockers',          start: 74,  end: 88,  Comp: 'SceneLockers',       dark: false },
  { id: 7,  label: 'Where we compete',         start: 88,  end: 102, Comp: 'SceneCompetitors',   dark: false },
  { id: 8,  label: 'Promoters & directors',    start: 102, end: 118, Comp: 'SceneFoundingTeam',  dark: false },
  { id: 9,  label: 'Promoters & directors',    start: 118, end: 134, Comp: 'SceneDirectors',     dark: false },
  { id: 10, label: 'Management team',          start: 134, end: 148, Comp: 'SceneTeam',          dark: false },
  { id: 11, label: 'Ace investors',            start: 148, end: 164, Comp: 'SceneAceInvestors',  dark: true  },
  { id: 12, label: 'Why partner with us',      start: 164, end: 180, Comp: 'SceneWhyDhanam',     dark: false },
  { id: 13, label: 'Thank you',                start: 180, end: 196, Comp: 'SceneContact',       dark: false }
];
const DURATION = 196;

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
