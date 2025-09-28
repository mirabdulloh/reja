console.log("Web Serverni boshlash");
const express = require("express");
const app = express();


// MongoDB connect
const client =  require("./server")
const db = client.db();

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.post("/create-form", (req, res) => {
  console.log("Post so'rovi /create-item");
  console.log("step 2 front end back end ga kirish ");
  
  console.log(req.body);
  console.log(req.body.reja);
  
  
  const new_reja = req.body.reja;
  console.log("back end dan databasega sorov jonatish");

  console.log("create form dan user informationdi olib data basega backend jonatyabdi");
  db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
    console.log("data-ops",data.ops);
    res.json(data.ops[0]);
   
  });
});

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