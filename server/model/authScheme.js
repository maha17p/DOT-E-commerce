const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter the email!"],
        trim:true
    },
    email:{
        type:String,
        required:[true,'please enter the email!'],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please enter the password"]
    }, 
    role:{
        type:Number,
        default:0 //0-user, 1-admin
    }, 
    avatar:{
        type:String,
        default:"https://res.cloudinary.com/dz1daogkg/image/upload/v1651399577/cld-sample.jpg"
    }

},{
    timestamps:true
}
)

module.exports = mongoose.model("User", userSchema)