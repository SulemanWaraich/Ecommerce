import mongoose from 'mongoose';

const connectDB = async () => {
  
  try {
    const connect = await mongoose.connect('mongodb://sulemanwaraich094:vasion123@cluster0-shard-00-00.1bqjj.mongodb.net:27017,cluster0-shard-00-01.1bqjj.mongodb.net:27017,cluster0-shard-00-02.1bqjj.mongodb.net:27017/?replicaSet=atlas-pobgge-shard-0&ssl=true&authSource=admin')
    console.log("Connection successfull!", connect.connection.host);
    

  } catch (error) {
    console.log("error while connecting to database.", error);
  }
}

export default connectDB;

