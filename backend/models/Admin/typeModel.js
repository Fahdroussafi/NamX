const mongoose = require("mongoose");

const typeSchema = new mongoose.Schema(
    {
        details_id: {
            type: mongoose.Schema.Types.Array || mongoose.Schema.Types.ObjectId,
            ref: "details",
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

module.exports = mongoose.model("types", typeSchema);

