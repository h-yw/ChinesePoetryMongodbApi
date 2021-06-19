const authorModel = require('../model/authorModel')
module.exports=(data)=>{
    // console.log('data:',data)
    return authorModel(data.collection,'updateAuthor').findOneAndUpdate(
        {_id:data.id},
        {
            $set:data.update
        },
        {
            new:true,
        }
    )
}
