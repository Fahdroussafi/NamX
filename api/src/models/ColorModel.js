import { model, Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const ColorSchema = new Schema(
  {
    color_name: {
      type: String,
      required: true,
    },
    color_code: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

ColorSchema.plugin(uniqueValidator);
export const ColorModel = model('colors', ColorSchema);
