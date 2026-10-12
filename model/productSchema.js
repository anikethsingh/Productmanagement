import mongoose from "mongoose";

const productSChema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true,
        min:0
    },

    quantity:{
        type:Number,
        required:true,
        default:1,
        min:1
    },
    category:{
        type:String,
        required:true
    }
}


)

const productModel=mongoose.model("management",productSChema)

export default productModel