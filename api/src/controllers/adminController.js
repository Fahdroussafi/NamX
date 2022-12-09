import { AdminModel } from '../models';
import { UserModel } from '../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


// login admin
export const loginAdmin = async (req, res) => {
  try {
    const existingAdmin = await AdminModel.findOne({
      email: req.body.email,
    });
    if (!existingAdmin) {
      return res.status(400).send({
        message: 'Admin does not exist',
        success: false,
        data: null,
      });
    }
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      existingAdmin.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).send({
        message: 'Incorrect password',
        success: false,
        data: null,
      });
    }
    const token = jwt.sign(
      { adminId: existingAdmin._id },
      process.env.TOKEN_SECRET_ADMIN,
      {
        expiresIn: '1h',
      }
    );
    res.status(200).send({
      message: 'Admin logged in successfully',
      success: true,
      token: token,
      admin: existingAdmin,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
      data: null,
    });
  }
};

// register admin
export const registerAdmin = async (req, res) => {
  try {
    const existingAdmin = await AdminModel.findOne({
      email: req.body.email,
    });
    if (existingAdmin) {
      return res.status(400).send({
        message: 'Admin already exists',
        success: false,
        data: null,
      });
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const admin = new AdminModel({
      email: req.body.email,
      password: hashedPassword,
      name: req.body.name,
    });
    const savedAdmin = await admin.save();
    res.send({
      message: 'User created successfully',
      status: true,
      data: savedAdmin,
    });
  } catch (error) {
    res.send({
      message: error.message,
      status: false,
      data: null,
    });
  }
};

// get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.send({
      message: 'All users',
      status: true,
      data: users,
    });
  } catch (error) {
    res.send({
      message: error.message,
      status: false,
      data: null,
    });
  }
}
