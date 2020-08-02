var Mongoose=require('mongoose');
const studSchema=new Mongoose.Schema({
    name:{
        type:String
    },
    adminNo:{
        type:Number
    },
    class:{
        type:Number
    },
    roll:{
        type:Number
    },
    clg:{
        type:Number
    }
});
var studModel=Mongoose.model('students',studSchema);
module.exports={studModel};