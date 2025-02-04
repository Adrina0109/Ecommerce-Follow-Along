const express=require('express')
const {verifyToken}=require('../Middlewares/jwt-verify')
const router=express.Router()
const {CreateOrder}=require('../controllers/order.controller')
router.post('/confirm-order',verifyToken,CreateOrder)

module.exports=router