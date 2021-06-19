const express = require('express')
const router = express()
const  color =require('../mongo/module/color')
router.get('/color',(req,res)=>{
    color().then(doc=>{
        res.json(doc)
    })
})
module.exports = router
