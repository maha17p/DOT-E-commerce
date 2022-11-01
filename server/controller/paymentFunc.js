require('dotenv').config();
const asyncWrapper = require('../middleware/asyncWrapper')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const processPayment = asyncWrapper(async(req,res,next) => {
    const {amount} = req.body
    const myPayment = await stripe.paymentIntents.create({
        amount,
        currency:"inr",
        metadata:{
            company:"dot"
        }
    })
    res.status(200).json({success:true, client_secret:myPayment.client_secret})
});


const sendStripeAPI = asyncWrapper(async(req,res,next) => {
    res.status(200).json({stripeAPIKey:process.env.STRIPE_API_KEY})
});

module.exports = {
    processPayment,
    sendStripeAPI
}