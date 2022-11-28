import { model, Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const AdminSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

AdminSchema.plugin(uniqueValidator);
export const AdminModel = model('admin', AdminSchema);
