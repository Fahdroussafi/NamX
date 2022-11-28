import { ColorModel } from '../models';

export const createColor = async (req, res) => {
  try {
    const existingColor = await ColorModel.findOne({
      color_name: req.body.color_name,
    });
    if (existingColor) {
      return res.status(400).send({
        message: 'Color already exists',
        success: false,
        data: null,
      });
    }
    const newColor = new ColorModel({
      color_name: req.body.color_name,
      color_code: req.body.color_code,
    });
    await newColor.save();
    res.status(200).send({
      message: 'Color created successfully',
      success: true,
      data: newColor,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
      data: null,
    });
  }
};

export const getColors = async (req, res) => {
  try {
    const colors = await ColorModel.find();
    res.status(200).send({
      message: 'Colors fetched successfully',
      success: true,
      data: colors,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
      data: null,
    });
  }
};
