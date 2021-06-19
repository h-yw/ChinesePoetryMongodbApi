const userModel = require('../model/userModel')

module.exports=(json)=>{
    return userModel.create(json)
}
