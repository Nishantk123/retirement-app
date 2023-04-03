const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: {type: String, default: null},
    email: {type: String, default: null},
    mobile_no:{type: String, default: null},
    designation:{type: String, default: null},
    department : {type: String, default: null},
    ddo_reg_no: {type: String, default: null},
    dto_reg_no: {type: String, default: null},
    ddo_code:{type: String, default: null},
    ddo_mobile: {type: String, default: null},
    tan_no: {type: String, default: null},
    employee_code: {type: String, default: null},
    dob:{type: Date, default: null},
    joining_date: {type: Date, default: null},
    retierment_date: {type: Date, default: null},
    opening_date: {type: Date, default: null},
    closing_date: {type: Date, default: null},
    doc:[]
})

module.exports = mongoose.model("employee", employeeSchema);