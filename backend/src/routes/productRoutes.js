import {Router} from 'mongoose';
import express from 'express'
import {getProducts, createProduct, updateStock} from '../../controllers/productController.js';

const router = express.Router()

router.get('/', getProducts);
router.post('/',upload.single('image'), createProduct);
router.put('/:id', updateStock);

export {router};