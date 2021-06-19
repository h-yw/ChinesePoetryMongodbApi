const Schema = require('mongoose').Schema

const cipaiExampleSchema=new Schema({
    "_id" : Schema.Types.ObjectId,
    "author":String,
    "text":String,
    "note":String,
    "ci_id":Number,
    "cipai_name":String,
    "collect":Object,
    "example_id":Number
})

module.exports = cipaiExampleSchema
