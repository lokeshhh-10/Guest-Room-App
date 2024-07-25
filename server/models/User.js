const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        firstName : {
            type : String,
            required : true
        },
        email:{
            type : String,
            required : true,
        },
        password : {
            type : String,
            required : true,
        },
        tripList : {
            type : Array,
            default : [],
        },
    
        wishList : {
            type : Array,
            default : [],
        },
    
        propertyList : {
            type : Array,
            default : [],
        },
        reservationList : {
            type : Array,
            default : [],
        },
    },
    { timestamps : true}
)

const User = mongoose.model("User", UserSchema)
module.exports = User