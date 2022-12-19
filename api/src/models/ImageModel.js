import { model, Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const ImageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

ImageSchema.plugin(uniqueValidator);
export const ImageModel = model('images', ImageSchema);
