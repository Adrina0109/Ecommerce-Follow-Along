const express=require('express');
const {
    CreateUser,
    verifyUserController,
    signup,
    login,
} = require('../controllers/user.controller.js');
const jwt = require('jsonwebtoken');
const upload=require('../Middlewares/multer.js');


const router=express.Router();

router.post('/create-user', upload.single('file'), CreateUser);
router.get('/activation/:token', verifyUserController);

router.post('/signup',signup);
router.post('/login',login);
module.exports = router;