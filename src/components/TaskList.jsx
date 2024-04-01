import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../redux/taskSlice";

function TaskList() {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete the record?"
    );
    if (confirmDelete) {
      dispatch(deleteTask(id));
    }
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <div>
      {tasks && tasks.length > 0 ? (
        <ul className="list-group">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                task.completed ? "bg-success" : ""
              }`}
            >
              <div>
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={task.completed}
                  onChange={() => handleToggleTask(task.id)}
                />
                <span className={`ms-2 ${task.completed ? "text-white" : ""}`}>
                  {task.name}
                </span>
              </div>
              <div>
                <button
                  className="btn btn-danger me-2"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Task is empty, Let&apos;s add a task!</p>
      )}
    </div>
  );
}

export default TaskList;
