const express=require('express')
const {verifyToken}=require('../Middlewares/jwt-verify')
const router=express.Router()
const {CreateOrder,GetuserOrders}=require('../controllers/order.controller')
router.post('/confirm-order',verifyToken,CreateOrder)
router.get('/user-orders-data',verifyToken,GetuserOrders)
module.exports=router