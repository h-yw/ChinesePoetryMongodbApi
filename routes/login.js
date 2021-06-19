const express = require('express')
const router = express()
const  login =require('../mongo/module/login')
router.post('/login',(req,res,next)=>{
    const loginJson =req.body

    const resJson={}
    login(loginJson).then(result=>{
        console.log(loginJson,result)
        if(result==null){
            resJson.code=601
            resJson.status=false
            resJson.msg='用户不存在'
        }else if(loginJson.password !=result.password){
            resJson.code=600
            resJson.status=false
            resJson.msg='用户名或密码错误'
        }else if(loginJson.password ==result.password&&loginJson.username == result.username){
            resJson.code=200
            resJson.status=true
            resJson.info={
                id:result._id,
                username:result.username,
                email:result.email
            }
            resJson.msg='登录成功'
        }
        res.json(resJson)
    })

})
module.exports = router
