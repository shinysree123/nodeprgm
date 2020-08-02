var Express=require('express');
var {studentModel}=require('../models/studentmodel');
const router= Express.Router();

router.get('/',(req,res)=>{
    res.send("welcome");
});

router.post('/reg',async(req,res)=>{
    try {
        var studentdata= new studentModel(req.body);
        var result=await studentdata.save();
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
router.get('/viewall',async(req,res)=>{
    try {
        var result= await studentModel.find();
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
module.exports=router;