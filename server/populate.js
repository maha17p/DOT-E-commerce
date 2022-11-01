require('dotenv').config();



const connectDB = require('./db/connectDB');
const Product = require('./model/productSchema');
const jsonProducts = require('./products.json')


const start = async() => {
    try{
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonProducts);
        console.log("Connected Successfully")
        process.exit(0)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}

start();



