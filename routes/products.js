import express from "express"
import { getAllProducts, getProductById, deleteProductById, addProducts, updateProducts } from "../helper.js";

const router = express.Router()

//REST API Endpoints
//get all products
router.get('/', async (req, res) => {
    const { category, rating } = req.query;
    console.log(req.query, category);
    const result = await getAllProducts(req);
    res.send(result);
});
//get products by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    console.log(req.params, id);
    //db.products.findOne({id: "1"})
    const product = await getProductById(id);
    // const product = products.find((pd) => pd.id === id)
    product ? res.send(product) : res.status(404).send({ message: "No product found" });
});
//delete products by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    console.log(req.params, id);
    //db.products.findOne({id: "1"})
    const product = await deleteProductById(id);
    // const product = products.find((pd) => pd.id === id)
    res.send(product);
});
//add products
router.post('/', async (req, res) => {
    const newProducts = req.body;
    console.log(newProducts);
    const result = await addProducts(newProducts);
    res.send(result);
});


//update products
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatedProducts = req.body;
    console.log(updatedProducts);
    const result = await updateProducts(id, updatedProducts);
    res.send(result);
});


export const productsRoute = router