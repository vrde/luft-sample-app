import React from "react";
import { useLuft } from "luft";
import "./App.css";

function App() {
  const [actions, name, todos, total] = useLuft(
    "actions",
    "name",
    "todos",
    "total"
  );
  return (
    <div className="App">
      <header className="App-header">
        <p>
          hello {name}, you have {total} todos
        </p>
        <ol>
          {Object.keys(todos).map(key => (
            <li>{todos[key].value}</li>
          ))}
        </ol>
        <button onClick={() => actions.addTodo("hey")}>button</button>
      </header>
    </div>
  );
}

export default App;
