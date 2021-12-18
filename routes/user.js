const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();

const { user } = new PrismaClient();

//Get All Users
//Public

router.get("/", async (req, res) => {
  const users = await user.findMany({
    select: {
      username: true,
      posts: true,
    },
  });
  res.json(users);
});

module.exports = router;
