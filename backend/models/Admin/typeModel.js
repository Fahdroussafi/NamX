const mongoose = require("mongoose");

const typeSchema = new mongoose.Schema(
    {
        max_speed: {
            type: Number,
            required: true,
        },
        km_range: {
            type: Number,
            required: true,
        },
        horsepower: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
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

module.exports = mongoose.model("type", typeSchema);

