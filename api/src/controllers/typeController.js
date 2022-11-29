import { TypeModel } from '../models';
import { DetailsModel } from '../models';
import { ImageModel } from '../models';
import { ColorModel } from '../models';

export const getTypes = async (req, res) => {
  try {
    const types = await TypeModel.find()
      .populate('details')
      .populate('image')
      .populate('color');
    res.status(200).send({
      success: true,
      message: 'All types fetched successfully',
      data: types,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal server error',
      errorMessage: error.message,
    });
  }
};

export const createType = async (req, res) => {
  try {
    const { type_name, details, image, color } = req.body;
    const existingType = await TypeModel.findOne({ type_name });
    if (existingType) {
      return res.status(409).send({
        success: false,
        message: 'Type name already exists',
      });
    }

    // check for each details_id entered if it exists in the details collection
    for (let i = 0; i < details.length; i++) {
      const existingDetails = await DetailsModel.findById(details[i]);
      if (!existingDetails) {
        return res.status(409).send({
          success: false,
          message: 'Details id does not exist',
        });
      }
    }

    // check for each image_id entered if it exists in the images collection
    for (let i = 0; i < image.length; i++) {
      const existingImage = await ImageModel.findById(image[i]);
      if (!existingImage) {
        return res.status(409).send({
          success: false,
          message: 'Image id does not exist',
        });
      }
    }

    // check for each color_id entered if it exists in the colors collection

    for (let i = 0; i < color.length; i++) {
      const existingColor = await ColorModel.findById(color[i]);
      if (!existingColor) {
        return res.status(409).send({
          success: false,
          message: 'Color id does not exist',
        });
      }
    }

    const type = await TypeModel.create({
      type_name,
      details,
      image,
      color,
    });

    res.status(201).send({
      success: true,
      message: 'Type created successfully',
      data: type,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal server error',
      errorMessage: error.message,
    });
  }
};
