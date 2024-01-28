import mongoose from 'mongoose';



export const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect('mongodb+srv://admin:bVdSJSU7GUigZEMd@cluster0.zjvui6g.mongodb.net/');
    console.log(`Database is connect at ${connection.connection.host}`);
  } catch (error) {
    console.log('error.message', error);
  }
};
