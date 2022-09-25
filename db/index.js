const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://localhost:27017"; // mongodb port url
const client = new MongoClient(uri);
const database = client.db("morsacademy");
const videos = database.collection("videos");
const logs = database.collection("logs");
const insertData = require("./insertData");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

async function run() {
  try {
    const result = await videos.find({}).toArray();
    if (result.length === 0) {
      const options = { ordered: true };
      await videos.insertMany(insertData, options);
    }
  } catch (e) {
    console.log(e);
  }
}
run().catch(console.dir);

async function get(res) {
  try {
    const result = await videos.find({}).toArray();

    res.send(result);
  } catch (error) {
    res.send(error);
  }
}

async function update(req, res) {
  try {
    let doc = await videos.findOne({ _id: ObjectId(req.body.id) });
    const result = await videos.updateOne(
      { _id: ObjectId(req.body.id) },
      { $set: { confirmation: true } }
    );

    doc["operation"] = "update";
    doc["operationDate"] = new Date();
    delete doc["_id"];
    doc["docID"] = req.body.id;

    logs.insertOne(doc);

    res.send(result);
  } catch (error) {
    res.send(error);
  }
}

async function erase(req, res) {
  try {
    let doc = await videos.findOne({ _id: ObjectId(req.body.id) });
    const result = await videos.deleteOne({ _id: ObjectId(req.body.id) });

    doc["operation"] = "delete";
    doc["operationDate"] = new Date();
    delete doc["_id"];
    doc["docID"] = req.body.id;

    logs.insertOne(doc);

    res.send(result);
  } catch (error) {
    res.send(error);
  }
}

async function watch(req, res) {
  try {
    let doc = await videos.findOne({ _id: ObjectId(req.body.id) });

    doc["operation"] = "watch";
    doc["operationDate"] = new Date();
    delete doc["_id"];
    doc["docID"] = req.body.id;

    logs.insertOne(doc);
  } catch (error) {
    res.send(error);
  }
}

app.post("/get", (req, res) => {
  get(res).catch(console.dir);
});

app.post("/update", (req, res) => {
  update(req, res).catch(console.dir);
});

app.post("/delete", (req, res) => {
  erase(req, res).catch(console.dir);
});
app.post("/watch", (req, res) => {
  watch(req, res).catch(console.dir);
});

app.listen(8000, function () {
  console.log("running on 8000");
});
