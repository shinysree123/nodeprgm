var Express=require('express');
var {markModel}=require('../models/markmodel');
const routers=Express.Router();

routers.get('/mark',(req,res)=>{
    res.send("marks");
});
routers.post('/addmark',async(req,res)=>{
    try {
        var mark=new markModel(req.body);
        var res=await mark.save();
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
routers.get('/viewmarks',async(req,res)=>{
    try {
        var markss=await markModel.find();
        res.json(markss);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
routers.get('/viewdata',(req,res)=>{
    markModel.aggregate(
        [
            {
                $group:{
                 _id:'$roll',
                total:{
                    $sum:'$marks'
                }
            }
        }

        ])
    
});
routers.get('/viewdetail',(req,res)=>{
    markModel.aggregate(
        [
            {
                $lookup:{
                    from:"marks",
                    localField:"_id",
                    foreignField:"student_id",
                    as:"student marks"
                }
            }
        ]
    )
});
routers.post('/search',(req,res)=>{
    try {
        markModel.find(req.body,(error,data)=>{
           if (error){
               throw error;
               
           }
           else{
               res.send(data);
           }
       });
       console.log(result);
    } catch (error) {
        console.log(error)
        
    }
});
