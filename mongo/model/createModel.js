const mongoose =require('mongoose')
const createModel =require('../schema/createSchema')
module.exports = mongoose.model('create',createModel,'CP_user_create')
