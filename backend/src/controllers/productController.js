import {productModel}  from '../models/Product.model.js';

const getProducts = async (req, res) => {
  try {
    
    const product = await productModel.find({});
    if(!product){
      return res.json({msg: "there are no products in the inventory."})
    }
    return res.status(200).json({msg: "Products fetched successfully!", product});
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

const createProduct = async (req, res) => {
  try {
    
    const name = req.body.name
    const description = req.body.description
    const price = req.body.price
    const stock = req.body.stock
    const image = req.file ? req.file.filename : "";
  
    const product = await productModel.create({name, description, price, stock, image});
  
    res.status(200).json({msg: "product created successfully.", product})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

const updateStock = async (req, res) => {
  try {
    
    const stock = req.body.stock;
  
    const updatedProduct  = await productModel.findByIdAndUpdate(req.params.id, {stock}, {new: true});
  
    if(!updatedProduct){
      return res.status(404),json({error: "Product not found!"})
    }
  
    res.json({msg: "product stock updated successfully", updatedProduct})
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

export {
  getProducts,
  createProduct,
  updateStock,
}