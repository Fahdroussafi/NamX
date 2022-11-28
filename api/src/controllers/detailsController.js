import { DetailsModel } from '../models';

export const getDetails = async (req, res) => {
  try {
    const details = await DetailsModel.find();
    res.status(200).send({
      message: 'Details fetched successfully',
      success: true,
      data: details,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
      data: null,
    });
  }
};

export const createDetails = async (req, res) => {
  try {
    const existingDetails = await DetailsModel.findOne({
      details_name: req.body.details_name,
    });
    if (existingDetails) {
      return res.status(400).send({
        message: 'Details already exists',
        success: false,
        data: null,
      });
    }
    const newDetails = new DetailsModel({
      details_name: req.body.details_name,
      details_description: req.body.details_description,
    });
    await newDetails.save();
    res.status(200).send({
      message: 'Details created successfully',
      success: true,
      data: newDetails,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
      data: null,
    });
  }
};

export const changeDetailsStatus = async (req, res) => {
  try {
    const details = await DetailsModel.findById(req.params.details_id);
    if (!details) {
      return res.status(404).send({
        message: 'Details not found',
        success: false,
        data: null,
      });
    }
    details.details_status = !details.details_status;
    await details.save();
    res.status(200).send({
      message: 'Details status changed successfully',
      success: true,
      data: details,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      success: false,
      data: null,
    });
  }
};
