const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

const { createTask, updateTask, getTasks, deleteTask } = taskController;

router.post("/", createTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

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
