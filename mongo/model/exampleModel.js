const mongoose =require('mongoose')
const exampleSchema =require('../schema/cipaiExampleSchema')
module.exports = mongoose.model('cipai_example',exampleSchema,'CP_metre_example')
