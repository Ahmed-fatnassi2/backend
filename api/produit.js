const express = require("express");
const con = require("../server");
const app = express();


app.get("/", (req, resp) => {
  con.query("select * from product", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});
 app.post("/",(req,resp)=>{
  const data={name:req.name,price:req.price,id_categorie:req.id_categorie,src:req.src};
  con.query("INSERT INTO product SET?",data,(error,results,fields)=>{
    if(error)throw error;
    resp.send(results)
  })
 })



app.listen("5000")