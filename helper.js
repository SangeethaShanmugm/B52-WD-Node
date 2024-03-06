import { client } from "./index.js";
import bcrypt from "bcrypt"

async function getAllProducts(req) {
    return await client.db("b52-wd-node").collection("products").find(req.query).toArray();
}
async function getProductById(id) {
    return await client.db("b52-wd-node").collection("products").findOne({ id: id });
}
async function deleteProductById(id) {
    return await client.db("b52-wd-node").collection("products").deleteOne({ id: id });
}
async function addProducts(newProducts) {
    return await client.db("b52-wd-node").collection("products").insertMany(newProducts);
}


async function updateProducts(id, updatedProducts) {
    return await client.db("b52-wd-node").collection("products")
        .updateOne({ id: id }, { $set: updatedProducts });
}



async function genPassword(password) {
    const salt = await bcrypt.genSalt(10)//bcrypt.genSalt(no. of rounds)
    // console.log(salt)
    const hashedPassword = await bcrypt.hash(password, salt)
    // console.log(hashedPassword)
    return hashedPassword
}


async function createUser(username, hashedPassword) {
    return await client.db("b52-wd-node").collection("users")
        .insertOne({ username: username, password: hashedPassword });
}


async function getUserByName(username) {
    return await client.db("b52-wd-node").collection("users")
        .findOne({ username: username });
}


export { getAllProducts, getProductById, deleteProductById, addProducts, updateProducts, genPassword, createUser, getUserByName }