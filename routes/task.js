const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const auth = require("../middleware/auth");

const { taskSchema } = require("../middleware/taskValidations");
const { validateTask } = require("../middleware/taskValidations");

const { createTask, updateTask, getTasks, deleteTask } = taskController;

router
  .route("/")
  .post(auth, taskSchema, validateTask, createTask)
  .get(auth, getTasks);
router
  .route("/:id")
  .put(auth, taskSchema, validateTask, updateTask)
  .delete(auth, deleteTask);

//Get all tasks from an account
// router.get("/:user_id", async (req, res) => {
//   const { user_id } = req.params;

//   const tasks = await task.findMany({
//     where: {
//       user_id: parseInt(user_id),
//     },
//     select: {
//       title: true,
//       created_at: true,
//       user: true,
//     },
//   });
//   res.json({
//     tasks,
//   });
// });

module.exports = router;
