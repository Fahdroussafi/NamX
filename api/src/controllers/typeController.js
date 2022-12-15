import { TypeModel } from '../models';
import { DetailsModel } from '../models';
import { ImageModel } from '../models';
import { ColorModel } from '../models';
// import mongoose from 'mongoose';

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
