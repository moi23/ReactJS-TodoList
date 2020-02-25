import React from "react";
import "./App.css";
import Tarefa from "./components/Tarefas";

function App() {
  return (
    <div className="App">
      <Tarefa titulo="Todolist com state && props bro!" />
    </div>
  );
}

export default App;
