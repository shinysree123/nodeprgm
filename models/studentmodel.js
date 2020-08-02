var Mongoose=require('mongoose');
const studentSchema=new Mongoose.Schema({
    name:{
        type:String
    },
    adminNo:{
        type:Number
    },
    class:{
        type:Number
    }
});
var studentModel=Mongoose.model('students',studentSchema);
module.exports={studentModel}