const express=require('express')
const app=express()
const port=5000

app.get('/',(req,res)=>{
    res.send('Hello!! This is running')
})

app.listen(port,()=>{
    console.log(`App listening at port:${port}`)
})