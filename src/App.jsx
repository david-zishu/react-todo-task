// App.jsx
import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <TaskInput />
            </div>
            <div className="card-body">
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
