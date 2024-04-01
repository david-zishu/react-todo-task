import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

function TaskInput() {
  const [taskName, setTaskName] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim() === "") {
      setError("Task field is required");
      return;
    }

    dispatch(addTask(taskName));
    setTaskName("");
    setError("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Task..."
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
            setError("");
          }}
          onKeyDown={handleKeyDown}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleAddTask}
        >
          <i className="fa fa-plus"></i>
        </button>
      </div>
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
}

export default TaskInput;
