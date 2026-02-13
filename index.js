import express from 'express';
const app = express();
app.get('/',function(req,res){
    res.send('hey how are you i am  fine')
})
app.listen(3000)
