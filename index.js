const express=require("express");
const bodyparser=require("body-parser");
const app=express();
const port=5000;
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static('public'))
app.get('/',(req,res)=>
{
res.sendFile(__dirname +'index.html');
});
app.post('/submit',(req,res)=>
{
    const data=req.body;
    console.log(data);
    res.send(`<h1 style="text-align:center;margin-top:50vh;transform:translateY(-50%);color:green;background-color:orange;">Successfully Signed Up`)
});
app.listen(port,()=>{
    console.log(`successfully updated result ${port}`)
})
