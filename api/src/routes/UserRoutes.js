import { Router } from "express"
import { generateToken, isAuthenticated, upload, verifyToken } from "../middleware";
import { AgencyModel, CarModel, StockCarsModel, UserModel } from "../models";
import axios from 'axios';
import $ from "cheerio";
import fs from 'fs'
import path from 'path';


const router = Router();

router.get('/list', async (req, res) => {
    try {
        const cars = await CarModel.find();
        res.status(200).send({
            success: true,
            message: "All cars fetched successfully",
            data: cars,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
            errorMessage: error.message,
        });
    }
});

export { router as CarRoutes }