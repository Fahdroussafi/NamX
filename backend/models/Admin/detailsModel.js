const mongoose = require("mongoose");

const detailsSchema = new mongoose.Schema(
    {
        details_name: {
            type: String,
            required: true,
        },
        details_description: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("details", detailsSchema);
