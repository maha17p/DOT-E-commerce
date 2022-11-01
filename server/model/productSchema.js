const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_id:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
    name:{
        type:String,
        trim:true,
        required:[true, "Please enter the product name"]
    },

    description:{
        type:String,
        trim:true,
        required:[true,"Please enter the product description"]
    },
    
    price:{
        type:Number,
        trim:true,
        required:[true, "Please enter the product price"],
        maxlength:[8, "Price cannot be exceeded more than 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:{
        type:Object,
        required:true
    },
    category:{
        type:String,
        required:[true,"Please enter the product category"]
    },
   
    stock:{
        type:Number,
       required:[true,"Please enter the product stock"],
       maxlength:[4, "Stock cannot be exceded more than 4 characters"],
       default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            user:{
              type:mongoose.Schema.ObjectId,
              ref:"User",
              required:true
            },
            name:{
                type:String,
                required:true,
                trim:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true,
                trim:true
            }
        }
    ]
},{
    timestamps:true
})


module.exports = mongoose.model("Products",productSchema)