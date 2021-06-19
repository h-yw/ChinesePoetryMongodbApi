const Schema =require('mongoose').Schema
const authorSchema =new Schema({
     "_id" : Schema.Types.ObjectId, 
    "nameTr" : String, 
    "desc" : String,
    "dynasty" : String, 
    "worksCount" :Schema.Types.Number, 
    "name" : String, 
    "worksQuCount" :Number, 
    "dynastyTr" : String, 
    "worksShiCount" : Number, 
    "birthYear" : String, 
    "descTr" : String,
    "deathYear" : String, 
    "worksFuCount" : Number, 
    "worksWenCount" : Number, 
    "worksCiCount" : Number
})

module.exports =authorSchema