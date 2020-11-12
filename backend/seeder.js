const mongoose = require('mongoose');
const config = require('config');
const ProductModel = require('./models/Products');
const data = require('./client/src/data');
const dotenv = require('dotenv');

const connectDB = require('./config/db');

connectDB();
dotenv.config();

const importData = async () => {
  try {
    await ProductModel.insertMany(data);
    console.log('data imported successfully'.green.inverse);
  } catch (error) {
    console.log(error);
  }
};

importData();
