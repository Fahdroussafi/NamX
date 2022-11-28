import { model, Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const DetailsSchema = new Schema(
  {
    details_name: {
      type: String,
      required: true,
    },
    details_description: {
      type: String,
      required: true,
    },
    details_status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

DetailsSchema.plugin(uniqueValidator);
export const DetailsModel = model('details', DetailsSchema);
