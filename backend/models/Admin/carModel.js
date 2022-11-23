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
