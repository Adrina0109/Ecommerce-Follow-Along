const express= require('express')
const router= express.Router();
const {
    getKeys,
    createOrder,
    PayOrders,
}= require('../controllers/Payment.controller')
const verifyUser=require('../Middlewares/jwt-verify')

router.post('/create-order',createOrder);
router.post('/pay-order', verifyUser,PayOrders)
router.get('/get-razorpay-key',getKeys);

module.exports= router;