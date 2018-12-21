//const http=require('http')
const express=require('express')
const app=express()

const path=require('path')

app.set('view engine', 'pug')
app.set('views',path.join(__dirname,'./views'))

app.get('/',(req,res)=>{
	res.render('index')
})
app.post('/',function(req,res){
	res.send("POST WITH SUCCESS")
})
app.listen(3100)