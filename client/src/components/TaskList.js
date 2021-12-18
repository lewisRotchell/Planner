import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TaskList = ({ taskList }) => {
  console.log(taskList);
  return (
    <ul className="task-list">
      {taskList.map((task, index) => (
        <li className="task-list__item" key={index}>
          {task.taskTitle}
          <div className="btn-container">
            <button className="edit-btn">
              <FaEdit />
            </button>
            <button className="delete-btn">
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
