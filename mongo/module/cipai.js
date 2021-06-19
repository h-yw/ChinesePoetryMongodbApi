const cipaiModel = require('../model/cipaiModel')
module.exports = (json)=>{
    const cipai =new RegExp(json.cipai)
    return  cipaiModel.aggregate([
        {
            $match:{
                name: {$regex:cipai}
            }
        },
        {
            $lookup: {
                from: 'CP_metre_example',
                localField: "cipai_id",
                foreignField: "ci_id",
                as: 'example'
            }
        },
    ])
}
