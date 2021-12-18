const express = require("express");

const main = async () => {
  const app = express();
  const PORT = process.env.PORT || 5000;

  app.use(express.json());
  app.use("/api/auth", require("./routes/auth"));
  app.use("/api/users", require("./routes/user"));
  app.use("/api/tasks", require("./routes/task"));

  app.get("/", (req, res) => {
    res.send("hello world");
  });

  app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
  });
};

main().catch((err) => console.log(err));
