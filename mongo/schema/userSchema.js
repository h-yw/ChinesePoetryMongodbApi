const Schema =require('mongoose').Schema
const userSchema =new Schema({
    username:String,
    password:String,
    email:String,
})
module.exports = userSchema
