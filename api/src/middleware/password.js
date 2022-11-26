import bcrypt from 'bcrypt'
import nodemailer from "nodemailer";

export const isAdmin = ({ role }) => role == "admin" ? true : false

export const checkPassword = async (password, passwordHash) => {
    const match = await bcrypt.compare(password, passwordHash);
    if (match) {
        return true
    }
    return false
}

export const hashPassword = async (password) => await bcrypt.hash(password, 10);

export const generatePassword = async () => {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var length = 8;
    var retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
