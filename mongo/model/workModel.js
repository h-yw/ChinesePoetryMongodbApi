const mongoose =require('mongoose')
const workSchema =require('../schema/workSchema')
module.exports=(collection)=>mongoose.model('work',workSchema,collection)