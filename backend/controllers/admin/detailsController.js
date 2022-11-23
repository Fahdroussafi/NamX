const Details = require("../../models/admin/detailsModel");

// create new details
const CreateDetails = async (req, res) => {
    try {
        const {details_name, details_description} = req.body;
        const newDetails = new Details({
            details_name,
            details_description,
        });
        const description = await Details.findOne
        ({
            details_description,
        });
        if (description) {
            return res.status(400).send({
                success: false,
                message: "Details description already exists",
            });
        }
        await newDetails.save();
        res.status(200).send({
            success: true,
            message: "Details created successfully",
            data: newDetails,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
            errorMessage: error.message,
        });
    }
}
const GetAllDetails = async (req, res) => {
    try {
        const details = await Details.find();
        res.status(200).send({
            success: true,
            message: "All details fetched successfully",
            data: details,
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
    CreateDetails,
    GetAllDetails
};