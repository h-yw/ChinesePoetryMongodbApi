const express = require('express')
const router = express()
const author = require('../mongo/module/author')
/**
 * @api {get} /author 获取作者
 * @apiName GetAuthor
 * @apiGroup 作者
 * @apiParam {String} dynasty 朝代
 * @apiParam {Number} pageNum=1 页码
 * @apiParam {Number} [pageSize=10] 记录数
 * @apiSampleRequest /author
 */
router.get('/author', (req, res, next) => {
    const json = {
        dynasty: req.query.dynasty,
        pageNum: req.query.pageNum ? Number(req.query.pageNum) : 1,
        pageSize: req.query.pageSize ? Number(req.query.pageSize) : 10
    }
    author(json).exec((err, doc) => {
        if (err) {
            res.json({ err })
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
