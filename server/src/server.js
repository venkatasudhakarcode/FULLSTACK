var express = require('express');
const port = 3000;


global.mainpath = 'http://localhost:3000';
const postRouter = require('./routes/post.route');


// Init express
const app = express();


app.get('/',(req,res)=>{
    res.send("My First Full Stack Application Server");
})
app.get('/first',(req,res) =>{
    res.send("This is my first route in expres js");
})
app.get('/second',(req,res) =>{
    res.send("This is my second route in expres js");
})


//called post qrouter
app.get('/posts', postRouter);



app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

module.exports = app;