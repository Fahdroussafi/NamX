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

module.exports = {
    CreateCar,
    GetAllCars,
    DeleteCar,
    UpdateCar,
};

