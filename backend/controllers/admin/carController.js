const Car = require("../../models/admin/carModel");
const Type = require("../../models/admin/typeModel");


// create new car by type
const CreateCar = async (req, res) => {
    try {
        const existingCar = await Car.findOne({
            name_car: req.body.name_car,
        });
        const type = await Type.findById(req.params.type_id);
        if (!type) {
            return res.status(400).json({
                message: "Type not found"
            });
        }
        const car = new Car({
            name_car: req.body.name_car,
            color: req.body.color,
            type_id: type._id,
        });
        const savedCar = await car.save();
        res.send({
            message: "Car created successfully",
            status: true,
            data: savedCar,
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
};