import { ReservationModel } from '../models';
import { CarModel } from '../models';
import { UserModel } from '../models';
import { transporter } from '../middleware';

// create new reservation by user_id and car_id
export const createReservation = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.user_id);
    if (!user) {
      return res.status(400).send({
        message: 'User not found',
      });
    }
    const car = await CarModel.findById(req.params.car_id);
    if (!car) {
      return res.status(400).send({
        message: 'Car not found',
      });
    }
    const newReservation = new ReservationModel({
      user: req.params.user_id,
      car: req.params.car_id,
      quantity: req.body.quantity,
    });

    // check if the same user has already reserved the same car before
    const ExistingReservation = await ReservationModel.findOne({
      user: req.params.user_id,
      car: req.params.car_id,
    });

    if (ExistingReservation) {
      return res.status(400).send({
        success: false,
        message: 'Reservation already exists',
      });
    }
    await newReservation.save();
    // send email to user with the booking details
    const mailOptions = {
      from: process.env.EMAIL,
      to: user.email,
      subject: 'Booking confirmation',
      text: `Dear ${user.firstName}""${user.lastName}, your booking for ${car.name_car} has been confirmed. Thank you for choosing us!`,
    };
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log('Error occurs', err);
      } else {
        console.log('Email sent!!!');
      }
    });

    res.status(201).send({
      success: true,
      message: 'Reservation created successfully',
      data: newReservation,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal server error',
      errorMessage: error.message,
    });
  }
};

// get all reservations
export const GetAllReservations = async (req, res) => {
  try {
    const reservations = await ReservationModel.find()
      .populate('user')
      .populate('car');
    res.status(200).send({
      success: true,
      message: 'All reservations fetched successfully',
      data: reservations,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal server error',
      errorMessage: error.message,
    });
  }
};

// get all reservations by user_id
export const getReservationsByUserId = async (req, res) => {
  try {
    const reservations = await ReservationModel.find({
      user_id: req.params.user_id,
    });
    if (!reservations) {
      return res.status(400).send({
        success: false,
        message: 'No reservations found',
      });
    }
    res.status(200).send({
      success: true,
      message: 'Reservations retrieved successfully',
      data: reservations,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal server error',
      errorMessage: error.message,
    });
  }
};

// update reservation by user_id and reservation_id
export const UpdateReservation = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.user_id);
    if (!user) {
      return res.status(400).json({
        message: 'User not found',
      });
    }
    const reservation = await ReservationModel.findById(
      req.params.reservation_id
    );
    if (!reservation) {
      return res.status(400).json({
        message: 'Reservation not found',
      });
    }
    const updatedReservation = await ReservationModel.findByIdAndUpdate(
      req.params.reservation_id,
      {
        user_id: req.params.user_id,
        quantity: req.body.quantity,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: 'Reservation updated successfully',
      data: updatedReservation,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal server error',
      errorMessage: error.message,
    });
  }
};

// cancel reservation if status pending
export const CancelReservation = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.user_id);
    if (!user) {
      return res.status(400).json({
        message: 'User not found',
      });
    }
    const reservation = await ReservationModel.findById(
      req.params.reservation_id
    );
    if (!reservation) {
      return res.status(400).json({
        message: 'Reservation not found',
      });
    }
    if (reservation.status === 'completed') {
      return res.status(400).json({
        message: 'Reservation already completed',
      });
    }
    const cancelledReservation = await ReservationModel.findByIdAndUpdate(
      req.params.reservation_id,
      {
        status: 'cancelled',
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: 'Reservation cancelled successfully',
      data: cancelledReservation,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Internal server error',
      errorMessage: error.message,
    });
  }
};
