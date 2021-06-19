const Schema =require('mongoose').Schema
const createSchema  =new Schema({
    // "_id" : Schema.Types.ObjectId,
    user_id:Schema.Types.ObjectId,
    title:String,
    author:String,
    created:Schema.Types.Date,
    content:Schema.Types.Array,
    cipai:String
},{versionKey:false})

module.exports = createSchema
