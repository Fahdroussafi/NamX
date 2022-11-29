import { model, Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const TypeSchema = new Schema(
  {
    type_name: {
      type: String,
      required: true,
    },
    // color_id: {
    //   type: Schema.Types.Array || Schema.Types.ObjectId || Schema.Types.String,
    //   ref: 'colors',
    //   required: true,
    // },
    // image_id: {
    //   type: Schema.Types.Array || Schema.Types.ObjectId || Schema.Types.String,
    //   ref: 'images',
    //   required: true,
    // },
    // details_id: {
    //   type: Schema.Types.Array || Schema.Types.ObjectId || Schema.Types.String,
    //   ref: 'details',
    //   required: true,
    // },
    config: {
      type: Object,
      required: true,
      details: {
        type: [Schema.Types.ObjectId],
        ref: 'details',
        required: true,
        image: {
          type: [Schema.Types.ObjectId],
          ref: 'images',
          required: true,
        },
        color: {
          type: [Schema.Types.ObjectId],
          ref: 'colors',
          required: true,
        },
      },
      // details: {
      //   type: Object,
      //   required: true,
      // },
    },
  },
  {
    timestamps: true,
  }
);

TypeSchema.plugin(uniqueValidator);
export const TypeModel = model('Types', TypeSchema);
