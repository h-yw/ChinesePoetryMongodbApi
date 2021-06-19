const yunModel = require('../model/yunModel')

module.exports = (json)=>{
    // console.log(json,Object.keys(yunModel.collection))
    // yunModel.collection.collectionName='CP_metre_cilinzhnegyun'
    const char =new RegExp('['+json.char+']')
    // const char =[json.char]
    console.log(json)
    return yunModel(json.yun).aggregate([
        {
            $match:{
                glys:{
                    $regex:char
                }
                //{$regex:char}
            }
        },
        {
            $project:{
                _id:0,
                "group_name":1,
                "tone_name":1,
                "section_desc":1,
                "glys":1,
                "tone":1
            }
        }
    ])
}
