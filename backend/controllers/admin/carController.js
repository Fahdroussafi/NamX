const Car = require("../../models/admin/carModel");
const Type = require("../../models/admin/typeModel");

// create new car by type
const CreateCar = async (req, res) => {
    try {
        const {name_car} = req.body;
        const type = await Type.findById(req.params.type_id);
        if (!type) {
            return res.status(400).json({
                message: "Type not found"
            });
        }
        const newCar = new Car({
            name_car,
            type_id: req.params.type_id,
        });
        const car = await Car.findOne
        (
            {
                name_car,
                type_id: req.params.type_id,
            }
        );
        if (car) {
            return res.status(400).send({
                success: false,
                message: "Car name or type already exists",
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
<<<<<<< HEAD
=======


>>>>>>> 0c8acd4eeae6810040c80aca069765bdb6944be3
//delete car by id
const DeleteCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.car_id);
        if (!car) {
            return res.status(400).json({
                message: "Car not found"
            });
        }
        await car.remove();
        res.status(200).send({
            success: true,
            message: "Car deleted successfully",
            data: car,
        });
    } catch (error) {
        res.send({
            message: error.message,
            status: false,
            data: null,
        });
    }
}

//update car by id
const UpdateCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.car_id);
        if (!car) {
            return res.status(400).json({
                message: "Car not found"
            });
        }
        const {name_car, color} = req.body;
        car.name_car = name_car;
        car.color = color;
        await car.save();
        res.status(200).send({
            success: true,
            message: "Car updated successfully",
            data: car,
        });
    } catch (error) {
        res.send({
            message: error.message,
            status: false,
            data: null,
        });
    }
}


module.exports = {
    CreateCar,
    GetAllCars,
    DeleteCar,
    UpdateCar,
<<<<<<< HEAD
};
=======
};

>>>>>>> 0c8acd4eeae6810040c80aca069765bdb6944be3
