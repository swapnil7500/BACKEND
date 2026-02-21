 const express = require('express');
 const app = express();
 const usermodel = require('./usermodel');

 app.get('/',(req,res)=>{
    res.send("hey");
 })

 app.get('/create',async (req,res)=>{
    let createduser =  await usermodel.create({
       name:"swapnil",
       username:"swapnil",
       email:"swapnil@gmail.com"

    })
    res.send(createduser); 
 }) 

//   app.get('/update',async (req,res)=>{
//    //  const updateduser =  usermodel.findOneAndUpdate({findone}, {update}, {new: true}) 
//        const updateduser =  usermodel.findOneAndUpdate({username:"swapnil"}, {name:"swapnil suresh gupta"}, {new: true}) 
//       res.render(createduser); 
//     })

//    app.get("/read", async (req, res) => {
//    //   let users = await userModel.findOne({username: "harsh"});
//      let users = await usermodel.find();
//      res.send(users);
//      })

//    app.get("/delete", async (req, res) => {
//     let users = await usermodel.findOneAndDelete({username: "harsh"})
//      res.send(users);
//      })
// I


 app.listen(3000);