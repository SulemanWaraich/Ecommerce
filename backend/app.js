import express from 'express';
import cors from 'cors';
import connectDB from './src/config/db.js';
import {router} from './src/routes/productRoutes.js'
import {router1} from './src/routes/revenueRoutes.js'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const __dirname = path.resolve();


app.use(express.json());
app.use(cors({
  origin: "*",
  credentials: true,
}));


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use("/api/products", router)
app.use("/api/revenue", router1)

connectDB()
.then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`App listen at port: ${process.env.PORT}`);
  });
})
.catch((err) => {
  console.log("mongodb connection failed", err.message);
})
