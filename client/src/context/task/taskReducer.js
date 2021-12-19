import {
  ADD_TASK,
  DELETE_TASK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TASK,
  FILTER_TASKS,
  CLEAR_FILTER,
} from "../types";

const taskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          return action.payload !== task.id;
        }),
      };
    default:
      return state;
  }
};

export default taskReducer;
