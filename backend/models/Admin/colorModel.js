const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema(
    {
        color_name: {
            type: String,
            required: true,
        },
        color_code: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("colors", colorSchema);
