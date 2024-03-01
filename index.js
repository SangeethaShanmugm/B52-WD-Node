// const express = require('express')//third party package
// const { MongoClient } = require('mongodb');
import express from "express";
import { MongoClient } from "mongodb"

const app = express()
const PORT = 5000

const products = [
    {
        "id": "1",
        "name": " iPhone 15 (128 GB)",
        "poster": "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY218_.jpg",
        "price": "₹77,900 ",
        "rating": 3,
        "summary": "DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much more.",
        "category": "mobile"
    },
    {
        "id": "2",
        "name": "iPhone 15 Pro (128 GB) ",
        "poster": "https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UY218_.jpg",
        "price": "₹1,34,900 ",
        "rating": 3.5,
        "summary": " iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.",
        "category": "mobile"
    },
    {
        "id": "3",
        "name": "Samsung Galaxy S23 5G (256GB Storage) ",
        "poster": "https://m.media-amazon.com/images/I/51L8W6d-DNL._AC_UY218_.jpg",
        "price": "₹65,320",
        "rating": 4.7,
        "summary": "FASTEST MOBILE PROCESSOR AVAILABLE: Whether you’re working hard, playing hard or doing both at the same time, smoothly switch between apps with our fastest processor ever.",
        "category": "mobile"
    },
    {
        "id": "4",
        "name": "Samsung Galaxy S23 Ultra 5G (256GB Storage) ",
        "poster": "https://m.media-amazon.com/images/I/51hqXIAVXAL._AC_UY218_.jpg",
        "price": "₹1,00,000",
        "rating": 5.0,
        "summary": "Create crystal-clear content worth sharing with Galaxy S23 Ultra’s 200MP camera — the highest camera resolution on a phone; Whether you’re posting or printing, Galaxy S23 Ultra always does the moment justice.",
        "category": "mobile"
    },
    {
        "id": "5",
        "name": "Apple AirPods Pro (2nd Generation) ​​​​​​​ ",
        "poster": "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY218_.jpg",
        "price": "₹20,999 ",
        "rating": 4.8,
        "summary": "Active Noise Cancellation reduces unwanted background noise.Adaptive Transparency lets outside sounds in while reducing loud environmental noise.Personalised Spatial Audio with dynamic head tracking places sound all around you.",
        "category": "accessories"
    },
    {
        "id": "6",
        "name": " Apple Watch Series 9 [GPS + Cellular 41mm] ",
        "poster": "https://m.media-amazon.com/images/I/81I70qV6cOL._AC_UY218_.jpg",
        "price": "₹75,900 ",
        "rating": 4.9,
        "summary": "Smartwatch with Gold Stainless steel Case with Gold Milanese Loop One Size. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant",
        "category": "accessories"
    },
    {
        "id": "7",
        "name": " Samsung Galaxy Watch5 Bluetooth (44 mm, Sapphire, Compatible with Android only)",
        "poster": "https://m.media-amazon.com/images/I/61aVQDazNHL._SX679_.jpg",
        "price": "₹22,999",
        "rating": 4.5,
        "summary": "Analysis (BIA Measurement): Monitor everything from body fat percentage (BIA) to skeletal muscle weight. All the feedback you need to track your progress.",
        "category": "accessories"
    },
    {
        "id": "8",
        "name": "SAMSUNG Galaxy Buds2 Pro True Wireless Bluetooth Earbud Headphones - White",
        "poster": "https://m.media-amazon.com/images/I/51m4LnFz84L._SX466_.jpg",
        "price": "₹27,141",
        "rating": 4.3,
        "summary": "Reduce unwanted noise with Galaxy Buds2 Pro; They use Intelligent Active Noise Cancellation* to quiet even the loudest outside sounds; Tune in to what matters most without being bothered by distracting sounds around you",
        "category": "accessories"
    },
    {
        "id": "9",
        "name": "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm",
        "poster": "https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg",
        "price": "₹84,990",
        "rating": 5.0,
        "summary": "Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.",
        "category": "Laptop"
    },
    {
        "id": "10",
        "name": "Samsung Galaxy Book2 Pro 360 Intel 12th Gen i7 EvoTM 33.78 cm (13.3)",
        "poster": "https://m.media-amazon.com/images/I/71iBfI3rAYL._SX679_.jpg",
        "price": "₹1,10,790",
        "rating": 4.9,
        "summary": " 12th Generation Intel EVOTM Core i7-1260P processor (2.1 GHz up to 4.6 GHz 18 MB L3 Cache) | Memory: 16 GB LPDDR5 Memory (On BD 16 GB) | Storage: 512 GB NVMe SSD",
        "category": "Laptop"
    }
]

const MONGO_URL = "mongodb://127.0.0.1:27017"

//"mongodb://localhost:27017"

async function createConnection() {
    const client = new MongoClient(MONGO_URL)
    await client.connect()
    console.log("Mongodb is connected")
    return client
}

const client = await createConnection()

//req => what we send to server
//res => what we receive from server
app.get('/', (req, res) => {
    res.send('Hello Everyone')
})

// /products => all the products ✅
// /products?category=mobile => only mobile products ✅
// /products?rating=4.5 =< only products with rating 4.5  ✅
// /products?category=accessories&rating=4.5 => filter accessories & filter based on rating   ✅



//get all products
app.get('/products', (req, res) => {
    const { category, rating } = req.query
    console.log(req.query, category)
    let filteredProducts = products //copy by reference
    if (category) {
        filteredProducts = filteredProducts.filter((pd) => pd.category === category)
    }
    if (rating) {
        filteredProducts = filteredProducts.filter((pd) => pd.rating === +rating)
    }
    res.send(filteredProducts)
})


//get products by ID
app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    console.log(req.params, id)
    //db.products.findOne({id: "1"})
    const product = await client.db("b52-wd-node").collection("products").findOne({ id: id })
    // const product = products.find((pd) => pd.id === id)
    product ? res.send(product) : res.status(404).send({ message: "No product found" })
})



//delete products by ID
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params
    console.log(req.params, id)
    //db.products.findOne({id: "1"})
    const product = await client.db("b52-wd-node").collection("products").deleteOne({ id: id })
    // const product = products.find((pd) => pd.id === id)
    res.send(product)
})



app.listen(PORT, () => console.log("Server listening on port", PORT))