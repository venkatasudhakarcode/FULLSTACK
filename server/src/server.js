var express = require('express');
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    res.send("My First Full Stack Application Server");
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})