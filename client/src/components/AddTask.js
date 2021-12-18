import React, { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim().length === 0) {
      console.log("error");
      return;
    }
    onAddTask(taskTitle);

    setTaskTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-controls">
        <div className="form-control">
          <label className="sr-only" htmlFor="text">
            Task
          </label>
          <input
            id="task"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            type="text"
          />
        </div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default AddTask;
