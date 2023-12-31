const express = require("express");

const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const router = express.Router();

//This route handles searching the entire database collection

const MONGOURI = process.env.MONGOURI || "mongodb://127.0.0.1:27017/";
// Variables for connection to MongoDB
const DB_NAME = "M5PropertyDB";
const COLLECTION_NAME = "rentals";
const client = new MongoClient(MONGOURI);

router.use(bodyParser.json());

router.get("/", async (req, res) => {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const database = client.db(DB_NAME);
        const collection = database.collection(COLLECTION_NAME);
        const result = await collection.find().toArray();
        return res.status(200).json(result);
    } catch (error) {
        console.log("Error reading database:", error);
    } finally {
        await client.close();
    }
});

module.exports = router;
