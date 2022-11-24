const Image = require("../../models/admin/imageModel");

// create new image
const CreateImage = async (req, res) => {
    try {
        const {name_image, image} = req.body;
        const newImage = new Image({
            name_image,
            image,
        });
        const name = await Image.findOne
        ({
            name_image,
        });
        if (name) {

            return res.status(400).send({
                success: false,
                message: "Image name already exists",
            });

        }
        await newImage.save();
        res.status(200).send({
            success: true,
            message: "Image created successfully",
            data: newImage,
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
            errorMessage: error.message,
        });
    }
}
// get all images
const GetAllImages = async (req, res) => {
    try {
        const images = await Image.find();
        res.status(200).send({
            success: true,
            message: "All images",
            data: images,
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
    CreateImage,
    GetAllImages
};