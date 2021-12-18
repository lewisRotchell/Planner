const express = require("express");
const { PrismaClient } = require("@prisma/client");
const argon2 = require("argon2");

const { user } = new PrismaClient();

//Register user
//Public
exports.register = async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await argon2.hash(password);

  const userExists = await user.findUnique({
    where: {
      username,
    },
    select: {
      username: true,
    },
  });
  if (userExists) {
    return res.status(400).json({
      msg: "user already exists",
    });
  }

  try {
    const newUser = await user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    return res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
  }

  res.json(newUser);
};

//Get logged in user
//Private
exports.login = async (req, res) => {
  res.send("login");
};

//Get logged in user
//Private
exports.me = async (req, res) => {
  res.send("get logged in user");
};
