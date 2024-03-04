import { client } from "./index.js";

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


export { getAllProducts, getProductById, deleteProductById, addProducts, updateProducts }