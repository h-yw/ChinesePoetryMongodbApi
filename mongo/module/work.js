const workModel = require('../model/workModel')
const managerModel = require('../model/managerModel')
const collectionName = require('../../utils')
const assert =require('assert')
module.exports = (json) => {
    const reg = new RegExp(json.name)
    const regKind =new RegExp(json.kind)
    console.log(json,reg,regKind)
    let agg=  managerModel.aggregate([
        {
            $match: {
                dynastyCN: { $eq: json.dynasty }
            }
        },
        {
            $lookup: {
                from: collectionName(json.dynasty, 'work'),
                localField: "dynastyCN",
                foreignField: "dynasty",
                as: 'works'
            }
        },
        {
            $project: {
                dynasty:1,
                dynastyCN:1,
                work: 1,
                works: {
                    $filter: {
                        input: "$works",
                        as: "item",
                        cond: {
                            $regexMatch: {
                                input: "$$item.authorName",
                                regex: reg
                            }
                        }
                        // cond: { $and: ["$$item.authorName",/权/ ] }
                    },
                },
            }
        },
        {
            $project: {
                dynasty:1,
                dynastyCN:1,
                work: 1,
                works: {
                    $filter: {
                        input: "$works",
                        as: "item",
                        cond: {
                            $regexMatch: {
                                input: "$$item.kindCN",
                                regex: regKind
                            }
                        }
                        // cond: { $and: ["$$item.authorName",/权/ ] }
                    },
                },
            }
        },
        {
            $project: {
                id: "$_id",
                dynasty:"$dynasty",
                dynastyCN:"$dynastyCN",
                _id: 0,
                collection: "$work.collection",
                total: "$work.total",
                size: {
                    $size:"$works"
                },
                created: "$work.created",
                update: "$work.update",
                data: {
                    $slice: ["$works", (json.pageNum - 1) * json.pageSize, json.pageSize]
                },
            }
        },
    ]).allowDiskUse(true);
    // assert.deepStrictEqual(agg.options,{ allowDiskUse:true })
    return agg
}
