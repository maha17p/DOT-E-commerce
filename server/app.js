require("dotenv").config();
const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')

//DB
const connectDB = require("./db/connectDB");

//Routes
const authRouter = require('./router/authRouter')
const uploadRouter = require('./router/uploadRouter')
const categoryRouter = require('./router/categoryRouter');
const productRouter = require('./router/productRouter')
const orderRouter = require('./router/orderRouter')
const paymentRouter = require('./router/paymentRouter')
// const paymentRouter = require('./router/paymentRouter')
//ErrorHandler
const notFound  = require('./middleware/notFound');
const errorHandler = require("./middleware/errorHandler");

const portNum = process.env.PORT_URI || 5000;


//Use  
const app = express();
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
  useTempFiles:true
}))

app.use('/api/v1/user',authRouter)
app.use('/api/v1/file',uploadRouter)
app.use('/api/v1/category',categoryRouter);
app.use('/api/v1/products',productRouter)
app.use('/api/v1/order',orderRouter)
app.use('/api/v1/payment',paymentRouter)
app.use(notFound)
app.use(errorHandler)


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(portNum, () => {
      console.log(`Server is listening to ${portNum}`);
    });
  } catch (error) {
      console.log(error);
  }
};

start()