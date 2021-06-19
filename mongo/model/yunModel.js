const mongoose =require('mongoose')
const yunSchema =require('../schema/yunSchema')
module.exports =collect=> mongoose.model('meter_yun',yunSchema,collect)
