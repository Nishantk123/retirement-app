const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// var request = require('request');

const fast2sms = require("fast-two-sms");
const router = express.Router();

async function smsSend(options) {
  const response = await fast2sms.sendMessage(options);

  return response;
}

router.post("/send_message", async (req, res) => {
  const { number, name } = req.body;
  var options = {
    authorization:
      "ils0SaiofAqld7cSY9ec4Kyo48Zzag63RnUTfhXYX2lUnQcLu0a2uwRhB4iy",
    message: `dear ${name} ji,
      please submit your pending documents.
      PAN,
      AADHAR,
      PASSPORT`,
    numbers: [number],
  };
  const fast2sms = await smsSend(options);
  return res.status(200).json({ message: "done" });
});

module.exports = router;
