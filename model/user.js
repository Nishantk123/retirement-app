const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {type: String, default: null},
    email: {type: String, default: null},
    password: {type: String, default: null},
    role: {type: String, default: null},
    department : {type: String, default: null},
    dob:{type: String, default: null},
    joining_date: {type: String, default: null},
    retierment_date: {type: String, default: null},
    token:{type: String},
})

module.exports = mongoose.model("user", userSchema);