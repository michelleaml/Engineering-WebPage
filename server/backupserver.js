// const express = require('express')
// const app = express()
// const cors = require('cors')
// const sqlite3 = require('sqlite3').verbose();

// app.use(cors())
// app.use((req,res,next) => {
//     res.setHeader("Access-Control-Allow-Origin","*");
//     next();

// });
// app.use(express,json({limit:'10mb'}))

// let db = new sqlite3.Database('../db/test.sqlite' , (err) => {
//     if(err){
//         console.log(err.message)
//     }
//     console.log('Connected to the access database')
// })

// app.post('/validatePassword',(req,res) =>{
//     const {username,password} = req.body

//     db.all(`select * from super_users where surname = '${username}' and psswd = '${password}'`,(err,rows) =>{
//         if(err){
//             throw err;
//         }
//         if(rows.length > 0){

//             res.send({validation: true})

//         }else{

//             res.send({validation:false})
//         }

//     })

// })

// app.listen(4002 ,() => console.log('ligstening at port 4002'))