const Admin = require("../../models/admin/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();


 //register new admin
const CreateAdmin = async (req, res) => {
    try {
        const existingAdmin =    await Admin.findOne({
            email: req.body.email,
        });
        if (existingAdmin) {
            return res.status(400).json({
                message: "Admin already exists"
            });

        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(
            req.body.password,
            salt
        );
        const admin = new Admin({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        const savedAdmin = await admin.save();
        res.send({
            message: "Admin created successfully",
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

//login admin
const LoginAdmin = async (req, res) => {
    try {
        const existingAdmin = await Admin.findOne
        ({
            email: req.body.email,
        });
        if (!existingAdmin) {
            return res.status(400).send({
                message: "Admin does not exist",
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
                message: "Incorrect password",
                success: false,
                data: null,
            });
        }
        const tokenAdmin = jwt.sign(
            {adminId: existingAdmin._id},
            process.env.TOKEN_SECRET,
            {
                expiresIn: "1h",
            }
        );
        res.status(200).send({
            message: "Admin logged in successfully",
            success: true,
            token: tokenAdmin,
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


module.exports = {
    CreateAdmin,
    LoginAdmin,
};