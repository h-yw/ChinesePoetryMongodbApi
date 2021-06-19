const express = require('express')
const router = express()
const  create =require('../mongo/module/create')
router.post('/create',(req,res,next)=>{
    const createJson =req.body
    console.log(createJson)
    create(createJson).then((err,doc)=>{
        if (err){
            res.json(err)
        }
        res.json(doc)
    })
})
module.exports=router
