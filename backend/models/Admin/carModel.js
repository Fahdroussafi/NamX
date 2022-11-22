const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
    {
        name_car: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("car", adminSchema);

