const userModel = require('../model/userModel')

module.exports=(json)=>{
    return userModel.findOne({username:json.username})
}
