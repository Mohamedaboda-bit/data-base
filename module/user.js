const mongoose = require('mongoose');
const Userschema = mongoose.Schema(
    {
        userName:{type:String , required:true,},
        userEmail:{type:String, required:true,}
    }
)
module.exports= mongoose.model('User' , Userschema);