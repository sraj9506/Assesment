const express=require('express')
const {Pool}=require('pg')
const app=express()
const port=3000;

const pool = new pool({
 user: 'user'
 host: 'postgres-container'
 database : 'mydatabase'
 password : 'password'
 port : 5432, 
})

app.get('/',(req,res)=>{
 res.send('Hello from Node.js and Docker !');
});

app.listen(port,()=>{
 console.log(`App running on http://localhost:${port}`)
});
	
