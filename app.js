var Express=require('express');
var Parser=require('body-parser');
var Mongoose=require('mongoose');
var app=Express();
var studentroute=require('./routers/studentsamplerouter');
app.use('/',studentroute);
var markroute=require('./routers/markrouter');
app.use('/',markroute);
Mongoose.connect('mongodb+srv://shinyjoseph:shiny@cluster0.qca0c.mongodb.net/students?retryWrites=true&w=majority');
app.use(Parser.urlencoded({extended:false}));
app.listen(process.env.PORT||3500,()=>{
    console.log("server started");
});