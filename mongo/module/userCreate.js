const userModel = require('../model/userModel')
const mongoose=require('mongoose')
module.exports=(json)=>{
    console.log('json',json)
    return userModel.aggregate([
        {
            $match:{
                _id:new mongoose.Types.ObjectId('606ee8d8c6d4a46ccbeb6dc2')
            }
        },
        {
            $lookup: {
                from: 'CP_user_create',
                localField: "_id",
                foreignField: "user_id",
                as: 'create'
            }
        },
        {
            $project: {
                email:1,
                username:1,
                create:{
                    content:1,
                    title:1,
                    created:1,
                    author:1,
                    cipai:1
                }
            }
        },
    ])
}
