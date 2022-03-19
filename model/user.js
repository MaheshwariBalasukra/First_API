const mongoose = require('mongoose')
userSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    user_name:String,
    email:String,
    password:String,
})
module.exports = mongoose.model('User',userSchema)
