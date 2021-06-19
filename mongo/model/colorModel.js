const mongoose =require('mongoose')
const colorSchema =require('../schema/colorSchema')
module.exports = mongoose.model('color',colorSchema,'CP_tradition_color')
