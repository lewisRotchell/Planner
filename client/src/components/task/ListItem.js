import React, { useContext } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import TaskContext from "../../context/task/taskContext";

const ListItem = ({ task }) => {
  const taskContext = useContext(TaskContext);
  const { deleteTask } = taskContext;

  const { id } = task;

  const onDelete = () => {
    deleteTask(id);
  };

  return (
    <li className="task-list__item">
      {task.title}
      <div className="btn-container">
        {/* <button className="edit-btn">
          <FaEdit />
        </button> */}
        <button onClick={onDelete} className="delete-btn">
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default ListItem;
