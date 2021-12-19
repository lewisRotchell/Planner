import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskContext from "./taskContext";
import taskReducer from "./taskReducer";
import {
  ADD_TASK,
  DELETE_TASK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TASK,
  FILTER_TASKS,
  CLEAR_FILTER,
} from "../types";

const TaskState = ({ children }) => {
  const initialState = {
    tasks: [
      { id: 1, title: "title1" },
      { id: 2, title: "title2" },
    ],
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  //Add Task
  const addTask = (task) => {
    task.id = uuidv4();
    dispatch({ type: ADD_TASK, payload: task });
  };

  //Delete Task
  const deleteTask = (id) => {
    dispatch({ type: DELETE_TASK, payload: id });
  };
  //Set current

  //Clear current

  //Update Task

  //Filter task
  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskState;
