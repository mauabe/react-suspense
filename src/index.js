import React from "react";
import ReactDOM from "react-dom";
// import PokemonDetail from './pokemon-detail';
const PokemonDetail = React.lazy(() => import('./pokemon-detail'));

// ↓↓↓ 👋 Update this line to change the lesson ↓↓↓
let lesson = "104";

const Lesson = React.lazy(() => import(`./lessons/${lesson}/app`));
function App() {
  return (
    <React.Suspense fallback="Loading Pokemon...">
      <Lesson />
    </React.Suspense>
  );
}

const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement); // Blocking Mode
ReactDOM.createRoot(rootElement).render(<App />); // Concurrent Mode
