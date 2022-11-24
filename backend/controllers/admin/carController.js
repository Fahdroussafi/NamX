const Car = require("../../models/admin/carModel");
const Type = require("../../models/admin/typeModel");

// create new car by type
const CreateCar = async (req, res) => {
    try {
        const {name_car, color} = req.body;
        const type = await Type.findById(req.params.type_id);
        if (!type) {
            return res.status(400).json({
                message: "Type not found"
            });
        }
        const newCar = new Car({
            name_car,
            color,
            type_id: req.params.type_id,
        });
        // check if car name already exists with the same type id and color
        const car = await Car.findOne
        (
            {
                name_car,
                type_id: req.params.type_id,
                color,
            }
        );
        if (car) {
            return res.status(400).send({
                success: false,
                message: "Car name or color or type already exists",
            });
        }

        await newCar.save();
        res.status(200).send({
            success: true,
            message: "Car created successfully",
            data: newCar,
        });
    } catch (error) {
        res.send({
            message: error.message,
            status: false,
            data: null,
        });
    }
}
const GetAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
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

module.exports = {
    CreateCar,
    GetAllCars,
};

