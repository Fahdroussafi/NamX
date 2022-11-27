import { model, Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const ImageSchema = new Schema(
  {
    name_image: {
      type: String,
      required: true,
    },
    image: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

ImageSchema.plugin(uniqueValidator);
export const ImageModel = model('images', ImageSchema);
