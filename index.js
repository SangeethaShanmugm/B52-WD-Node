// const express = require('express')//third party package
// const { MongoClient } = require('mongodb');
import express from "express";
import { MongoClient } from "mongodb"
import * as dotenv from 'dotenv';
import cors from "cors"
import { productsRoute } from "./routes/products.js";
import { usersRoute } from "./routes/users.js";
const app = express()

dotenv.config()

const PORT = process.env.PORT

// console.log(process.env.MONGO_URL)

//Inbuilt middleware
//Interceptor ||  Converting body to JSON
app.use(express.json())
app.use(cors())


const MONGO_URL = process.env.MONGO_URL
//"mongodb://127.0.0.1:27017"
//"mongodb://localhost:27017"

async function createConnection() {
    const client = new MongoClient(MONGO_URL)
    await client.connect()
    console.log("Mongodb is connected")
    return client
}

export const client = await createConnection()

//req => what we send to server
//res => what we receive from server
app.get('/', (req, res) => {
    res.send('Hello Everyone')
})

app.use("/products", productsRoute)

app.use("/users", usersRoute)

app.listen(PORT, () => console.log("Server listening on port", PORT))


