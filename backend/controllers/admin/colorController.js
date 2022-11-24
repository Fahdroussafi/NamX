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

module.exports = {
    CreateColor,
    GetAllColors
};