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
// delete image by id
const DeleteImage = async (req, res) => {
    try {
        const image = await Image.findById(req.params.image_id);
        if (!image) {
            return res.status(400).json({
                message: "Image not found"
            });
        }
        await image.remove();
        res.status(200).send({
            success: true,
            message: "Image deleted successfully",
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal server error",
            errorMessage: error.message,
        });
    }
}
// update image by id
const UpdateImage = async (req, res) => {
    try {
        const images = await Image.findById(req.params.image_id);
        if (!images) {
            return res.status(400).json({
                message: "Image not found"
            });
        }
        const {name_image, image} = req.body;
        images.name_image = name_image;
        images.image = image;
        await images.save();
        res.status(200).send({
            success: true,
            message: "Image updated successfully",
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
    GetAllImages,
    DeleteImage,
    UpdateImage,
};