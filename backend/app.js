import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './src/routes/productRoutes.js'
import revenueRoutes from './src/routes/revenueRoutes.js'
const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());
// app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve images

app.use("/api/products", productRoutes)
app.use("/api/revenue", revenueRoutes)
connectDB()
.then(() => {
  app.listen(() => {
    console.log(`App listen at port: ${PORT}`);
  });
})
.catch(() => {
  console.log("mongodb connection failed");
})
