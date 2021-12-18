import React, { useState } from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

const Home = () => {
  const [taskList, setTasklist] = useState([]);

  const addTaskHandler = (task) => {
    setTasklist((prev) => {
      return [...prev, { taskTitle: task }];
    });
  };

  return (
    <section className="section-center">
      <AddTask onAddTask={addTaskHandler} />
      <TaskList taskList={taskList} />
    </section>
  );
};

export default Home;
