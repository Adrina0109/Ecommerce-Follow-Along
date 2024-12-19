const express=require('express');
const upload=require('../middleswares/multer.js');
const {
    CreateUser,
    verifyUserController,
    Login,
    Signup,
} = require('../controllers/user.controller.js');
const jwt=require('jsonwebtoken');
const router=express.Router();

router.get('/create-user', upload.single('file'),CreateUser);
router.post("/signup")
router.post("/login")   

module.exports = router;
