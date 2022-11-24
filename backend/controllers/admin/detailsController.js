const Details = require("../../models/admin/detailsModel");
const Type = require("../../models/admin/typeModel");

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
//get all details
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
//delete details by id if used in type then delete it from type
const DeleteDetails = async (req, res) => {
    try {
        const details = await Details.findById(req.params.details_id);
        if (!details) {
            return res.status(400).json({
                message: "Details not found"
            });
        }
        const type = await Type.findOne({details_id: req.params.details_id});
        if (type) {
            return res.status(400).json({
                message: "Details is used in type"
            });
        }
        await Details.findByIdAndDelete(req.params.details_id);
        res.status(200).send({
            success: true,
            message: "Details deleted successfully",
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
    GetAllDetails,
    DeleteDetails,
};