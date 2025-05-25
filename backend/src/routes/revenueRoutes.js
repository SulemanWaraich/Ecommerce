import express from 'express';
import {getRevenueData} from '../../controllers/revenueController.js'

const router = express.Router();

router.get('/', getRevenueData);

export {router}