import { model, Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const CarSchema = new Schema({
        name_car: {
          type: String,
        },
      },
      {
        timestamps: true,
      }
);




CarSchema.plugin(uniqueValidator);
export const CarModel = model('Car', CarSchema);

