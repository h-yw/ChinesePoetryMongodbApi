const express = require('express')
const router = express()
const  userCreate =require('../mongo/module/userCreate')
router.get('/user-create',(req,res,next)=>{

    const userCreateJson ={
        id:req.query.id
    }
    console.log('userCreateJson',userCreateJson)
    userCreate(userCreateJson).exec((err,doc)=>{
        res.json(...doc)
    })
})
module.exports=router
