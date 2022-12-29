import "./App.css";
import { AppContext } from "./contexts/AppContext";
import { Div } from "./components/Div";

function App() {
  return (
    <div className="editMinha">
      <AppContext>
        <Div />
      </AppContext>
    </div>
  );
}

export default App;
