import HeadComponent from "./components/HeadComponent/HeadComponent.tsx";
import Nav from "./components/Nav/Nav.tsx";
import ParagraphComponent from "./components/ParagraphComponent/paragraphComponent.tsx";

function App() {
  const nb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="p-4 bg-green-100">
      <HeadComponent />
      <Nav />
      <div className="body">
        {nb.map((n) => (
          <div key={n}>
            <ParagraphComponent width1={300} width2={280} width3={350} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
