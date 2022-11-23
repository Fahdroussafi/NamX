const Type = require("../../models/admin/typeModel");

// create new type with options from details collection
const CreateType = async (req, res) => {
    try {
        const {type_name, details_id} = req.body;
        const newType = new Type({
            type_name,
            details_id,
        });
        // check if type name already exists
        const type = await Type.findOne
        ({
            type_name,
        });
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
}
const GetAllTypes = async (req, res) => {
    try {
        const types = await Type.find();
        res.status(200).send({
            success: true,
            message: "All types fetched successfully",
            data: types,
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
    CreateType,
    GetAllTypes,
};