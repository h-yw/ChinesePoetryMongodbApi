const express = require('express')
const router = express()
const manager = require('../mongo/module/manager')
router.get('/manager',(req,res,next)=>{
    manager().exec((err,doc)=>{
        if(err){
            res.send({...err})
        }else {
            res.send({...doc})
        }
    })
})
module.exports = router
