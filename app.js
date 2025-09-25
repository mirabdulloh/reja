console.log("Web Serverni boshlash");
const express = require("express");
const app = express();


// MongoDB connect
const db = require("./server").db();

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.post("/create-item", (req, res) => {
  console.log("Post so'rovi /create-item");
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
    if (err) {
      console.log(err);
      res.end("Something went wrong");
    } else {
      res.end("Successfully added");
    }
  });
});

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  console.log("Bosh sahifa so'rovi /");
  db.collection("plans").find().toArray((err, data) => {
    if (err) {
      console.log(err);
      res.end("Xatolik yuz berdi");
    } else {
      res.render("reja", { plans: data });
    }
  });
});

module.exports = app;