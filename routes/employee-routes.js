const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
// const uuidv4 = require('uuid');
const Employee = require("../model/employee");

const router = express.Router();

router.post("/employee", async (req, res) => {
  console.log("test")
  console.log(req.body)
  try {
    const {
      name,
      email,
      mobile_no,
      designation,
      department,
      ddo_reg_no,
      dto_reg_no,
      ddo_code,
      ddo_mobile,
      tan_no,
      employee_code,
      dob,
      joining_date,
      retierment_date,
      opening_date,
      closing_date,
    } = req.body;
    const oldUser = await Employee.findOne({ name, employee_code });
    console.log(oldUser)

    if (oldUser) {
      return res.status(409).send("EMployee Already Exist. Please Login");
    }
    const employee = Employee.create({
      name,
      email,
      mobile_no,
      designation,
      department,
      ddo_reg_no,
      dto_reg_no,
      ddo_code,
      ddo_mobile,
      tan_no,
      employee_code,
      dob,
      joining_date,
      retierment_date,
      opening_date,
      closing_date,
    });
    res.status(201).json({message:"Employee created successfull", success: true});
  } catch (err) {
    console.log(err);
    res.status(500).json({message:"Something went wrong", success: false});
  }
});


router.get("/all", async(req, res)=>{
    let query = req.query;
    let page = query.page;
    let per_page = query.per_page;
    const queryObj = {};
    let userData = await Employee.find(queryObj)
      .limit(Number(per_page))
      .skip(Number(per_page) * (Number(page) - 1))
      .sort("desc");
    res.status(200).json(userData);
})


router.get("/retierments", async(req, res)=>{
    let query = req.query;
    let page = query.page;
    let per_page = query.per_page;
    let monthData=new Date();
    monthData.setMonth(monthData.getMonth() - 6);
    const queryObj = {"retierment_date":{"$gte":monthData}};
    let userData = await Employee.find(queryObj)
      .limit(Number(per_page))
      .skip(Number(per_page) * (Number(page) - 1))
      .sort("desc");
    res.status(200).json(userData);
})

router.get("/retierment/:id", async(req, res)=>{
    let query = req.query;
    let page = query.page;
    let per_page = query.per_page;
    let monthData=new Date();
    let id = req.params.id;
    // monthData.setMonth(monthData.getMonth() - 6);
    // const queryObj = {"retierment_date":{"$gte":monthData}};
    let userData = await Employee.findOne({"_id":Object(id)});
    res.status(200).json(userData);
})

router.patch("/employee/:id", async(req, res)=>{
    try{
        let updateObject = req.body; // {last_name : "smith", age: 44}
        let id = req.params.id;
        const filter = { "_id": Object(id)};
        const update = updateObject;
        let userData = await Employee.findOneAndUpdate(filter, update, {
            new: true
          });
        res.status(200).json(userData);
    }
    catch(err){
        console.log(err)
    }
})


module.exports = router;