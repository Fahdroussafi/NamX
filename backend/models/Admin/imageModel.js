const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
    {
        name_image: {
            type: String,
            required: true,
        },
        image: {
            type: Object,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("images", imageSchema);
