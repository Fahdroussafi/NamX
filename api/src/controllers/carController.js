import { CarModel } from '../models';
import { TypeModel } from '../models';

// get all cars
export const getCars = async (req, res) => {
  try {
    const cars = await CarModel.find().populate({
      path: 'type_id',
      model: TypeModel,
    });
    res.status(200).send({
      success: true,
      message: 'All cars fetched successfully',
      data: cars,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal server error',
      errorMessage: error.message,
    });
  }
};

// create a car
export const createCar = async (req, res) => {
  try {
    const { name_car, type_id } = req.body;
    const type = await TypeModel.findById(req.body.type_id);
    if (!type) {
      return res.status(400).send({
        message: 'Type not found',
      });
    }
    const newCar = new CarModel({
      name_car,
      type_id,
    });
    const car = await CarModel.findOne({
      name_car,
      type_id,
    });
    if (car) {
      return res.status(400).send({
        success: false,
        message: 'Car name or type already exists',
      });
    }
    await newCar.save();
    res.status(201).send({
      success: true,
      message: 'Car created successfully',
      data: newCar,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal server error',
      errorMessage: error.message,
    });
  }
};

// update a car
export const updateCar = async (req, res) => {
  try {
    const { name_car } = req.body;
    const type = await TypeModel.findById(req.params.type_id);
    if (!type) {
      return res.status(400).send({
        message: 'Type not found',
      });
    }
    const car = await CarModel.findById(req.params.car_id);
    if (!car) {
      return res.status(400).send({
        message: 'Car not found',
      });
    }
    const updatedCar = await CarModel.findByIdAndUpdate(
      req.params.car_id,
      {
        name_car,
        type_id: req.params.type_id,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: 'Car updated successfully',
      data: updatedCar,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal server error',
      errorMessage: error.message,
    });
  }
};

// delete a car
export const deleteCar = async (req, res) => {
  try {
    const car = await CarModel.findById(req.params.car_id);
    if (!car) {
      return res.status(400).send({
        message: 'Car not found',
      });
    }
    await CarModel.findByIdAndDelete(req.params.car_id);
    res.status(200).send({
      success: true,
      message: 'Car deleted successfully',
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal server error',
      errorMessage: error.message,
    });
  }
};
