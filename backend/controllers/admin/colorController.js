const Color = require("../../models/admin/colorModel");


const CreateColor = async (req, res) => {
    try {
        const {color_name, color_code} = req.body;
        const newColor = new Color({
            color_name,
            color_code,
        });
        // check if color name already exists
        const color = await Color.findOne
        ({
            color_name,
        });
        if (color) {
            return res.status(400).send({
                success: false,
                message: "Color name already exists",
            });
        }
        await newColor.save();
        res.status(200).send({
            success: true,
            message: "Color created successfully",
            data: newColor,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
            errorMessage: error.message,
        });
    }
}
// get all colors
const GetAllColors = async (req, res) => {
    try {
        const colors = await Color.find();
        res.status(200).send({
            success: true,
            message: "All colors",
            data: colors,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
            errorMessage: error.message,
        });
    }
}
// delete color by id
const DeleteColor = async (req, res) => {
    try {
        const color = await Color.findById(req.params.color_id);
        if (!color) {
            return res.status(400).json({
                message: "Color not found"
            });
        }
        await color.remove();
        res.status(200).json({
            message: "Color deleted successfully"
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
            errorMessage: error.message,
        });
    }
}
// update color by id
const UpdateColor = async (req, res) => {
    try {
        const color = await Color.findById(req.params.color_id);
        if (!color) {
            return res.status(400).json({
                message: "Color not found"
            });
        }
        const {color_name, color_code} = req.body;
        color.color_name = color_name;
        color.color_code = color_code;
        await color.save();
        res.status(200).json({
            message: "Color updated successfully",
            data: color
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
    CreateColor,
    GetAllColors,
    DeleteColor,
    UpdateColor
};