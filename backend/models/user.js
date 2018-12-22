const mongoose = require('mongoose');
const uniquieValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

userSchema.plugin(uniquieValidator);

module.exports = mongoose.model("users", userSchema);