const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
    {
        name_car: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        car_image: {
            type: String,
            required: true,
            default: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        },
        type_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "types",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("cars", carSchema);
