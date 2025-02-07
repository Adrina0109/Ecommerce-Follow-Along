const express=require('express')
const verifyUser=require('../Middlewares/jwt-verify')
const router=express.Router()
const {CreateOrder,GetuserOrders}=require('../controllers/order.controller')
router.post('/confirm-order',verifyUser,CreateOrder)
router.get('/user-orders-data',verifyUser ,GetuserOrders)
module.exports=router
