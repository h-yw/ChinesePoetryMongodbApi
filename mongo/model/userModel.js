const mongoose =require('mongoose')
const userModel =require('../schema/userSchema')
module.exports = mongoose.model('user',userModel,'CP_user_info')
