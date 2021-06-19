const express = require('express')
const router = express()
const  cipai =require('../mongo/module/cipai')
/**
 * @api {get} /cipai 获取词牌及示例
 * @apiName GetCipai
 * @apiGroup 词牌
 * @apiParam {String} [cipai] 词牌，模糊搜索
 * @apiSampleRequest /cipai
 */
router.get('/cipai',(req,res,next)=>{
    let data ={
        cipai:req.query.cipai||'',
    }
    cipai(data).then((err,doc)=>{
        if(err){
            res.json(err)
        }else {
            res.json(doc)
        }
    })
})

module.exports = router
