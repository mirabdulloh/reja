console.log("Web Serverni boshlash");
const express = require("express");
const app = express();


// MongoDB connect
const client =  require("./server") 
const db = client.db(); 
const mongodb = require("mongodb") 

// 1: Kirish code
app.use(express.static("public")); // MIddle ware - Traditional API
app.use(express.json()); // Middleware - Rest API
app.use(express.urlencoded({ extended: true })); 

// 2: Session code
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code

// form API
app.post("/create-form", (req, res) => {
  console.log("Post so'rovi /create-item");
  console.log("step 2 front end back end ga kirish ");
  
  console.log("malumot ketdi req bodysi kelyabdi formdan",req.body);
  console.log("va biz bu req.body da kelayotgan malumotni faqatgina valuesini olyabmiz va bu frontendan back endga kelyabdi ",req.body.reja);
  
  
  const new_reja = req.body.reja;
  console.log("back end dan databasega sorov jonatish");

  console.log("create form dan user informationdi olib data basega backend jonatyabdi");
  db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
    console.log("data-ops",data.ops);
    res.json(data.ops[0]);
   
  });
});

// FORM delete API
app.post("/delete-item", (req,res)=>{
  const id = req.body.id;
  console.log(mongodb.ObjectId(id));
  db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)},(err,data)=>{
    res.json({state: "success"})
  })
})

// edit router
app.post("/edit-item", (req,res)=>{
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    {_id: new mongodb.ObjectId(data.id)},
    {$set:{reja: data.new_input}},
    function(err, data){
    res.json({state:"success"});
  })
  
});


// delete all router

app.post("/delete-all", (req,res)=>{
  if(req.body.delete_all){
  db.collection("plans").deleteMany((err,data)=>{
    res.json({state:"hamma rejalar ochirildi"})
  })
  }
})


app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  console.log("Bosh sahifa so'rovi /");
  console.log("Step 3 database dan back end ga data jonatish");
  
  db.collection("plans").find().toArray((err, data) => {
    if (err) {
      console.log(err);
      res.end("Xatolik yuz berdi");
    } else {
      console.log("back end dan front endga javob jonatadi");
      console.log(data);
      
      res.render("reja", { plans: data });
    }
  });
});

module.exports = app;