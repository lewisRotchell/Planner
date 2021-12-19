import React, { useState } from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import NavBar from "../components/layout/NavBar";
import { configuredDate } from "../utils/configureDate";

const Home = () => {
  const [taskList, setTasklist] = useState([]);
  const { day, date, month, year, append } = configuredDate;

  const addTaskHandler = (task) => {
    setTasklist((prev) => {
      return [...prev, { taskTitle: task }];
    });
  };

  return (
    <>
      <NavBar />

      <section className="section-center">
        <header className="task-list-header">
          <span className="my-day">My Day</span>
          <span>{`${day}, ${date}${append}, ${month}, ${year}`}</span>
        </header>
        <AddTask onAddTask={addTaskHandler} />
        <TaskList taskList={taskList} />
      </section>
    </>
  );
};

export default Home;
