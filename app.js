console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const mongodb = require("mongodb");


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

  db.collection("plans").insertOne({ reja: new_reja }, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Xatolik yuz berdi");
    }

    // Send back the inserted document with _id
    res.json({
      _id: result.insertedId, // ✅ use 'result' here
      reja: new_reja
    });
  });
});

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});

app.post("/update-item", (req, res) => {
  console.log("Post so'rovi /update-item");
  console.log(req.body);
  const updated_reja = req.body.reja;
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectID(req.body.id) },
    { $set: { reja: updated_reja } },
    () => {
      res.send("OK");
    }
  );
});

app.post("/delete-item", (req, res) => {
  console.log("Post so'rovi /delete-item");
  console.log(req.body);
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectID(req.body.id) },
    (err, data) => {
      res.json("done");
    }
  );
});

app.post("/delete-all", (req, res) => {
  console.log("Post so'rovi /delete-all");
  db.collection("plans").deleteMany({}, (err, data) => {
    if (err) {
      console.log("Xato:", err);
      return res.status(500).send("O‘chirishda xato");
    }
    console.log("deleted:", data.deletedCount, "documents");
    res.json("done");
  });
});


// Bosh sahifa

app.get("/", function (req, res) {
  console.log("working /");
  db.collection("plans").find().toArray((err, data) => {
    if (err) {
      console.log(err);
      res.end("Error happened");
    } else {
      res.render("reja", { plans: data });
    }
  });
});

module.exports = app;
