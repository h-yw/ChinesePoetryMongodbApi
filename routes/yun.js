const express = require('express')
const router = express()
const yun =require('../mongo/module/yun')
/**
 * @api {get} /yun 获取韵部，判断字韵
 * @apiName GetYun
 * @apiGroup 声韵
 * @apiParam {String} char  汉字
 * @apiParam {String} [yun=p] p：平水韵；c：词林正韵；z：中华新韵
 * @apiSampleRequest /yun
 */
router.get('/yun',(req,res,next)=>{
    let data ={
        yun:yunCollection(req.query.yun),
        char:req.query.char
    }
    yun(data).then((doc,err)=>{
        if(err){
            res.json(err)
        }else {
            res.json(doc)
        }
    })
})
function yunCollection(yun){
    switch (yun){
        case 'p':return 'CP_metre_pingshuiyun';
        case 'c':return 'CP_metre_cilinzhengyun';
        case 'z':return 'CP_metre_zhonghuaxinyun';
        default:return 'CP_metre_pingshuiyun'
    }
}
module.exports = router
