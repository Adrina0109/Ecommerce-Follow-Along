if(process.env.NODE_ENV !=="PRODUCTION")
    {
        require('dotenv').config({
            path:'./src/config/.env',
        });
    }

const express = require('express');
const userRouter=require("./Routes/user.route.js")
const app = express();
app.use(express.json());
app.get("/",(req,res) => {
    return res.send('Welcome to backend');
});

app.get("/user/squad",(req,res)=>{
    return res.send('Good afternoon');
});
app.use('/user', userRouter)
module.exports = app;





// function express(){
//     return {
//         listen:()=>{},
//         get:()=>{},
//         listen:()=>{},
//         listen:()=>{},
//         listen:()=>{},
//     }
// }