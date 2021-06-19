const Schema = require('mongoose').Schema
const colorSchema =new Schema({
    "_id" : Schema.Types.ObjectId,
    CMYK:Array,
    RGB:Array,
    hex:String,
    name:String,
    pinyin:String
})

module.exports = colorSchema
