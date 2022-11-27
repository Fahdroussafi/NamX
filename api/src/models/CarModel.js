import { model, Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const CarSchema = new Schema(
  {
    name_car: {
      type: String,
      required: true,
    },
    type_id: {
      type: Schema.Types.ObjectId,
      ref: 'types',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

CarSchema.plugin(uniqueValidator);
export const CarModel = model('cars', CarSchema);
