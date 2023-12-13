const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("TurnersCars").collection("cars");

client
    .connect()
    .then(async () => {
        const data = await db.find().toArray();
        if (data.length === 0) {
            const inserted = await db.insertOne({ message: "Hello World" });
            console.log(inserted);
        }
        console.log("Database connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/", async (req, res) => {
    res.send("Server is live");
});

app.get("/api/get-data", async (req, res) => {
    const data = await db.find().toArray();
    res.send(data);
});

app.listen(port, () => {
    console.log("Server live on http://localhost:" + port);
});
