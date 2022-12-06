import { model, Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const ReservationSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    car: {
      type: Schema.Types.ObjectId,
      ref: 'cars',
      required: true,
    },
    time: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      default: 'pending',
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

ReservationSchema.plugin(uniqueValidator);
export const ReservationModel = model('reservations', ReservationSchema);
