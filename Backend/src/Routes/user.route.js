const express=require('express');
const {CreateUser} = require('../controllers/user.controller.js');
const upload=require('../Middlewares/multer.js');
const {verifyUserController}=require('../controllers/user.controller.js')

const router=express.Router();

router.post('/create-user', upload.single('file'), CreateUser);
router.get('/activation/:token', verifyUserController);

module.exports = router;