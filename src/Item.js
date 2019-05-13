import React from "react";
import { useLuft } from "luft";
import state from "./state";

function App() {
  const [name, todos] = useLuft("name", "todos");
  return (
    <div className="App">
      <header className="App-header">
        <p>hello {name}</p>
        <ol>
          {Object.keys(todos).map(key => (
            <li>{todos[key].value}</li>
          ))}
        </ol>
        <button onClick={() => state.addTodo("hey")}>button</button>
      </header>
    </div>
  );
}

export default App;
