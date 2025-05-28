import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.DB_URL);


const connectDB = async () => {
  
  try { 
    const connect = await mongoose.connect(process.env.DB_URL)
    console.log("Connection successfull!", connect.connection.host);
    

  } catch (error) {
    console.log("error while connecting to database.", error);
  }
}

export default connectDB;

