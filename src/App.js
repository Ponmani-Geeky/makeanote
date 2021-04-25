import React, { useReducer } from "react";
import "./App.css";
import Takenote from "./Components/Takenote";
import { context } from "./Store";
import { reducer, Initialstate } from "./Context/Reducer";
import Noteshow from "./Components/Noteshow";

function App() {
  const [state, dispatch] = useReducer(reducer, Initialstate);
  return (
    <context.Provider value={[state, dispatch]}>
      <div className="App">
        <Takenote />
        <Noteshow />
      </div>
    </context.Provider>
  );
}

export default App;
