const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name:{type:String, require:[true,'Please Enter the Name...']},
    email: {
        type:String,
        require:[true, 'Please Enter Unique Email Adress'],
        unique:[true,'Please enter unique email id']

    },
    password: {type:String, require: [ true,'Please enter the password...']},
    address:[
        {city : String},
        {country : String},
        {add1:String},
        {add2:String},
        {zip:String},
        {addressType:String}
    ],
    role:{type: String, default:'user'},
    Avatar:{
        URL:{type:String, require:true},
        public_ID:{type:String,require:true}, 
    },
    resetPasswordToken:String,
    resetPasswordTime: Date,
    
},
    {versionKey:false}
); 

const UserModel=mongoose.model('User', userSchema);
module.exports=UserModel;



// imp components:
// nameemail
// password
// phonenumer
// address: [
// CountQueuingStrategycity
// resetPasswordToken
// resetPasswordTime
