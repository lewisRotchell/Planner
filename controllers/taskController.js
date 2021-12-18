const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { privateDecrypt } = require("crypto");

const router = express.Router();

const { user, task } = new PrismaClient();

//Create task
//Private
exports.createTask = async (req, res) => {
  const { title, user_id } = req.body;

  const userExists = await user.findUnique({
    where: {
      id: user_id,
    },
  });
  if (!userExists) {
    return res.status(400).json({
      msg: "User not found",
    });
  }

  const newTask = await task.create({
    data: {
      title,
      user_id,
    },
  });

  res.json({
    newTask,
  });
};

//get all users tasks
//Private
exports.getTasks = async (req, res) => {
  res.send("get all tasks");
};

//Update task
//Private
exports.updateTask = async (req, res) => {
  res.send("update task");
};

//delete task
//Private
exports.deleteTask = async (req, res) => {
  res.send("delete task");
};
