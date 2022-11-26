import { CarModel } from "../models";

export const getCars = async (req, res) => {
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
}

export const createCar = async (req, res) => {
    try {
        const car = await CarModel.create(req.body);
        res.status(201).send({
            success: true,
            message: "Car created successfully",
            data: car,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
            errorMessage: error.message,
        });
    }
}