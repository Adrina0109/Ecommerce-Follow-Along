const path= require("path");
if(process.env.NODE_ENV !=="PRODUCTION")
    {
        require('dotenv').config({
            path:path.join(__dirname,'../config/.env'),
        });
    }
const mongoose = require('mongoose');
const connectDatabase =()=> {
    // console.log(process.env);
    mongoose
    .connect(process.env.DB_URL)
    .then((data)=>{
        console.log(`Database is connected Successfully:${data.connection.host}`);
})
   .catch((er)=> console.log('Database connection Failed...',er.message));
};

module.exports=connectDatabase;