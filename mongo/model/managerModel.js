const mongoose =require('mongoose')
const managerSchema =require('../schema/managerSchema')
module.exports=mongoose.model('author',managerSchema,'CP_manager')
