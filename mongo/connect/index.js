const mongoose =require('mongoose')
const uri="mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&authSource=chinese_poetry&authMechanism=SCRAM-SHA-256"
const defaultOptions={
    bufferCommands:false,
    user:'houyw',
    pass:'houyw',
    dbName:'chinese_poetry',
    autoIndex:false,
    useNewUrlParser: true,
    useCreateIndex: true,
    autoReconnect:true,
    useFindAndModify: false,
    useUnifiedTopology: true
}
mongoose.Promise = global.Promise;
mongoose.connect(uri,defaultOptions,(err)=>{
    if(err){
        console.log('failed!!')
    }else{
        console.log('success!!!')
    }
})
module.exports = mongoose
// Connect MongoDB at default port 27017.
// mongoose.connect('mongodb://localhost:27017/DB Name', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
// }, (err) => {
//     if (!err) {
//         console.log('MongoDB Connection Succeeded.')
//     } else {
//         console.log('Error in DB connection: ' + err)
//     }
// });
