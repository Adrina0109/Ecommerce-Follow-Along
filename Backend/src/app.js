const express=require('express');
const userRouter = require('./Routes/user.route.js');
const productRouter= require("./Routes/products.route.js");
if(process.env.NODE_ENV !=="PRODUCTION")
    {
        require('dotenv').config({
            path:'./src/Config/.env',
        });
    }

const app = express();
app.use(express.json());
app.get("/",(req,res) => {
    return res.send("Welcome to backend");
});

app.use('/user', userRouter);
app.use('/product', productRouter);
module.exports = app;



// const express= require('express');
// const app=express;

// app.get("/",(req,res) => {
//     return res.send('Hello World');
// });

// let num=2;
// function middle(req,res,next)
// {
//     console.log("Middleware executed");
//     next();
// }

// const PORT=8080;
// app.listen(PORT,()=>{
//     console.log('8080 running server');
// })





// function express(){
//     return {
//         listen:()=>{},
//         get:()=>{},
//         listen:()=>{},
//         listen:()=>{},
//         listen:()=>{},
//     }
// }