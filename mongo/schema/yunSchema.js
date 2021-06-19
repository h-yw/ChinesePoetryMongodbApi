const Schema = require('mongoose').Schema
const yunSchema =new Schema({
    "_id" : Schema.Types.ObjectId,
    "group_name":String,
    "tone_name":String,
    "section_desc":String,
    "glys":String,
    "tone":Number
})

module.exports = yunSchema
