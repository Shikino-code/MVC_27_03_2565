// ใช้ mongoose
const mongoose = require('mongoose')

//เชื่อมไป mongoDB
const dbUrl = 'mongodb://localhost:27017/binaryDB'
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))

//ออกแบบ Schema
let binarySchema = mongoose.Schema({
    binary:Number,
    type:String
})

//สร้าง model
let binary = mongoose.model("binary",binarySchema)

//ส่งออก Model
module.exports = binary

//บันทึกข้อมูล
module.exports.saveBinary = function(model,data){
    model.save(data)
}