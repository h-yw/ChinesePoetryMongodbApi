const managerModel = require('../model/managerModel')
module.exports =()=>{
    return managerModel.find({})
}
