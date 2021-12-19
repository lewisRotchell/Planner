const { PrismaClient } = require("@prisma/client");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const { user } = new PrismaClient();

//Register user
//Public
exports.register = async (req, res) => {
  const { username, password, email } = req.body;

  try {
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
        msg: "username already exists",
      });
    }

    const emailExists = await user.findUnique({
      where: {
        email,
      },
      select: {
        email: true,
      },
    });
    if (emailExists) {
      return res.status(400).json({
        msg: "email already in use",
      });
    }

    const hashedPassword = await argon2.hash(password);

    const newUser = await user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
        username: true,
      },
    });

    const payload = {
      user: {
        id: newUser.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWTSECRET,
      {
        expiresIn: 36000,
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

//Get logged in user
//Private
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await user.findUnique({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (!existingUser) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const valid = await argon2.verify(existingUser.password, password);
    if (!valid) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    //Login Success
    const payload = {
      user: {
        id: existingUser.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWTSECRET,
      {
        expiresIn: 36000,
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

//Get logged in user
//Private
exports.me = async (req, res) => {
  try {
    const existingUser = await user.findUnique({
      where: {
        id: req.user.id,
      },
      select: {
        id: true,
        email: true,
        username: true,
      },
    });
    res.json(existingUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
