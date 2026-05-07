// app.jsx — wires the deck timeline together
// 13 scenes, durations tuned to content density. Total 172s (~2:52).

const SCENES = [
  { id: 1,  label: 'Cover',                    start: 0,   end: 5,   Comp: 'SceneCover',         dark: false },
  { id: 2,  label: 'Products we offer',        start: 5,   end: 21,  Comp: 'SceneAbout',         dark: false },
  { id: 3,  label: 'Annual highlights',        start: 21,  end: 35,  Comp: 'SceneHighlights',    dark: false },
  { id: 4,  label: 'Gold loans · prospectus',  start: 35,  end: 51,  Comp: 'SceneGold',          dark: false },
  { id: 5,  label: 'LAP · prospectus',         start: 51,  end: 67,  Comp: 'SceneLAP',           dark: false },
  { id: 6,  label: 'Private lockers',          start: 67,  end: 79,  Comp: 'SceneLockers',       dark: false },
  { id: 7,  label: 'Where we compete',         start: 79,  end: 95,  Comp: 'SceneCompetitors',   dark: false },
  { id: 8,  label: 'Promoters & directors',    start: 95,  end: 111, Comp: 'SceneFoundingTeam',  dark: false },
  { id: 9,  label: 'Promoters & directors',    start: 111, end: 127, Comp: 'SceneDirectors',     dark: false },
  { id: 10, label: 'Management team',          start: 127, end: 138, Comp: 'SceneTeam',          dark: false },
  { id: 11, label: 'Ace investors',            start: 138, end: 152, Comp: 'SceneAceInvestors',  dark: true  },
  { id: 12, label: 'Why partner with us',      start: 152, end: 166, Comp: 'SceneWhyDhanam',     dark: false },
  { id: 13, label: 'Thank you',                start: 166, end: 172, Comp: 'SceneContact',       dark: false }
];
const DURATION = 172;

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
