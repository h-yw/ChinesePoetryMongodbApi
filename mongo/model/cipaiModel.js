const mongoose =require('mongoose')
const cipaiSchema =require('../schema/cipaiSchema')
module.exports = mongoose.model('cipai',cipaiSchema,'CP_metre_cipai')
