const express = require('express')
const router = express()
const work = require('../mongo/module/work')
/**
 * @api {get} /work 获取诗词
 * @apiName GetWork
 * @apiGroup 作品
 * @apiParam {String} dynasty 朝代
 * @apiParam {String} name 姓名
 * @apiParam {String} kind 种类 诗、词、曲、赋、文
 * @apiParam {Number} pageNum=1 页码
 * @apiParam {Number} [pageSize=10] 记录数
 * @apiSampleRequest /work
 */
router.get('/work', (req, res, next) => {
    const json = {
        dynasty: req.query.dynasty,
        name:req.query.name?req.query.name:'',
        pageNum: req.query.pageNum ? Number(req.query.pageNum) : 1,
        pageSize: req.query.pageSize ? Number(req.query.pageSize) : 10,
        kind:req.query.kind||''
    }
    work(json).exec((err, doc) => {
        if (err) {
            res.json( {...err,err:err.toString()} )
        } else {
            res.json(...doc)
        }
    })
    // res.send({
    //     stutas:200,
    //     msg:'hah',
    //     // doc:author().exec()
    // })
})
module.exports = router
