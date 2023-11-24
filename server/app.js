const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const User = require("./models/user");
const validate = require("./middleware/validation");
const userSchema = require("./validation/userValidation");

const { connect } = require("./db.config.js");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.port || 5000;
//add user to data base
app.post("/", validate(userSchema), async (req, res) => {
  try {

    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).send(error.errors[0].message);
  }
});
//get all users from database
app.get("/", async (req, res) => {
  try {
    const users = await User.findAll({});
    if (!users) return res.status(404).send("No users has been there ...");
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
});

//update user

app.put("/edit/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.update(
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname
      },
      {
        where: {
          id,
        }
      }
    );

    res.send(updatedUser);
  } catch (error) {
    console.log(error);
  }
});

connect();
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
