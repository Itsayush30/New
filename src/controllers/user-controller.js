const { StatusCodes } = require("http-status-codes");
const User = require("../models/user");


const createUser = async (req, res) => {
    try {
      const response = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      return res.status(StatusCodes.CREATED).json(response);
    } catch (error) {
      console.log(error);
      return res.status(error.statusCode).json(error);
    }
  };

module.exports = { createUser };
