import { model, Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const TypeSchema = new Schema(
  {
    details_id: {
      type: Schema.Types.Array || Schema.Types.ObjectId,
      ref: 'details',
      required: true,
    },
    type_name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

TypeSchema.plugin(uniqueValidator);
export const TypeModel = model('Types', TypeSchema);
