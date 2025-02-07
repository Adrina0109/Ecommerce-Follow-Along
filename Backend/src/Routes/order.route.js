const express=require('express')
const verifyUser=require('../Middlewares/jwt-verify')
const router=express.Router()
const {CreateOrder,GetuserOrders,CancelOrder}=require('../controllers/order.controller')
router.post('/confirm-order',verifyUser,CreateOrder)
router.get('/user-orders-data',verifyUser ,GetuserOrders)
router.patch('/cancel-order',verifyUser,CancelOrder);
module.exports=router
