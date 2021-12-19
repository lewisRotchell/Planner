const { check, validationResult } = require("express-validator");

const taskSchema = [check("title", "Please add a task").not().isEmpty()];

const validateTask = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

module.exports = { taskSchema, validateTask };
