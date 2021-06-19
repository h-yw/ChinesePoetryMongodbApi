const Schema = require('mongoose').Schema

const cipaiSchema =new Schema({
    "_id" : Schema.Types.ObjectId,
    "name":String,
    "enname":String,
    "alias":String,
    "source":String,
    "wordcount":Number,
    "tone_type":Number,
    "pingze":String,
    "parent_id":Number,
    "color_id":Number,
    "type":Number,
    "cipai_id":Number
})
module.exports = cipaiSchema
