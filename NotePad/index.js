const express = require('express');
const app = express();
// import { fileURLToPath } from "url";

const path = require('path');
 


app.set("view engine","ejs");
app.use(express.json());

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname,"public")));

app.get('/',function(req,res){
    res.render("index")
})


app.listen(3000);