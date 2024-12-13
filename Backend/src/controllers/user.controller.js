const ErrorHandler=require('../utils/Error-Handler.js');
const UserModel = require('../models/user.model.js');
const transporter = require('../utils/sendmail.js');
const jwt=require('jsonwebtoken');
require("dotenv").config({
    path:"../config/.env",
})

const verifyUser = (token)=>{
    const verify =jwt.verify(token,process.env.SECRET_KEY);
    if(verify)
    {
        return verify;
    }else{
        return false;
    }
}

const verifyUserController = async (req,res)=> {
    const {token}= req.params;
    try{
        if(verifyUser(token))
        {
            return res.status(200).cookie();
        }
        return res.status(403).send({message:"token expired"});
    }
    catch(er)
    {
        return res.status(403).send({message: er.message});
    }
}

async function CreateUser(req,res){
    const {Name, email, password}= req.body;

    const CheckUserPresent = await UserModel.findOne({
        email:email,
    });
    if(CheckUserPresent){
 
        // return ErrorHandler('user not found', 400);
        const error = new ErrorHandler("Already Present in DB", 400);
        
        return res.status(404).send({
            message: error.message,
            status:error.statusCode,
            success:false,
        });
    }

    const newUser= new UserModel({
        Name:Name,
        email: email,
        password:password,
    });
    const data={
        Name,
        email,
        password,
    }
    const token = generateToken(data);

    await transporter.sendMail({
        to:"adrinabernadin@gmail.com",
        from:"mary.adrina@kalvium.community",
        subject:" verfofication email from follow along project",
        text:"Text",
        html:`<h1> Hello World http://localhost:5173/activation/${token} </> `
    });

    await newUser.save();
    return res.send('User Created Successfully');
}

const generateToken=(data) =>{
    const token=jwt.sign({id: data._id, name:data.name, email:data.email}, process.env.SECRET_KEY);
};

module.exports = {CreateUser, verifyUserController};