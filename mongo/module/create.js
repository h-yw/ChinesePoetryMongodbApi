const createModel = require('../model/createModel')

module.exports=(json)=>{
    return createModel.create(json)
}
