import { ImageModel } from '../models';

export const CreateImage = async (req, res) => {
  try {
    const { name, img } = req.body;
    const newImage = new ImageModel({
      name,
      img,
    });
    await newImage.save();
    res.status(200).send({
      message: 'Image uploaded successfully',
      success: true,
      data: newImage,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
      data: null,
    });
  }
};

export const getImages = async (req, res) => {
  try {
    const images = await ImageModel.find();
    res.status(200).send({
      success: true,
      message: 'Images retrieved successfully',
      data: images,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal server error',
      errorMessage: error.message,
    });
  }
};

// update an image
export const updateImage = async (req, res) => {
  try {
    const { name_image } = req.body;

    const image = await ImageModel.findById(req.params.image_id);
    if (!image) {
      return res.status(400).send({
        message: 'Image not found',
      });
    }
    const updatedImage = await ImageModel.findOneAndUpdate(
      {
        _id: req.params.image_id,
      },
      {
        name_image,
      },
      {
        new: true,
      }
    );
    res.status(200).send({
      success: true,
      message: 'Image updated successfully',
      data: updatedImage,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal server error',
      errorMessage: error.message,
    });
  }
};

// delete an image
export const deleteImage = async (req, res) => {
  try {
    const image = await ImageModel.findById(req.params.image_id);
    if (!image) {
      return res.status(400).send({
        message: 'Image not found',
      });
    }
    await ImageModel.findByIdAndDelete(req.params.image_id);
    res.status(200).send({
      success: true,
      message: 'Image deleted successfully',
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal server error',
      errorMessage: error.message,
    });
  }
};
