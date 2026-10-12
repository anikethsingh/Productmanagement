import mongoose from "mongoose"
import config from "./config.js"


const connectDb=()=>{

    try {

        mongoose.connect(config.MONGO_URL)
        console.log("Db connected")
        
    } catch (error) {

        throw new error("something went wrong")
        
    }
}


export default connectDb