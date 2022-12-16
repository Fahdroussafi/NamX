import { model, Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword:{
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    zip: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.plugin(uniqueValidator);
export const UserModel = model('users', UserSchema);
