const mongoose =require('mongoose')
const authorSchema =require('../schema/authorSchema')
module.exports=(collection,name='author')=>mongoose.model(name,authorSchema,collection)
