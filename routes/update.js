const express = require('express')
const mongoose = require('../mongo/connect')
const router = express()
const update = require('../mongo/module/update')
/**
 * @api {post} /update 更新作品
 * @apiName update
 * @apiGroup 作品
 * @apiParam {Object} data 请求体
 * @apiParamExample {json} Param-Example:
 *  {
 *      collection:'CP_author_zhou',
 *      id : "6006918bc32cdc043e6fb85d",
 *      update:{
 *          ...修改字段
 *      }
 *  }
 * @apiSampleRequest /update
 */
router.post('/update', (req, res, next) => {
    let data =req.body
    update(data).exec((err,doc)=>{
        if(err){
            res.send({status:5555,err})
        }else{
            res.send({status:2000,doc})
        }
    })
})
module.exports = router
