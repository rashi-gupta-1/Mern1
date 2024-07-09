const User = require("../model/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const home = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        "Welcome to world best mern series by Rashi TEchnical using router"
      );
  } catch (error) {
    console.log(error);
  }
};

//Registerion logic

const register = async (req, res) => {
  console.log(req.body);
  try {
    const { username, email, phone, password } = req.body;

    // Check if user with the same email already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // hash the password

    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(200).json({
      msg: "registration successfully",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // console.error("Error registering user:", error);
    // res.status(500).json("Internal server error");
    next(error);
  }
};

//*________________________
// * User Login Logic
//*________________________

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });
    console.log(userExists);

    if (!userExists) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    // const user = await bcrypt.compare(password, userExists.password);

    const user = await userExists.comparePassword(password);

    if (user) {
      res.status(201).json({
        msg: "login Successfully",
        token: await userExists.generateToken(),
        userId: userExists._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
};

// *___________________
//* to send  User data Logic
//*____________________

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};

module.exports = { home, register, login, user };
