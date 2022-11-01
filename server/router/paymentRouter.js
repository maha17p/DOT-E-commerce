const express = require('express');
const { processPayment, sendStripeAPI } = require('../controller/paymentFunc');
const verifyUser = require('../middleware/verifyUser')
const router = express.Router();


router.route("/").post(processPayment );
router.route("/stripeapikey").get(sendStripeAPI)

module.exports = router;