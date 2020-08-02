var Mongoose=require('mongoose');
const markModel=new Mongoose.Schema({
    student_id:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:'students'
    },
    physics:{
        type:Number
    },
    chemistry:{
        type:Number
    },
    maths:{
        type:Number
    },
    english:{
        type:Number
    },
    hindi:{
        type:Number
    },
    biology:{
        type:Number
    }
});
var markSchema=Mongoose.model('marks',markModel);
module.exports={markModel};