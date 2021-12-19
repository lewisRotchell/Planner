const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();

const { user, task } = new PrismaClient();

//Create task
//Private
exports.createTask = async (req, res) => {
  const { title } = req.body;
  try {
    const newTask = await task.create({
      data: {
        title,
        user_id: req.user.id,
      },
    });

    res.json({
      newTask,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

//get user's tasks
//Private
exports.getTasks = async (req, res) => {
  try {
    const tasks = await task.findMany({
      where: {
        user_id: req.user.id,
      },
      orderBy: [
        {
          created_at: "asc",
        },
      ],
    });
    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

//Update task
//Private
exports.updateTask = async (req, res) => {
  const { title } = req.body;

  try {
    const selectedTask = await task.findUnique({
      where: {
        id: +req.params.id,
      },
    });

    if (!selectedTask) {
      return res.status(404).json({ msg: "Task not found" });
    }

    //Check to see if task belongs to user
    if (selectedTask.user_id !== req.user.id) {
      return res.status(401).json({ msg: "Unauthorised" });
    }

    //Update task
    const updatedTask = await task.update({
      where: {
        id: +req.params.id,
      },
      data: {
        title,
      },
    });
    res.json(updatedTask);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

//delete task
//Private
exports.deleteTask = async (req, res) => {
  res.send("delete task");
};
