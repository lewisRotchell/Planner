import React, { useContext } from "react";
import TaskContext from "../../context/task/taskContext";
import ListItem from "./ListItem";

const TaskList = () => {
  const taskContext = useContext(TaskContext);
  const { tasks } = taskContext;

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <ListItem task={task} key={task.id} />
      ))}
    </ul>
  );
};

export default TaskList;
