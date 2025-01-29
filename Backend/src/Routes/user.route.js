const express=require('express');
const multer= require('multer');
const {
    CreateUser,
    verifyUserController,
    signup,
    login,
    getUserData,
    AddAddressController,
    DeleteAddressController,
    GetAddressController,
} = require('../controllers/user.controller.js');
const jwt = require('jsonwebtoken');
const verifyUser= require("../Middlewares/jwt-verify.js")
const upload=require('../Middlewares/multer.js');


const router=express.Router();

router.post('/create-user', upload.single('file'), CreateUser);
router.get('/activation/:token', verifyUserController);

router.post('/signup', upload.single("file"),signup);
router.post('/login',login);
router.get("/user-data", verifyUser, getUserData)
router.post('/add-address', verifyUser, AddAddressController);
router.delete("/delete-address/:id", verifyUser, DeleteAddressController);
router.get("/get-addresses", verifyUser, GetAddressController);
module.exports = router;