const Type = require("../../models/admin/typeModel");

// create new type
const CreateType = async (req, res) => {
    try {
        const {max_speed, km_range, horsepower, price, type_name} = req.body;
        const newType = new Type({
            max_speed,
            km_range,
            horsepower,
            price,
            type_name,
        });
        const type = await Type.findOne({type_name});
        if (type) {
            return res.status(400).send({
                success: false,
                message: "Type name already exists",
            });
        }
        await newType.save();
        res.status(200).send({
            success: true,
            message: "Type created successfully",
            data: newType,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
            errorMessage: error.message,
        });
    }
};

module.exports = {
    CreateType,
};