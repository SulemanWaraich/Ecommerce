import express from 'express';
import {getRevenueData} from '../controllers/revenueController.js'

const router1 = express.Router();

router1.get('/', getRevenueData);

export {router1}