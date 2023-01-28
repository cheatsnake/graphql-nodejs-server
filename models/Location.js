const { model, Schema } = require("mongoose");

const locationSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, default: "" },
    position: {
        x: { type: Number, required: true },
        y: { type: Number, required: true },
    },
    createdAt: { type: String, default: new Date().toISOString() },
    visits: { type: Number, default: 0 },
});

module.exports = model("Location", locationSchema);
