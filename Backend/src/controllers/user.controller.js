const ErrorHandler = require('../utilis/ErrorHandler.js')
const usermodel = require('../model/user_model.js')
const transporter = require('../utilis/sendMail.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config({
    path: '..config/.env'
})

async function CreateUser(req, res) {
    const { Name, email, password } = req.body;

    const checkUserpresent = await usermodel.findOne({
        email: email, 
    });

    if (checkUserpresent) {
        const error = new ErrorHandler('User already exist in DB', 400)

        return res.status(404).send({
            message: error.message,
            status: error.statuscode,
            success: false,
        })

    }

    const newUser = new usermodel({
        Name: Name,
        email: email,
        password: password,
    })

    const data = {
        Name,
        email,
        password,
    }

    const token = generateToken(data)
    await transporter.sendMail({
        to: 'adrinabernadin@gmail.com',
        from: 'mary.adrina@kalvium.community',
        subject: 'verification email for follow along',
        text: 'Text',
        html: `<h1>E-commerce http://localhost:5173/activation/${token}</h1>`
    })

    await newUser.save();
    return res.send('user Created Successfully')

}

const generateToken = (data) => {
    const token = jwt.sign({ name: data.name, email: data.email }, process.env.SECRET_KEY)
    return token
}

async function verifyUserController(req, res) {
    const { token } = req.params
    try {
        if (verifyUser(token)) {
            return res.status(200).cookie()

        }
        return res.status(403).send({ message: 'Token expired'})

    } catch (err) {
        return res.status(403).send({ message: err.message })
    }
}
const verifyUser = () => {
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    if (verify) {
        return verify;
    } else {
        return false
    }
}

const Signup= async (req, res) => {
    const { name, email, password } = req.body
    try {
        const checkUserinDB = await usermodel.findOne({ email: email });
        if (checkUserinDB) {
            return res.status(403).send({ message: "User Already Present" })
        }
        bcrypt.hash(password, 10, async function (err, hashedPass){
            try {
                if(err){
                    return res.status(403).send({message:err.message})
                }
                await usermodel.create({
                    Name:name,
                    email,
                    password:hashedPass
                })

                return res.status(201).send({message:'User created Successfully!'})
            }
            catch (er) {
                return res.status(500).send({ message: er.message })
            }
        })
       

    }
    catch (err) {
        return res.status(500).send({ message: err.message })
    }
}

const Login= async (req, res) => {
    const { email, password } = req.body
    try {

        const checkUserinDB=await usermodel.findOne({ email: email })
        bcrypt.compare(password, checkUserinDB.password, function (err, result) {
            if (err) {
                return res.status(403).send({ message: err.message,success:false })
            }
            let data = {
                id: checkUserinDB._id,
                email,
                password: checkUserinDB.password
            }
            const token = generateToken(data)
            return res.status(200).cookie('token', token).send({ message: "User logged in Successfully!", success: true })
        })
       
    } catch (err) {
        return res.status(403).send({message:err.message,success:false})
    }
}

module.exports = { CreateUser, verifyUserController, Signup, Login }

