const authorModel = require('../model/authorModel')
const managerModel = require('../model/managerModel')
const collectionName =require('../../utils')
module.exports = (json) => {
    console.log(json)
    return managerModel.aggregate([
        {
            $match: {
                dynastyCN: { $eq: json.dynasty }
            }
        },
        {
            $lookup: {
                from: collectionName(json.dynasty,'author'),
                localField: "dynastyCN",
                foreignField: "dynasty",
                as: 'authors'
            }
        },
        {
            $project: {
                id: "$_id",
                _id: 0,
                collection: "$author.collection",
                total: "$author.total",
                created: "$author.created",
                update: "$author.update",
                dynasty: 1,
                dynastyCN: 1,
                author: 1,
                data: {
                    $slice: ["$authors", (json.pageNum-1)*json.pageSize, json.pageSize]
                }
            }
        },
        {
            $project: {
                author: 0,
            }
        }
    ])
}
