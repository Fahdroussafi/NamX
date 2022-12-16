import { UserModel } from '../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// login user
export const Login = async (req, res) => {
  try {
    const existingUser = await UserModel.findOne({
      email: req.body.email,
    });
    if (!existingUser) {
      return res.status(400).send({
        message: 'User does not exist',
        success: false,
        data: null,
      });
    }
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).send({
        message: 'Incorrect password',
        success: false,
        data: null,
      });
    }
    const token = jwt.sign(
      { userId: existingUser._id },
      process.env.TOKEN_SECRET,
      {
        expiresIn: '1h',
      }
    );
    res.status(200).send({
      message: 'User logged in successfully',
      success: true,
      token: token,
      user: existingUser,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
      data: null,
    });
  }
};

// register user
export const Register = async (req, res) => {
  try {
    const existingUser = await UserModel.findOne({
      email: req.body.email,
    });
    if (existingUser) {
      return res.status(400).send({
        message: 'User already exists',
        success: false,
        data: null,
      });
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = new UserModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
      address: req.body.address,
      country: req.body.country,
      state: req.body.state,
      city: req.body.city,
      zip: req.body.zip,
    });
    const savedUser = await user.save();
    res.send({
      message: 'User created successfully',
      status: true,
      data: savedUser,
    });
  } catch (error) {
    res.send({
      message: error.message,
      status: false,
      data: null,
    });
  }
};
