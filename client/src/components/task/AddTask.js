import React, { useState, useContext } from "react";
import TaskContext from "../../context/task/taskContext";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
  });
  const taskContext = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim().length === 0) {
      console.log("error");
      return;
    }
    taskContext.addTask(task);

    setTask({
      title: "",
    });
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
            value={task.title}
            onChange={(e) => setTask({ title: e.target.value })}
            type="text"
            placeholder="Add Task"
            name="title"
          />
        </div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default AddTask;
